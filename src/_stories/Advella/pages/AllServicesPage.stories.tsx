import { ComponentMeta, ComponentStory } from '@storybook/react';
import AllServicesPage from '../../../pages/services/AllServices.page';

export default {
  title: 'Advella/Pages/All Services',
  component: AllServicesPage,
} as ComponentMeta<typeof AllServicesPage>;

export const Main: ComponentStory<typeof AllServicesPage> = () => <AllServicesPage />;

export const MainPhone: ComponentStory<typeof AllServicesPage> = () => <AllServicesPage />;

Main.parameters = {
  chromatic: { delay: 1000  },
}

MainPhone.parameters = {
  chromatic: { viewports: [400], delay: 1000  },
  viewport: {
    defaultViewport: "phone",
  },
};