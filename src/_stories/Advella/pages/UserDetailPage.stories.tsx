import { ComponentMeta, ComponentStory } from '@storybook/react';
import UserDetailPage from '../../../pages/users/UserDetail.page';

export default {
  title: 'Advella/Pages/User Detail',
  component: UserDetailPage,
} as ComponentMeta<typeof UserDetailPage>;

export const Main: ComponentStory<typeof UserDetailPage> = () => <UserDetailPage />;

export const MainPhone: ComponentStory<typeof UserDetailPage> = () => <UserDetailPage />;

Main.parameters = {
  chromatic: { delay: 1000  },
}

MainPhone.parameters = {
  chromatic: { viewports: [400], delay: 1000  },
  viewport: {
    defaultViewport: "phone",
  },
};