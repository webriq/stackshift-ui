import { Features } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Features> = {
  title: "Components/Features",
  component: Features,
  tags: ["autodocs"],
} satisfies Meta<typeof Features>;

export default meta;

const Template: StoryObj<typeof Features> = {
  render: args => <Features {...args} />,
};

export const VariantA: StoryObj<typeof Features> = {
  ...Template,
  args: {
    data: {
      variant: "variant_a",
      variants: {
        caption: "Dolor sit amet consectutar",
        title: "Build & Launch without problems",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
        arrayOfImageTitleAndText: [
          {
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/97b6696849c90facc200537fd780b03d373e5212-980x830.png?fm=webp&w=96&q=75",
              alt: "alt 1",
            },
            title: "Lorem ipsum dolor sit amet consectutar",
            plainText:
              "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
          },
          {
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/d52b2d79a8c0ff7df5bac2ab9b31e4f8b35b2d49-515x485.png?fm=webp&w=96&q=75",
              alt: "alt 2",
            },
            title: "Ut congue nec leo eget aliquam",
            plainText:
              "Ut tempus tellus ac nisi vestibulum tempus. Nunc tincidunt lectus libero, ac ultricies augue elementum at.",
          },
          {
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/46503b9f97de2e422010bcde0a1e33e954bca584-981x860.png?fm=webp&w=96&q=75",
              alt: "alt 3",
            },
            title: "Proin fringilla eleifend justo pellentesque",
            plainText:
              "Donec ut ligula nunc. Mauris blandit vel est et facilisis. Integer sapien felis, aliquet at posuere et, porttitor quis ligula.",
          },
          {
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/97b6696849c90facc200537fd780b03d373e5212-980x830.png?fm=webp&w=96&q=75",
              alt: "alt 4",
            },
            title: "Morbi sagittis ligula sit amet elit maximus",
            plainText:
              "Duis ut facilisis orci. Morbi lacinia nunc a augue eleifend, sed placerat ex faucibus. Duis ante arcu, pretium ac luctus vulputate.",
          },
        ],
      },
    },
  },
};

export const VariantB: StoryObj<typeof Features> = {
  render: props => <Features {...props} />,
  args: {
    data: {
      variant: "variant_b",
      variants: {
        caption: "Dolor sit amet consectutar",
        title: "Build & Launch without problems",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
        tags: [
          "Vestibulum viverra ante non libero",
          "Morbi mollis metus pretium ultrices tincidunt",
          "Etiam lectus nunc, commodo et risus in",
        ],
        arrayOfImageTitleAndText: [
          {
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/97b6696849c90facc200537fd780b03d373e5212-980x830.png?fm=webp&w=96&q=75",
              alt: "alt 1",
            },
            title: "Lorem ipsum dolor sit amet consectutar",
            plainText:
              "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
          },
          {
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/d52b2d79a8c0ff7df5bac2ab9b31e4f8b35b2d49-515x485.png?fm=webp&w=96&q=75",
              alt: "alt 2",
            },
            title: "Ut congue nec leo eget aliquam",
            plainText:
              "Ut tempus tellus ac nisi vestibulum tempus. Nunc tincidunt lectus libero, ac ultricies augue elementum at.",
          },
          {
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/46503b9f97de2e422010bcde0a1e33e954bca584-981x860.png?fm=webp&w=96&q=75",
              alt: "alt 3",
            },
            title: "Proin fringilla eleifend justo pellentesque",
            plainText:
              "Donec ut ligula nunc. Mauris blandit vel est et facilisis. Integer sapien felis, aliquet at posuere et, porttitor quis ligula.",
          },
          {
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/97b6696849c90facc200537fd780b03d373e5212-980x830.png?fm=webp&w=96&q=75",
              alt: "alt 4",
            },
            title: "Morbi sagittis ligula sit amet elit maximus",
            plainText:
              "Duis ut facilisis orci. Morbi lacinia nunc a augue eleifend, sed placerat ex faucibus. Duis ante arcu, pretium ac luctus vulputate.",
          },
        ],
      },
    },
  },
};

export const VariantC: StoryObj<typeof Features> = {
  render: props => <Features {...props} />,
  args: {
    data: {
      variant: "variant_c",
      variants: {
        caption: "Dolor sit amet consectutar",
        title: "Build & Launch without problems",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
        arrayOfImageTitleAndText: [
          {
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/97b6696849c90facc200537fd780b03d373e5212-980x830.png?fm=webp&w=96&q=75",
              alt: "alt text",
            },
            title: "Lorem ipsum dolor sit amet consectutar",
            plainText:
              "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
          },
          {
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/d52b2d79a8c0ff7df5bac2ab9b31e4f8b35b2d49-515x485.png?fm=webp&w=96&q=75",
              alt: "alt text",
            },
            title: "Ut congue nec leo eget aliquam",
            plainText:
              "Ut tempus tellus ac nisi vestibulum tempus. Nunc tincidunt lectus libero, ac ultricies augue elementum at.",
          },
          {
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/46503b9f97de2e422010bcde0a1e33e954bca584-981x860.png?fm=webp&w=96&q=75",
              alt: "alt text",
            },
            title: "Proin fringilla eleifend justo pellentesque",
            plainText:
              "Donec ut ligula nunc. Mauris blandit vel est et facilisis. Integer sapien felis, aliquet at posuere et, porttitor quis ligula.",
          },
          {
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/97b6696849c90facc200537fd780b03d373e5212-980x830.png?fm=webp&w=96&q=75",
              alt: "alt text",
            },
            title: "Morbi sagittis ligula sit amet elit maximus",
            plainText:
              "Duis ut facilisis orci. Morbi lacinia nunc a augue eleifend, sed placerat ex faucibus. Duis ante arcu, pretium ac luctus vulputate.",
          },
        ],
      },
    },
  },
};

export const VariantD: StoryObj<typeof Features> = {
  render: props => <Features {...props} />,
  args: {
    data: {
      variant: "variant_d",
      variants: {
        caption: "Dolor sit amet consectutar",
        title: "Build & Launch without problems",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
        arrayOfImageTitleAndText: [
          {
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/97b6696849c90facc200537fd780b03d373e5212-980x830.png?fm=webp&w=96&q=75",
              alt: "alt text",
            },
            title: "Lorem ipsum dolor sit amet consectutar",
            plainText:
              "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
          },
          {
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/d52b2d79a8c0ff7df5bac2ab9b31e4f8b35b2d49-515x485.png?fm=webp&w=96&q=75",
              alt: "alt text",
            },
            title: "Ut congue nec leo eget aliquam",
            plainText:
              "Ut tempus tellus ac nisi vestibulum tempus. Nunc tincidunt lectus libero, ac ultricies augue elementum at.",
          },
          {
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/46503b9f97de2e422010bcde0a1e33e954bca584-981x860.png?fm=webp&w=96&q=75",
              alt: "alt text",
            },
            title: "Proin fringilla eleifend justo pellentesque",
            plainText:
              "Donec ut ligula nunc. Mauris blandit vel est et facilisis. Integer sapien felis, aliquet at posuere et, porttitor quis ligula.",
          },
          {
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/97b6696849c90facc200537fd780b03d373e5212-980x830.png?fm=webp&w=96&q=75",
              alt: "alt text",
            },
            title: "Morbi sagittis ligula sit amet elit maximus",
            plainText:
              "Duis ut facilisis orci. Morbi lacinia nunc a augue eleifend, sed placerat ex faucibus. Duis ante arcu, pretium ac luctus vulputate.",
          },
        ],
      },
    },
  },
};

export const VariantE: StoryObj<typeof Features> = {
  render: props => <Features {...props} />,
  args: {
    data: {
      variant: "variant_e",
      variants: {
        caption: "Dolor sit amet consectutar",
        title: "Build & Launch without problems",
        featuredItems: [
          {
            subtitle: "Dolor sit amet consectutar",
            title: "Lorem ipsum dolor sit amet consectutar",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/3a1ef9b3424fabd086e3d7bdea95583ba9ea6363-1048x701.jpg?fm=webp&w=2048&q=75",
              alt: "alt text",
            },
          },
          {
            subtitle: "Dolor sit amet consectutar",
            title: "Lorem ipsum dolor sit amet consectutar",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/staging/2d9f87020c05fba5986084e4744c829844bf21b6-1050x700.jpg?fm=webp&w=1200&q=75",
              alt: "alt text",
            },
          },
        ],
      },
    },
  },
};

export const VariantF: StoryObj<typeof Features> = {
  render: props => <Features {...props} />,
  args: {
    data: {
      variant: "variant_f",
      variants: {
        caption: "Dolor sit amet consectutar",
        title: "Build & Launch without problems",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
        primaryButton: { label: "Get Started" },
        images: [
          {
            image:
              "https://cdn.sanity.io/images/9itgab5x/staging/3a1ef9b3424fabd086e3d7bdea95583ba9ea6363-1048x701.jpg?fm=webp&w=2048&q=75",
          },
          {
            image:
              "https://cdn.sanity.io/images/9itgab5x/staging/2d9f87020c05fba5986084e4744c829844bf21b6-1050x700.jpg?fm=webp&w=1200&q=75",
          },
          {
            image:
              "https://cdn.sanity.io/images/9itgab5x/staging/2d9f87020c05fba5986084e4744c829844bf21b6-1050x700.jpg?fm=webp&w=1200&q=75",
          },
          {
            image:
              "https://cdn.sanity.io/images/9itgab5x/staging/3a1ef9b3424fabd086e3d7bdea95583ba9ea6363-1048x701.jpg?fm=webp&w=2048&q=75",
          },
        ],
      },
    },
  },
};

export const VariantG: StoryObj<typeof Features> = {
  render: props => <Features {...props} />,
  args: {
    data: {
      variant: "variant_g",
      variants: {
        caption: "Dolor sit amet consectutar",
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
              "https://cdn.sanity.io/images/9itgab5x/staging/3a1ef9b3424fabd086e3d7bdea95583ba9ea6363-1048x701.jpg?fm=webp&w=2048&q=75",
          },
          {
            image:
              "https://cdn.sanity.io/images/9itgab5x/staging/2d9f87020c05fba5986084e4744c829844bf21b6-1050x700.jpg?fm=webp&w=1200&q=75",
          },
          {
            image:
              "https://cdn.sanity.io/images/9itgab5x/staging/2d9f87020c05fba5986084e4744c829844bf21b6-1050x700.jpg?fm=webp&w=1200&q=75",
          },
          {
            image:
              "https://cdn.sanity.io/images/9itgab5x/staging/3a1ef9b3424fabd086e3d7bdea95583ba9ea6363-1048x701.jpg?fm=webp&w=2048&q=75",
          },
        ],
      },
    },
  },
};

export const VariantH: StoryObj<typeof Features> = {
  render: props => <Features {...props} />,
  args: {
    data: {
      variant: "variant_h",
      variants: {
        caption: "Dolor sit amet consectutar",
        title: "Build & Launch without problems",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
        arrayOfImageTitleAndText: [
          {
            title: "Lorem ipsum dolor sit amet consectutar",
            plainText:
              "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
          },
          {
            title: "Ut congue nec leo eget aliquam",
            plainText:
              "Ut tempus tellus ac nisi vestibulum tempus. Nunc tincidunt lectus libero, ac ultricies augue elementum at.",
          },
          {
            title: "Proin fringilla eleifend justo pellentesque",
            plainText:
              "Donec ut ligula nunc. Mauris blandit vel est et facilisis. Integer sapien felis, aliquet at posuere et, porttitor quis ligula.",
          },
        ],
        images: [
          {
            image:
              "https://cdn.sanity.io/images/9itgab5x/staging/1d0655534230a5cb4e08d8b7bd14b271c5317d82-634x951.jpg?fm=webp&w=2048&q=75",
            alt: "alt text",
          },
          {
            image:
              "https://cdn.sanity.io/images/9itgab5x/staging/2d9f87020c05fba5986084e4744c829844bf21b6-1050x700.jpg?fm=webp&w=1200&q=75",
            alt: "alt text",
          },
          {
            image:
              "https://cdn.sanity.io/images/9itgab5x/staging/881fdf41f1db63ed80d886037220b4fecc0c39b6-701x876.jpg?fm=webp&w=2048&q=75",
            alt: "alt text",
          },
        ],
      },
    },
  },
};
