// @ts-nocheck - story demo file
import { SigninSignup } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof SigninSignup> = {
  title: "Components/Sign in Sign up",
  component: SigninSignup,
  tags: ["autodocs"],
} satisfies Meta<typeof SigninSignup>;

export default meta;
type Story = StoryObj<typeof SigninSignup>;

const Template: StoryObj<typeof SigninSignup> = {
  render: args => <SigninSignup {...args} />,
};

export const VariantA: Story = {
  ...Template,
  args: {
    data: {
      variant: "variant_a",
      variants: {
        logo: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=1200&q=75",
        },
        form: {
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
              placeholder: "Email Address",
              type: "inputEmail",
            },
            {
              name: "Password",
              placeholder: "Password",
              type: "inputPassword",
            },
            {
              name: "Confirm Password",
              placeholder: "Confirm Password",
              type: "inputPassword",
            },
          ],
          buttonLabel: "Sign Up",
        },
        signInLink: {
          label: "Sign In",
          linkType: "linkInternal",
          _type: "conditionalLink",
          linkTarget: "_self",
        },
        formLinks: [
          {
            label: "Policy Privacy",
            linkType: "linkInternal",
            _type: "conditionalLink",
            linkTarget: "_self",
          },
          {
            label: "Terms of Use",
            linkType: "linkInternal",
            _type: "conditionalLink",
            linkTarget: "_self",
          },
        ],
      },
    },
  },
};

export const VariantB: Story = {
  ...Template,
  args: {
    data: {
      variant: "variant_b",
      variants: {
        logo: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=1200&q=75",
        },
        form: {
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
              placeholder: "Email Address",
              type: "inputEmail",
            },
            {
              name: "Password",
              placeholder: "Password",
              type: "inputPassword",
            },
            {
              name: "Confirm Password",
              placeholder: "Confirm Password",
              type: "inputPassword",
            },
          ],
          buttonLabel: "Sign Up",
        },
        signInLink: {
          label: "Sign In",
          linkType: "linkInternal",
          _type: "conditionalLink",
          linkTarget: "_self",
        },
        formLinks: [
          {
            label: "Policy Privacy",
            linkType: "linkInternal",
            _type: "conditionalLink",
            linkTarget: "_self",
          },
          {
            label: "Terms of Use",
            linkType: "linkInternal",
            _type: "conditionalLink",
            linkTarget: "_self",
          },
        ],
      },
    },
  },
};
