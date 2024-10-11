import { SigninSignup } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof SigninSignup> = {
  title: "Components/Sign in Sign up",
  component: SigninSignup,
  tags: ["autodocs"],
} satisfies Meta<typeof SigninSignup>;

export default meta;
type Story = StoryObj<typeof SigninSignup>;

export const Primary: Story = {
  render: props => <SigninSignup {...props} />,
  args: {
    logo: {
      image:
        "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=1200&q=75",
    },
    imageSrc:
      "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=1200&q=75",
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
};
