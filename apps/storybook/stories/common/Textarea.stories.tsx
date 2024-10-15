import { Textarea } from "@webriq-test/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Textarea> = {
  title: "Common/Textarea",
  component: Textarea,
  decorators: [
    Story => (
      <div className="bg-gray-50 rounded-lg p-4">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    className: { control: "text" },
    required: { control: "boolean" },
    ariaLabel: { control: "text" },
    labelClass: { control: "text" },
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "outline"],
    },
    label: { control: "text" },
    noLabel: { control: "boolean" },
    onChange: { action: "onChange" },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Primary: Story = {
  args: {
    placeholder: "Write your message here...",
    name: "Message",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    placeholder: "Write your message here...",
    name: "Message",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    placeholder: "Write your message here...",
    name: "Message",
    variant: "outline",
  },
};
