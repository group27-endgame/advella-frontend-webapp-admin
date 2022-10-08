import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardComponent from '../../../components/Card.component';

export default {
  title: 'Advella/Components',
  component: CardComponent,
  args: {
    trendingPercentage: 10,
    trendingValue: 10000,
    cardTitle: "Total Earnings",
    valueSign: "$"
  },
} as ComponentMeta<typeof CardComponent>;

export const TrendingCard: ComponentStory<typeof CardComponent> = (props) => <CardComponent {...props} />;