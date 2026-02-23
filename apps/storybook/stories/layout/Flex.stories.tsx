import { Button, Flex } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Flex> = {
  title: "Layout/Flex",
  component: Flex,
  tags: ["autodocs"],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof Flex>;

export const Primary: Story = {
  render: () => (
    <Flex gap={2}>
      <Button ariaLabel="Click button 1" variant="solid">
        Solid
      </Button>
      <Button ariaLabel="Click button 2" variant="outline">
        Outline
      </Button>
      <Button ariaLabel="Click button 3" variant="ghost">
        Ghost
      </Button>
    </Flex>
  ),
};
