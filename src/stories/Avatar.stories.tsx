import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar, Stack } from '@mui/material';
import { primaryColor, secondaryColor, tertiaryColor } from '../constants';

export default {
  title: 'MUI/Avatar',
  component: Avatar,
  args: {
    src: 'https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg',
    alt: 'Boulder',
  },
} as ComponentMeta<typeof Avatar>;

export const Template: ComponentStory<typeof Avatar> = (props) => <Avatar {...props} />;

export const Variants = () => (
  <Stack>
    <Avatar variant='circular'>C</Avatar>
    <Avatar variant='square'>S</Avatar>
    <Avatar variant='rounded'>R</Avatar>
  </Stack>
)


export const Colors = () => (
  <Stack>
    <Avatar sx={{bgcolor: primaryColor}}>P</Avatar>
    <Avatar sx={{bgcolor: secondaryColor}}>S</Avatar>
    <Avatar sx={{bgcolor: tertiaryColor}}>T</Avatar>
  </Stack>
)