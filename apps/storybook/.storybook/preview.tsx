import { StackShiftUIProvider } from "@stackshift-ui/react";
import type { Preview } from "@storybook/react";
import React from "react";
import "../../nextjs-pages/src/styles/globals.css";
import "./style.css";

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
