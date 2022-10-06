import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, Fab, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default {
  title: 'MUI/Floating Action Button',
  component: Fab,
  args: {
    size: 'medium',
    variant: 'outlined',
    disabled: false,
  },
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Fab> = (props) => <Fab {...props}><AddIcon /></Fab>;

export const Sizes = () => (
  <Stack>
    <Fab size='small'>
      <AddIcon />
    </Fab>
    <Fab size='medium'>
      <AddIcon />
    </Fab>
    <Fab size='large'>
      <AddIcon />
    </Fab>
  </Stack>
);

export const Colors = () => (
  <Stack>
    <Fab color='primary'>
      <AddIcon />
    </Fab>
    <Fab color='secondary'>
      <AddIcon />
    </Fab>
    <Fab color='success'>
      <AddIcon />
    </Fab>
    <Fab color='error'>
      <AddIcon />
    </Fab>
    <Fab color='info'>
      <AddIcon />
    </Fab>
    <Fab color='warning'>
      <AddIcon />
    </Fab>
  </Stack>
);