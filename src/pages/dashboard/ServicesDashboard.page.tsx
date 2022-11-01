import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import ActionListComponent, { IActionList } from "../../components/ActionList.component";
import BarChartComponent from "../../components/BarChart.component";
import MapChartComponent from "../../components/MapChart.component";
import { getMonthList } from "../../constants";
import ServiceService from "../../services/Service.service";
import { LottieLoading } from "../../_stories/Advella/components/Loading.stories";

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

  const [cookie, ,] = useCookies(["token"]);
  const [isLoading, setIsLoading] = useState(true);

  const [monthList, setMonthList] = useState<string[]>([]);
  const [monthListServices, setMonthListServices] = useState<number[]>([]);
  const [latestServices, setLatestServices] = useState<IActionList[]>([]);

  useEffect(() => {
      const serviceService: ServiceService = new ServiceService();

      setMonthList(getMonthList(new Date().getMonth()));

      const monthProds: {month: string, value: number}[] = [];
      const latestActions: IActionList[] = [];

      Promise.all(
          [
              getMonthList(new Date().getMonth()).map((d) => {
                  serviceService
                    .getTotalCount(
                      cookie.token,
                      Date.parse(`1 ${d}`),
                      Date.parse(`31 ${d}`)
                    )
                    .then((res) => {
                      monthProds.push({month: d, value: res});
                    });
                }),
                serviceService.getLatestServices(cookie.token, 5).then(res => {
                  res.map(p => {
                      latestActions.push({
                          listId: p.serviceId,
                          title: p.title,
                          dateTime: p.postedDateTime,
                          subscription: "",
                          type: "service"
                      })
                  })
                }).catch(err => console.log(err))
          ]
      ).then(() => {
          setIsLoading(false);
    
          monthProds.sort((s1, s2) => {
              return new Date(`1 ${s1.month}`).getTime() - new Date(`1 ${s2.month}`).getTime();
          });
          const sp: number[] = [];
          monthProds.map(m => sp.push(m.value));
          setMonthListServices(sp);
          setLatestServices(latestActions);
      })
  }, []);

  if(isLoading)
      return <LottieLoading open={isLoading} />
      
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MapChartComponent graphLabel="Services by Region" regions={regions} />
      </Grid>
      <Grid item md={6}>
        <BarChartComponent
          graphLabel="Services per Month"
          labels={monthList}
          data={monthListServices}
        />
      </Grid>
      <Grid item md={6}>
        <ActionListComponent title="newest Services" list={latestServices} />
      </Grid>
    </Grid>
  );
}

export default ServicesDashboardPage;
