import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import RouterLink from '../../../components/RouterLink.component';

export default {
  title: 'Advella/Components',
  component: RouterLink,
  args: {
    children: "Link",
    href: "/"
  },
} as ComponentMeta<typeof RouterLink>;

export const RouterComponent: ComponentStory<typeof RouterLink> = (props) => <BrowserRouter><RouterLink {...props} /></BrowserRouter>;