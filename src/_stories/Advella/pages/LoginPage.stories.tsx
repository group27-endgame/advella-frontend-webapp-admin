import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoginPage from '../../../pages/Login.page';
import { userEvent, within } from '@storybook/testing-library';

export default {
  title: 'Advella/Pages/Login',
  component: LoginPage,
  args: {
  },
} as ComponentMeta<typeof LoginPage>;

export const PageLogin: ComponentStory<typeof LoginPage> = () => <LoginPage />;

export const GoodCredentials = PageLogin.bind({});
export const WrongCredentials = PageLogin.bind({});

GoodCredentials.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Looks up the inputs and fills them.
  const emailInput = canvas.getByPlaceholderText("Username");
  await userEvent.type(emailInput, "Example");

  const passwordInput = canvas.getByPlaceholderText("Password");
  await userEvent.type(passwordInput, "Example");

  // Looks up the button and interacts with it.
  const submitButton = canvas.getByRole("button");
  await userEvent.click(submitButton);
};

WrongCredentials.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Looks up the inputs and fills them.
  const emailInput = canvas.getByPlaceholderText("Username");
  await userEvent.type(emailInput, "");

  const passwordInput = canvas.getByPlaceholderText("Password");
  await userEvent.type(passwordInput, "");

  // Looks up the button and interacts with it.
  const submitButton = canvas.getByRole("button");
  await userEvent.click(submitButton);
};