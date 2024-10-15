import { Features } from "@webriq-test/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Features> = {
  title: "Components/Features",
  component: Features,
  tags: ["autodocs"],
} satisfies Meta<typeof Features>;

export default meta;
type Story = StoryObj<typeof Features>;

export const Primary: Story = {
  render: props => <Features {...props} />,
  args: {
    caption: "Dolor sit amet consectutar",
    title: "Build & Launch without problems",
    features: [
      {
        mainImage: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/97b6696849c90facc200537fd780b03d373e5212-980x830.png?fm=webp&w=96&q=75",
        },
        title: "Lorem ipsum dolor sit amet consectutar",
        plainText:
          "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
      },
      {
        mainImage: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/d52b2d79a8c0ff7df5bac2ab9b31e4f8b35b2d49-515x485.png?fm=webp&w=96&q=75",
        },
        title: "Ut congue nec leo eget aliquam",
        plainText:
          "Ut tempus tellus ac nisi vestibulum tempus. Nunc tincidunt lectus libero, ac ultricies augue elementum at.",
      },
      {
        mainImage: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/46503b9f97de2e422010bcde0a1e33e954bca584-981x860.png?fm=webp&w=96&q=75",
        },
        title: "Proin fringilla eleifend justo pellentesque",
        plainText:
          "Donec ut ligula nunc. Mauris blandit vel est et facilisis. Integer sapien felis, aliquet at posuere et, porttitor quis ligula.",
      },
      {
        mainImage: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/97b6696849c90facc200537fd780b03d373e5212-980x830.png?fm=webp&w=96&q=75",
        },
        title: "Morbi sagittis ligula sit amet elit maximus",
        plainText:
          "Duis ut facilisis orci. Morbi lacinia nunc a augue eleifend, sed placerat ex faucibus. Duis ante arcu, pretium ac luctus vulputate.",
      },
    ],
  },
};
