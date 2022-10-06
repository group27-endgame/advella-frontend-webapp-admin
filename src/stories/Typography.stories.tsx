import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Stack, Typography } from '@mui/material';

export default {
  title: 'MUI/Typography',
  component: Typography,
  args: {
    children: "Typography",
    variant: "body1"
  },
} as ComponentMeta<typeof Typography>;

export const Template: ComponentStory<typeof Typography> = (props) => <Typography {...props} />;

export const Variants = () => (
  <Stack>
    <Typography variant="h1">
      Typography h1
    </Typography>
    <Typography variant="h2">
      Typography h2
    </Typography>
    <Typography variant="h3">
      Typography h3
    </Typography>
    <Typography variant="h4">
      Typography h4
    </Typography>
    <Typography variant="h5">
      Typography h5
    </Typography>
    <Typography variant="h6">
      Typography h6
    </Typography>
    <Typography variant="subtitle1">
      Typography subtitle1
    </Typography>
    <Typography variant="subtitle2">
      Typography subtitle2
    </Typography>
    <Typography variant="body1">
      Typography body1
    </Typography>
    <Typography variant="body2">
      Typography body2
    </Typography>
  </Stack>
)