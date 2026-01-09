// @ts-nocheck - story demo file
import { CallToAction } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof CallToAction> = {
  title: "Components/Call To Action",
  component: CallToAction,
  tags: ["autodocs"],
} satisfies Meta<typeof CallToAction>;

export default meta;

const Template: StoryObj<typeof CallToAction> = {
  render: args => <CallToAction {...args} />,
};

export const VariantA: StoryObj<typeof CallToAction> = {
  ...Template,
  args: {
    data: {
      variant: "variant_a",
      variants: {
        title: "So much more than a business analytics tool",
        plainText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
        primaryButton: { label: "Get Started" },
        logo: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/b3b0a815c21cc9fd95261a2a0dd737e0827915cd-664x833.png?fm=webp&w=128&q=75",
        },
      },
    },
  },
};

export const VariantB: StoryObj<typeof CallToAction> = {
  ...Template,
  args: {
    data: {
      variant: "variant_b",
      variants: {
        title: "So much more than a business analytics tool",
        plainText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
        primaryButton: { label: "Get Started" },
        logo: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/b3b0a815c21cc9fd95261a2a0dd737e0827915cd-664x833.png?fm=webp&w=128&q=75",
        },
        form: {
          buttonLabel: "Sign Up",
          fields: [
            {
              name: "First Name",
              placeholder: "First Name",
              type: "inputText",
            },
            {
              name: "Last Name",
              placeholder: "Last Name",
              type: "inputText",
            },
          ],
        },
      },
    },
  },
};

export const VariantC: StoryObj<typeof CallToAction> = {
  ...Template,
  args: {
    data: {
      variant: "variant_c",
      variants: {
        title: "So much more than a business analytics tool",
        plainText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
        primaryButton: { label: "Get Started" },
        logo: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/b3b0a815c21cc9fd95261a2a0dd737e0827915cd-664x833.png?fm=webp&w=128&q=75",
        },
        tags: ["No credit card needed", "Easy to use"],
        form: {
          buttonLabel: "Sign Up",
          fields: [
            {
              name: "First Name",
              placeholder: "First Name",
              type: "inputText",
            },
            {
              name: "Last Name",
              placeholder: "Last Name",
              type: "inputText",
            },
          ],
        },
      },
    },
  },
};

export const VariantD: StoryObj<typeof CallToAction> = {
  ...Template,
  args: {
    data: {
      variant: "variant_d",
      variants: {
        title: "So much more than a business analytics tool",
        plainText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
        primaryButton: { label: "Get Started" },
        logo: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/b3b0a815c21cc9fd95261a2a0dd737e0827915cd-664x833.png?fm=webp&w=128&q=75",
        },
        signInLink: {
          label: "Sign In",
        },
        form: {
          buttonLabel: "Sign Up",
          subtitle: "Sign Up",
          name: "Create an account",
          fields: [
            {
              name: "First Name",
              placeholder: "First Name",
              type: "inputText",
            },
            {
              name: "Last Name",
              placeholder: "Last Name",
              type: "inputText",
            },
            {
              name: "Email Address",
              placeholder: "Enter your Email Address",
              type: "inputEmail",
            },
            {
              name: "Password",
              placeholder: "Enter your Password",
              type: "inputPassword",
            },
          ],
        },
        formLinks: [{ label: "Policy Privacy" }, { label: "Terms of Use" }],
      },
    },
  },
};

export const VariantE: StoryObj<typeof CallToAction> = {
  ...Template,
  args: {
    data: {
      variant: "variant_e",
      variants: {
        signInLink: {
          label: "Sign In",
        },
        form: {
          buttonLabel: "Sign Up",
          subtitle: "Sign Up",
          name: "Create an account",
          fields: [
            {
              name: "First Name",
              placeholder: "First Name",
              type: "inputText",
            },
            {
              name: "Last Name",
              placeholder: "Last Name",
              type: "inputText",
            },
            {
              name: "Email Address",
              placeholder: "Entrer your Email Address",
              type: "inputEmail",
            },
            {
              name: "Password",
              placeholder: "Enter your Password",
              type: "inputPassword",
            },
          ],
        },
        formLinks: [{ label: "Policy Privacy" }, { label: "Terms of Use" }],
      },
    },
  },
};
