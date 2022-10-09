import { ComponentMeta, ComponentStory } from '@storybook/react';
import DashboardPage from '../../../pages/Dashboard.page';

export default {
  title: 'Advella/Pages/Dashboard',
  component: DashboardPage,
} as ComponentMeta<typeof DashboardPage>;

export const Main: ComponentStory<typeof DashboardPage> = () => <DashboardPage />;

export const MainPhone: ComponentStory<typeof DashboardPage> = () => <DashboardPage />;

Main.parameters = {
  chromatic: { delay: 1000  },
}

MainPhone.parameters = {
  chromatic: { viewports: [400], delay: 1000  },
  viewport: {
    defaultViewport: "phone",
  },
};