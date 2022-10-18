import { Button, Card, Grid, Link } from "@mui/material";
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
  { field: "id", headerName: "ID", headerAlign: "left" },
  {
    field: "title",
    headerName: "Title",
    width: 200,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => {
      const { id, title } = params.row;
      return (
        <Link href={`https://advella.popal.dev/product/${id}`} target="_blank">
          {title}
        </Link>
      );
    },
  },
  {
    field: "user",
    width: 200,
    renderCell: (params) => {
      const { userId, username } = params.row;
      return (
        <Link href={`/users/${userId}`} target="_blank">
          {username}
        </Link>
      );
    },
    valueGetter: (params) => params.row.username,
    headerName: "Author",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "location",
    headerName: "Location",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "posted",
    headerName: "Posted",
    width: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "deadline",
    headerName: "Deadline",
    width: 200,
    align: "center",
    headerAlign: "center",
    type: "date",
  },
  {
    field: "bids",
    headerName: "Bids",
    width: 100,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    align: "center",
    headerAlign: "center",
  },
];

const rows = [
  {
    id: 1,
    userId: 1,
    username: "Seymore",
    title: "Fiat 500",
    price: 300,
    location: "Arhus",
    posted: "30-12-2022 12:00",
    deadline: "30-12-2022 14:00",
    bids: 5,
    status: "Open",
  },
  {
    id: 2,
    userId: 1,
    username: "Seymore",
    title: "Fiat 500",
    price: 300,
    location: "Arhus",
    posted: "30-12-2022 12:00",
    deadline: "30-12-2022 14:00",
    bids: 5,
    status: "Open",
  },
  {
    id: 3,
    userId: 1,
    username: "Seymore",
    title: "Fiat 500",
    price: 300,
    location: "Arhus",
    posted: "30-12-2022 12:00",
    deadline: "30-12-2022 14:00",
    bids: 5,
    status: "Open",
  },
  {
    id: 4,
    userId: 1,
    username: "Seymore",
    title: "Fiat 500",
    price: 300,
    location: "Arhus",
    posted: "30-12-2022 12:00",
    deadline: "30-12-2022 14:00",
    bids: 5,
    status: "Open",
  },
  {
    id: 5,
    userId: 1,
    username: "Seymore",
    title: "Fiat 500",
    price: 300,
    location: "Arhus",
    posted: "30-12-2022 12:00",
    deadline: "30-12-2022 14:00",
    bids: 5,
    status: "Open",
  },
  {
    id: 6,
    userId: 1,
    username: "Seymore",
    title: "Fiat 500",
    price: 300,
    location: "Arhus",
    posted: "30-12-2022 12:00",
    deadline: "30-12-2022 14:00",
    bids: 5,
    status: "Open",
  },
  {
    id: 7,
    userId: 1,
    username: "Seymore",
    title: "Fiat 500",
    price: 300,
    location: "Arhus",
    posted: "30-12-2022 12:00",
    deadline: "30-12-2022 14:00",
    bids: 5,
    status: "Open",
  },
];

const CustomToolbar: React.FunctionComponent<{
  setFilterButtonEl: React.Dispatch<
    React.SetStateAction<HTMLButtonElement | null>
  >;
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
        dialogTitle="Remove selected Products?"
        dialogBody="Are you sure you want to remove all products, which you selected? Products will be removed and cannot be restored!"
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

function AllProductsPage() {
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
          }
        }}
      />
    </Card>
  );
}

export default AllProductsPage;
