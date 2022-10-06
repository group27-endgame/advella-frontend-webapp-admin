import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Badge, Button, Stack } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

export default {
  title: 'MUI/Badge',
  component: Badge,
  args: {
    color: "primary",
    badgeContent: 4,
  },
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Badge> = (props) => <Badge {...props}><MailIcon color="action" /></Badge>;

export const Colors = () => (
  <Stack spacing={2} direction="row">
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
    <Badge badgeContent={4} color="secondary">
      <MailIcon color="action" />
    </Badge>
    <Badge badgeContent={4} color="success">
      <MailIcon color="action" />
    </Badge>
    <Badge badgeContent={4} color="error">
      <MailIcon color="action" />
    </Badge>
    <Badge badgeContent={4} color="info">
      <MailIcon color="action" />
    </Badge>
    <Badge badgeContent={4} color="warning">
      <MailIcon color="action" />
    </Badge>
  </Stack>
);