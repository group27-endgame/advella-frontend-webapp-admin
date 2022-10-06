import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoginPage from '../../../pages/Login.page';

export default {
  title: 'Advella/Pages',
  component: LoginPage,
  args: {
  },
} as ComponentMeta<typeof LoginPage>;

export const PageLogin: ComponentStory<typeof LoginPage> = () => <LoginPage />;