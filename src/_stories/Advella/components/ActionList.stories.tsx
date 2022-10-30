import { ComponentMeta, ComponentStory } from '@storybook/react';
import ActionListComponent from '../../../components/ActionList.component';

export default {
  title: 'Advella/Components',
  component: ActionListComponent,
  args: {
    title: "Title",
    list: [{
      listId: 1,
      title: "New Product",
      dateTime: Date.now(),
      type: "product",
      subscription: "Seymore added new Product"
  },],
  },
} as ComponentMeta<typeof ActionListComponent>;

export const ActionList: ComponentStory<typeof ActionListComponent> = (props) => <ActionListComponent {...props} />;