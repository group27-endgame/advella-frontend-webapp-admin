import { ComponentMeta, ComponentStory } from '@storybook/react';
import FourOhFourPage from '../../../pages/FourOhFour.page';

export default {
  title: 'Advella/Pages/404 Page',
  component: FourOhFourPage,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }

} as ComponentMeta<typeof FourOhFourPage>;

export const ReactPage: ComponentStory<typeof FourOhFourPage> = () => <FourOhFourPage />;