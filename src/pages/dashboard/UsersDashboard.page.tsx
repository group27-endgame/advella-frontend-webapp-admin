import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import ActionListComponent, { IActionList } from "../../components/ActionList.component";
import BarChartComponent from "../../components/BarChart.component";
import MapChartComponent from "../../components/MapChart.component";
import { getMonthList } from "../../constants";
import ServiceService from "../../services/Service.service";
import UserService from "../../services/User.service";
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

function UserDashboardPage() {
  const [cookie, ,] = useCookies(["token"]);
  const [isLoading, setIsLoading] = useState(true);

  const [monthList, setMonthList] = useState<string[]>([]);
  const [monthListUsers, setMonthListUsers] = useState<number[]>([]);
  const [latestUsers, setLatestUsers] = useState<IActionList[]>([]);

  useEffect(() => {
      const userService: UserService = new UserService();

      setMonthList(getMonthList(new Date().getMonth()));

      const monthProds: {month: string, value: number}[] = [];
      const latestActions: IActionList[] = [];

      Promise.all(
          [
              getMonthList(new Date().getMonth()).map((d) => {
                  userService
                    .getTotalCount(
                      cookie.token,
                      Date.parse(`1 ${d}`),
                      Date.parse(`31 ${d}`)
                    )
                    .then((res) => {
                      monthProds.push({month: d, value: res});
                    });
                }),
                userService.getLatestUsers(cookie.token, 5).then(res => {
                  res.map(p => {
                      latestActions.push({
                          listId: p.userId,
                          title: p.username,
                          dateTime: p.registrationDateTime,
                          subscription: "",
                          type: "user"
                      })
                  })
                })
          ]
      ).then(() => {
          setIsLoading(false);
    
          monthProds.sort((s1, s2) => {
              return new Date(`1 ${s1.month}`).getTime() - new Date(`1 ${s2.month}`).getTime();
          });
          const sp: number[] = [];
          monthProds.map(m => sp.push(m.value));
          setMonthListUsers(sp);
          setLatestUsers(latestActions);
      })
  }, []);

  if(isLoading)
      return <LottieLoading open={isLoading} />
      
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MapChartComponent graphLabel="Users by Region" regions={regions} />
      </Grid>
      <Grid item lg={6}>
        <BarChartComponent
          graphLabel="Registrations per Month"
          labels={monthList}
          data={monthListUsers}
        />
      </Grid>
      <Grid item lg={6}>
        <ActionListComponent title="newest Users" list={latestUsers} />
      </Grid>
    </Grid>
  );
}

export default UserDashboardPage;
