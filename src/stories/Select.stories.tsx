import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';

export default {
  title: 'MUI/Select',
  component: Select,
  args: {
    size: 'medium',
    variant: 'outlined',
    disabled: false,
    label: "Label",
    error: false, 
    required: true,
    readOnly: false,
  },
} as ComponentMeta<typeof Select>;

export const Template: ComponentStory<typeof Select> = (props) => <Select {...props}><MenuItem value="select">Select</MenuItem></Select>;

export const Variants: ComponentStory<typeof Select> = () => (
  <Stack>
    <FormControl variant="standard">
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
        >
          <MenuItem value="dk">Denmark</MenuItem>
          <MenuItem value="se">Sweden</MenuItem>
          <MenuItem value="fi">Finland</MenuItem>
        </Select>
      </FormControl>
    <FormControl variant="filled">
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
        >
          <MenuItem value="dk">Denmark</MenuItem>
          <MenuItem value="se">Sweden</MenuItem>
          <MenuItem value="fi">Finland</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
        >
          <MenuItem value="dk">Denmark</MenuItem>
          <MenuItem value="se">Sweden</MenuItem>
          <MenuItem value="fi">Finland</MenuItem>
        </Select>
      </FormControl>
  </Stack>
)

export const Other: ComponentStory<typeof Select> = () => (
  <Stack>
    <Select required><MenuItem value="select">Select</MenuItem></Select>
    <Select error><MenuItem value="select">Select</MenuItem></Select>
    <Select disabled><MenuItem value="select">Select</MenuItem></Select>
    <Select readOnly><MenuItem value="select">Select</MenuItem></Select>
  </Stack>
);