import { Grid, Paper, PaperProps, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps extends PaperProps {
    graphLabel: string;
    labels: string[];
    data: number[];
}

function PieChartComponent(props: PieChartProps) {

    const {
        elevation = 12,
        children: _children,
        ...rest
      } = props;

    const data = {
        labels: props.labels,
        datasets: [
          {
            label: props.graphLabel,
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
                    <Pie data={data} />
                </Grid>
            </Grid>            
        </Paper>
     );
}

export default PieChartComponent;