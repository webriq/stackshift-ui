import { HowItWorks } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof HowItWorks> = {
  title: "Components/How It Works",
  component: HowItWorks,
  tags: ["autodocs"],
} satisfies Meta<typeof HowItWorks>;

export default meta;
type Story = StoryObj<typeof HowItWorks>;

export const Primary: Story = {
  render: props => <HowItWorks {...props} />,
  args: {
    subtitle: "Dolor sit amet consectutar",
    title: "Build & Launch without problems",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
    steps: [
      {
        title: "Lorem ipsum dolor sit amet consectutar",
        plainText:
          "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
      },
      {
        title: "Lorem ipsum dolor sit amet consectutar",
        plainText:
          "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
      },
      {
        title: "Lorem ipsum dolor sit amet consectutar",
        plainText:
          "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
      },
    ],
  },
};
