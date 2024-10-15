import type { Meta, StoryObj } from "@storybook/react";
import { Blog } from "@webriq-test/react";

const meta: Meta<typeof Blog> = {
  title: "Components/Blog",
  component: Blog,
  tags: ["autodocs"],
} satisfies Meta<typeof Blog>;

export default meta;

const Template: StoryObj<typeof Blog> = {
  render: args => <Blog {...args} />,
};

export const VariantA: StoryObj<typeof Blog> = {
  ...Template,
  args: {
    data: {
      variant: "variant_a",
      variants: {
        subtitle: "Blog Subtitle",
        title: "Blog Title",
        primaryButton: {
          label: "View More Articles",
          ariaLabel: "View more Articles",
        },
        posts: [
          {
            title: "Lorem ipsum dolor sit amet",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "aenean-convalli-sapone-a-degnissimo-placerat",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
          },
          {
            title: "Vestibulum vehicle leo eget libero eleifend 2",
            categories: [{ title: "CULTURE" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "vestibulum-vehicle-leo-eget-libero-eleifend",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
          },
          {
            title: "Aenean convalli sapone a degnissimo placerat.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "aenean-convalli-sapone-a-degnissimo-placerat",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
          },
          {
            title: "Vestibulum vehicle leo eget libero eleifend 2",
            categories: [{ title: "TRAVEL" }, { title: "CULTURE" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "vestibulum-vehicle-leo-eget-libero-eleifend",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
          },
          {
            title: "Aenean convalli sapone a degnissimo placerat.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "aenean-convalli-sapone-a-degnissimo-placerat",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
          },
          {
            title: "Lorem ipsum dolor sit amet",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "lorem-ipsum-dolor-sit-amet",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
          },
        ],
      },
    },
  },
};

export const VariantB: StoryObj<typeof Blog> = {
  ...Template,
  args: {
    data: {
      variant: "variant_b",
      variants: {
        subtitle: "Blog Subtitle",
        title: "Blog Title",
        primaryButton: {
          label: "View More Articles",
          ariaLabel: "View more Articles",
        },
        posts: [
          {
            title: "Lorem ipsum dolor sit amet",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "aenean-convalli-sapone-a-degnissimo-placerat",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
          },
          {
            title: "Vestibulum vehicle leo eget libero eleifend 2",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "CULTURE" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "vestibulum-vehicle-leo-eget-libero-eleifend",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
          },
          {
            title: "Aenean convalli sapone a degnissimo placerat.",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "aenean-convalli-sapone-a-degnissimo-placerat",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
          },
          {
            title: "Vestibulum vehicle leo eget libero eleifend 2",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }, { title: "CULTURE" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "vestibulum-vehicle-leo-eget-libero-eleifend",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
          },
          {
            title: "Aenean convalli sapone a degnissimo placerat.",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "aenean-convalli-sapone-a-degnissimo-placerat",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
          },
          {
            title: "Lorem ipsum dolor sit amet",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "lorem-ipsum-dolor-sit-amet",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
          },
        ],
      },
    },
  },
};

export const VariantC: StoryObj<typeof Blog> = {
  ...Template,
  args: {
    data: {
      variant: "variant_c",
      variants: {
        subtitle: "Blog Subtitle",
        title: "Blog Title",
        primaryButton: {
          label: "View More Articles",
          ariaLabel: "View more Articles",
        },
        posts: [
          {
            title: "Lorem ipsum dolor sit amet",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "aenean-convalli-sapone-a-degnissimo-placerat",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
          },
          {
            title: "Vestibulum vehicle leo eget libero eleifend 2",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "CULTURE" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "vestibulum-vehicle-leo-eget-libero-eleifend",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
          },
          {
            title: "Aenean convalli sapone a degnissimo placerat.",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "aenean-convalli-sapone-a-degnissimo-placerat",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
          },
          {
            title: "Vestibulum vehicle leo eget libero eleifend 2",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }, { title: "CULTURE" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "vestibulum-vehicle-leo-eget-libero-eleifend",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
          },
          {
            title: "Aenean convalli sapone a degnissimo placerat.",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "aenean-convalli-sapone-a-degnissimo-placerat",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
          },
          {
            title: "Lorem ipsum dolor sit amet",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "lorem-ipsum-dolor-sit-amet",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
          },
        ],
      },
    },
  },
};

export const VariantD: StoryObj<typeof Blog> = {
  ...Template,
  args: {
    data: {
      variant: "variant_d",
      variants: {
        subtitle: "Blog Subtitle",
        title: "Blog Title",
        blogsPerPage: 2,
        primaryButton: {
          label: "View More Articles",
          ariaLabel: "View more Articles",
        },
        posts: [
          {
            title: "Lorem ipsum dolor sit amet",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "aenean-convalli-sapone-a-degnissimo-placerat",
            authors: [{ name: "John Doe" }, { name: "Doe John" }],
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
          },
          {
            title: "Vestibulum vehicle leo eget libero eleifend 2",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "CULTURE" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "vestibulum-vehicle-leo-eget-libero-eleifend",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
          },
          {
            title: "Aenean convalli sapone a degnissimo placerat.",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "aenean-convalli-sapone-a-degnissimo-placerat",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
          },
          {
            title: "Vestibulum vehicle leo eget libero eleifend 2",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }, { title: "CULTURE" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "vestibulum-vehicle-leo-eget-libero-eleifend",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
          },
          {
            title: "Aenean convalli sapone a degnissimo placerat.",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "aenean-convalli-sapone-a-degnissimo-placerat",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
          },
          {
            title: "Lorem ipsum dolor sit amet",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "lorem-ipsum-dolor-sit-amet",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
          },
        ],
      },
    },
  },
};
