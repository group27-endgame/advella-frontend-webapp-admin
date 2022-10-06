import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox, FormControlLabel, Stack } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

export default {
  title: 'MUI/Checkbox',
  component: Checkbox,
  args: {
    size: 'medium',
    variant: 'outlined',
    disabled: false,
  },
} as ComponentMeta<typeof Checkbox>;

export const Template: ComponentStory<typeof Checkbox> = (props) => <Checkbox {...props}>Button</Checkbox>;

export const States = () => (
  <Stack>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Default Checked" />
    <FormControlLabel control={<Checkbox checked={true} />} label="Checked" />
    <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
    <FormControlLabel control={<Checkbox disabled checked />} label="Disabled Checked" />
  </Stack>
)

export const Icon = () => (
  <Stack>
    <FormControlLabel control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label="Favorite" />
  </Stack>
)

export const Placement = () => (
  <Stack>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Top" labelPlacement='top' />
    <FormControlLabel control={<Checkbox defaultChecked />} label="End" labelPlacement='end' />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Bottom" labelPlacement='bottom' />
    <FormControlLabel control={<Checkbox defaultChecked />} label="Start" labelPlacement='start' />
  </Stack>
)