import { InputFile } from "@webriq-test/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof InputFile> = {
  title: "Common/Input File",
  component: InputFile,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text", description: "The name of the input element" },
    className: {
      control: "text",
      description: "Custom class names for the input file component",
    },
    required: {
      control: "boolean",
      description: "Whether the input is required",
    },
    ariaLabel: { control: "text", description: "Aria label for accessibility" },
    variant: {
      control: "radio",
      options: ["primary", "outline"],
      description: "The visual style of the input file component",
    },
  },
} satisfies Meta<typeof InputFile>;

export default meta;
type Story = StoryObj<typeof InputFile>;

export const Primary: Story = {
  args: {
    name: "Browse",
    variant: "primary",
  },
};

export const Outline: Story = {
  args: {
    name: "Browse",
    variant: "outline",
  },
};
