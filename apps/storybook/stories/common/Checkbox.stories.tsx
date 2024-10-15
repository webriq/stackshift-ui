import { Checkbox } from "@webriq-test/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Checkbox> = {
  title: "Common/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    required: { control: "boolean" },
    ariaLabel: { control: "text" },
    label: { control: "text" },
    labelClass: { control: "text" },
    className: { control: "text" },
    onChange: { action: "onChange" },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    name: "Checkbox 1",
    item: "Checkbox 1",
    required: false,
    ariaLabel: "",
    label: "",
    labelClass: "",
    className: "",
  },
};

export const WithLabelClass: Story = {
  args: {
    name: "Checkbox 2",
    labelClass: "text-lg font-bold",
    item: "Checkbox 2",
  },
};
