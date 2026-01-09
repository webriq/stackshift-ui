// @ts-nocheck - story demo file
import { Blog } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

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
            authors: [{ name: "John Doe" }],
            title: "Lorem ipsum dolor sit amet",
            excerpt:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Integer euismod, nisi eu consectetur blandit, neque metus varius elit, nec ultrices nunc magna in justo. Sed vitae sapien non libero tincidunt ullamcorper. Maecenas vel suscipit justo, non interdum nibh.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "aenean-convalli-sapone-a-degnissimo-placerat",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
            alt: "Lorem ipsum dolor sit amet",
          },
          {
            authors: [{ name: "John Doe" }],
            title: "Vestibulum vehicle leo eget libero eleifend 2",
            excerpt:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Integer euismod, nisi eu consectetur blandit, neque metus varius elit, nec ultrices nunc magna in justo. Sed vitae sapien non libero tincidunt ullamcorper. Maecenas vel suscipit justo, non interdum nibh.",
            categories: [{ title: "CULTURE" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "vestibulum-vehicle-leo-eget-libero-eleifend",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
            alt: "Vestibulum vehicle leo eget libero eleifend 2",
          },
          {
            authors: [{ name: "John Doe" }],
            title: "Aenean convalli sapone a degnissimo placerat.",
            excerpt:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Integer euismod, nisi eu consectetur blandit, neque metus varius elit, nec ultrices nunc magna in justo. Sed vitae sapien non libero tincidunt ullamcorper. Maecenas vel suscipit justo, non interdum nibh.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "aenean-convalli-sapone-a-degnissimo-placerat",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
            alt: "Aenean convalli sapone a degnissimo placerat.",
          },
          {
            authors: [{ name: "John Doe" }],
            title: "Vestibulum vehicle leo eget libero eleifend 2",
            excerpt:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Integer euismod, nisi eu consectetur blandit, neque metus varius elit, nec ultrices nunc magna in justo. Sed vitae sapien non libero tincidunt ullamcorper. Maecenas vel suscipit justo, non interdum nibh.",

            categories: [{ title: "TRAVEL" }, { title: "CULTURE" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "vestibulum-vehicle-leo-eget-libero-eleifend",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
            alt: "Vestibulum vehicle leo eget libero eleifend 2",
          },
          {
            authors: [{ name: "John Doe" }],
            title: "Aenean convalli sapone a degnissimo placerat.",
            excerpt:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Integer euismod, nisi eu consectetur blandit, neque metus varius elit, nec ultrices nunc magna in justo. Sed vitae sapien non libero tincidunt ullamcorper. Maecenas vel suscipit justo, non interdum nibh.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "aenean-convalli-sapone-a-degnissimo-placerat",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
            alt: "Aenean convalli sapone a degnissimo placerat.",
          },
          {
            authors: [{ name: "John Doe" }],
            title: "Lorem ipsum dolor sit amet",
            excerpt:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet accumsan arcu. Integer euismod, nisi eu consectetur blandit, neque metus varius elit, nec ultrices nunc magna in justo. Sed vitae sapien non libero tincidunt ullamcorper. Maecenas vel suscipit justo, non interdum nibh.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "lorem-ipsum-dolor-sit-amet",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
            alt: "Lorem ipsum dolor sit amet",
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
            authors: [{ name: "John Doe" }],
            title: "Lorem ipsum dolor sit amet",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "aenean-convalli-sapone-a-degnissimo-placerat",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
            alt: "Lorem ipsum dolor sit amet",
          },
          {
            authors: [{ name: "John Doe" }],
            title: "Vestibulum vehicle leo eget libero eleifend 2",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "CULTURE" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "vestibulum-vehicle-leo-eget-libero-eleifend",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
            alt: "Vestibulum vehicle leo eget libero eleifend 2",
          },
          {
            authors: [{ name: "John Doe" }],
            title: "Aenean convalli sapone a degnissimo placerat.",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "aenean-convalli-sapone-a-degnissimo-placerat",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
            alt: "Aenean convalli sapone a degnissimo placerat.",
          },
          {
            authors: [{ name: "John Doe" }],
            title: "Vestibulum vehicle leo eget libero eleifend 2",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }, { title: "CULTURE" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "vestibulum-vehicle-leo-eget-libero-eleifend",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
            alt: "Vestibulum vehicle leo eget libero eleifend 2",
          },
          {
            authors: [{ name: "John Doe" }],
            title: "Aenean convalli sapone a degnissimo placerat.",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "aenean-convalli-sapone-a-degnissimo-placerat",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
            alt: "Aenean convalli sapone a degnissimo placerat.",
          },
          {
            authors: [{ name: "John Doe" }],
            title: "Lorem ipsum dolor sit amet",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "lorem-ipsum-dolor-sit-amet",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
            alt: "Lorem ipsum dolor sit amet",
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
            authors: [{ name: "John Doe" }],
            link: "aenean-convalli-sapone-a-degnissimo-placerat",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
            alt: "Lorem ipsum dolor sit amet",
          },
          {
            title: "Vestibulum vehicle leo eget libero eleifend 2",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "CULTURE" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            authors: [{ name: "John Doe" }],
            link: "vestibulum-vehicle-leo-eget-libero-eleifend",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
            alt: "Vestibulum vehicle leo eget libero eleifend 2",
          },
          {
            title: "Aenean convalli sapone a degnissimo placerat.",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            authors: [{ name: "John Doe" }],
            link: "aenean-convalli-sapone-a-degnissimo-placerat",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
            alt: "Aenean convalli sapone a degnissimo placerat.",
          },
          {
            title: "Vestibulum vehicle leo eget libero eleifend 2",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }, { title: "CULTURE" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            authors: [{ name: "John Doe" }],
            link: "vestibulum-vehicle-leo-eget-libero-eleifend",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
            alt: "Vestibulum vehicle leo eget libero eleifend 2",
          },
          {
            title: "Aenean convalli sapone a degnissimo placerat.",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }],
            authors: [{ name: "John Doe" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "aenean-convalli-sapone-a-degnissimo-placerat",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
            alt: "Aenean convalli sapone a degnissimo placerat.",
          },
          {
            title: "Lorem ipsum dolor sit amet",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }],
            authors: [{ name: "John Doe" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "lorem-ipsum-dolor-sit-amet",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
            alt: "Lorem ipsum dolor sit amet",
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
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg",
            alt: "Lorem ipsum dolor sit amet",
          },
          {
            title: "Vestibulum vehicle leo eget libero eleifend 2",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "CULTURE" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "vestibulum-vehicle-leo-eget-libero-eleifend",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/c4e86670adde5dac3b429e1e050799145b5bcdf1-512x512.png",
            alt: "Vestibulum vehicle leo eget libero eleifend 2",
          },
          {
            title: "Aenean convalli sapone a degnissimo placerat.",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "aenean-convalli-sapone-a-degnissimo-placerat",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/0dcfa20067460d48780f59c2c4a7a57e7c507969-1050x701.jpg",
            alt: "Aenean convalli sapone a degnissimo placerat.",
          },
          {
            title: "Vestibulum vehicle leo eget libero eleifend 2",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }, { title: "CULTURE" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "vestibulum-vehicle-leo-eget-libero-eleifend",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/c4e86670adde5dac3b429e1e050799145b5bcdf1-512x512.png",
            alt: "Vestibulum vehicle leo eget libero eleifend 2",
          },
          {
            title: "Aenean convalli sapone a degnissimo placerat.",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "aenean-convalli-sapone-a-degnissimo-placerat",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg",
            alt: "Aenean convalli sapone a degnissimo placerat.",
          },
          {
            title: "Lorem ipsum dolor sit amet",
            excerpt: "Writing sample excerpt to test Grammarly.",
            categories: [{ title: "TRAVEL" }],
            publishedAt: "2021-11-22T03:17:00.000Z",
            link: "lorem-ipsum-dolor-sit-amet",
            mainImage:
              "https://cdn.sanity.io/images/9itgab5x/staging/0dcfa20067460d48780f59c2c4a7a57e7c507969-1050x701.jpg",
            alt: "Lorem ipsum dolor sit amet",
          },
        ],
      },
    },
  },
};
