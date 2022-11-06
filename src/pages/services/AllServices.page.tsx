import { Button, Card, Grid, Link } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  useGridApiContext,
  GridValidRowModel,
  GridToolbarFilterButton,
  GridToolbarContainer,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import DialogComponent from "../../components/Dialog.component";
import { UserModel } from "../../models/User.model";
import ServiceService from "../../services/Service.service";
import { LottieLoading } from "../../_stories/Advella/components/Loading.stories";

interface Service {
  id: number;
  title: string;
  userId: number;
  username: string;
  price: number;
  location: string;
  posted: string;
  status: string;
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", headerAlign: "left" },
  {
    field: "title",
    headerName: "Title",
    width: 400,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => {
      const { id, title } = params.row;
      return (
        <Link href={`https://advella.popal.dev/service/${id}`} target="_blank">
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
    width: 250,
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
    field: "status",
    headerName: "Status",
    width: 100,
    align: "center",
    headerAlign: "center",
  },
];

const CustomToolbar: React.FunctionComponent<{
  setFilterButtonEl: React.Dispatch<
    React.SetStateAction<HTMLButtonElement | null>
  >;
}> = ({ setFilterButtonEl }) => {
  const [removeDialogOpen, setRemoveDialogOpen] = useState(false);

  const [cookie,,] = useCookies(["token"]);

  const apiRef = useGridApiContext();
  const selectedRow = apiRef.current.getSelectedRows();

  const toggleRemoveDialog = () => {
    setRemoveDialogOpen(!removeDialogOpen);
  };

  const handleRemove = () => {
    const rows: GridValidRowModel[] = [];

    const serviceService: ServiceService = new ServiceService();

    apiRef.current.getRowModels().forEach((row) => {
      rows.push(row);
    });

    selectedRow.forEach((rowToDelete) => {
      rows.splice(
        rows.findIndex((e) => e.id === rowToDelete.id),
        1
      );

      serviceService.deleteServices(rowToDelete.id, cookie.token);
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

function AllServicesPage() {
  
  const [cookie,,] = useCookies(["token"]);
  const [isLoading, setIsLoading] = useState(true);

  const [rows, setRows] = useState<Service[]>([]);

  useEffect(() => {
    const productService: ServiceService = new ServiceService();
    const allProducts: Service[] = [];

    productService.getAllServices(cookie.token).then(res => {
      res.map(s => {
        const registrationDate = new Date(Number(s.postedDateTime));
        
        //TODO: fix API response
        if(s.serviceId)
        allProducts.push({
        id: s.serviceId,
        location: s.location,
        userId: s.posted ? s.posted.userId : 0,
        username: s.posted ? s.posted.username : "",
        posted: `${registrationDate.getDate()}/${
          registrationDate.getMonth() + 1
        }/${registrationDate.getFullYear()}`,
        price: s.moneyAmount,
        status: s.serviceStatus,
        title: s.title,
      });
    });

      setRows(allProducts);
      setIsLoading(false);
    });

  }, []);

  if(isLoading)
  return <LottieLoading open={isLoading} />

  return (
    <Card sx={{ height: "95vh", p: 5 }} elevation={12}>
      <DataGrid
        columns={columns}
        rows={rows}
        checkboxSelection
        pageSize={50}
        rowsPerPageOptions={[50]}
        components={{ Toolbar: CustomToolbar }}
      />
    </Card>
  );
}

export default AllServicesPage;
