import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoadingButton from '../../../components/LoadingButton.component';

export default {
  title: 'Advella/Components/Loading Button',
  component: LoadingButton,
  args: {
    children: "Button"
  },
} as ComponentMeta<typeof LoadingButton>;

export const CustomComponent: ComponentStory<typeof LoadingButton> = (props) => <LoadingButton {...props} />;