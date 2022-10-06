import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Pagination, Stack } from '@mui/material';

export default {
  title: 'MUI/Pagination',
  component: Pagination,
  args: {
    count: 5,
    color: "primary",
    disabled: false
  },
} as ComponentMeta<typeof Pagination>;

export const Template: ComponentStory<typeof Pagination> = (props) => <Pagination {...props} />;

export const Colors = () => (
  <Stack>
    <Pagination count={5} color="primary" />
    <Pagination count={5} color="secondary" />
    <Pagination count={5} color="standard" />
  </Stack>
)

export const Variants = () => (
  <Stack>
    <Pagination count={5} color="primary" variant='outlined' />
    <Pagination count={5} color="primary" variant='text' />
  </Stack>
)

export const Shapes = () => (
  <Stack>
    <Pagination count={5} color="primary" shape='circular' />
    <Pagination count={5} color="primary" shape='rounded' />
  </Stack>
)

export const Disabled = () => (
  <Stack>
    <Pagination count={5} disabled={true} />
  </Stack>
)