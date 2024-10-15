import { Statistics } from "@webriq-test/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Statistics> = {
  title: "Components/Statistics",
  component: Statistics,
  tags: ["autodocs"],
  args: {
    stats: [
      {
        label: "Total Revenue",
        value: "$33,261",
      },
      {
        label: "Subscribers",
        value: "481,095",
      },
      {
        label: "Conversations",
        value: "643,553",
      },
      {
        label: "Modal Sale Rate",
        value: "25%",
      },
    ],
  },
} satisfies Meta<typeof Statistics>;

export default meta;
type Story = StoryObj<typeof Statistics>;

export const Primary: Story = {
  render: props => <Statistics {...props} />,
};
