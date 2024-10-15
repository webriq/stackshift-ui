import { Select } from "@webriq-test/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Select> = {
  title: "Common/Select",
  component: Select,
  args: {
    items: ["Option 1", "Option 2", "Option 3"],
    name: "Select",
    variant: "primary",
    defaultValue: "primary",
  },
  argTypes: {
    items: ["Option 1", "Option 2", "Option 3"],
    name: "Select",
    variant: {
      control: { type: "radio" },
      options: ["primary", "outline"],
    },
    defaultValue: { control: "text" },
    label: { control: "text" },
    labelClass: { control: "text" },
    onChange: { action: "onChange" },
    className: { control: "text" },
    required: { control: "boolean" },
    ariaLabel: { control: "text" },
    noLabel: { control: "boolean" },
  },

  decorators: [
    Story => (
      <div className="bg-gray-50 rounded-lg p-4">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {},
};
