import { Checkbox, CheckboxGroup } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof CheckboxGroup> = {
  title: "Common/Checkbox Group",
  component: CheckboxGroup,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "inline"],
    },
    className: { control: "text" },
    label: { control: "text" },
    noLabel: { control: "boolean" },
    labelClass: { control: "text" },
  },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Primary: Story = {
  args: {
    variant: "primary",
    name: "Primary",
    children: ["Option 1", "Option 2", "Option 3"].map((item, index) => (
      <Checkbox
        item={item}
        key={index}
        ariaLabel={item}
        required={false}
        name={"Primary"}
        variant={"primary"}
      />
    )),
  },
};

export const Inline: Story = {
  args: {
    variant: "inline",
    name: "Inline",
    children: ["Option 1", "Option 2", "Option 3"].map((item, index) => (
      <Checkbox item={item} key={index} ariaLabel={item} required={false} name={"Primary"} />
    )),
  },
};

export const WithCustomLabel: Story = {
  args: {
    name: "With Custom Label",
    label: "Custom Label",
    children: ["Option 1", "Option 2", "Option 3"].map((item, index) => (
      <Checkbox
        item={item}
        key={index}
        ariaLabel={item}
        required={false}
        name={"With Custom Label"}
      />
    )),
  },
};
