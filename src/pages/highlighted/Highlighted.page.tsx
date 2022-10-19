import { Grid, Typography } from "@mui/material";
import TopCardComponent from "../../components/TopCard.component";

function HighlightedPage() {
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={6} lg={4}>
        <TopCardComponent
          cardTitle="Most Expensive Products"
          topList={[
            <Typography>Lamborghini</Typography>,
            <Typography>Bugatti</Typography>,
            <Typography>Porsche</Typography>,
          ]}
        />
      </Grid>
      <Grid item sm={12} md={6} lg={4}>
        <TopCardComponent
          cardTitle="Most Expensive Services"
          topList={[
            <Typography>Moon Walking</Typography>,
            <Typography>Dog Walking</Typography>,
            <Typography>Cat Walking</Typography>,
          ]}
        />
      </Grid>
      <Grid item sm={12} md={6} lg={4}>
        <TopCardComponent
          cardTitle="Best Rated Users"
          topList={[
            <Typography>Mike Hunt</Typography>,
            <Typography>Seymore Buttz</Typography>,
            <Typography>Knee Grow</Typography>,
          ]}
        />
      </Grid>
      <Grid item sm={12} md={6} lg={4}>
        <TopCardComponent
          cardTitle="Most Active Users"
          topList={[
            <Typography>Mike Hunt</Typography>,
            <Typography>Seymore Buttz</Typography>,
            <Typography>Knee Grow</Typography>,
          ]}
        />
      </Grid>
      <Grid item sm={12} md={6} lg={4}>
        <TopCardComponent
          cardTitle="Most Active Users"
          topList={[
            <Typography>Mike Hunt</Typography>,
            <Typography>Seymore Buttz</Typography>,
            <Typography>Knee Grow</Typography>,
          ]}
        />
      </Grid>
      <Grid item sm={12} md={6} lg={4}>
        <TopCardComponent
          cardTitle="Most Active Users"
          topList={[
            <Typography>Mike Hunt</Typography>,
            <Typography>Seymore Buttz</Typography>,
            <Typography>Knee Grow</Typography>,
          ]}
        />
      </Grid>
      <Grid item sm={12} md={6} lg={4}>
        <TopCardComponent
          cardTitle="Most Active Users"
          topList={[
            <Typography>Mike Hunt</Typography>,
            <Typography>Seymore Buttz</Typography>,
            <Typography>Knee Grow</Typography>,
          ]}
        />
      </Grid>
      <Grid item sm={12} md={6} lg={4}>
        <TopCardComponent
          cardTitle="Most Active Users"
          topList={[
            <Typography>Mike Hunt</Typography>,
            <Typography>Seymore Buttz</Typography>,
            <Typography>Knee Grow</Typography>,
          ]}
        />
      </Grid>
      <Grid item sm={12} md={6} lg={4}>
        <TopCardComponent
          cardTitle="Most Active Users"
          topList={[
            <Typography>Mike Hunt</Typography>,
            <Typography>Seymore Buttz</Typography>,
            <Typography>Knee Grow</Typography>,
          ]}
        />
      </Grid>
    </Grid>
  );
}

export default HighlightedPage;
