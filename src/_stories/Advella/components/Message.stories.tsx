import { ComponentMeta, ComponentStory } from '@storybook/react';
import MessageComponent from '../../../components/Message.component';

export default {
  title: 'Advella',
  component: MessageComponent,
  args: {
    messageId: 1,
    user: {userId: 1, username: "Seymore"},
    date: 1667641912757,
    message: "Lorem ipsum blah blah"
  },
} as ComponentMeta<typeof MessageComponent>;

export const MessageCard: ComponentStory<typeof MessageComponent> = (props) => <MessageComponent {...props} />;