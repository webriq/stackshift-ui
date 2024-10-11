import { FormField } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FormField> = {
  title: "Common/Form Field",
  component: FormField,
  tags: ["autodocs"],
  args: {
    name: "Name",
    placeholder: "Name",
    type: "inputText",
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof FormField>;

export const Primary: Story = {};
