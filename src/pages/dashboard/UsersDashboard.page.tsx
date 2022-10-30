import { Grid } from "@mui/material";
import ActionListComponent, { IActionList } from "../../components/ActionList.component";
import BarChartComponent from "../../components/BarChart.component";
import MapChartComponent from "../../components/MapChart.component";

const list: IActionList[] = [
  {
    listId: 1,
    title: "Mike Hunt",
    dateTime: Date.now()-2000000,
    type: "user",
    subscription: "",
  },
  {
    listId: 2,
    title: "Seymore Butz",
    dateTime: Date.now()-9000000,
    type: "user",
    subscription: "",
  },
  {
    listId: 3,
    title: "Knee Grow",
    dateTime: Date.now()-12000000,
    type: "user",
    subscription: "",
  },
  {
    listId: 4,
    title: "Moe Lester",
    dateTime: Date.now()-140000000,
    type: "user",
    subscription: "",
  },
  {
    listId: 5,
    title: "Dixie Normous",
    dateTime: Date.now()-180000000,
    type: "user",
    subscription: "",
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

function UserDashboardPage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MapChartComponent graphLabel="Users by Region" regions={regions} />
      </Grid>
      <Grid item lg={6}>
        <BarChartComponent
          graphLabel="Registrations per Month"
          labels={["January", "February", "March", "April"]}
          data={[350, 450, 590, 780]}
        />
      </Grid>
      <Grid item lg={6}>
        <ActionListComponent title="newest Users" list={list} />
      </Grid>
    </Grid>
  );
}

export default UserDashboardPage;
