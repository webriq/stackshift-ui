import { Header } from "@webriq-test/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  render: props => <Header {...props} />,
  args: {
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
};
