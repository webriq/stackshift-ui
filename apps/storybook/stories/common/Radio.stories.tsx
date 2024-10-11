import { Radio } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

// className, ariaLabel, labelClass, onChange
const meta: Meta<typeof Radio> = {
  title: "Common/Radio",
  component: Radio,
  decorators: [
    Story => (
      <div className="bg-gray-50 rounded-lg p-4">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    className: { control: "text" },
    ariaLabel: { control: "text" },
    labelClass: { control: "text" },
    onChange: { action: "onChange" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof Radio>;

export const Primary: Story = {
  args: {
    name: "Radio",
    item: "Option 1",
  },
};
