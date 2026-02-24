import { Checkbox, Label } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
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
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center space-x-2">
          <Checkbox defaultChecked id="terms-and-conditions-2" />
          <Label htmlFor="terms-and-conditions-2">Accept terms and conditions</Label>
        </div>
        <p className="text-muted-foreground text-sm pl-6">
          By checking this box, you agree to our terms and conditions.
        </p>
      </div>

      <div>
        <Checkbox disabled id="disable-notification" />
        <Label htmlFor="disable-notification">Enable notifications</Label>
      </div>

      <div className="p-4 rounded-lg ring-primary ring-1 bg-primary/10 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Checkbox defaultChecked id="notifications" />
          <Label htmlFor="notifications">Enable Notifications</Label>
        </div>
        <p className="text-sm text-muted-foreground pl-6">
          You can enable/disable notifications anytime.
        </p>
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
