import { Heading } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Heading> = {
  title: "Common/Heading",
  component: Heading,
  tags: ["autodocs"],
  args: {
    children: "Heading",
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  render: ({ children }) => (
    <div className="space-y-2">
      <Heading type="h1" fontSize="4xl">{`${children} 1`}</Heading>
      <Heading type="h2" fontSize="3xl">{`${children} 2`}</Heading>
      <Heading type="h3" fontSize="2xl">{`${children} 3`}</Heading>
      <Heading type="h4" fontSize="xl">{`${children} 4`}</Heading>
      <Heading type="h5">{`${children} 5`}</Heading>
      <Heading type="h6">{`${children} 6`}</Heading>
    </div>
  ),
};
