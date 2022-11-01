import { Button, Card, Grid, TextField } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  useGridApiContext,
  GridCellEditCommitParams,
  GridCellEditStartParams,
  GridValidRowModel,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import DialogComponent from "../../components/Dialog.component";
import LoadingLottie from "../../components/LoadingLottie.component";
import ProductCategoryService from "../../services/ProductCategory.service";

interface IProductCategory {
  id:number;
  name:string;
  products:number;
};

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", headerAlign: "left", },
  {
    field: "name",
    headerName: "Product Name",
    width: 250,
    align: "center",
    editable: true,
    headerAlign: "center",
  },
  { field: "products", headerName: "Products", width: 150, align: "right", headerAlign: "right", },
];

const rows = [
  { id: 1, name: "Cars", products: 35 },
  { id: 2, name: "Houses", products: 35 },
  { id: 3, name: "Bikes", products: 35 },
  { id: 4, name: "Kitchen Appliances", products: 35 },
  { id: 5, name: "Sofas", products: 35 },
  { id: 6, name: "Drugs", products: 35 },
  { id: 7, name: "Electronics", products: 35 },
  { id: 8, name: "Movies", products: 35 },
  { id: 9, name: "Books", products: 35 },
  { id: 10, name: "Other", products: 35 },
];

const CustomToolbar = () => {
  const [cookie,,] = useCookies(["token"]);

  const [removeDialogOpen, setRemoveDialogOpen] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);

  const [newCategory, setNewCategory] = useState("");
  const [newCategoryErr, setNewCategoryErr] = useState(false);
  const [newCategoryErrMsg, setNewCategoryErrMsg] = useState("");

  const apiRef = useGridApiContext();
  const selectedRow = apiRef.current.getSelectedRows();

  const toggleRemoveDialog = () => {
    setRemoveDialogOpen(!removeDialogOpen);
  };

  const toggleAddDialogOpen = () => {
    setAddDialogOpen(!addDialogOpen);
  };

  const handleAdd = () => {
    const productCategoryService: ProductCategoryService = new ProductCategoryService();
    setNewCategoryErr(false);
    setNewCategoryErrMsg("");

    if(newCategory.length < 3){
      setNewCategoryErr(true);
      setNewCategoryErrMsg("Category name must have at least 3 characters.");

      return;
    }

    const rows: GridValidRowModel[] = [];

    apiRef.current.getRowModels().forEach((row) => {
      rows.push(row);
    });

    if(rows.find(f => f.name === newCategory)){
      setNewCategoryErr(true);
      setNewCategoryErrMsg("Category with this name already exists.");

      return
    }

    rows.push({id: rows[rows.length-1].id+1, name: newCategory, products: 0});

    apiRef.current.setRows(rows);
    productCategoryService.addCategory({title: newCategory}, cookie.token);
    toggleAddDialogOpen();
  };

  const handleRemove = () => {
    const productCategoryService: ProductCategoryService = new ProductCategoryService();
    const rows: GridValidRowModel[] = [];

    apiRef.current.getRowModels().forEach((row) => {
      rows.push(row);
    });

    selectedRow.forEach((rowToDelete) => {
      rows.splice(
        rows.findIndex((e) => e.id === rowToDelete.id),
        1
      );

      productCategoryService.deleteCategory(rowToDelete.id, cookie.token);
    });

    productCategoryService.getAllCategories(cookie.token).then(res => {
      rows.splice(0);
      res.map(pc => {
        rows.push({id: pc.productCategoryId, name: pc.title, products: pc.products?.length});
      });
    });
    apiRef.current.setRows(rows);
    setRemoveDialogOpen(false);
  };

  return (
    <Grid container>
      <Grid item xs={6} textAlign="left">
        <Button color="success" onClick={toggleAddDialogOpen}>Add New Category</Button>
      </Grid>
      <Grid item xs={6} textAlign="right">
        <Button
          color="error"
          disabled={selectedRow.size === 0}
          onClick={toggleRemoveDialog}
        >
          Remove Selected
        </Button>
      </Grid>
      <DialogComponent
        dialogTitle={"Add New Category?"}
        dialogBody={<TextField error={newCategoryErr} helperText={newCategoryErrMsg} onChange={(e) => setNewCategory(e.target.value)} sx={{mt:2}} variant="outlined" fullWidth label="Category Name" />}
        confirmButton={handleAdd}
        cancelButton={toggleAddDialogOpen}
        dialogOpen={addDialogOpen}
        mainAction={{
          value: "Add",
          state: "success",
        }}
        closeAction={{
          value: "Cancel",
          state: "primary",
        }}
      />
      <DialogComponent
        dialogTitle="Remove selected Categories?"
        dialogBody="Are you sure you want to remove all categories, which you selected? Category and all products inside this category will be removed and cannot be restored!"
        dialogOpen={removeDialogOpen}
        confirmButton={handleRemove}
        cancelButton={toggleRemoveDialog}
        mainAction={{
          value: "Remove",
          state: "error",
        }}
        closeAction={{
          value: "Close",
          state: "primary",
        }}
      />
    </Grid>
  );
};

function ProductsCategoryPage() {
  const [cookie,,] = useCookies(["token"]);

  const [isLoading, setIsLoading] = useState(true);

  const [editingValue, setEditingValue] = useState({ id: 0, value: "" });
  const [rows, setRows] = useState<IProductCategory[]>([]);

  useEffect(() => {
    const productCategoryService: ProductCategoryService = new ProductCategoryService();

    productCategoryService.getAllCategories(cookie.token).then(res => {
      const allRows:IProductCategory[] = [];
      res.map(pc => allRows.push({id: pc.productCategoryId!, name: pc.title, products: pc.products!.length}));
      setRows(allRows);
      setIsLoading(false);
    });
  }, []);

  if(isLoading)
    return <LoadingLottie open={isLoading} />

  return (
    <Card sx={{ height: "95vh", p: 5 }} elevation={12}>
      <DataGrid
        columns={columns}
        rows={rows}
        checkboxSelection
        pageSize={20}
        rowsPerPageOptions={[20]}
        components={{ Toolbar: CustomToolbar }}
        onCellEditStart={(params: GridCellEditStartParams) => {
          setEditingValue({
            id: Number(params.id),
            value: params.formattedValue,
          });
        }}
        onCellEditCommit={(params: GridCellEditCommitParams) => {
          if (
            editingValue.id !== params.id ||
            editingValue.value !== params.value
          ) {
            const productCategoryService: ProductCategoryService = new ProductCategoryService();

            productCategoryService.editCategory({productCategoryId: editingValue.id, title: params.value}, cookie.token);
          }
        }}
      />
    </Card>
  );
}

export default ProductsCategoryPage;
