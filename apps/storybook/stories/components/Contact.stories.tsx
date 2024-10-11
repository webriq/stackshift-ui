import { Contact } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Contact> = {
  title: "Components/Contact",
  component: Contact,
  tags: ["autodocs"],
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof Contact>;

export const Primary: Story = {
  render: props => <Contact {...props} />,
  args: {
    title: "Contact",
    contactDescription: "Got any question? Let's talk about it.",
    officeInformation: "359 Hidden Valley Road, NY",
    contactEmail: "hello@webriq.com",
    contactNumber: "+48 698 033 101",
    socialLinks: [
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
