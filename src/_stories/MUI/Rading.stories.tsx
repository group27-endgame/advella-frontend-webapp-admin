import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Rating, Stack } from '@mui/material';
import { useState } from 'react';

export default {
  title: 'MUI/Rating',
  component: Rating,
  args: {
    size: 'medium',
    defaultValue: 2,
    precision: 1,
    disabled: false
  },
} as ComponentMeta<typeof Rating>;

export const Template: ComponentStory<typeof Rating> = (props) => <Rating {...props} />;

export const Sizes = () => (
  <Stack>
    <Rating size='small' defaultValue={2} />
    <Rating size='medium' defaultValue={2} />
    <Rating size='large' defaultValue={2} />
  </Stack>
);

export const Precision = () => (
  <Stack>
    <Rating size='small' defaultValue={2.5} precision={0.5} />
    <Rating size='medium' defaultValue={2.1} precision={0.1} />
  </Stack>
);

export const Disabled = () => (
  <Stack>
    <Rating size='small' disabled/>
  </Stack>
);