import { Button, Card, Grid } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  useGridApiContext,
  GridCellEditCommitParams,
  MuiEvent,
  GridCellEditStartParams,
  GridValidRowModel,
} from "@mui/x-data-grid";
import { useState } from "react";
import ConfirmDialogComponent from "../../components/ConfirmDialog.component";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  {
    field: "name",
    headerName: "Service Name",
    width: 250,
    align: "center",
    editable: true,
  },
  { field: "products", headerName: "Products", width: 150, align: "right" },
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
  const [removeDialogOpen, setRemoveDialogOpen] = useState(false);

  const apiRef = useGridApiContext();
  const selectedRow = apiRef.current.getSelectedRows();

  const toggleDialog = () => {
    setRemoveDialogOpen(!removeDialogOpen);
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

      //call DELETE endpoint
    });

    apiRef.current.setRows(rows);
    setRemoveDialogOpen(false);
  };

  return (
    <Grid container>
      <Grid item xs={6} textAlign="left">
        <Button color="success">Add New Service</Button>
      </Grid>
      <Grid item xs={6} textAlign="right">
        <Button
          color="error"
          disabled={selectedRow.size === 0}
          onClick={toggleDialog}
        >
          Remove Selected
        </Button>
      </Grid>
      <ConfirmDialogComponent
        dialogTitle="Remove selected Categories?"
        dialogBody="Are you sure you want to remove all categories, which you selected? Category and all services inside this category will be removed and cannot be restored!"
        dialogOpen={removeDialogOpen}
        confirmButton={handleRemove}
        cancelButton={toggleDialog}
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
        onCellEditStart={(params: GridCellEditStartParams, event: MuiEvent) => {
          setEditingValue({
            id: Number(params.id),
            value: params.formattedValue,
          });
        }}
        onCellEditCommit={(
          params: GridCellEditCommitParams,
          event: MuiEvent
        ) => {
          if (
            editingValue.id !== params.id ||
            editingValue.value !== params.value
          ) {
            // edit call API
          }
        }}
      />
    </Card>
  );
}

export default ServiceCategoryPage;
