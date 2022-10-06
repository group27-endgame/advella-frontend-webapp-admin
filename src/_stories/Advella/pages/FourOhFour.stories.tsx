import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import FourOhFourPage from '../../../pages/FourOhFour.page';

export default {
  title: 'Advella/Pages',
  component: FourOhFourPage,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }

} as ComponentMeta<typeof FourOhFourPage>;

export const Page404: ComponentStory<typeof FourOhFourPage> = () => <BrowserRouter><FourOhFourPage /></BrowserRouter>;