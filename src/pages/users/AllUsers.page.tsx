import { Button, Card, Grid } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  useGridApiContext,
  GridCellEditCommitParams,
  GridCellEditStartParams,
  GridValidRowModel,
  GridToolbarFilterButton,
  GridToolbarContainer,
} from "@mui/x-data-grid";
import { useState } from "react";
import DialogComponent from "../../components/Dialog.component";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", headerAlign: "left", },
  {
    field: "username",
    headerName: "Username",
    width: 250,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    align: "center",
    headerAlign: "center"
  },
  { field: "services", headerName: "Services", width: 150, align: "center", headerAlign: "center", },
  { field: "products", headerName: "Products", width: 150, align: "center", headerAlign: "center", },
  { field: "registrationDate", headerName: "Registration Date", width: 200, align: "center", headerAlign: "center", type: "date" },
  { field: "admin", headerName: "Admin?", width: 100, align: "right", headerAlign: "right", type: "boolean", editable: true },
];

const rows = [
  { id: 1, username: "seymore", email: "seymore@buttz.com", services: 35, products: 35, registrationDate: "2022-01-02", admin: true },
  { id: 2, username: "seymore", email: "seymore@buttz.com", services: 35, products: 35, registrationDate: "2022-01-02", admin: true },
  { id: 3, username: "seymore", email: "seymore@buttz.com", services: 35, products: 35, registrationDate: "2022-01-02", admin: true },
  { id: 4, username: "seymore", email: "seymore@buttz.com", services: 35, products: 35, registrationDate: "2022-01-02", admin: true },
  { id: 5, username: "seymore", email: "seymore@buttz.com", services: 35, products: 35, registrationDate: "2022-01-02", admin: true },
  { id: 6, username: "seymore", email: "seymore@buttz.com", services: 35, products: 35, registrationDate: "2022-01-02", admin: true },
  { id: 7, username: "seymore", email: "seymore@buttz.com", services: 35, products: 35, registrationDate: "2022-01-02", admin: true },
  { id: 8, username: "seymore", email: "seymore@buttz.com", services: 35, products: 35, registrationDate: "2022-01-02", admin: true },
  { id: 9, username: "seymore", email: "seymore@buttz.com", services: 35, products: 35, registrationDate: "2022-01-02", admin: true },
];

const CustomToolbar: React.FunctionComponent<{
  setFilterButtonEl: React.Dispatch<React.SetStateAction<HTMLButtonElement | null>>;
}> = ({ setFilterButtonEl }) => {
  const [removeDialogOpen, setRemoveDialogOpen] = useState(false);

  const apiRef = useGridApiContext();
  const selectedRow = apiRef.current.getSelectedRows();

  const toggleRemoveDialog = () => {
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

      //TODO: Call DELETE api to remove
    });

    apiRef.current.setRows(rows);
    setRemoveDialogOpen(false);
  };

  return (
    <Grid container>
      <Grid item xs={6} textAlign="left">
        <GridToolbarContainer>
          <GridToolbarFilterButton ref={setFilterButtonEl} />
        </GridToolbarContainer>
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
        dialogTitle="Remove selected Users?"
        dialogBody="Are you sure you want to remove all users, which you selected? Users and all services, products of these users will be removed and cannot be restored!"
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

function AllUsersPage() {
  const [editingValue, setEditingValue] = useState({ id: 0, value: "" });

  return (
    <Card sx={{ height: "95vh", p: 5 }}>
      <DataGrid
        columns={columns}
        rows={rows}
        checkboxSelection
        pageSize={50}
        rowsPerPageOptions={[50]}
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
            console.log(params.value)
          }
        }}
      />
    </Card>
  );
}

export default AllUsersPage;
