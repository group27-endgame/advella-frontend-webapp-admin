import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Breadcrumbs, Link, Typography } from '@mui/material';

export default {
  title: 'MUI/Breadcrumbs',
  component: Breadcrumbs,
  args: {
    elevation: 12,
    variant: "elevation"
  },
} as ComponentMeta<typeof Breadcrumbs>;

export const Template: ComponentStory<typeof Breadcrumbs> = (props) => <Breadcrumbs {...props} />;

export const Basic = () => (
  <Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="/">
    MUI
  </Link>
  <Link
    underline="hover"
    color="inherit"
    href="/material-ui/getting-started/installation/"
  >
    Core
  </Link>
  <Typography color="text.primary">Breadcrumbs</Typography>
</Breadcrumbs>
)