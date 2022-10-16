import { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import ServiceCategoryPage from '../../../pages/categories/ServicesCategory.page';

export default {
  title: 'Advella/Pages/Services Categories',
  component: ServiceCategoryPage,
} as ComponentMeta<typeof ServiceCategoryPage>;

export const Main: ComponentStory<typeof ServiceCategoryPage> = () => <ServiceCategoryPage />;

export const MainPhone: ComponentStory<typeof ServiceCategoryPage> = () => <ServiceCategoryPage />;

Main.parameters = {
  chromatic: { delay: 1000  },
}

MainPhone.parameters = {
  chromatic: { viewports: [400], delay: 1000  },
  viewport: {
    defaultViewport: "phone",
  },
};


export const AddNewCategory = Main.bind({});

AddNewCategory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Looks up the button and interacts with it.
  const submitButton = canvas.getAllByRole("button");
  await userEvent.click(submitButton[0]);
};