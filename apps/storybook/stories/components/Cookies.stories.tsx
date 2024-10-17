import type { Meta, StoryObj } from "@storybook/react";
import { Cookies } from "@webriq-test/react";

const meta: Meta<typeof Cookies> = {
  title: "Components/Cookies",
  component: Cookies,
  tags: ["autodocs"],
} satisfies Meta<typeof Cookies>;

export default meta;

const Template: StoryObj<typeof Cookies> = {
  render: args => <Cookies {...args} />,
};

export const VariantA: StoryObj<typeof Cookies> = {
  ...Template,
  args: {
    data: {
      variant: "variant_a",
      variants: {
        title: "Cookie Policy",
        description:
          "Cookies help us deliver our services. By using our services, you agree to our use of cookies.",
        acceptButtonLabel: "Allow",
        declineButtonLabel: "Decline",
        config: {
          enableAnalytics: true,
          cookiePolicy: {
            siteName: "My Website",
            cookiePolicyPage: {
              linkTarget: "_blank",
              label: "Cookie Policy Page",
            },
          },
          consentModalPosition: "bottom left",
        },
        contactLink: {
          label: "Contact Us",
          linkTarget: "_self",
        },
      },
    },
  },
};
