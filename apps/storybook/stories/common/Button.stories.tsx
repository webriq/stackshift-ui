import { Button } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Common/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Submit",
    link: {
      externalLink: null,
      internalLink: "initial-values-test",
      label: "About Us",
      linkInternal: {
        _ref: "020142ce-cf61-4671-a5db-80b13a08f2d4",
        _type: "reference",
      },
      linkTarget: "_self",
      linkType: "linkInternal",
      type: "linkInternal",
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
