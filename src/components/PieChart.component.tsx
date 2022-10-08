import { Grid, Paper, PaperProps, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { motion } from "framer-motion";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps extends PaperProps {
  graphLabel: string;
  labels: string[];
  data: number[];
}

function PieChartComponent(props: PieChartProps) {
  const { elevation = 12, children: _children, ...rest } = props;

  const data = {
    labels: props.labels,
    datasets: [
      {
        label: props.graphLabel,
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
    <motion.div whileHover={{ y: -5 }}>
      <Paper elevation={elevation} {...rest}>
        <Grid container p={5}>
          <Grid item xs={12} textAlign="center">
            <Typography variant="h6" fontSize={30}>
              {props.graphLabel}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Pie data={data} />
          </Grid>
        </Grid>
      </Paper>
    </motion.div>
  );
}

export default PieChartComponent;
