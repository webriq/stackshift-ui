import { Portfolio } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Portfolio> = {
  title: "Components/Portfolio",
  component: Portfolio,
  tags: ["autodocs"],
} satisfies Meta<typeof Portfolio>;

export default meta;
type Story = StoryObj<typeof Portfolio>;

const Template: StoryObj<typeof Portfolio> = {
  render: args => <Portfolio {...args} />,
};

export const VariantA: Story = {
  ...Template,
  args: {
    data: {
      variant: "variant_a",
      variants: {
        subtitle: "Portfolio A",
        title: "Latest Projects",
        length: 8,
        primaryButton: {
          label: "View More Projects",
          linkType: "linkInternal",
          linkTarget: "_self",
        },
        portfoliosWithCategories: [
          {
            category: "Category 1",
            content: [
              {
                subtitle: "Category 1",
                dateAdded: "2024-09-25",
                title: "Project 1",
                description: "This is Project 1 of Category 1",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/2d9f87020c05fba5986084e4744c829844bf21b6-1050x700.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 1",
                dateAdded: "2024-09-25",
                title: "Project 2",
                description: "This is Project 2 of Category 1",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/ab32985078ea0077e2f1a75f6ecde8e2a539e5e6-1127x682.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 1",
                dateAdded: "2024-09-25",
                title: "Project 3",
                description: "This is Project 3 of Category 1",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/1393546851fbb9c4ce9909a3b4dfb016791c00f0-1055x699.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 1",
                dateAdded: "2024-09-25",
                title: "Project 4",
                description: "This is Project 4 of Category 1",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/703e0f4c6da39d81546fbef1f3aee2fba687e889-1052x700.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 1",
                dateAdded: "2024-09-25",
                title: "Project 5",
                description: "This is Project 5 of Category 1",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/0dcfa20067460d48780f59c2c4a7a57e7c507969-1050x701.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 1",
                dateAdded: "2024-09-25",
                title: "Project 6",
                description: "This is Project 6 of Category 1",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/d5380f02298dee12cb0e5f63042d0b64513c207b-968x726.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 1",
                dateAdded: "2024-09-25",
                title: "Project 7",
                description: "This is Project 7 of Category 1",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/ddb8237089228236f006ee702461b02b9c023508-1055x699.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 1",
                dateAdded: "2024-09-25",
                title: "Project 8",
                description: "This is Project 8 of Category 1",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/e4bc2e14b835c6b0a6778923916f2d34d9cfd33f-968x726.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
            ],
          },
          {
            category: "Category 2",
            content: [
              {
                subtitle: "Category 2",
                dateAdded: "2024-09-25",
                title: "Project 1",
                description: "This is Project 1 of Category 2",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/2d9f87020c05fba5986084e4744c829844bf21b6-1050x700.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 2",
                dateAdded: "2024-09-25",
                title: "Project 2",
                description: "This is Project 2 of Category 2",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/ab32985078ea0077e2f1a75f6ecde8e2a539e5e6-1127x682.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 2",
                dateAdded: "2024-09-25",
                title: "Project 3",
                description: "This is Project 3 of Category 2",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/1393546851fbb9c4ce9909a3b4dfb016791c00f0-1055x699.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 2",
                dateAdded: "2024-09-25",
                title: "Project 4",
                description: "This is Project 4 of Category 2",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/703e0f4c6da39d81546fbef1f3aee2fba687e889-1052x700.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 2",
                dateAdded: "2024-09-25",
                title: "Project 5",
                description: "This is Project 5 of Category 2",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/0dcfa20067460d48780f59c2c4a7a57e7c507969-1050x701.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 2",
                dateAdded: "2024-09-25",
                title: "Project 6",
                description: "This is Project 6 of Category 2",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/d5380f02298dee12cb0e5f63042d0b64513c207b-968x726.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 2",
                dateAdded: "2024-09-25",
                title: "Project 7",
                description: "This is Project 7 of Category 2",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/ddb8237089228236f006ee702461b02b9c023508-1055x699.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 1",
                dateAdded: "2024-09-25",
                title: "Project 8",
                description: "This is Project 8 of Category 1",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/e4bc2e14b835c6b0a6778923916f2d34d9cfd33f-968x726.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
            ],
          },
          {
            category: "Category 3",
            content: [
              {
                subtitle: "Category 3",
                dateAdded: "2024-09-25",
                title: "Project 1",
                description: "This is Project 1 of Category 3",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/2d9f87020c05fba5986084e4744c829844bf21b6-1050x700.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 3",
                dateAdded: "2024-09-25",
                title: "Project 2",
                description: "This is Project 2 of Category 3",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/ab32985078ea0077e2f1a75f6ecde8e2a539e5e6-1127x682.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 3",
                dateAdded: "2024-09-25",
                title: "Project 3",
                description: "This is Project 3 of Category 3",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/1393546851fbb9c4ce9909a3b4dfb016791c00f0-1055x699.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 3",
                dateAdded: "2024-09-25",
                title: "Project 4",
                description: "This is Project 4 of Category 3",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/703e0f4c6da39d81546fbef1f3aee2fba687e889-1052x700.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 3",
                dateAdded: "2024-09-25",
                title: "Project 5",
                description: "This is Project 5 of Category 3",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/0dcfa20067460d48780f59c2c4a7a57e7c507969-1050x701.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 3",
                dateAdded: "2024-09-25",
                title: "Project 6",
                description: "This is Project 6 of Category 3",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/d5380f02298dee12cb0e5f63042d0b64513c207b-968x726.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 3",
                dateAdded: "2024-09-25",
                title: "Project 7",
                description: "This is Project 7 of Category 3",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/ddb8237089228236f006ee702461b02b9c023508-1055x699.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 3",
                dateAdded: "2024-09-25",
                title: "Project 8",
                description: "This is Project 8 of Category 3",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/e4bc2e14b835c6b0a6778923916f2d34d9cfd33f-968x726.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
            ],
          },
          {
            category: "Category 4",
            content: [
              {
                subtitle: "Category 4",
                dateAdded: "2024-09-25",
                title: "Project 1",
                description: "This is Project 1 of Category 4",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/2d9f87020c05fba5986084e4744c829844bf21b6-1050x700.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 4",
                dateAdded: "2024-09-25",
                title: "Project 2",
                description: "This is Project 2 of Category 4",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/ab32985078ea0077e2f1a75f6ecde8e2a539e5e6-1127x682.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 4",
                dateAdded: "2024-09-25",
                title: "Project 3",
                description: "This is Project 3 of Category 4",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/1393546851fbb9c4ce9909a3b4dfb016791c00f0-1055x699.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 4",
                dateAdded: "2024-09-25",
                title: "Project 4",
                description: "This is Project 4 of Category 4",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/703e0f4c6da39d81546fbef1f3aee2fba687e889-1052x700.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 4",
                dateAdded: "2024-09-25",
                title: "Project 5",
                description: "This is Project 5 of Category 4",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/0dcfa20067460d48780f59c2c4a7a57e7c507969-1050x701.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 4",
                dateAdded: "2024-09-25",
                title: "Project 6",
                description: "This is Project 6 of Category 4",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/d5380f02298dee12cb0e5f63042d0b64513c207b-968x726.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 4",
                dateAdded: "2024-09-25",
                title: "Project 7",
                description: "This is Project 7 of Category 4",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/ddb8237089228236f006ee702461b02b9c023508-1055x699.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 4",
                dateAdded: "2024-09-25",
                title: "Project 8",
                description: "This is Project 8 of Category 4",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/e4bc2e14b835c6b0a6778923916f2d34d9cfd33f-968x726.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
            ],
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
        subtitle: "Portfolio B",
        title: "Latest Projects",
        length: 6,
        primaryButton: {
          label: "View More Projects",
          linkType: "linkInternal",
          linkTarget: "_self",
        },
        portfolios: [
          {
            dateAdded: "2024-09-25",
            title: "Project 1",
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/production/e4bc2e14b835c6b0a6778923916f2d34d9cfd33f-968x726.jpg",
              alt: "Project 1",
            },
            primaryButton: {
              label: "View Project",
              linkType: "linkInternal",
              linkTarget: "_self",
            },
          },
          {
            dateAdded: "2024-09-25",
            title: "Project 2",
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/production/ddb8237089228236f006ee702461b02b9c023508-1055x699.jpg",
              alt: "Project 2",
            },
            primaryButton: {
              label: "View Project",
              linkType: "linkInternal",
              linkTarget: "_self",
            },
          },
          {
            dateAdded: "2024-09-25",
            title: "Project 3",
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/production/d5380f02298dee12cb0e5f63042d0b64513c207b-968x726.jpg",
              alt: "Project 3",
            },
            primaryButton: {
              label: "View Project",
              linkType: "linkInternal",
              linkTarget: "_self",
            },
          },
          {
            dateAdded: "2024-09-25",
            title: "Project 4",
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/production/0dcfa20067460d48780f59c2c4a7a57e7c507969-1050x701.jpg",
              alt: "Project 4",
            },
            primaryButton: {
              label: "View Project",
              linkType: "linkInternal",
              linkTarget: "_self",
            },
          },
          {
            dateAdded: "2024-09-25",
            title: "Project 5",
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/production/703e0f4c6da39d81546fbef1f3aee2fba687e889-1052x700.jpg",
              alt: "Project 5",
            },
            primaryButton: {
              label: "View Project",
              linkType: "linkInternal",
              linkTarget: "_self",
            },
          },
          {
            dateAdded: "2024-09-25",
            title: "Project 6",
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/production/1393546851fbb9c4ce9909a3b4dfb016791c00f0-1055x699.jpg",
              alt: "Project 6",
            },
            primaryButton: {
              label: "View Project",
              linkType: "linkInternal",
              linkTarget: "_self",
            },
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
        subtitle: "Portfolio C",
        title: "Latest Projects",
        length: 6,
        primaryButton: {
          label: "View More Projects",
          linkType: "linkInternal",
          linkTarget: "_self",
        },
        portfolios: [
          {
            dateAdded: "2024-09-25",
            title: "Project 1",
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/production/e4bc2e14b835c6b0a6778923916f2d34d9cfd33f-968x726.jpg",
              alt: "Project 1",
            },
            primaryButton: {
              label: "View Project",
              linkType: "linkInternal",
              linkTarget: "_self",
            },
          },
          {
            dateAdded: "2024-09-25",
            title: "Project 2",
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/production/ddb8237089228236f006ee702461b02b9c023508-1055x699.jpg",
              alt: "Project 2",
            },
            primaryButton: {
              label: "View Project",
              linkType: "linkInternal",
              linkTarget: "_self",
            },
          },
          {
            dateAdded: "2024-09-25",
            title: "Project 3",
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/production/d5380f02298dee12cb0e5f63042d0b64513c207b-968x726.jpg",
              alt: "Project 3",
            },
            primaryButton: {
              label: "View Project",
              linkType: "linkInternal",
              linkTarget: "_self",
            },
          },
          {
            dateAdded: "2024-09-25",
            title: "Project 4",
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/production/0dcfa20067460d48780f59c2c4a7a57e7c507969-1050x701.jpg",
              alt: "Project 4",
            },
            primaryButton: {
              label: "View Project",
              linkType: "linkInternal",
              linkTarget: "_self",
            },
          },
          {
            dateAdded: "2024-09-25",
            title: "Project 5",
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/production/703e0f4c6da39d81546fbef1f3aee2fba687e889-1052x700.jpg",
              alt: "Project 5",
            },
            primaryButton: {
              label: "View Project",
              linkType: "linkInternal",
              linkTarget: "_self",
            },
          },
          {
            dateAdded: "2024-09-25",
            title: "Project 6",
            mainImage: {
              image:
                "https://cdn.sanity.io/images/9itgab5x/production/1393546851fbb9c4ce9909a3b4dfb016791c00f0-1055x699.jpg",
              alt: "Project 6",
            },
            primaryButton: {
              label: "View Project",
              linkType: "linkInternal",
              linkTarget: "_self",
            },
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
        subtitle: "Portfolio D",
        title: "Latest Projects",
        length: 6,
        primaryButton: {
          label: "View More Projects",
          linkType: "linkInternal",
          linkTarget: "_self",
        },
        portfoliosWithCategories: [
          {
            category: "Category 1",
            content: [
              {
                subtitle: "Category 1",
                dateAdded: "2024-09-25",
                title: "Project 1",
                description:
                  "This is Project 1 of Category 1, This is Project 1 of Category 1,This is Project 1 of Category 1,This is Project 1 of Category 1,This is Project 1 of Category 1,This is Project 1 of Category 1,This is Project 1 of Category 1,This is Project 1 of Category 1",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/2d9f87020c05fba5986084e4744c829844bf21b6-1050x700.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 1",
                dateAdded: "2024-09-25",
                title: "Project 2",
                description: "This is Project 2 of Category 1",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/ab32985078ea0077e2f1a75f6ecde8e2a539e5e6-1127x682.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 1",
                dateAdded: "2024-09-25",
                title: "Project 3",
                description:
                  "This is Project 3 of Category 1,This is Project 1 of Category 1,This is Project 1 of Category 1,This is Project 1 of Category 1,This is Project 1 of Category 1,This is Project 1 of Category 1,This is Project 1 of Category 1",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/1393546851fbb9c4ce9909a3b4dfb016791c00f0-1055x699.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 1",
                dateAdded: "2024-09-25",
                title: "Project 4",
                description:
                  "This is Project 4 of Category 1,This is Project 1 of Category 1,This is Project 1 of Category 1,This is Project 1 of Category 1,This is Project 1 of Category 1This is Project 1 of Category 1",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/703e0f4c6da39d81546fbef1f3aee2fba687e889-1052x700.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 1",
                dateAdded: "2024-09-25",
                title: "Project 5",
                description:
                  "This is Project 5 of Category 1This is Project 1 of Category 1This is Project 1 of Category 1This is Project 1 of Category 1This is Project 1 of Category 1This is Project 1 of Category 1This is Project 1 of Category 1This is Project 1 of Category 1",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/0dcfa20067460d48780f59c2c4a7a57e7c507969-1050x701.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 1",
                dateAdded: "2024-09-25",
                title: "Project 6",
                description:
                  "This is Project 6 of Category 1This is Project 1 of Category 1This is Project 1 of Category 1This is Project 1 of Category 1This is Project 1 of Category 1This is Project 1 of Category 1This is Project 1 of Category 1This is Project 1 of Category 1",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/d5380f02298dee12cb0e5f63042d0b64513c207b-968x726.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 1",
                dateAdded: "2024-09-25",
                title: "Project 7",
                description:
                  "This is Project 7 of Category 1This is Project 1 of Category 1This is Project 1 of Category 1This is Project 1 of Category 1This is Project 1 of Category 1This is Project 1 of Category 1This is Project 1 of Category 1This is Project 1 of Category 1This is Project 1 of Category 1",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/ddb8237089228236f006ee702461b02b9c023508-1055x699.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 1",
                dateAdded: "2024-09-25",
                title: "Project 8",
                description:
                  "This is Project 8 of Category 1This is Project 1 of Category 1This is Project 1 of Category 1This is Project 1 of Category 1This is Project 1 of Category 1This is Project 1 of Category 1This is Project 1 of Category 1",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/e4bc2e14b835c6b0a6778923916f2d34d9cfd33f-968x726.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
            ],
          },
          {
            category: "Category 2",
            content: [
              {
                subtitle: "Category 2",
                dateAdded: "2024-09-25",
                title: "Project 1",
                description: "This is Project 1 of Category 2",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/2d9f87020c05fba5986084e4744c829844bf21b6-1050x700.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 2",
                dateAdded: "2024-09-25",
                title: "Project 2",
                description: "This is Project 2 of Category 2",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/ab32985078ea0077e2f1a75f6ecde8e2a539e5e6-1127x682.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 2",
                dateAdded: "2024-09-25",
                title: "Project 3",
                description: "This is Project 3 of Category 2",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/1393546851fbb9c4ce9909a3b4dfb016791c00f0-1055x699.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 2",
                dateAdded: "2024-09-25",
                title: "Project 4",
                description: "This is Project 4 of Category 2",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/703e0f4c6da39d81546fbef1f3aee2fba687e889-1052x700.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 2",
                dateAdded: "2024-09-25",
                title: "Project 5",
                description: "This is Project 5 of Category 2",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/0dcfa20067460d48780f59c2c4a7a57e7c507969-1050x701.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 2",
                dateAdded: "2024-09-25",
                title: "Project 6",
                description: "This is Project 6 of Category 2",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/d5380f02298dee12cb0e5f63042d0b64513c207b-968x726.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 2",
                dateAdded: "2024-09-25",
                title: "Project 7",
                description: "This is Project 7 of Category 2",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/ddb8237089228236f006ee702461b02b9c023508-1055x699.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 1",
                dateAdded: "2024-09-25",
                title: "Project 8",
                description: "This is Project 8 of Category 1",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/e4bc2e14b835c6b0a6778923916f2d34d9cfd33f-968x726.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
            ],
          },
          {
            category: "Category 3",
            content: [
              {
                subtitle: "Category 3",
                dateAdded: "2024-09-25",
                title: "Project 1",
                description: "This is Project 1 of Category 3",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/2d9f87020c05fba5986084e4744c829844bf21b6-1050x700.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 3",
                dateAdded: "2024-09-25",
                title: "Project 2",
                description: "This is Project 2 of Category 3",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/ab32985078ea0077e2f1a75f6ecde8e2a539e5e6-1127x682.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 3",
                dateAdded: "2024-09-25",
                title: "Project 3",
                description: "This is Project 3 of Category 3",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/1393546851fbb9c4ce9909a3b4dfb016791c00f0-1055x699.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 3",
                dateAdded: "2024-09-25",
                title: "Project 4",
                description: "This is Project 4 of Category 3",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/703e0f4c6da39d81546fbef1f3aee2fba687e889-1052x700.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 3",
                dateAdded: "2024-09-25",
                title: "Project 5",
                description: "This is Project 5 of Category 3",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/0dcfa20067460d48780f59c2c4a7a57e7c507969-1050x701.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 3",
                dateAdded: "2024-09-25",
                title: "Project 6",
                description: "This is Project 6 of Category 3",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/d5380f02298dee12cb0e5f63042d0b64513c207b-968x726.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 3",
                dateAdded: "2024-09-25",
                title: "Project 7",
                description: "This is Project 7 of Category 3",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/ddb8237089228236f006ee702461b02b9c023508-1055x699.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 3",
                dateAdded: "2024-09-25",
                title: "Project 8",
                description: "This is Project 8 of Category 3",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/e4bc2e14b835c6b0a6778923916f2d34d9cfd33f-968x726.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
            ],
          },
          {
            category: "Category 4",
            content: [
              {
                subtitle: "Category 4",
                dateAdded: "2024-09-25",
                title: "Project 1",
                description: "This is Project 1 of Category 4",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/2d9f87020c05fba5986084e4744c829844bf21b6-1050x700.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 4",
                dateAdded: "2024-09-25",
                title: "Project 2",
                description: "This is Project 2 of Category 4",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/ab32985078ea0077e2f1a75f6ecde8e2a539e5e6-1127x682.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 4",
                dateAdded: "2024-09-25",
                title: "Project 3",
                description: "This is Project 3 of Category 4",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/1393546851fbb9c4ce9909a3b4dfb016791c00f0-1055x699.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 4",
                dateAdded: "2024-09-25",
                title: "Project 4",
                description: "This is Project 4 of Category 4",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/703e0f4c6da39d81546fbef1f3aee2fba687e889-1052x700.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 4",
                dateAdded: "2024-09-25",
                title: "Project 5",
                description: "This is Project 5 of Category 4",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/0dcfa20067460d48780f59c2c4a7a57e7c507969-1050x701.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 4",
                dateAdded: "2024-09-25",
                title: "Project 6",
                description: "This is Project 6 of Category 4",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/d5380f02298dee12cb0e5f63042d0b64513c207b-968x726.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 4",
                dateAdded: "2024-09-25",
                title: "Project 7",
                description: "This is Project 7 of Category 4",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/ddb8237089228236f006ee702461b02b9c023508-1055x699.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
              {
                subtitle: "Category 4",
                dateAdded: "2024-09-25",
                title: "Project 8",
                description: "This is Project 8 of Category 4",
                mainImage: {
                  image:
                    "https://cdn.sanity.io/images/9itgab5x/production/e4bc2e14b835c6b0a6778923916f2d34d9cfd33f-968x726.jpg",
                },
                primaryButton: {
                  label: "View Project",
                  linkType: "linkInternal",
                  linkTarget: "_self",
                },
              },
            ],
          },
        ],
      },
    },
  },
};
