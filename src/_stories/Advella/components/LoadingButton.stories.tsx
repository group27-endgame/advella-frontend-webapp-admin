import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoadingButton from '../../../components/LoadingButton.component';

export default {
  title: 'Advella/Components',
  component: LoadingButton,
  args: {
    children: "Button"
  },
} as ComponentMeta<typeof LoadingButton>;

export const LoadingButtonComponent: ComponentStory<typeof LoadingButton> = (props) => <LoadingButton {...props} />;