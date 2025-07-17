import { Checkbox, Label } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Common/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A checkbox component built on Radix UI primitives with customizable styling and accessibility features.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: { type: "boolean" },
      description: "Whether the checkbox is checked",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the checkbox is disabled",
    },
    required: {
      control: { type: "boolean" },
      description: "Whether the checkbox is required",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox defaultChecked id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox disabled id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox className="w-6 h-6" id="with-size-sm" />
          <Label htmlFor="with-size-sm" className="text-sm">
            Accept terms and conditions
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox className="w-8 h-8" id="with-size-md" />
          <Label htmlFor="with-size-md" className="text-md">
            Accept terms and conditions
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox className="w-12 h-12" id="with-size-lg" />
          <Label htmlFor="with-size-lg" className="text-lg">
            Accept terms and conditions
          </Label>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Default checkbox with label.",
      },
    },
  },
};
