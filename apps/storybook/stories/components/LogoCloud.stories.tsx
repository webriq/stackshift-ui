import { LogoCloud } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof LogoCloud> = {
  title: "Components/Logo Cloud",
  component: LogoCloud,
  tags: ["autodocs"],
} satisfies Meta<typeof LogoCloud>;

export default meta;
type Story = StoryObj<typeof LogoCloud>;

export const Primary: Story = {
  render: props => <LogoCloud {...props} />,
  args: {
    title: "Trusted by brands all over the world",
    images: [
      {
        image:
          "https://cdn.sanity.io/images/9itgab5x/staging/98a01125a78665847573232690190a19f9e03ba3-127x32.png?fm=webp&w=384&q=75",
      },
      {
        image:
          "https://cdn.sanity.io/images/9itgab5x/staging/f1e02a1b9c013348af0dcade173e8f7d34edf7a3-160x32.png?fm=webp&w=384&q=75",
      },
      {
        image:
          "https://cdn.sanity.io/images/9itgab5x/staging/4e35d501689c8e0a4d578a29aea4044e6c03d714-107x32.png?fm=webp&w=384&q=75",
      },
      {
        image:
          "https://cdn.sanity.io/images/9itgab5x/staging/113e6a25a8502aa115dc9ad60c521a0deb4f2bc4-107x32.png?fm=webp&w=384&q=75",
      },
      {
        image:
          "https://cdn.sanity.io/images/9itgab5x/staging/dc2649c456f3a1e7043869b85979b184c95dbc33-119x32.png?fm=webp&w=2048&q=75",
      },
      {
        image:
          "https://cdn.sanity.io/images/9itgab5x/staging/981351fbf9cde5286a554d20b79f49fecc7818c5-77x32.png?fm=webp&w=384&q=75",
      },
    ],
  },
};