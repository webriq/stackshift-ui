import { Radio, RadioGroup } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof RadioGroup> = {
  title: "Common/Radio Group",
  component: RadioGroup,
  decorators: [
    Story => (
      <div className="p-4 rounded-lg bg-gray-50">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "inline"],
    },
    noLabel: { control: "boolean" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Primary: Story = {
  args: {
    children: ["Option 1", "Option 2", "Option 3"].map((r, index) => {
      return <Radio name="Primary" ariaLabel={r} item={r} key={index} />;
    }),
    variant: "primary",
    name: "Primary",
  },
};

export const Inline: Story = {
  args: {
    children: ["Option 1", "Option 2", "Option 3"].map((r, index) => {
      return <Radio name="Inline" ariaLabel={r} item={r} key={index} />;
    }),
    variant: "inline",
    name: "Inline",
  },
};
