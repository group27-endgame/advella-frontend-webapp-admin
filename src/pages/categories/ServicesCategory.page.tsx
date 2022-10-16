import { Button, Card, Grid } from "@mui/material";
import { DataGrid, GridColDef, useGridApiContext } from "@mui/x-data-grid";

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', },
    { field: 'name', headerName: 'Service Name', width: 250, align: "center", editable: true },
    { field: 'products', headerName: 'Products', width: 150, align: "right" },
];

const rows = [
    { id: 1, name: 'Cars', products: 35 },
    { id: 2, name: 'Houses', products: 35 },
    { id: 3, name: 'Bikes', products: 35 },
    { id: 4, name: 'Kitchen Appliances', products: 35 },
    { id: 5, name: 'Sofas', products: 35 },
    { id: 6, name: 'Drugs', products: 35 },
    { id: 7, name: 'Electronics', products: 35 },
    { id: 8, name: 'Movies', products: 35 },
    { id: 9, name: 'Books', products: 35 },
    { id: 10, name: 'Other', products: 35 },
  ];

  const CustomToolbar = () => {
    const apiRef = useGridApiContext();

    const selectedRow = apiRef.current.getSelectedRows();
  
    return (
      <Grid container>
        <Grid item xs={6} textAlign="left">
            <Button color="success" >Add New Service</Button>
        </Grid>
        <Grid item xs={6} textAlign="right">
            <Button color="error" disabled={selectedRow.size === 0} >Remove Selected</Button>
        </Grid>
      </Grid>
    );
  };

function ServiceCategoryPage() {
  return (
    <Card sx={{height: "90vh", p: 5}}>
      <DataGrid columns={columns} rows={rows} checkboxSelection pageSize={20} rowsPerPageOptions={[20]} components={{Toolbar: CustomToolbar}} />
    </Card>
  );
}

export default ServiceCategoryPage;
