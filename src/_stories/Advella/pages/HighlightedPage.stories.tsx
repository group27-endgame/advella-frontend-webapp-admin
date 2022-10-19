import { ComponentMeta, ComponentStory } from '@storybook/react';
import HighlightedPage from '../../../pages/highlighted/Highlighted.page';

export default {
  title: 'Advella/Pages/Highlighted',
  component: HighlightedPage,
} as ComponentMeta<typeof HighlightedPage>;

export const Main: ComponentStory<typeof HighlightedPage> = () => <HighlightedPage />;

export const MainPhone: ComponentStory<typeof HighlightedPage> = () => <HighlightedPage />;

MainPhone.parameters = {
  chromatic: { viewports: [400]  },
  viewport: {
    defaultViewport: "phone",
  },
};