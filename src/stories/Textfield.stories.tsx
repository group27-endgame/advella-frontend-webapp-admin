import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Stack, TextField } from '@mui/material';

export default {
  title: 'MUI/Textfield',
  component: TextField,
  args: {
    label: "Label",
    type: "text",
    size: 'medium',
    variant: 'outlined',
    error: false,
    disabled: false,
  },
} as ComponentMeta<typeof TextField>;

export const Template: ComponentStory<typeof TextField> = (props) => <TextField {...props} />;

export const Sizes = () => (
  <Stack>
    <TextField size='small' label="Small" />
    <TextField size='medium' label="Meduim" />
  </Stack>
)

export const Variants = () => (
  <Stack>
    <TextField variant='standard' label="Standard" />
    <TextField variant='filled' label="Filled" />
    <TextField variant='outlined' label="Outlined" />
  </Stack>
)

export const Types = () => (
  <Stack>
    <TextField label="Password" type="password" />
    <TextField label="Email" type="email" />
    <TextField label="Date" type="date" />
    <TextField label="Number" type="number" />
    <TextField label="Multiline" multiline rows={4} />
  </Stack>
)

export const Disabled = () => (
  <Stack>
    <TextField disabled={true} label="Disabled" />
  </Stack>
)

export const Error = () => (
  <Stack>
    <TextField error={true} label="Error" />
  </Stack>
)