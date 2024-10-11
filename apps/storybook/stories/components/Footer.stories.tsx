import { Footer } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
  render: props => <Footer {...props} />,
  args: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo.",
    copyright: "© 2024 All rights reserved.",
    logo: {
      image:
        "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=1200&q=75",
    },
    imageSrc:
      "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=1200&q=75",
    contacts: [
      {
        addressInfo: "359 Hidden Valley Road, NY",
        emailInfo: "hello@webriq.com",
        contactInfo: "+48 698 033 101",
      },
    ],
    socialMedia: [
      {
        socialMedia: "facebook",
        socialMediaLink: "https://www.facebook.com",
      },
      {
        socialMedia: "twitter",
        socialMediaLink: "https://www.twitter.com",
      },
      {
        socialMedia: "instagram",
        socialMediaLink: "https://www.instagram.com",
      },
    ],
  },
};
