import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Stack, CircularProgress } from '@mui/material';

export default {
  title: 'MUI/Progress/Circular Progress',
  component: CircularProgress,
  args: {
    color: "primary",
    variant: "indeterminate",
    value: 20
  },
} as ComponentMeta<typeof CircularProgress>;

export const Template: ComponentStory<typeof CircularProgress> = (props) => <CircularProgress {...props} />;

export const Colors = () => (
  <Stack direction="row">
    <CircularProgress color='primary' />
    <CircularProgress color='secondary' />
    <CircularProgress color='success' />
    <CircularProgress color='error' />
    <CircularProgress color='info' />
    <CircularProgress color='warning' />
  </Stack>
)