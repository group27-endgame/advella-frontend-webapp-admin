import { ComponentMeta, ComponentStory } from '@storybook/react';
import ActionListComponent from '../../../components/ActionList.component';

export default {
  title: 'Advella/Components',
  component: ActionListComponent,
  args: {
    title: "Title"
  },
} as ComponentMeta<typeof ActionListComponent>;

export const ActionList: ComponentStory<typeof ActionListComponent> = (props) => <ActionListComponent {...props} />;