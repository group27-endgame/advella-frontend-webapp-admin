import { ComponentMeta, ComponentStory } from '@storybook/react';
import PieChartComponent from '../../../components/PieChart.component';

export default {
  title: 'Advella',
  component: PieChartComponent,
  args: {
    graphLabel: "Pie Chart",
    labels: ["Value 1", "Value 2", "Value 3", "Value 4"],
    data: [10, 20, 30, 40],
  },
} as ComponentMeta<typeof PieChartComponent>;

export const PieChart: ComponentStory<typeof PieChartComponent> = (props) => <PieChartComponent {...props} />;

PieChart.parameters = {
  chromatic: { delay: 1000 },
}