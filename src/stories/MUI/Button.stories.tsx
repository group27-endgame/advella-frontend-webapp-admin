import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, Stack } from '@mui/material';

export default {
  title: 'MUI/Button',
  component: Button,
  args: {
    size: 'medium',
    variant: 'outlined',
    disabled: false,
  },
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Button> = (props) => <Button {...props}>Button</Button>;

export const Sizes = () => (
  <Stack>
    <Button size='small'>
      Small
    </Button>
    <Button size='medium'>
      Medium
    </Button> 
    <Button size='large'>
      Large
    </Button>
  </Stack>
)

export const Variants = () => (
  <Stack>
    <Button variant='contained'>
      Contained
    </Button>
    <Button variant='outlined'>
      Outlined
    </Button>
    <Button variant='text'>
      Text
    </Button>
  </Stack>
)

export const Disabled = () => (
  <Stack>
    <Button disabled={true}>Disabled</Button>
  </Stack>
)