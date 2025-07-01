import { Badge } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

type BadgeProps = React.ComponentProps<typeof Badge> & {
  variant: "default" | "secondary" | "outline" | "destructive";
};

const meta: Meta<BadgeProps> = {
  title: "Common/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    children: "Travel",
    className: "",
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "secondary", "outline", "destructive"],
    },
  },
} satisfies Meta<BadgeProps>;

export default meta;
type Story = StoryObj<BadgeProps>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};
