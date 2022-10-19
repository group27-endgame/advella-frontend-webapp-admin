import { ComponentMeta, ComponentStory } from '@storybook/react';
import MessagesPage from '../../../pages/messages/Messages.page';

export default {
  title: 'Advella/Pages/All Messages',
  component: MessagesPage,
} as ComponentMeta<typeof MessagesPage>;

export const Main: ComponentStory<typeof MessagesPage> = () => <MessagesPage />;

export const MainPhone: ComponentStory<typeof MessagesPage> = () => <MessagesPage />;

Main.parameters = {
}

MainPhone.parameters = {
  chromatic: { viewports: [400] },
  viewport: {
    defaultViewport: "phone",
  },
};