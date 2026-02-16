// @ts-nocheck - story demo file
import { Grid, GridItem } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof Grid> = {
  title: "Layout/Grid",
  component: Grid,
  tags: ["autodocs"],
  args: {
    columns: 3,
    gap: 2,
    children: (
      <>
        <GridItem className="h-20 w-20 border border-primary" />
        <GridItem className="h-20 w-20 border border-primary" />
        <GridItem className="h-20 w-20 border border-primary" />
      </>
    ),
  },
  argTypes: {
    columns: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      description: "Number of columns in the grid",
      defaultValue: 3,
    },
    gap: {
      control: "number",
      description: "Gap between grid items",
      defaultValue: 2,
    },
    align: {
      control: "radio",
      options: ["start", "end", "baseline", "stretch", "center"],
      description: "Alignment of grid items on the cross axis",
    },
    justify: {
      control: "select",
      options: ["normal", "start", "end", "center", "between", "around", "evenly", "stretch"],
      description: "Justification of grid items on the main axis",
    },
    className: {
      control: "text",
      description: "Additional custom classes",
    },
  },
  decorators: [
    Story => (
      <section className="w-full">
        <Story />
      </section>
    ),
  ],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof Grid>;

export const Primary: Story = {
  args: {},
};
