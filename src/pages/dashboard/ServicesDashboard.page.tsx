import { Grid } from "@mui/material";
import ActionListComponent from "../../components/ActionList.component";
import BarChartComponent from "../../components/BarChart.component";
import MapChartComponent from "../../components/MapChart.component";

const list = [
  {
    listId: 1,
    title: "Car Cleaning",
    dateTime: Date.now()-500000,
    color: "#e60049",
    subscription: "Added by Seymore",
  },
  {
    listId: 2,
    title: "Bike Cleaning",
    dateTime: Date.now()-1500000,
    color: "#e60049",
    subscription: "Added by Seymore",
  },
  {
    listId: 3,
    title: "Home Cleaning",
    dateTime: Date.now()-2500000,
    color: "#e60049",
    subscription: "Added by Seymore",
  },
  {
    listId: 4,
    title: "Windows Cleaning",
    dateTime: Date.now()-3500000,
    color: "#e60049",
    subscription: "Added by Seymore",
  },
  {
    listId: 5,
    title: "General Cleaning",
    dateTime: Date.now()-4500000,
    color: "#e60049",
    subscription: "Added by Seymore",
  },
];

const regions = [
  { city: "North Jutland", value: 1000 },
  { city: "Viborg", value: 1000 },
  { city: "Århus", value: 1000 },
  { city: "Vejle", value: 1000 },
  { city: "Ringkøbing", value: 1000 },
  { city: "Ribe", value: 1000 },
  { city: "South Jutland", value: 1000 },
  { city: "Fyn", value: 1000 },
  { city: "Vestsjælland", value: 1000 },
  { city: "Roskilde", value: 1000 },
  { city: "Storstrøm", value: 1000 },
  { city: "Copenhagen", value: 1000 },
  { city: "Bornholm", value: 1000 },
  { city: "Frederiksborg", value: 1000 },
];

function ServicesDashboardPage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MapChartComponent graphLabel="Services by Regions" regions={regions} />
      </Grid>
      <Grid item md={6}>
        <BarChartComponent
          graphLabel="Services per Month"
          labels={["January", "February", "March", "April"]}
          data={[350, 450, 590, 780]}
        />
      </Grid>
      <Grid item md={6}>
        <ActionListComponent title="newest Services" list={list} />
      </Grid>
    </Grid>
  );
}

export default ServicesDashboardPage;
