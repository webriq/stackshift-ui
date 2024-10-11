import { AppPromo } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof AppPromo> = {
  title: "Components/App Promo",
  component: AppPromo,
  tags: ["autodocs"],
} satisfies Meta<typeof AppPromo>;

export default meta;
type Story = StoryObj<typeof AppPromo>;

export const Primary: Story = {
  render: props => <AppPromo {...props} />,
  args: {
    logo: {
      image: {
        mage: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: "image-7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833-png",
          },
        },
      },
    },
    imageSrc:
      "https://cdn.sanity.io/images/9itgab5x/staging/b3b0a815c21cc9fd95261a2a0dd737e0827915cd-664x833.png?fm=webp&w=128&q=75",
    subtitle: "Dolor sit amet consectutar",
    title: "Build & Launch without problems",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
    images: [
      {
        image:
          "https://cdn.sanity.io/images/9itgab5x/staging/e3cb72c85bf9207d44bb9e0db92cd80be5662108-274x589.png?fm=webp&w=384&q=75",
      },
      {
        image:
          "https://cdn.sanity.io/images/9itgab5x/staging/b5e5d428e809f5f6e500df911ef16ab648be35a1-283x468.png?fm=webp&w=384&q=75",
      },
      {
        image:
          "https://cdn.sanity.io/images/9itgab5x/staging/ce963623bee96f0173097354a8da28472c88dce3-289x559.png?fm=webp&w=384&q=75",
      },
      {
        image:
          "https://cdn.sanity.io/images/9itgab5x/staging/4148621cc49a1c27d31565260703672c4705c49d-289x559.png?fm=webp&w=384&q=75",
      },
    ],
  },
};
