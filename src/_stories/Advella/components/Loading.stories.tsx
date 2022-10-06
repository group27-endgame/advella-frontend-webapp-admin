import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoadingLottie from '../../../components/LoadingLottie.component';

export default {
  title: 'Advella/Components',
  component: LoadingLottie,
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
} as ComponentMeta<typeof LoadingLottie>;

export const LottieLoading: ComponentStory<typeof LoadingLottie> = (props) => <LoadingLottie />;