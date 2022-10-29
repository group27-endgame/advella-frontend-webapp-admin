import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import ActionListComponent, {
  IActionList,
} from "../../components/ActionList.component";
import BarChartComponent from "../../components/BarChart.component";
import CardComponent from "../../components/Card.component";
import LoadingLottie from "../../components/LoadingLottie.component";
import { getMonthList } from "../../constants";
import ProductService from "../../services/Product.service";
import ProductsServicesService from "../../services/ProductsServices.service";
import ServiceService from "../../services/Service.service";
import UserService from "../../services/User.service";
import { PieChart } from "../../_stories/Advella/components/PieChart.stories";

function DashboardPage() {
  const [cookie, ,] = useCookies(["token"]);
  const [isLoading, setIsLoading] = useState(true);

  const [totalProducts, setTotalProducts] = useState(0);
  const [totalServices, setTotalServices] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalSpending, setTotalSpending] = useState(0);
  const [latestActionsList, setLatestActionsList] = useState<IActionList[]>([]);
  const [monthList, setMonthList] = useState<string[]>([]);
  const [monthListSpending, setMonthListSpending] = useState<number[]>([]);

  useEffect(() => {
    const productService: ProductService = new ProductService();
    const serviceService: ServiceService = new ServiceService();
    const userService: UserService = new UserService();
    const productsServicesService: ProductsServicesService =
      new ProductsServicesService();

    setMonthList(getMonthList(new Date().getMonth()));

    const latestActions: IActionList[] = [];
    const monthSpending: number[] = [];

    Promise.all([
      () => {
        getMonthList(new Date().getMonth()).map((d) => {
          productsServicesService
            .getTotalSpending(
              cookie.token,
              Date.parse(`1 ${d}`),
              Date.parse(`31 ${d}`)
            )
            .then((res) => {
              monthSpending.push(res);
            });
        });
        setMonthListSpending(monthSpending);
      },
      productService
        .getTotalCount(cookie.token)
        .then((res) => {
          setTotalProducts(res);
        })
        .catch((err) => setTotalProducts(0)),

      serviceService
        .getTotalCount(cookie.token)
        .then((res) => {
          setTotalServices(res);
        })
        .catch((err) => setTotalServices(0)),

      userService
        .getTotalCount(cookie.token)
        .then((res) => {
          setTotalUsers(res);
        })
        .catch((err) => setTotalUsers(0)),

      productsServicesService
        .getTotalSpending(cookie.token)
        .then((res) => {
          setTotalSpending(res);
        })
        .catch((err) => setTotalSpending(0)),
      Promise.all([
        userService.getLatestUsers(cookie.token).then((res) => {
          res.map((user) => {
            const action: IActionList = {
              listId: latestActions.length + 1,
              title: `${user.username} registered`,
              type: "user",
              subscription: `New user with username ${user.username} and email ${user.email} was registered.`,
              dateTime: user.registrationDateTime,
            };

            latestActions.push(action);
          });
        }),
        productService.getLatestProducts(cookie.token).then((res) => {
          res.map((prod) => {
            const action: IActionList = {
              listId: latestActions.length + 1,
              title: `${prod.title} added`,
              type: "product",
              subscription: `New product with title ${prod.title} added.`,
              dateTime: prod.postedDateTime,
            };

            latestActions.push(action);
          });
        }),
        serviceService.getLatestServices(cookie.token).then((res) => {
          res.map((serv) => {
            const action: IActionList = {
              listId: latestActions.length + 1,
              title: `${serv.title} added`,
              type: "service",
              subscription: `New service with title ${serv.title} added.`,
              dateTime: serv.postedDateTime,
            };

            latestActions.push(action);
          });
        }),
      ]).then(() => {
        latestActions.sort((l1, l2) => l2.dateTime - l1.dateTime);
        setLatestActionsList(latestActions);
      }),
    ]).then(() => setIsLoading(false));
  }, []);

  if (isLoading) return <LoadingLottie open={isLoading} />;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={3}>
        <CardComponent
          cardTitle={"Total Earnings"}
          trendingPercentage={10.5}
          trendingValue={totalSpending}
          valueSign="DKK "
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CardComponent
          cardTitle={"Total Users"}
          trendingPercentage={5}
          trendingValue={totalUsers}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CardComponent
          cardTitle={"Total Products"}
          trendingPercentage={-1.3}
          trendingValue={totalProducts}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CardComponent
          cardTitle={"Total Services"}
          trendingPercentage={12.2}
          trendingValue={totalServices}
        />
      </Grid>

      <Grid item xs={12} lg={6}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <BarChartComponent
              graphLabel="Money Earned"
              labels={monthList}
              data={monthListSpending}
            />
          </Grid>
          <Grid item xs={12}>
            <ActionListComponent
              title="Latest Actions"
              list={latestActionsList}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={6}>
        <PieChart
          graphLabel="Product/Services"
          labels={["Products", "Services"]}
          data={[totalProducts, totalServices]}
        />
      </Grid>
    </Grid>
  );
}

export default DashboardPage;
