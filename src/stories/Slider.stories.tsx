import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormControl, InputLabel, MenuItem, Slider, Stack } from '@mui/material';

export default {
  title: 'MUI/Slider',
  component: Slider,
  args: {
    size: 'medium',
    defaultValue: 50,
    min: 0,
    max: 100,
    step: 1,
  },
} as ComponentMeta<typeof Slider>;

export const Template: ComponentStory<typeof Slider> = (props) => <Slider {...props} />;

export const Sizes = () => (
  <Stack>
    <Slider size='small' />
    <Slider size='medium' />
  </Stack>
)

export const Steps = () => (
  <Stack>
    <Slider step={10} min={0} max={100} />
  </Stack>
)

