import { Input } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Common/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "your.email@webriq.com",
    name: "Email",
    type: "email",
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text displayed in the input field",
    },
    name: {
      control: "text",
      description: "Name attribute for the input field",
    },
    type: {
      control: "radio",
      options: ["number", "password", "email", "text"],
      description: "Type of input field (number, password, email, or text)",
    },
    variant: {
      control: "radio",
      options: ["primary", "secondary", "outline"],
      description: "Visual style of the input field",
    },
    noLabel: {
      control: "boolean",
      description: "Whether to remove the label associated with the input field",
    },
    label: {
      control: "text",
      description: "Text displayed as the label for the input field",
    },
    ariaLabel: {
      control: "text",
      description: "Aria label for accessibility",
    },
    required: {
      control: "boolean",
      description: "Whether the input field is required",
    },
    labelClass: {
      control: "text",
      description: "Custom class names for the input label",
    },
    className: {
      control: "text",
      description: "Custom class names for the input field",
    },
    textSize: {
      control: "radio",
      options: ["sm", "md", "lg"],
      description: "Size of the input field (small, medium, or large)",
    },
    onChange: { action: "onChange" },
  },
  decorators: [
    Story => (
      <div className="p-4 rounded-lg bg-gray-100">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const NoLabel: Story = {
  args: {
    noLabel: true,
    variant: "primary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};
