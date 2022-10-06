import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoadingButton from '../../components/LoadingButton.component';

export default {
  title: 'Advella/Loading Button',
  component: LoadingButton,
  args: {
    children: "Button"
  },
} as ComponentMeta<typeof LoadingButton>;

export const Template: ComponentStory<typeof LoadingButton> = (props) => <LoadingButton {...props} />;