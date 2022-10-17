import { ComponentMeta, ComponentStory } from '@storybook/react';
import AllUsersPage from '../../../pages/users/AllUsers.page';

export default {
  title: 'Advella/Pages/All Users',
  component: AllUsersPage,
} as ComponentMeta<typeof AllUsersPage>;

export const Main: ComponentStory<typeof AllUsersPage> = () => <AllUsersPage />;

export const MainPhone: ComponentStory<typeof AllUsersPage> = () => <AllUsersPage />;

Main.parameters = {
  chromatic: { delay: 1000  },
}

MainPhone.parameters = {
  chromatic: { viewports: [400], delay: 1000  },
  viewport: {
    defaultViewport: "phone",
  },
};