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
import ServiceCategoryService from "../../services/ServiceCategory.service";

interface IServiceCategory {
  id:number;
  name:string;
};

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", headerAlign: "left", },
  {
    field: "name",
    headerName: "Service Name",
    width: 250,
    align: "center",
    editable: true,
    headerAlign: "center",
  },
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
    const serviceCategoryService: ServiceCategoryService = new ServiceCategoryService();
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

    rows.push({id: rows[rows.length-1].id+1, name: newCategory, services: 0});

    apiRef.current.setRows(rows);
    serviceCategoryService.addCategory({title: newCategory}, cookie.token);
    toggleAddDialogOpen();
  };

  const handleRemove = () => {
    const serviceCategoryService: ServiceCategoryService = new ServiceCategoryService();
    const rows: GridValidRowModel[] = [];

    apiRef.current.getRowModels().forEach((row) => {
      rows.push(row);
    });

    selectedRow.forEach((rowToDelete) => {
      rows.splice(
        rows.findIndex((e) => e.id === rowToDelete.id),
        1
      );

      serviceCategoryService.deleteCategory(rowToDelete.id, cookie.token);
    });

    serviceCategoryService.getAllCategories(cookie.token).then(res => {
      rows.splice(0);
      res.map(sc => {
        rows.push({id: sc.serviceCategoryId, name: sc.title });
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
        dialogBody="Are you sure you want to remove all categories, which you selected? Category and all services inside this category will be removed and cannot be restored!"
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

function ServiceCategoryPage() {
  const [cookie,,] = useCookies(["token"]);

  const [isLoading, setIsLoading] = useState(true);

  const [editingValue, setEditingValue] = useState({ id: 0, value: "" });

  const [rows, setRows] = useState<IServiceCategory[]>([]);

  useEffect(() => {
    const serviceCategoryService: ServiceCategoryService = new ServiceCategoryService();

    serviceCategoryService.getAllCategories(cookie.token).then(res => {
      const allRows:IServiceCategory[] = [];
      res.map(sc => allRows.push({id: sc.serviceCategoryId!, name: sc.title }));
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
            const serviceCategoryService: ServiceCategoryService = new ServiceCategoryService();

            serviceCategoryService.editCategory({serviceCategoryId: editingValue.id, title: params.value}, cookie.token);
          }
        }}
      />
    </Card>
  );
}

export default ServiceCategoryPage;
