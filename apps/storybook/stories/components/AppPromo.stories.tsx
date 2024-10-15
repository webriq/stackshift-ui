import { Meta, StoryObj } from "@storybook/react";
import { AppPromo } from "@webriq-test/react";

// Define the default export for Storybook
const meta: Meta<typeof AppPromo> = {
  title: "Components/App Promo",
  component: AppPromo,
};

export default meta;

const Template: StoryObj<typeof AppPromo> = {
  render: args => <AppPromo {...args} />,
};

export const VariantA: StoryObj<typeof AppPromo> = {
  ...Template,
  args: {
    data: {
      variant: "variant_a",
      variants: {
        logo: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/production/140d0c9644c0aa1a5dbc817b18e9d3f8d18b43ea-125x124.png",
        },
        subtitle: "Dolor sit amet consectutar",
        title: "Build & Launch without problems",
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
    },
  },
};

export const VariantB: StoryObj<typeof AppPromo> = {
  ...Template,
  args: {
    data: {
      variant: "variant_b",
      variants: {
        subtitle: "Dolor sit amet consectutar",
        title: "Build & Launch without problems",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
        stats: [
          { label: "Total Revenue", value: "$33,261" },
          { label: "Subscribers", value: "481,095" },
          { label: "Model Sale Rate", value: "25%" },
          { label: "Conversations", value: "643,533" },
        ],
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
    },
  },
};

export const VariantC: StoryObj<typeof AppPromo> = {
  ...Template,
  args: {
    data: {
      variant: "variant_c",
      variants: {
        subtitle: "Dolor sit amet consectutar",
        title: "Build & Launch without problems",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
        tags: [
          "Vestibulum viverra ante non libero",
          "Morbi mollis metus pretium ultrices tincidunt",
          "Etiam lectus nunc, commodo et risus in",
        ],
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
    },
  },
};
