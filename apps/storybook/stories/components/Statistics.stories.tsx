import { Statistics } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Statistics> = {
  title: "Components/Statistics",
  component: Statistics,
  tags: ["autodocs"],
} satisfies Meta<typeof Statistics>;

export default meta;

const Template: StoryObj<typeof Statistics> = {
  render: args => <Statistics {...args} />,
};

export const VariantA: StoryObj<typeof Statistics> = {
  ...Template,
  args: {
    data: {
      variant: "variant_a",
      variants: {
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
    },
  },
};

export const VariantB: StoryObj<typeof Statistics> = {
  ...Template,
  args: {
    data: {
      variant: "variant_b",
      variants: {
        stats: [
          {
            label: "Total Revenue",
            value: "$33,261",
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/97b6696849c90facc200537fd780b03d373e5212-980x830.png?fm=webp&w=48&q=100",
              alt: "total revenue",
            },
          },
          {
            label: "Subscribers",
            value: "481,095",
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/d52b2d79a8c0ff7df5bac2ab9b31e4f8b35b2d49-515x485.png?fm=webp&w=48&q=100",
              alt: "subscribers",
            },
          },
          {
            label: "Conversations",
            value: "643,553",
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/46503b9f97de2e422010bcde0a1e33e954bca584-981x860.png?fm=webp&w=48&q=100",
              alt: "conversations",
            },
          },
          {
            label: "Modal Sale Rate",
            value: "25%",
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/97b6696849c90facc200537fd780b03d373e5212-980x830.png?fm=webp&w=48&q=100",
              alt: "modal sale rate",
            },
          },
        ],
      },
    },
  },
};

export const VariantC: StoryObj<typeof Statistics> = {
  ...Template,
  args: {
    data: {
      variant: "variant_c",
      variants: {
        stats: [
          {
            label: "Total Revenue",
            value: "$33,261",
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/97b6696849c90facc200537fd780b03d373e5212-980x830.png?fm=webp&w=48&q=100",
              alt: "total revenue",
            },
          },
          {
            label: "Subscribers",
            value: "481,095",
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/d52b2d79a8c0ff7df5bac2ab9b31e4f8b35b2d49-515x485.png?fm=webp&w=48&q=100",
              alt: "subscribers",
            },
          },
          {
            label: "Conversations",
            value: "643,553",
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/46503b9f97de2e422010bcde0a1e33e954bca584-981x860.png?fm=webp&w=48&q=100",
              alt: "conversations",
            },
          },
          {
            label: "Modal Sale Rate",
            value: "25%",
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/97b6696849c90facc200537fd780b03d373e5212-980x830.png?fm=webp&w=48&q=100",
              alt: "modal sale rate",
            },
          },
        ],
      },
    },
  },
};
