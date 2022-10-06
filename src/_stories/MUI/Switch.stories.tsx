import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Switch } from '@mui/material';

export default {
  title: 'MUI/Switch',
  component: Switch,
  args: {
    size: 'medium',
    label: "label",
    defaultChecked: true,
    disabled: false,
  },
} as ComponentMeta<typeof Switch>;

export const Template: ComponentStory<typeof Switch> = (props) => <Switch {...props} />;