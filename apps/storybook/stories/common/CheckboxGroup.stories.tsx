import { Checkbox, CheckboxGroup } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

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

export const Default: Story = {
  args: {
    argTypes: {
      className: { control: "text" },
      label: { control: "text" },
      noLabel: { control: "boolean" },
      labelClass: { control: "text" },
    },
    variant: "default",
    name: "Default",
    children: ["Option 1", "Option 2", "Option 3"].map((item, index) => (
      <Checkbox item={item} key={index} ariaLabel={item} required={false} name={"Primary"} />
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
