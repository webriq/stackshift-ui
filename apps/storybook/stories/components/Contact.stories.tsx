import type { Meta, StoryObj } from "@storybook/react";
import { Contact } from "@stackshift-ui/react";

const meta: Meta<typeof Contact> = {
  title: "Components/Contact",
  component: Contact,
  tags: ["autodocs"],
} satisfies Meta<typeof Contact>;

export default meta;

const Template: StoryObj<typeof Contact> = {
  render: args => <Contact {...args} />,
};

export const VariantA: StoryObj<typeof Contact> = {
  ...Template,
  args: {
    data: {
      variant: "variant_a",
      variants: {
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
        ],
        form: {
          buttonLabel: "Get Started",
          fields: [
            {
              name: "Subject",
              placeholder: "Subject",
              type: "inputText",
            },
            {
              name: "Name",
              placeholder: "Name",
              type: "inputText",
            },
            {
              name: "name@example.com",
              placeholder: "name@example.com",
              type: "inputEmail",
            },
            {
              name: "Message...",
              placeholder: "Message...",
              type: "textarea",
            },
            {
              name: "Add file",
              type: "inputFile",
            },
          ],
        },
        block: [
          {
            _type: "block",
            style: "normal",
            markDefs: [],
            children: [
              {
                _type: "span",
                text: "I agree to terms and conditions.",
                marks: [],
              },
            ],
          },
        ],
      },
    },
  },
};

export const VariantB: StoryObj<typeof Contact> = {
  ...Template,
  args: {
    data: {
      variant: "variant_b",
      variants: {
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
        ],
      },
    },
  },
};
