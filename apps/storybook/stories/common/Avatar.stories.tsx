import { Avatar } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Avatar> = {
  title: "Common/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    src: "https://via.placeholder.com/150",
    alt: "Sample Avatar",
    size: 100,
    text: "John Doe",
    className: "text-white",
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  render: args => <Avatar {...args} />,
};

export const Initials: Story = {
  args: {
    src: "",
    size: 100,
    text: "Custom Size",
  },
};
