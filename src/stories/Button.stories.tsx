import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, Grid } from '@mui/material';

export default {
  title: 'MUI/Button',
  component: Button,
  args: {
    size: 'medium',
    variant: 'outlined',
    disabled: false,
  },
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Button> = (props) => <Button color='primary' {...props}>Button</Button>;

export const Sizes = () => (
  <Grid>
    <Button size='small'>
      Small
    </Button>
    <Button size='medium'>
      Medium
    </Button>
    <Button size='large'>
      Large
    </Button>
  </Grid>
)

export const Variants = () => (
  <Grid>
    <Button variant='contained'>
      Contained
    </Button>
    <Button variant='outlined'>
      Outlined
    </Button>
    <Button variant='text'>
      Text
    </Button>
  </Grid>
)

export const Disabled = () => (
  <Button disabled={true}>Disabled</Button>
)