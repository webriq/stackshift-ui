import type { Meta, StoryObj } from "@storybook/react";
import { HowItWorks } from "@webriq-test/react";

const meta: Meta<typeof HowItWorks> = {
  title: "Components/How It Works",
  component: HowItWorks,
  tags: ["autodocs"],
} satisfies Meta<typeof HowItWorks>;

export default meta;
type Story = StoryObj<typeof HowItWorks>;

const Template: StoryObj<typeof HowItWorks> = {
  render: args => <HowItWorks {...args} />,
};

export const VariantA: Story = {
  ...Template,
  args: {
    data: {
      variant: "variant_a",
      variants: {
        subtitle: "Dolor sit amet consectutar",
        title: "Build & Launch without problems",
        plainText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
        youtubeLink: "https://www.youtube.com/watch?v=HfPdTL7Isx8",
        arrayOfTitleAndText: [
          {
            title: "Lorem ipsum dolor sit amet consectutar",
            plainText:
              "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
          },
          {
            title: "Lorem ipsum dolor sit amet consectutar",
            plainText:
              "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
          },
          {
            title: "Lorem ipsum dolor sit amet consectutar",
            plainText:
              "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
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
        subtitle: "Dolor sit amet consectutar",
        title: "Build & Launch without problems",
        plainText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.",
        arrayOfTitleAndText: [
          {
            title: "Lorem ipsum dolor sit amet consectutar",
            plainText:
              "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
          },
          {
            title: "Lorem ipsum dolor sit amet consectutar",
            plainText:
              "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
          },
          {
            title: "Lorem ipsum dolor sit amet consectutar",
            plainText:
              "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
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
        subtitle: "Dolor sit amet consectutar",
        title: "Build & Launch without problems",
        arrayOfTitleAndText: [
          {
            title: "Lorem ipsum dolor sit amet consectutar",
            plainText:
              "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
          },
          {
            title: "Lorem ipsum dolor sit amet consectutar",
            plainText:
              "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
          },
          {
            title: "Lorem ipsum dolor sit amet consectutar",
            plainText:
              "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
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
        subtitle: "Dolor sit amet consectutar",
        title: "Build & Launch without problems",
        arrayOfTitleAndText: [
          {
            title: "Lorem ipsum dolor sit amet consectutar",
            plainText:
              "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
          },
          {
            title: "Lorem ipsum dolor sit amet consectutar",
            plainText:
              "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
          },
          {
            title: "Lorem ipsum dolor sit amet consectutar",
            plainText:
              "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
          },
        ],
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
        subtitle: "Dolor sit amet consectutar",
        title: "Build & Launch without problems",
        arrayOfTitleAndText: [
          {
            title: "Lorem ipsum dolor sit amet consectutar",
            plainText:
              "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
          },
          {
            title: "Lorem ipsum dolor sit amet consectutar",
            plainText:
              "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
          },
          {
            title: "Lorem ipsum dolor sit amet consectutar",
            plainText:
              "Fusce quam tellus, placerat eu metus ut, viverra aliquet purus. Suspendisse potenti. Nulla non nibh feugiat.",
          },
        ],
      },
    },
  },
};
