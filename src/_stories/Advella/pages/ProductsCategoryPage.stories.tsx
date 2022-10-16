import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProductsCategoryPage from '../../../pages/categories/ProductsCategory.page';

export default {
  title: 'Advella/Pages/Product Categories',
  component: ProductsCategoryPage,
} as ComponentMeta<typeof ProductsCategoryPage>;

export const Main: ComponentStory<typeof ProductsCategoryPage> = () => <ProductsCategoryPage />;

export const MainPhone: ComponentStory<typeof ProductsCategoryPage> = () => <ProductsCategoryPage />;

Main.parameters = {
  chromatic: { delay: 1000  },
}

MainPhone.parameters = {
  chromatic: { viewports: [400], delay: 1000  },
  viewport: {
    defaultViewport: "phone",
  },
};