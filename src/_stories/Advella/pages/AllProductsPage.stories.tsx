import { ComponentMeta, ComponentStory } from '@storybook/react';
import AllProductsPage from '../../../pages/products/AllProducts.page';

export default {
  title: 'Advella/Pages/All Products',
  component: AllProductsPage,
} as ComponentMeta<typeof AllProductsPage>;

export const Main: ComponentStory<typeof AllProductsPage> = () => <AllProductsPage />;

export const MainPhone: ComponentStory<typeof AllProductsPage> = () => <AllProductsPage />;

Main.parameters = {
  chromatic: { delay: 1000  },
}

MainPhone.parameters = {
  chromatic: { viewports: [400], delay: 1000  },
  viewport: {
    defaultViewport: "phone",
  },
};