import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Stack, Alert, Button, AlertTitle } from '@mui/material';

export default {
  title: 'MUI/Alert',
  component: Alert,
  args: {
    children: "Alert",
    severity: "info",
    variant: "standard"
  },
} as ComponentMeta<typeof Alert>;

export const Template: ComponentStory<typeof Alert> = (props) => <Alert {...props} />;

export const Types = () => (
  <Stack>
    <Alert severity="error">This is an error alert — check it out!</Alert>
    <Alert severity="warning">This is a warning alert — check it out!</Alert>
    <Alert severity="info">This is an info alert — check it out!</Alert>
    <Alert severity="success">This is a success alert — check it out!</Alert>
  </Stack>
)

export const WithTitle = () => (
  <Stack>
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      This is an error alert — <strong>check it out!</strong>
    </Alert>
    <Alert severity="warning">
      <AlertTitle>Warning</AlertTitle>
      This is a warning alert — <strong>check it out!</strong>
    </Alert>
    <Alert severity="info">
      <AlertTitle>Info</AlertTitle>
      This is an info alert — <strong>check it out!</strong>
    </Alert>
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      This is a success alert — <strong>check it out!</strong>
    </Alert>
  </Stack>
)

export const Actions = () => (
  <Stack>
    <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
    <Alert
      action={
        <Button color="inherit" size="small">
          UNDO
        </Button>
      }
    >
      This is a success alert — check it out!
    </Alert>
  </Stack>
)

export const Variants = () => (
  <Stack>
    <Alert variant="outlined" severity="error">
      This is an error alert — check it out!
    </Alert>
    <Alert variant="outlined" severity="warning">
      This is a warning alert — check it out!
    </Alert>
    <Alert variant="outlined" severity="info">
      This is an info alert — check it out!
    </Alert>
    <Alert variant="outlined" severity="success">
      This is a success alert — check it out!
    </Alert>
    <Alert variant="filled" severity="error">
      This is an error alert — check it out!
    </Alert>
    <Alert variant="filled" severity="warning">
      This is a warning alert — check it out!
    </Alert>
    <Alert variant="filled" severity="info">
      This is an info alert — check it out!
    </Alert>
    <Alert variant="filled" severity="success">
      This is a success alert — check it out!
    </Alert>
  </Stack>
)