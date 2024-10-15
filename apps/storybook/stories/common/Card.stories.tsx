import { Card } from "@webriq-test/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  title: "Common/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    children: <p>This is a sample card</p>,
    borderRadius: "xl",
  },
  argTypes: {
    borderRadius: {
      control: { type: "radio" },
      options: ["none", "sm", "md", "lg", "xl"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  render: args => <Card {...args} />,
};

export const WithClassName: Story = {
  args: {
    className: "bg-gray-200 border-solid border border-primary-foreground",
  },
};
