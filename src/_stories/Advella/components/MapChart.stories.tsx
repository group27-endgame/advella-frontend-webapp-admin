import { ComponentMeta, ComponentStory } from '@storybook/react';
import MapChartComponent from '../../../components/MapChart.component';

export default {
  title: 'Advella',
  component: MapChartComponent,
  args: {
    graphLabel: "Map Chart",
    regions: [{ city: "North Jutland", value: 1000 }],
  },
} as ComponentMeta<typeof MapChartComponent>;

export const MapChart: ComponentStory<typeof MapChartComponent> = (props) => <MapChartComponent {...props} />;

MapChart.parameters = {
  chromatic: { delay: 1000 },
}