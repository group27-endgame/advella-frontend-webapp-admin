import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import AdvellaAppBar from "../../../components/AppBar.component";
import { userEvent, within } from "@storybook/testing-library";
import { links } from "../../../links";

export default {
  title: "Advella/Components/AppBar",
  component: AdvellaAppBar,
  args: {
    title: "Advella",
    children: "Content",
    defaultExpanded: true
  },
} as ComponentMeta<typeof AdvellaAppBar>;

export const WebAppBar: ComponentStory<typeof AdvellaAppBar> = ({links: _links, ...props}) => (
  <BrowserRouter>
    <AdvellaAppBar links={links} {...props} />
  </BrowserRouter>
);
export const PhoneAppBar: ComponentStory<typeof AdvellaAppBar> = ({links: _links, ...props}) => {
  return (
    <BrowserRouter>
      <AdvellaAppBar links={links} {...props} />
    </BrowserRouter>
  );
};

PhoneAppBar.parameters = {
  chromatic: { viewports: [400] },
  viewport: {
    defaultViewport: "phone",
  },
};

export const OpenDrawer = PhoneAppBar.bind({});
OpenDrawer.parameters = {
  chromatic: { viewports: [400] },
  viewport: {
    defaultViewport: "phone",
  },
};
OpenDrawer.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const button = canvas.getByRole("button");
  await userEvent.click(button);
};
