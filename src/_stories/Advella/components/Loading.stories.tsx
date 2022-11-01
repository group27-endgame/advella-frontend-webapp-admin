import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoadingLottie from '../../../components/LoadingLottie.component';

export default {
  title: 'Advella',
  component: LoadingLottie,
  args: {
    open: true
  },
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  }
} as ComponentMeta<typeof LoadingLottie>;

export const LottieLoading: ComponentStory<typeof LoadingLottie> = (props) => <LoadingLottie {...props} />;