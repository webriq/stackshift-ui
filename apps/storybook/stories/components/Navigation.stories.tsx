import { Navigation } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof Navigation> = {
  title: "Components/Navigation",
  component: Navigation,
  tags: ["autodocs"],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Primary: Story = {
  render: props => <Navigation {...props} />,
  args: {
    logo: {
      image: {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: "image-7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833-png",
        },
      },
    },
    imageSrc:
      "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=96&q=75",
    links: [
      {
        label: "Start",
      },
      {
        label: "About",
      },
      {
        label: "Services",
      },
      {
        label: "Platform",
      },
      {
        label: "Testimonials",
      },
    ],
    primaryButton: {
      label: "Sign In",
    },
    secondaryButton: {
      label: "Sign Up",
    },
  },
};
