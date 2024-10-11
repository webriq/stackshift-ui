import { Faqs } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Faqs> = {
  title: "Components/FAQs",
  component: Faqs,
  tags: ["autodocs"],
} satisfies Meta<typeof Faqs>;

export default meta;
type Story = StoryObj<typeof Faqs>;

export const Primary: Story = {
  render: props => <Faqs {...props} />,
  args: {
    subtitle: "Dolor sit amet consectutar",
    title: "Frequently Asked Questions",
    faqs: [
      {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: "Nullam euismod orci sed tristique placerat.",
      },
      {
        question: "Nunc maximus odio sit amet eros faucibus?",
        answer: "Vivamus quis ultricies est. Duis nec hendrerit magna.",
      },
      {
        question: "Nam feugiat ex eget sapien lobortis?",
        answer: "Ut vel orci gravida, hendrerit enim non, gravida turpis.",
      },
      {
        question: "In hac habitasse platea dictumst?",
        answer: "Praesent non lectus porttitor, scelerisque nulla nec, ornare neque.",
      },
    ],
  },
};
