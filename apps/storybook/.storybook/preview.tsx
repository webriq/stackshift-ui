import type { Preview } from "@storybook/react";
import { StackShiftUIProvider } from "@webriq-test/react";
import "@webriq-test/tailwind-config/styles.css";
import React from "react";

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
