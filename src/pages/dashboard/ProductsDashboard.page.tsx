import { Grid } from "@mui/material";
import ActionListComponent from "../../components/ActionList.component";
import BarChartComponent from "../../components/BarChart.component";
import MapChartComponent from "../../components/MapChart.component";
import { PieChart } from "../../_stories/Advella/components/PieChart.stories";

const list = [
    {
        listId: 1,
        title: "Fiat 500 2008",
        dateTime: Date.now()-350000,
        color: "#e60049",
        subscription: "Added by Seymore"
    },
    {
        listId: 2,
        title: "Yamaha R1 2018",
        dateTime: Date.now()-550000,
        color: "#e60049",
        subscription: "Added by Seymore"
    },
    {
        listId: 3,
        title: "20G of Cocaine",
        dateTime: Date.now()-950000,
        color: "#e60049",
        subscription: "Added by Seymore"
    },
    {
        listId: 4,
        title: "20kg of Weed",
        dateTime: Date.now()-1350000,
        color: "#e60049",
        subscription: "Added by Seymore"
    },
    {
        listId: 5,
        title: "Escort Service",
        dateTime: Date.now()-2350000,
        color: "#e60049",
        subscription: "Added by Seymore"
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

function ProductsDashboardPage() {
    return ( 
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <MapChartComponent graphLabel="Users by Regions" regions={regions} />
            </Grid>
            <Grid item xs={12} lg={6}>
                        <BarChartComponent graphLabel="Products per Month" labels={["January", "February", "March", "April"]} data={[350, 450, 590, 780]} />
            </Grid>
            <Grid item xs={12} lg={6}>
                        <ActionListComponent title="Newest Products" list={list} />
            </Grid>
        </Grid>
     );
}

export default ProductsDashboardPage;