import { Grid } from "@mui/material";
import ActionListComponent from "../components/ActionList.component";
import BarChartComponent from "../components/BarChart.component";
import CardComponent from "../components/Card.component";
import { PieChart } from "../_stories/Advella/components/PieChart.stories";

function DashboardPage() {
    return ( 
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={3}>
                <CardComponent cardTitle={"Total Earnings"} trendingPercentage={10.5} trendingValue={"$10.000"} />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <CardComponent cardTitle={"Total Users"} trendingPercentage={5} trendingValue={"350"} />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <CardComponent cardTitle={"Total Products"} trendingPercentage={-1.3} trendingValue={"300"} />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <CardComponent cardTitle={"Total Services"} trendingPercentage={12.2} trendingValue={"300"} />
            </Grid>

            <Grid item lg={6}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <BarChartComponent graphLabel="Money Spend" labels={["January", "February", "March", "April"]} data={[350, 450, 590, 780]} />
                    </Grid>
                    <Grid item xs={12}>
                        <ActionListComponent title="Latest Actions" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item lg={6}>
                <PieChart graphLabel="Product/Services" labels={["Products", "Services"]} data={[350, 400]} />
            </Grid>
        </Grid>
     );
}

export default DashboardPage;