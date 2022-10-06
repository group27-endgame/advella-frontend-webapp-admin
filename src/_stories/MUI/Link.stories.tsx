import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link } from '@mui/material';

export default {
  title: 'MUI/Link',
  component: Link,
  args: {
    children: "Link",
    href: "",
    
  },
} as ComponentMeta<typeof Link>;

export const Template: ComponentStory<typeof Link> = (props) => <Link {...props} />;