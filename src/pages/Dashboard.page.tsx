import { Grid } from "@mui/material";
import CardComponent from "../components/Card.component";

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
        </Grid>
     );
}

export default DashboardPage;