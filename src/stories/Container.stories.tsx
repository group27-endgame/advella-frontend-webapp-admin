import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Container, Stack, Typography } from '@mui/material';

export default {
  title: 'MUI/Container',
  component: Container,
  args: {
    children: "Content",
    maxWidth: "md"
  },
} as ComponentMeta<typeof Container>;

export const Template: ComponentStory<typeof Container> = (props) => <Container {...props} />;

export const Sizes = () => (
  <Stack>
    <Container maxWidth="xs"><Typography>XS</Typography></Container>
    <Container maxWidth="sm"><Typography>SM</Typography></Container>
    <Container maxWidth="md"><Typography>MD</Typography></Container>
    <Container maxWidth="lg"><Typography>LG</Typography></Container>
    <Container maxWidth="xl"><Typography>XL</Typography></Container>
  </Stack>
)