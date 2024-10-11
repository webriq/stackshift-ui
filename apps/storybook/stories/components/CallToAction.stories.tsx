import { CallToAction } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof CallToAction> = {
  title: "Components/Call To Action",
  component: CallToAction,
  tags: ["autodocs"],
} satisfies Meta<typeof CallToAction>;

export default meta;
type Story = StoryObj<typeof CallToAction>;

export const Primary: Story = {
  render: props => <CallToAction {...props} />,
  args: {
    title: "So much more than a business analytics tool",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
    button: { label: "Get Started" },
    logo: {
      image:
        "https://cdn.sanity.io/images/9itgab5x/staging/b3b0a815c21cc9fd95261a2a0dd737e0827915cd-664x833.png?fm=webp&w=128&q=75",
    },
    imageSrc:
      "https://cdn.sanity.io/images/9itgab5x/staging/b3b0a815c21cc9fd95261a2a0dd737e0827915cd-664x833.png?fm=webp&w=128&q=75",
  },
};
