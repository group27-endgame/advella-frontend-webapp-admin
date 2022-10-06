import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box, Paper } from '@mui/material';

export default {
  title: 'MUI/Paper',
  component: Paper,
  args: {
    children: "Paper",
    elevation: 12,
    variant: "elevation"
  },
} as ComponentMeta<typeof Paper>;

export const Template: ComponentStory<typeof Paper> = (props) => <Paper {...props} />;