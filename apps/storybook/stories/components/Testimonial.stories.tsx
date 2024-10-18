import type { Meta, StoryObj } from "@storybook/react";
import { Testimonial } from "@stackshift-ui/react";

const meta: Meta<typeof Testimonial> = {
  title: "Components/Testimonials",
  component: Testimonial,
  tags: ["autodocs"],
} satisfies Meta<typeof Testimonial>;

export default meta;

const Template: StoryObj<typeof Testimonial> = {
  render: args => <Testimonial {...args} />,
};

export const VariantA: StoryObj<typeof Testimonial> = {
  ...Template,
  args: {
    data: {
      variant: "variant_a",
      variants: {
        testimonials: [
          {
            name: "Daisy Carter",
            jobTitle: "Product Development",
            testimony:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            rating: "5",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/a1794d2d559bc1f48556040a6251c5616b73571c-600x900.jpg?fm=webp&w=256&q=75",
          },
          {
            name: "Alice Bradley",
            jobTitle: "Backend Developer",
            testimony:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            rating: "4",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/954606f82d77732a8169672368006482bd3df41b-600x900.jpg?fm=webp&w=1920&q=75",
          },
          {
            name: "Ian Brown",
            jobTitle: "Head of Development",
            testimony:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            rating: "5",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/e9ca974577fc294a1d421a31dc5eefca6d31f645-1055x699.jpg?fm=webp&w=1080&q=75",
          },
          {
            name: "Dennis Robertson",
            jobTitle: "Frontend Developer",
            testimony:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            rating: "4",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/85c37ba1943759d8d17977197d97ff790fd4f880-600x400.jpg?fm=webp&w=1080&q=75",
          },
        ],
      },
    },
  },
};

export const VariantB: StoryObj<typeof Testimonial> = {
  ...Template,
  args: {
    data: {
      variant: "variant_b",
      variants: {
        subtitle: "Dolor sir amet consectutar",
        title: "What our clients think about us",
        testimonials: [
          {
            name: "Daisy Carter",
            jobTitle: "Product Development",
            testimony:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            rating: "5",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/a1794d2d559bc1f48556040a6251c5616b73571c-600x900.jpg?fm=webp&w=256&q=75",
          },
          {
            name: "Alice Bradley",
            jobTitle: "Backend Developer",
            testimony:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            rating: "4",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/954606f82d77732a8169672368006482bd3df41b-600x900.jpg?fm=webp&w=1920&q=75",
          },
          {
            name: "Ian Brown",
            jobTitle: "Head of Development",
            testimony:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            rating: "5",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/e9ca974577fc294a1d421a31dc5eefca6d31f645-1055x699.jpg?fm=webp&w=1080&q=75",
          },
          {
            name: "Dennis Robertson",
            jobTitle: "Frontend Developer",
            testimony:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            rating: "4",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/85c37ba1943759d8d17977197d97ff790fd4f880-600x400.jpg?fm=webp&w=1080&q=75",
          },
        ],
      },
    },
  },
};

export const VariantC: StoryObj<typeof Testimonial> = {
  ...Template,
  args: {
    data: {
      variant: "variant_c",
      variants: {
        subtitle: "Dolor sir amet consectutar",
        title: "What our clients think about us",
        testimonials: [
          {
            name: "Daisy Carter",
            jobTitle: "Product Development",
            testimony:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            rating: "5",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/a1794d2d559bc1f48556040a6251c5616b73571c-600x900.jpg?fm=webp&w=256&q=75",
          },
          {
            name: "Alice Bradley",
            jobTitle: "Backend Developer",
            testimony:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            rating: "4",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/954606f82d77732a8169672368006482bd3df41b-600x900.jpg?fm=webp&w=1920&q=75",
          },
          {
            name: "Ian Brown",
            jobTitle: "Head of Development",
            testimony:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            rating: "5",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/e9ca974577fc294a1d421a31dc5eefca6d31f645-1055x699.jpg?fm=webp&w=1080&q=75",
          },
          {
            name: "Dennis Robertson",
            jobTitle: "Frontend Developer",
            testimony:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            rating: "4",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/85c37ba1943759d8d17977197d97ff790fd4f880-600x400.jpg?fm=webp&w=1080&q=75",
          },
        ],
      },
    },
  },
};

export const VariantD: StoryObj<typeof Testimonial> = {
  ...Template,
  args: {
    data: {
      variant: "variant_d",
      variants: {
        subtitle: "Dolor sir amet consectutar",
        title: "What our clients think about us",
        testimonials: [
          {
            name: "Daisy Carter",
            jobTitle: "Product Development",
            testimony:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            rating: "5",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/a1794d2d559bc1f48556040a6251c5616b73571c-600x900.jpg?fm=webp&w=256&q=75",
          },
          {
            name: "Alice Bradley",
            jobTitle: "Backend Developer",
            testimony:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            rating: "4",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/954606f82d77732a8169672368006482bd3df41b-600x900.jpg?fm=webp&w=1920&q=75",
          },
          {
            name: "Ian Brown",
            jobTitle: "Head of Development",
            testimony:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            rating: "5",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/e9ca974577fc294a1d421a31dc5eefca6d31f645-1055x699.jpg?fm=webp&w=1080&q=75",
          },
          {
            name: "Dennis Robertson",
            jobTitle: "Frontend Developer",
            testimony:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            rating: "4",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/85c37ba1943759d8d17977197d97ff790fd4f880-600x400.jpg?fm=webp&w=1080&q=75",
          },
        ],
      },
    },
  },
};
