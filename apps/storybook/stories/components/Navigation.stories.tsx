import { Navigation } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Navigation> = {
  title: "Components/Navigation",
  component: Navigation,
  tags: ["autodocs"],
} satisfies Meta<typeof Navigation>;

export default meta;

const Template: StoryObj<typeof Navigation> = {
  render: args => <Navigation {...args} />,
};

export const VariantA: StoryObj<typeof Navigation> = {
  ...Template,
  args: {
    data: {
      variant: "variant_a",
      variants: {
        logo: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=96&q=75",
        },
        routes: [
          {
            label: "Start",
          },
          {
            label: "About",
          },
          {
            label: "Services",
          },
          {
            label: "Platform",
          },
          {
            label: "Testimonials",
          },
        ],
        primaryButton: {
          label: "Sign In",
        },
        secondaryButton: {
          label: "Sign Up",
        },
      },
    },
  },
};

export const VariantB: StoryObj<typeof Navigation> = {
  ...Template,
  args: {
    data: {
      variant: "variant_b",
      variants: {
        logo: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=96&q=75",
        },
        routes: [
          {
            label: "Start",
          },
          {
            label: "About",
          },
          {
            label: "Services",
          },
          {
            label: "Platform",
          },
          {
            label: "Testimonials",
          },
        ],
        primaryButton: {
          label: "Sign In",
        },
        secondaryButton: {
          label: "Sign Up",
        },
      },
    },
  },
};

export const VariantC: StoryObj<typeof Navigation> = {
  ...Template,
  args: {
    data: {
      variant: "variant_c",
      variants: {
        logo: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=96&q=75",
        },
        routes: [
          {
            label: "Start",
          },
          {
            label: "About",
          },
          {
            label: "Services",
          },
          {
            label: "Platform",
          },
          {
            label: "Testimonials",
          },
        ],
        primaryButton: {
          label: "Sign In",
        },
        secondaryButton: {
          label: "Sign Up",
        },
      },
    },
  },
};

export const VariantD: StoryObj<typeof Navigation> = {
  ...Template,
  args: {
    data: {
      variant: "variant_d",
      variants: {
        logo: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=96&q=75",
        },
        routes: [
          {
            label: "Start",
          },
          {
            label: "About",
          },
          {
            label: "Services",
          },
          {
            label: "Platform",
          },
          {
            label: "Testimonials",
          },
        ],
        primaryButton: {
          label: "Sign In",
        },
        secondaryButton: {
          label: "Sign Up",
        },
      },
    },
  },
};

export const VariantF: StoryObj<typeof Navigation> = {
  ...Template,
  args: {
    data: {
      variant: "variant_f",
      variants: {
        logo: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=96&q=75",
          alt: "Navigation Logo",
          linkTarget: "_self",
        },
        multipleLinks: [
          {
            label: "Home",
            internalLink: "/",
            linkTarget: "_self",
          },
          {
            label: "Projects",
            multipleRoutes: [
              {
                label: "Residential",
                multipleInnerRoutes: [
                  {
                    label: "New Construction",
                    internalLink: "/projects/residential?filter=new_construction",
                  },
                  {
                    label: "Renovations",
                    internalLink: "/projects/residential?filter=renovations",
                  },
                ],
              },
              {
                label: "Commercial",
                internalLink: "/projects/commercial",
              },
            ],
          },
          {
            label: "Services",
            multipleRoutes: [
              {
                label: "Design",
                internalLink: "/services/design",
              },
              {
                label: "Construction",
                internalLink: "/services/construction",
              },
              {
                label: "Consulting",
                internalLink: "/services/consulting",
              },
            ],
          },
          {
            label: "About",
            internalLink: "/about",
          },
          {
            label: "Contact",
            internalLink: "/contact",
          },
        ],
        primaryButton: {
          label: "Call Us",
          internalLink: "tel:+1234567890",
          linkTarget: "_self",
        },
        secondaryButton: {
          label: "Get a Quote",
          internalLink: "/quote",
          linkTarget: "_self",
        },
      },
    },
  },
};

export const VariantG: StoryObj<typeof Navigation> = {
  ...Template,
  args: {
    data: {
      variant: "variant_g",
      variants: {
        logo: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=96&q=75",
          alt: "Default Navigation Logo",
          linkTarget: "_self",
          type: "linkInternal",
          internalLink: "/",
        },
        smallLogo: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=96&q=75",
          alt: "Default Mobile Logo",
          linkTarget: "_self",
          type: "linkInternal",
          internalLink: "/",
        },
        logos: [
          {
            logo: {
              image: "https://placehold.co/120x60?text=Logo1",
              alt: "Affiliate One",
              linkTarget: "_self",
              linkExternal: "/partners/one",
            },
          },
          {
            logo: {
              image: "https://placehold.co/120x60?text=Logo2",
              alt: "Affiliate Two",
              linkTarget: "_self",
              linkExternal: "/partners/two",
            },
          },
        ],
        dropdownMenu: [
          {
            _key: "dashboard",
            label: "Dashboard",
            routeType: "singleRoute",
            linkType: "linkInternal",
            internalLink: "/dashboard",
            linkTarget: "_self",
          },
          {
            _key: "services",
            label: "Services",
            routeType: "multipleRoute",
            multipleRoutes: [
              {
                _key: "web-design",
                label: "Web Design",
                linkType: "linkInternal",
                internalLink: "/services/web-design",
                linkTarget: "_self",
              },
              {
                _key: "seo",
                label: "SEO",
                linkType: "linkInternal",
                internalLink: "/services/seo",
                linkTarget: "_self",
              },
              {
                _key: "content-creation",
                label: "Content Creation",
                linkType: "linkInternal",
                internalLink: "/services/content",
                linkTarget: "_self",
              },
            ],
            featuredRoute: {
              featuredLink: {
                label: "Start a Project",
                linkType: "linkInternal",
                internalLink: "/contact#start",
                linkTarget: "_self",
              },
              mainImage: {
                image: "https://placehold.co/754x580?text=Services",
                alt: "Service Highlight",
              },
            },
          },
          {
            _key: "blog",
            label: "Blog",
            routeType: "multipleRoute",
            multipleRoutes: [
              {
                _key: "latest-posts",
                label: "Latest Posts",
                linkType: "linkInternal",
                internalLink: "/blog/latest",
                linkTarget: "_self",
              },
              {
                _key: "guides",
                label: "Guides",
                linkType: "linkInternal",
                internalLink: "/blog/guides",
                linkTarget: "_self",
              },
              {
                _key: "faqs",
                label: "Faqs",
                linkType: "linkInternal",
                internalLink: "/blog/faqs",
                linkTarget: "_self",
              },
              {
                _key: "archives",
                label: "Archives",
                linkType: "linkInternal",
                internalLink: "/blog/archives",
                linkTarget: "_self",
              },
              {
                _key: "featured-authors",
                label: "Featured Authors",
                linkType: "linkInternal",
                internalLink: "/blog/featured-authors",
                linkTarget: "_self",
              },
            ],
            featuredRoute: {
              featuredLink: {
                label: "Editor's Pick",
                linkType: "linkInternal",
                internalLink: "/blog/editors-pick",
                linkTarget: "_self",
              },
              mainImage: {
                image: "https://placehold.co/754x580?text=Blog+Highlight",
                alt: "Featured Blog Image",
              },
            },
          },
          {
            _key: "team",
            label: "Team",
            routeType: "singleRoute",
            linkType: "linkInternal",
            internalLink: "/team",
            linkTarget: "_self",
          },
          {
            _key: "contact",
            label: "Contact Us",
            routeType: "singleRoute",
            linkType: "linkInternal",
            internalLink: "/contact",
            linkTarget: "_self",
          },
        ],
        socialMedia: [
          {
            _key: "facebook",
            socialMedia: "facebook",
            socialMediaPlatform: "Facebook",
            socialMediaLink: "https://facebook.com/yourpage",
          },
          {
            _key: "twitter",
            socialMedia: "twitter",
            socialMediaPlatform: "Twitter",
            socialMediaLink: "https://twitter.com/yourhandle",
            socialMediaIcon: {
              image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/X_logo.jpg",
            },
          },
          {
            _key: "instagram",
            socialMedia: "instagram",
            socialMediaPlatform: "Instagram",
            socialMediaLink: "https://instagram.com/yourprofile",
          },
        ],
      },
    },
  },
};
