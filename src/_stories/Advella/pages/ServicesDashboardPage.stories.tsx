import { ComponentMeta, ComponentStory } from '@storybook/react';
import ServicesDashboardPage from '../../../pages/dashboard/ServicesDashboard.page';

export default {
  title: 'Advella/Pages/Service Dashboard',
  component: ServicesDashboardPage,
} as ComponentMeta<typeof ServicesDashboardPage>;

export const Main: ComponentStory<typeof ServicesDashboardPage> = () => <ServicesDashboardPage />;

export const MainPhone: ComponentStory<typeof ServicesDashboardPage> = () => <ServicesDashboardPage />;

Main.parameters = {
  chromatic: { delay: 1000  },
}

MainPhone.parameters = {
  chromatic: { viewports: [400], delay: 1000  },
  viewport: {
    defaultViewport: "phone",
  },
};