import { Badge } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Badge> = {
  title: "Common/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    children: "Travel",
    className: "",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {};
