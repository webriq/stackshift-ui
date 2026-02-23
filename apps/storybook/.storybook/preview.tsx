import { StackShiftUIProvider } from "@stackshift-ui/react";
import type { Preview } from "@storybook/react-vite";
import React from "react";
import "../../nextjs-pages/src/styles/globals.css";

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
  initialGlobals: {
    // 👇 Set the initial background color
    backgrounds: { value: "light" },
  },
  tags: ["autodocs"],
  decorators,
};

export default preview;
