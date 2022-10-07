import { ComponentMeta, ComponentStory } from '@storybook/react';
import SnackbarComponent from '../../../components/Snackbar.component';

export default {
  title: 'Advella/Components',
  component: SnackbarComponent,
  args: {
    open: true,
    type: "success",
    message: "Snackbar Message"
  },
} as ComponentMeta<typeof SnackbarComponent>;

export const Snackbar: ComponentStory<typeof SnackbarComponent> = (props) => <SnackbarComponent {...props} />;