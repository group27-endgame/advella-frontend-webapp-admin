import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Stack, LinearProgress } from '@mui/material';

export default {
  title: 'MUI/Progress/Linear Progress',
  component: LinearProgress,
  args: {
    color: "primary",
    variant: "indeterminate",
    value: 20
  },
} as ComponentMeta<typeof LinearProgress>;

export const Template: ComponentStory<typeof LinearProgress> = (props) => <LinearProgress {...props} />;

export const Colors = () => (
  <Stack spacing={5}>
    <LinearProgress color='primary' />
    <LinearProgress color='secondary' />
    <LinearProgress color='success' />
    <LinearProgress color='error' />
    <LinearProgress color='info' />
    <LinearProgress color='warning' />
  </Stack>
)