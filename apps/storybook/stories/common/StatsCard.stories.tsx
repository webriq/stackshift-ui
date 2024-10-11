import { StatsCard } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const ARGS = {
  LABEL: "Total Revenue",
  VALUE: "$33,261",
  ICON: "https://cdn.sanity.io/images/9itgab5x/staging/97b6696849c90facc200537fd780b03d373e5212-980x830.png",
};
const meta = {
  title: "Common/Statistics Card",
  component: StatsCard,
  tags: ["autodocs"],
  args: {
    label: ARGS.LABEL,
    value: ARGS.VALUE,
    icon: ARGS.ICON,
  },
  decorators: [
    Story => (
      <div className="max-w-[300px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof StatsCard>;

export default meta;
type Story = StoryObj<typeof StatsCard>;

export const Primary: Story = {
  args: {
    variant: "inline",
  },
};

export const Stacked: Story = {
  args: {
    variant: "stacked",
  },
};
