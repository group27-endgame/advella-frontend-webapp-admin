import { Button, Card, Grid, TextField } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  useGridApiContext,
  GridCellEditCommitParams,
  GridCellEditStartParams,
  GridValidRowModel,
} from "@mui/x-data-grid";
import { useState } from "react";
import DialogComponent from "../../components/Dialog.component";

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
  { field: "services", headerName: "Services", width: 150, align: "right", headerAlign: "right", },
];

const rows = [
  { id: 1, name: "Cars", services: 35 },
  { id: 2, name: "Houses", services: 35 },
  { id: 3, name: "Bikes", services: 35 },
  { id: 4, name: "Kitchen Appliances", services: 35 },
  { id: 5, name: "Sofas", services: 35 },
  { id: 6, name: "Drugs", services: 35 },
  { id: 7, name: "Electronics", services: 35 },
  { id: 8, name: "Movies", services: 35 },
  { id: 9, name: "Books", services: 35 },
  { id: 10, name: "Other", services: 35 },
];

const CustomToolbar = () => {
  const [removeDialogOpen, setRemoveDialogOpen] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);

  const [newCategory, setNewCategory] = useState("");

  const apiRef = useGridApiContext();
  const selectedRow = apiRef.current.getSelectedRows();

  const toggleRemoveDialog = () => {
    setRemoveDialogOpen(!removeDialogOpen);
  };

  const toggleAddDialogOpen = () => {
    setAddDialogOpen(!addDialogOpen);
  };

  const handleAdd = () => {
    const rows: GridValidRowModel[] = [];

    apiRef.current.getRowModels().forEach((row) => {
      rows.push(row);
    });

    rows.push({id: rows.length+1, name: newCategory, services: 0});
    console.log(rows);
    apiRef.current.setRows(rows);
    //TODO: Call POST api to add
    setRemoveDialogOpen(false);
  };

  const handleRemove = () => {
    const rows: GridValidRowModel[] = [];

    apiRef.current.getRowModels().forEach((row) => {
      rows.push(row);
    });

    selectedRow.forEach((rowToDelete) => {
      rows.splice(
        rows.findIndex((e) => e.id === rowToDelete.id),
        1
      );

      //TODO: Call DELETE api to remove
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
        dialogBody={<TextField onChange={(e) => setNewCategory(e.target.value)} sx={{mt:2}} variant="outlined" fullWidth label="Category Name" />}
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
  const [editingValue, setEditingValue] = useState({ id: 0, value: "" });

  return (
    <Card sx={{ height: "95vh", p: 5 }}>
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
            //TODO: Call PUT api to edit
          }
        }}
      />
    </Card>
  );
}

export default ServiceCategoryPage;
