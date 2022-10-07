import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import FourOhFourPage from '../../../pages/FourOhFour.page';
import { userEvent, within } from '@storybook/testing-library';

export default {
  title: 'Advella/Pages/404',
  component: FourOhFourPage,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }

} as ComponentMeta<typeof FourOhFourPage>;

export const Page404: ComponentStory<typeof FourOhFourPage> = () => <BrowserRouter><FourOhFourPage /></BrowserRouter>;

export const LinkRedirect = Page404.bind({});

//* Not possible to test if it is redirected, cuz SB is not using Router-Dom
//* But still can test if the link is reachable
LinkRedirect.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const submitButton = canvas.getByRole("link");
  await userEvent.click(submitButton);
};