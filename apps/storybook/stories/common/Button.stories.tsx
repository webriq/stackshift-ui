import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@stackshift-ui/react";

const meta: Meta<typeof Button> = {
  title: "Common/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    className: "py-3 px-6 rounded-global",
    children: "Submit",
    type: "button",
    variant: "solid",
    link: {
      href: "initial-values-test",
      target: "_self",
      type: "internal",
    },
  },
  argTypes: {
    variant: {
      options: ["solid", "outline", "ghost", "link", "custom", "unstyled", "tab"],
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: {
    variant: "solid",
    //className: "bg-primary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};

export const Custom: Story = {
  args: {
    variant: "custom",
  },
};

export const Unstyled: Story = {
  args: {
    variant: "unstyled",
  },
};

export const Tab: Story = {
  args: {
    variant: "tab",
  },
};
