import { useEffect, useRef, useState } from "react";
import { Chart } from "react-chartjs-2";
import * as ChartGeo from "chartjs-chart-geo";
import {
  Chart as ChartJS,
  CategoryScale,
  Tooltip,
  Title,
  Legend,
} from "chart.js";
import { motion } from "framer-motion";
import { Grid, Paper, Typography } from "@mui/material";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ChartGeo.ChoroplethController,
  ChartGeo.ProjectionScale,
  ChartGeo.ColorScale,
  ChartGeo.GeoFeature
);

type MapChartComponentProps = {
    graphLabel: string;
  regions: { city: string; value: number }[];
};

function MapChartComponent(props: MapChartComponentProps) {
  const chartRef = useRef();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/denmark/denmark-counties.json"
    )
      .then((response) => response.json())
      .then((value) => {
        setData(
          ChartGeo.topojson.feature(
            value,
            value.objects["DNK_adm1"]
            //@ts-ignore
          ).features
        );
      });
  }, []);

  return (
    <motion.div whileHover={{ y: -5 }}>
      <Paper elevation={12}>
        <Grid container p={5}>
          <Grid item xs={12} textAlign="center">
            <Typography
              sx={{ textTransform: "uppercase", fontSize: 24 }}
              variant="h6"
            >
              {props.graphLabel}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Chart
              ref={chartRef}
              type="choropleth"
              data={{
                labels: data.map((d: any) => d.properties["NAME_1"]),
                datasets: [
                  {
                    outline: data,
                    label: "Countries",
                    // data: [
                    //     {
                    //         feature: 0,
                    //         value: 1000
                    //     }
                    // ],
                    data: data.map((d: any) => {
                      const value = props.regions.find(
                        (r) => r.city === d.properties.NAME_1
                      );
                      return {
                        feature: d,
                        value: value?.value,
                      };
                    }),
                    backgroundColor: [
                      "#e60049",
                      "#0bb4ff",
                      "#50e991",
                      "#e6d800",
                      "#9b19f5",
                      "#ffa300",
                      "#dc0ab4",
                      "#b3d4ff",
                      "#00bfa0",
                    ],
                  },
                ],
              }}
              options={{
                showOutline: false,
                showGraticule: true,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  xy: {
                    projection: "equalEarth",
                  },
                  //   Hide color scale
                  color: {
                    display: false,
                  },
                },
              }}
            />
          </Grid>
        </Grid>
      </Paper>
    </motion.div>
  );
}

export default MapChartComponent;
