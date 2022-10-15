import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProductsDashboard from '../../../pages/dashboard/ProductsDashboard.page';

export default {
  title: 'Advella/Pages/Products Dashboard',
  component: ProductsDashboard,
} as ComponentMeta<typeof ProductsDashboard>;

export const Main: ComponentStory<typeof ProductsDashboard> = () => <ProductsDashboard />;

export const MainPhone: ComponentStory<typeof ProductsDashboard> = () => <ProductsDashboard />;

Main.parameters = {
  chromatic: { delay: 1000  },
}

MainPhone.parameters = {
  chromatic: { viewports: [400], delay: 1000  },
  viewport: {
    defaultViewport: "phone",
  },
};