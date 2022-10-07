import { Typography } from "@mui/material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import AdvellaAppBar from "../../../components/AppBar.component";
import { userEvent, within } from "@storybook/testing-library";

export default {
  title: "Advella/Components/AppBar",
  component: AdvellaAppBar,
  args: {
    title: "Advella",
    children: "Content",
    links: [
      {
        name: "Link",
        link: "/",
      },
    ],
  },
} as ComponentMeta<typeof AdvellaAppBar>;

export const WebAppBar: ComponentStory<typeof AdvellaAppBar> = (props) => (
  <BrowserRouter>
    <AdvellaAppBar {...props} />
  </BrowserRouter>
);
export const PhoneAppBar: ComponentStory<typeof AdvellaAppBar> = (props) => (
  <BrowserRouter>
    <AdvellaAppBar {...props} />
  </BrowserRouter>
);

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

  const submitButton = canvas.getByRole("button");
  await userEvent.click(submitButton);
};
