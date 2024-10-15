import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "@webriq-test/react";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

const Template: StoryObj<typeof Header> = {
  render: args => <Header {...args} />,
};

export const VariantA: Story = {
  ...Template,
  args: {
    data: {
      variant: "variant_a",
      variants: {
        title: "Build & Launch with StackShift",
        description:
          "Redefine your digital journey with a platform that reshapes your monolithic code, broadcasts content across digital channels, and tailors itself to your unique business model.\n",
        primaryButton: {
          label: "Get Started",
          ariaLabel: "Click primary",
        },
        secondaryButton: {
          label: "How it works",
          ariaLabel: "Click secondary",
        },
        mainImage: {
          image: "Settings_Monochromatic-01.svg",
          alt: "sample logo",
        },
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
        title: "Build & Launch with StackShift",
        description:
          "Redefine your digital journey with a platform that reshapes your monolithic code, broadcasts content across digital channels, and tailors itself to your unique business model.\n",
        primaryButton: {
          label: "Get Started",
          ariaLabel: "Click primary",
        },
        secondaryButton: {
          label: "How it works",
          ariaLabel: "Click secondary",
        },
        images: [
          {
            image:
              "https://cdn.sanity.io/images/9itgab5x/staging/0b68b4267d6d520230fe4b107e622b99a6739678-941x734.jpg?fm=webp&w=1920&q=75",
          },
          {
            image:
              "https://cdn.sanity.io/images/9itgab5x/staging/6149e873e52c7b945a489b9bb65204e3905bed81-1050x701.jpg?fm=webp&w=1920&q=75",
          },
          {
            image:
              "https://cdn.sanity.io/images/9itgab5x/staging/85ba15e7e2930aa280c5d7e46dae17a018caf3a7-967x725.jpg?fm=webp&w=1920&q=75",
          },
          {
            image:
              "https://cdn.sanity.io/images/9itgab5x/staging/8ab26c1d233fa8ce762fe3ccb4c37df46139edac-1190x669.jpg?fm=webp&w=1920&q=75",
          },
        ],
      },
    },
  },
};

export const VariantC: Story = {
  ...Template,
  args: {
    data: {
      variant: "variant_c",
      variants: {
        title: "Build & Launch with StackShift",
        primaryButton: {
          label: "Get Started",
          ariaLabel: "Click primary",
        },
        secondaryButton: {
          label: "How it works",
          ariaLabel: "Click secondary",
        },
        youtubeLink: "https://www.youtube.com/watch?v=HfPdTL7Isx8",
      },
    },
  },
};

export const VariantD: Story = {
  ...Template,
  args: {
    data: {
      variant: "variant_d",
      variants: {
        title: "Build & Launch with StackShift",
        description:
          "Redefine your digital journey with a platform that reshapes your monolithic code, broadcasts content across digital channels, and tailors itself to your unique business model.\n",
        primaryButton: {
          label: "Get Started",
          ariaLabel: "Click primary",
        },
        secondaryButton: {
          label: "How it works",
          ariaLabel: "Click secondary",
        },
        mainImage: {
          image: "Settings_Monochromatic-01.svg",
          alt: "sample logo",
        },
        imageSrc: "Settings_Monochromatic-01.svg",
      },
    },
  },
};

export const VariantE: Story = {
  ...Template,
  args: {
    data: {
      variant: "variant_e",
      variants: {
        title: "Build & Launch with StackShift",
        description:
          "Redefine your digital journey with a platform that reshapes your monolithic code, broadcasts content across digital channels, and tailors itself to your unique business model.\n",
        primaryButton: {
          label: "Get Started",
          ariaLabel: "Click primary",
        },
        secondaryButton: {
          label: "How it works",
          ariaLabel: "Click secondary",
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
            {
              name: "Email",
              placeholder: "Enter your email address",
              type: "inputEmail",
            },
            {
              name: "Password",
              placeholder: "Enter your password",
              type: "inputPassword",
            },
          ],
        },
        formLinks: [{ label: "Policy Privacy" }, { label: "Terms of Use" }],
      },
    },
  },
};
