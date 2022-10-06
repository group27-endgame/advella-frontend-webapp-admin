import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoginPage from '../../../pages/Login.page';

export default {
  title: 'Advella/Pages/Login Page',
  component: LoginPage,
  args: {
  },
} as ComponentMeta<typeof LoginPage>;

export const ReactPage: ComponentStory<typeof LoginPage> = () => <LoginPage />;