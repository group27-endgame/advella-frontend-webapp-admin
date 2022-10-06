import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default {
  title: 'MUI/Tooltip',
  component: Tooltip,
  args: {
    title: "Tooltip",
    placement: "top"
  },
} as ComponentMeta<typeof Tooltip>;

export const Template: ComponentStory<typeof Tooltip> = (props) => <Tooltip open={true} {...props}><DeleteIcon /></Tooltip>;