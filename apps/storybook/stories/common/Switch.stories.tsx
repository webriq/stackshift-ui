// @ts-nocheck - story demo file
import { Label, Switch } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

const meta: Meta<typeof Switch> = {
  title: "Common/Switch",
  component: Switch,
  tags: ["autodocs"],
  args: {
    disabled: false,
  },
  argTypes: {
    checked: {
      control: { type: "boolean" },
      description: "Whether the switch is checked",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the switch is disabled",
    },
    onCheckedChange: {
      action: "checked changed",
      description: "Callback fired when the switch state changes",
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  render: args => <Switch {...args} />,
};

export const Controlled: Story = {
  render: args => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="flex items-center space-x-2">
        <Switch {...args} checked={checked} onCheckedChange={setChecked} />
        <span className="text-sm">Switch is {checked ? "on" : "off"}</span>
      </div>
    );
  },
};

export const WithLabel: Story = {
  render: args => (
    <div className="flex items-center space-x-2">
      <Switch id="notifications" {...args} />
      <Label htmlFor="notifications">Enable notifications</Label>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: args => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch {...args} />
        <Label className="opacity-50">Disabled (unchecked)</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch {...args} checked />
        <Label className="opacity-50">Disabled (checked)</Label>
      </div>
    </div>
  ),
};

export const DefaultChecked: Story = {
  args: {
    defaultChecked: true,
  },
  render: args => (
    <div className="flex items-center space-x-2">
      <Switch {...args} />
      <Label>Default checked</Label>
    </div>
  ),
};

export const FormExample: Story = {
  render: args => (
    <form className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Notification Settings</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications">Email notifications</Label>
            <Switch id="email-notifications" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="push-notifications">Push notifications</Label>
            <Switch id="push-notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sms-notifications">SMS notifications</Label>
            <Switch id="sms-notifications" disabled />
          </div>
        </div>
      </div>
    </form>
  ),
};

export const CustomStyling: Story = {
  render: args => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch className="data-[state=checked]:bg-green-500" {...args} />
        <Label>Custom green switch</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch className="data-[state=checked]:bg-red-500 scale-125" {...args} />
        <Label>Custom red and larger switch</Label>
      </div>
    </div>
  ),
};
