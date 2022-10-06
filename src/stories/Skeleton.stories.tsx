import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Stack, Skeleton, Box } from '@mui/material';

export default {
  title: 'MUI/Skeleton',
  component: Skeleton,
  args: {
    variant: "text",
    animation: "wave"
  },
} as ComponentMeta<typeof Skeleton>;

export const Template: ComponentStory<typeof Skeleton> = (props) => <Box width={300}><Skeleton {...props} /></Box>;

export const Variants = () => (
  <Stack spacing={5}>
    <Skeleton variant='text'/>
    <Skeleton variant='circular'/>
    <Skeleton variant='rectangular'/>
    <Skeleton variant='rounded'/>
  </Stack>
)

export const Animations = () => (
  <Stack spacing={5}>
    <Box width={300}><Skeleton animation='wave'/></Box>
    <Box width={300}><Skeleton animation='pulse'/></Box>
    <Box width={300}><Skeleton animation={false}/></Box>
  </Stack>
)