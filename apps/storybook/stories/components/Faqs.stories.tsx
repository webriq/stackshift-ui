import type { Meta, StoryObj } from "@storybook/react";
import { Faqs } from "@webriq-test/react";

const meta: Meta<typeof Faqs> = {
  title: "Components/FAQs",
  component: Faqs,
  tags: ["autodocs"],
} satisfies Meta<typeof Faqs>;

export default meta;

const Template: StoryObj<typeof Faqs> = {
  render: args => <Faqs {...args} />,
};

export const VariantA: StoryObj<typeof Faqs> = {
  ...Template,
  args: {
    data: {
      variant: "variant_a",
      variants: {
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
    },
  },
};

export const VariantB: StoryObj<typeof Faqs> = {
  ...Template,
  args: {
    data: {
      variant: "variant_b",
      variants: {
        subtitle: "Dolor sit amet consectutar",
        title: "Frequently Asked Questions",
        faqsWithCategories: [
          {
            category: "General",
            askedQuestions: [
              {
                question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
                answer: "Nullam euismod orci sed tristique placerat.",
              },
              {
                question: "Nunc maximus odio sit amet eros faucibus?",
                answer: "Vivamus quis ultricies est. Duis nec hendrerit magna.",
              },
            ],
          },
          {
            category: "Payments",
            askedQuestions: [
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
          {
            category: "Returns",
            askedQuestions: [
              {
                question: "Nam feugiat ex eget sapien lobortis?",
                answer: "Ut vel orci gravida, hendrerit enim non, gravida turpis.",
              },
            ],
          },
          {
            category: "Refunds",
            askedQuestions: [
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
        ],
      },
    },
  },
};

export const VariantC: StoryObj<typeof Faqs> = {
  ...Template,
  args: {
    data: {
      variant: "variant_c",
      variants: {
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
    },
  },
};
