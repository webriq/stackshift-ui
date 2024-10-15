import { StackShiftUIProvider } from "@webriq-test/react";
import type { Preview } from "@storybook/react";
import React from "react";
import "../../nextjs-pages/src/styles/globals.css";
//TODO: Comment out styling due to build error
// import "./style.css";

const decorators: Preview["decorators"] = [
  Story => (
    <StackShiftUIProvider>
      <Story />
    </StackShiftUIProvider>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"],
  decorators,
};

export default preview;
