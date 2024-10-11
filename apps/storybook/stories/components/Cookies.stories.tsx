import { Cookies } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof Cookies> = {
  title: "Components/Cookies",
  component: Cookies,
  tags: ["autodocs"],
} satisfies Meta<typeof Cookies>;

export default meta;
type Story = StoryObj<typeof Cookies>;

export const Primary: Story = {
  render: args => <Cookies {...args} />,
  args: {
    title: "Cookie Policy",
    description:
      "Cookies help us deliver our services. By using our services, you agree to our use of cookies.",
    allowCookieBtn: "Allow",
    denyCookieBtn: "Decline",
    config: {
      enableAnalytics: true,
      cookiePolicy: {
        siteName: "My Website",
        cookiePolicyPage: {
          linkTarget: "_blank",
          label: "Cookie Policy Page",
        },
        consentModal: {
          position: "bottom left",
        },
      },
    },
    contactLink: {
      label: "Contact Us",
      linkTarget: "_self",
    },
  },
};
