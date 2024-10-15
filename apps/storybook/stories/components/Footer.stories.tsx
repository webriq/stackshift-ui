import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "@webriq-test/react";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

const Template: StoryObj<typeof Footer> = {
  render: args => <Footer {...args} />,
};

export const VariantA: Story = {
  ...Template,
  args: {
    data: {
      variant: "variant_a",
      variants: {
        plainText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo.",
        copyright: "© 2024 All rights reserved.",
        logo: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=1200&q=75",
        },
        contactDetails: [
          {
            addressInfo: "359 Hidden Valley Road, NY",
            emailInfo: "hello@webriq.com",
            contactInfo: "+48 698 033 101",
          },
        ],
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
    },
  },
};

export const VariantB: Story = {
  ...Template,
  args: {
    data: {
      variant: "variant_b",
      variants: {
        plainText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo.",
        copyright: "© 2024 All rights reserved.",
        logo: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=1200&q=75",
        },
        menu: [
          { label: "Start" },
          { label: "About Us" },
          { label: "Services" },
          { label: "Platform" },
          { label: "Testimonials" },
        ],
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
    },
  },
};

export const VariantC: Story = {
  ...Template,
  args: {
    data: {
      variant: "variant_c",
      variants: {
        plainText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo.",
        copyright: "© 2024 All rights reserved.",
        logo: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=1200&q=75",
        },
        menu: [
          { label: "Start" },
          { label: "About Us" },
          { label: "Services" },
          { label: "Platform" },
          { label: "Testimonials" },
        ],
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
    },
  },
};

export const VariantD: Story = {
  ...Template,
  args: {
    data: {
      variant: "variant_d",
      variants: {
        plainText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo.",
        copyright: "© 2024 All rights reserved.",
        logo: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=1200&q=75",
        },
        multipleMenus: [
          {
            title: "Quick Links",
            links: [{ label: "Start" }, { label: "About Us" }, { label: "Services" }],
          },
          {
            title: "Helpful Links",
            links: [{ label: "Platform" }, { label: "Testimonials" }],
          },
          {
            title: "Explore",
            links: [
              { label: "Terms and Conditions" },
              { label: "Privacy Policy" },
              { label: "Cookies" },
            ],
          },
        ],
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
    },
  },
};
