// @ts-nocheck - story demo file
import { Header } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

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
          externalLink: "https://www.webriq.com/",
          linkTarget: "_blank",
          type: "linkExternal",
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
            {
              name: "Confirm Password",
              placeholder: "Confirm Password",
              type: "inputPassword",
            },
          ],
        },
        formLinks: [{ label: "Policy Privacy" }, { label: "Terms of Use" }],
      },
    },
  },
};

export const VariantF: Story = {
  ...Template,
  args: {
    data: {
      variant: "variant_f",
      variants: {
        title: "Welcome to Our Platform",
        subtitle: "Discover Amazing Features",
        isOrdered: true,
        spacing: 0,
        startingPosition: "left",
        subtitlePosition: "top",
        isFullWidth: false,
        headerSections: [
          {
            _key: "box1",
            title: "Innovation",
            description:
              "Experience the power of cutting-edge technology with our innovative solutions.",
            mainImage: {
              image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
              alt: "Feature One Image",
            },
            alignment: "left",
            imageHeight: "md",
            primaryButton: {
              label: "Learn More",
              ariaLabel: "Click primary",
              link: {
                route: "/feature-one",
                target: "_self",
              },
            },
          },
          {
            _key: "box2",
            title: "Integration",
            description: "Seamlessly integrate with your existing systems and workflows.",
            mainImage: {
              image:
                "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
              alt: "Feature Two Image",
            },
            alignment: "left",
            imageHeight: "md",
            primaryButton: {
              label: "Get Started",
              link: {
                route: "/feature-two",
                target: "_self",
              },
            },
          },
        ],
      },
    },
  },
};

export const VariantG: Story = {
  ...Template,
  args: {
    data: {
      variant: "variant_g",
      variants: {
        mediaItems: [
          {
            _key: "1",
            video: "https://www.w3schools.com/html/mov_bbb.mp4",
          },
          {
            _key: "2",
            image:
              "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
          },
          {
            _key: "3",
            image:
              "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          },
          {
            _key: "4",
            video: "https://www.w3schools.com/html/mov_bbb.mp4",
          },
        ],
        title: "Introducing Our New Platform",
        description:
          "Experience the future of digital innovation with our cutting-edge solutions designed to transform your business.",
        primaryButton: {
          label: "Get Started",
          linkInternal: "/get-started",
        },
        secondaryButton: {
          label: "Learn More",
          linkInternal: "/learn-more",
        },
        position: "left",
      },
    },
  },
};
