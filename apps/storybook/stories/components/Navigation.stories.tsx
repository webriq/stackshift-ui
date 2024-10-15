import type { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "@webriq-test/react";

const meta: Meta<typeof Navigation> = {
  title: "Components/Navigation",
  component: Navigation,
  tags: ["autodocs"],
} satisfies Meta<typeof Navigation>;

export default meta;

const Template: StoryObj<typeof Navigation> = {
  render: args => <Navigation {...args} />,
};

export const VariantA: StoryObj<typeof Navigation> = {
  ...Template,
  args: {
    data: {
      variant: "variant_a",
      variants: {
        logo: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=96&q=75",
        },
        routes: [
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
    },
  },
};

export const VariantB: StoryObj<typeof Navigation> = {
  ...Template,
  args: {
    data: {
      variant: "variant_b",
      variants: {
        logo: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=96&q=75",
        },
        routes: [
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
    },
  },
};

export const VariantC: StoryObj<typeof Navigation> = {
  ...Template,
  args: {
    data: {
      variant: "variant_c",
      variants: {
        logo: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=96&q=75",
        },
        routes: [
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
    },
  },
};

export const VariantD: StoryObj<typeof Navigation> = {
  ...Template,
  args: {
    data: {
      variant: "variant_d",
      variants: {
        logo: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=96&q=75",
        },
        routes: [
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
    },
  },
};

export const VariantE: StoryObj<typeof Navigation> = {
  ...Template,
  args: {
    data: {
      variant: "variant_e",
      variants: {
        logo: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=96&q=75",
        },
        routes: [
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
    },
  },
};
