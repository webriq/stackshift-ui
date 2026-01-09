// @ts-nocheck - story demo file
import { Checkbox, Input, Label } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof Label> = {
  title: "Common/Label",
  component: Label,
  tags: ["autodocs"],
  args: {
    children: "Label Text",
  },
  argTypes: {
    htmlFor: {
      control: { type: "text" },
      description: "The id of the form element this label is associated with",
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;

export const Basic: Story = {
  render: args => <Label {...args} />,
};

export const WithInput: Story = {
  render: args => (
    <div className="space-y-2">
      <Label htmlFor="email">Email Address</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: args => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Required: Story = {
  render: args => (
    <div className="space-y-2">
      <Label htmlFor="password">
        Password <span className="text-red-500">*</span>
      </Label>
      <Input id="password" type="password" placeholder="Enter your password" />
    </div>
  ),
};

export const Disabled: Story = {
  render: args => (
    <div className="space-y-2">
      <Label htmlFor="disabled-input" className="opacity-50">
        Disabled Field
      </Label>
      <Input id="disabled-input" disabled placeholder="This field is disabled" />
    </div>
  ),
};

export const CustomStyling: Story = {
  render: args => (
    <div className="space-y-2">
      <Label htmlFor="custom" className="text-lg font-bold text-blue-600">
        Custom Styled Label
      </Label>
      <Input id="custom" placeholder="Input with custom label" />
    </div>
  ),
};
