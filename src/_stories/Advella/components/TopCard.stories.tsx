import { Typography } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TopCardComponent from '../../../components/TopCard.component';

export default {
  title: 'Advella/Components',
  component: TopCardComponent,
  args: {
    cardTitle: "Top Users",
    topList: [
        <Typography>Seymore Butz</Typography>
    ]
  },
} as ComponentMeta<typeof TopCardComponent>;

export const TopCard: ComponentStory<typeof TopCardComponent> = (props) => <TopCardComponent {...props} />;