import type { Meta, StoryObj } from "@storybook/react";
import { Newsletter } from "@webriq-test/react";

const meta: Meta<typeof Newsletter> = {
  title: "Components/Newsletter",
  component: Newsletter,
  tags: ["autodocs"],
} satisfies Meta<typeof Newsletter>;

export default meta;
type Story = StoryObj<typeof Newsletter>;

export const VariantA: Story = {
  render: props => <Newsletter {...props} />,
  args: {
    data: {
      variant: "variant_a",
      variants: {
        title: "So much more than a business analytics tool",
        description:
          "Lorem ipsum dolor sit amet, adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
        logo: {
          type: "linkInternal",
          internalLink: "/",
          linkTarget: "_self",
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/b3b0a815c21cc9fd95261a2a0dd737e0827915cd-664x833.png?fm=webp&w=128&q=75",
        },
        form: {
          fields: [
            {
              name: "Email",
              placeholder: "Enter your email address",
              type: "inputEmail",
            },
          ],
          buttonLabel: "Get Started",
        },
      },
    },
  },
};

export const VariantB: Story = {
  render: props => <Newsletter {...props} />,
  args: {
    data: {
      variant: "variant_b",
      variants: {
        title: "So much more than a business analytics tool",
        description:
          "Lorem ipsum dolor sit amet, adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
        logo: {
          type: "linkInternal",
          internalLink: "/",
          linkTarget: "_self",
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/b3b0a815c21cc9fd95261a2a0dd737e0827915cd-664x833.png?fm=webp&w=128&q=75",
        },
        form: {
          fields: [
            {
              name: "Email",
              placeholder: "Enter your email address",
              type: "inputEmail",
            },
          ],
          buttonLabel: "Get Started",
        },
      },
    },
  },
};
