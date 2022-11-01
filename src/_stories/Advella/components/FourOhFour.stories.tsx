import { ComponentMeta, ComponentStory } from '@storybook/react';
import FourOhFourLottie from '../../../components/FourOhFourLottie.component';

export default {
  title: 'Advella',
  component: FourOhFourLottie,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
} as ComponentMeta<typeof FourOhFourLottie>;

export const Lottie404: ComponentStory<typeof FourOhFourLottie> = () => <FourOhFourLottie />;