import { Grid, Paper, PaperProps, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Title } from 'chart.js';
import { Bar } from 'react-chartjs-2';

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

  const {
    elevation = 12,
    children: _children,
    ...rest
  } = props;

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

    

    const data = {
        labels: props.labels,
        datasets: [
          {
            data: props.data,
            backgroundColor: ["#ea5545", "#f46a9b", "#ef9b20", "#edbf33", "#ede15b", "#bdcf32", "#87bc45", "#27aeef", "#b33dc6"],
            borderColor: ["#ea5545", "#f46a9b", "#ef9b20", "#edbf33", "#ede15b", "#bdcf32", "#87bc45", "#27aeef", "#b33dc6"],
            borderWidth: 1,
          },
        ],
      };

    return ( 
        <Paper elevation={elevation} {...rest}>
            <Grid container p={5}>
                <Grid item xs={12} textAlign="center">
                    <Typography variant="h6" fontSize={30}>
                        { props.graphLabel }
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Bar data={data} options={{plugins: {legend: {display: false}}}} />
                </Grid>
            </Grid>            
        </Paper>
     );
}

export default BarChartComponent;