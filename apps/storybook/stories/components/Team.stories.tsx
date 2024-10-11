import { Team } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Team> = {
  title: "Components/Team",
  component: Team,
  tags: ["autodocs"],
  args: {
    caption: "Dolor sit amet consectutar",
    title: "Check our awesome team members",
    team: [
      {
        name: "Danny Bailey",
        jobTitle: "CEO",
        mainImage: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/90edb5748fb96a13d347007ebba50382c1da1455-600x400.jpg?fm=webp&w=2048&q=75",
        },
      },
      {
        name: "Ian Brown",
        jobTitle: "Head of Development",
        mainImage: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/6d14774780f069127fb2bd9c8301ec2b771b31d7-600x400.jpg?fm=webp&w=2048&q=75",
        },
      },
      {
        name: "Daisy Carter",
        jobTitle: "Product Development",
        mainImage: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/a1794d2d559bc1f48556040a6251c5616b73571c-600x900.jpg?fm=webp&w=2048&q=75",
        },
      },
      {
        name: "Dennis Robertson",
        jobTitle: "Frontend Developer",
        mainImage: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/85c37ba1943759d8d17977197d97ff790fd4f880-600x400.jpg?fm=webp&w=2048&q=75",
        },
      },
      {
        name: "Alice Bradley",
        jobTitle: "Backend Developer",
        mainImage: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/954606f82d77732a8169672368006482bd3df41b-600x900.jpg?fm=webp&w=2048&q=75",
        },
      },
      {
        name: "Sahra Ortiz",
        jobTitle: "Product Designer",
        mainImage: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/96a832a986dc7fe3e58aeedd44362c8be0f3a681-600x900.jpg?fm=webp&w=2048&q=75",
        },
      },
    ],
  },
} satisfies Meta<typeof Team>;

export default meta;
type Story = StoryObj<typeof Team>;

export const Primary: Story = {
  render: props => <Team {...props} />,
};
