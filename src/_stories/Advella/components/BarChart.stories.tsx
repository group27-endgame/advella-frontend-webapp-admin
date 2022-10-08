import { ComponentMeta, ComponentStory } from '@storybook/react';
import BarChartComponent from '../../../components/BarChart.component';

export default {
  title: 'Advella/Components',
  component: BarChartComponent,
  args: {
    graphLabel: "Bar Chart",
    labels: ["January", "February", "March", "April"],
    data: [10, 20, 30, 40],
  },
} as ComponentMeta<typeof BarChartComponent>;

export const BarChart: ComponentStory<typeof BarChartComponent> = (props) => <BarChartComponent {...props} />;