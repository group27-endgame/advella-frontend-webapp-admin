import { ComponentMeta, ComponentStory } from '@storybook/react';
import UsersDashboard from '../../../pages/dashboard/UsersDashboard.page';

export default {
  title: 'Advella/Pages/Users Dashboard',
  component: UsersDashboard,
} as ComponentMeta<typeof UsersDashboard>;

export const Main: ComponentStory<typeof UsersDashboard> = () => <UsersDashboard />;

export const MainPhone: ComponentStory<typeof UsersDashboard> = () => <UsersDashboard />;

Main.parameters = {
  chromatic: { delay: 1000  },
}

MainPhone.parameters = {
  chromatic: { viewports: [400], delay: 1000  },
  viewport: {
    defaultViewport: "phone",
  },
};