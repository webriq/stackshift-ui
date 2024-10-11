import { Blog } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Blog> = {
  title: "Components/Blog",
  component: Blog,
  tags: ["autodocs"],
} satisfies Meta<typeof Blog>;

export default meta;
type Story = StoryObj<typeof Blog>;

export const Primary: Story = {
  render: props => <Blog {...props} />,
  args: {
    subtitle: "Blog Subtitle",
    title: "Blog Title",
    primaryButton: {
      label: "View More Articles",
      ariaLabel: "View More Articles",
    },
    posts: [
      {
        title: "Lorem ipsum dolor sit amet",
        categories: [{ title: "TRAVEL" }],
        publishedAt: "2021-11-22T03:17:00.000Z",
        slug: { current: "aenean-convalli-sapone-a-degnissimo-placerat" },
        mainImage:
          "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
      },
      {
        title: "Vestibulum vehicle leo eget libero eleifend 2",
        categories: [{ title: "CULTURE" }],
        publishedAt: "2021-11-22T03:17:00.000Z",
        slug: { current: "vestibulum-vehicle-leo-eget-libero-eleifend" },
        mainImage:
          "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
      },
      {
        title: "Aenean convalli sapone a degnissimo placerat.",
        categories: [{ title: "TRAVEL" }],
        publishedAt: "2021-11-22T03:17:00.000Z",
        slug: { current: "aenean-convalli-sapone-a-degnissimo-placerat" },
        mainImage:
          "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
      },
      {
        title: "Vestibulum vehicle leo eget libero eleifend 2",
        categories: [{ title: "TRAVEL" }, { title: "CULTURE" }],
        publishedAt: "2021-11-22T03:17:00.000Z",
        slug: { current: "vestibulum-vehicle-leo-eget-libero-eleifend" },
        mainImage:
          "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
      },
      {
        title: "Aenean convalli sapone a degnissimo placerat.",
        categories: [{ title: "TRAVEL" }],
        publishedAt: "2021-11-22T03:17:00.000Z",
        slug: { current: "aenean-convalli-sapone-a-degnissimo-placerat" },
        mainImage:
          "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
      },
      {
        title: "Lorem ipsum dolor sit amet",
        categories: [{ title: "TRAVEL" }],
        publishedAt: "2021-11-22T03:17:00.000Z",
        slug: { current: "lorem-ipsum-dolor-sit-amet" },
        mainImage:
          "https://cdn.sanity.io/images/9itgab5x/staging/fc4752283bb0c4bf2d6f2b71411407315298952d-968x726.jpg?fm=webp&w=1200&q=75",
      },
    ],
  },
};
