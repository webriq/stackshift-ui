import { Text } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof Text> = {
  title: "Common/Text",
  component: Text,
  tags: ["autodocs"],
  args: {
    children: "Sample text to display",
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  render: ({ children }) => (
    <div className="space-y-2">
      <Text fontSize="xs">(xs){children}</Text>
      <Text fontSize="sm">(sm) {children}</Text>
      <Text fontSize="base">(base) {children}</Text>
      <Text fontSize="lg">(lg) {children}</Text>
      <Text fontSize="xl">(xl) {children}</Text>
      <Text fontSize="2xl">(2xl) {children}</Text>
      <Text fontSize="3xl">(3xl) {children}</Text>
      <Text fontSize="4xl">(4xl) {children}</Text>
      <Text fontSize="5xl">(5xl){children}</Text>
    </div>
  ),
};
