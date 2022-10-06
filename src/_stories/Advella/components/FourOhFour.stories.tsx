import { ComponentMeta, ComponentStory } from '@storybook/react';
import FourOhFourLottie from '../../../components/FourOhFourLottie.component';

export default {
  title: 'Advella/Components/404 Lottie',
  component: FourOhFourLottie,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
} as ComponentMeta<typeof FourOhFourLottie>;

export const CustomComponent: ComponentStory<typeof FourOhFourLottie> = (props) => <FourOhFourLottie />;