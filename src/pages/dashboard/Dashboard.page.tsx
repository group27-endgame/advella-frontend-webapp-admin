import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
// import { useEffect, useState } from "react";
import ActionListComponent from "../../components/ActionList.component";
import BarChartComponent from "../../components/BarChart.component";
import CardComponent from "../../components/Card.component";
import LoadingLottie from "../../components/LoadingLottie.component";
import ProductService from "../../services/Product.service";
import ServiceService from "../../services/Service.service";
// import LoadingLottie from "../components/LoadingLottie.component";
import { PieChart } from "../../_stories/Advella/components/PieChart.stories";

const list = [
    {
        listId: 1,
        title: "New Product",
        dateTime: Date.now(),
        color: "#e60049",
        subscription: "Seymore added new Product"
    },
    {
        listId: 2,
        title: "New Product",
        dateTime: Date.now()-(5*60000),
        color: "#0bb4ff",
        subscription: "Seymore added new Product"
    },
    {
        listId: 3,
        title: "New Product",
        dateTime: Date.now()-(2*60*60000),
        color: "#50e991",
        subscription: "Seymore added new Product"
    },
    {
        listId: 4,
        title: "New Product",
        dateTime: Date.now()-(4*60*60000),
        color: "#e6d800",
        subscription: "Seymore added new Product"
    },
    {
        listId: 5,
        title: "New Product",
        dateTime: Date.now()-(60*60*60000),
        color: "#b3d4ff",
        subscription: "Seymore added new Product"
    }
]

function DashboardPage() {
    const [cookie,,] = useCookies(["token"]);
    const [isLoading, setIsLoading] = useState(true);

    const [totalProducts, setTotalProducts] = useState(0);
    const [totalServices, setTotalServices] = useState(0);

    useEffect(() => {
        const productService: ProductService = new ProductService();
        const serviceService: ServiceService = new ServiceService();

        productService.getTotalCount(cookie.token).then(res => {
            setTotalProducts(1);
        }).catch(err => setTotalProducts(0));

        serviceService.getTotalCount(cookie.token).then(res => {
            setTotalServices(2);
        }).catch(err => setTotalServices(0));

        setIsLoading(false);
    },[]);

    if(isLoading)
        return <LoadingLottie open={isLoading} />
    
    return ( 
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={3}>
                <CardComponent cardTitle={"Total Earnings"} trendingPercentage={10.5} trendingValue={10000} valueSign="$" />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <CardComponent cardTitle={"Total Users"} trendingPercentage={5} trendingValue={300} />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <CardComponent cardTitle={"Total Products"} trendingPercentage={-1.3} trendingValue={300} />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <CardComponent cardTitle={"Total Services"} trendingPercentage={12.2} trendingValue={300} />
            </Grid>

            <Grid item xs={12} lg={6}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <BarChartComponent graphLabel="Money Spend" labels={["January", "February", "March", "April"]} data={[350, 450, 590, 780]} />
                    </Grid>
                    <Grid item xs={12}>
                        <ActionListComponent title="Latest Actions" list={list} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={6}>
                <PieChart graphLabel="Product/Services" labels={["Products", "Services"]} data={[totalProducts, totalServices]} />
            </Grid>
        </Grid>
     );
}

export default DashboardPage;