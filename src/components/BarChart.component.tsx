import { Grid, Paper, PaperProps, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { motion } from "framer-motion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps extends PaperProps {
  graphLabel: string;
  labels: string[];
  data: number[];
}

function BarChartComponent(props: BarChartProps) {
  const { elevation = 12, graphLabel, children: _children, ...rest } = props;

  const data = {
    labels: props.labels,
    datasets: [
      {
        data: props.data,
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
        borderColor: [
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
        borderWidth: 1,
      },
    ],
  };

  return (
    <motion.div whileHover={{y: -5}}>
      <Paper elevation={elevation} {...rest}>
        <Grid container p={5}>
          <Grid item xs={12} textAlign="center">
            <Typography variant="h6" fontSize={30}>
              {graphLabel}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Bar
              data={data}
              options={{ plugins: { legend: { display: false } } }}
            />
          </Grid>
        </Grid>
      </Paper>
    </motion.div>
  );
}

export default BarChartComponent;
