// @ts-nocheck - story demo file
import { Navigation } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

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

export const VariantH: StoryObj<typeof Navigation> = {
  ...Template,
  args: {
    data: {
      variant: "variant_h",
      variants: {
        logo: {
          image:
            "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=96&q=75",
          alt: "Company Logo",
          linkExternal: "/",
          linkTarget: "_self",
        },
        iconLinks: [
          {
            _key: "search",
            label: "search",
            linkExternal: "/search",
            linkTarget: "_self",
          },
          {
            _key: "person",
            label: "person",
            linkExternal: "/account",
            linkTarget: "_self",
          },
          {
            _key: "location",
            label: "location",
            linkExternal: "/stores",
            linkTarget: "_self",
          },
        ],
        megaMenu: [
          {
            _key: "about",
            _type: "dropdown",
            title: "About",
            groupOfLinks: [
              {
                _key: "group-about-1",
                title: "About Us",
                _type: "group",
                primaryButton: {
                  _key: "about-us-primary",
                  label: "Learn More",
                  linkExternal: "/about",
                  linkTarget: "_self",
                },
                links: [
                  {
                    _key: "our-story",
                    title: "",
                    _type: "group",
                    links: [
                      {
                        _key: "our-story-link",
                        label: "Our Story",
                        linkExternal: "/about/our-story",
                        linkTarget: "_self",
                      },
                      {
                        _key: "press-link",
                        label: "Press",
                        linkExternal: "/about/press",
                        linkTarget: "_self",
                      },
                      {
                        _key: "conference-link",
                        label: "Conference",
                        linkExternal: "/about/conference",
                        linkTarget: "_self",
                      },
                    ],
                  },
                ],
              },
              {
                _key: "group-about-2",
                title: "Studio",
                _type: "group",
                primaryButton: {
                  _key: "studio-primary",
                  label: "View Studio",
                  linkExternal: "/studio",
                  linkTarget: "_self",
                },
                links: [
                  {
                    _key: "custom-design",
                    title: "",
                    _type: "group",
                    links: [
                      {
                        _key: "custom-design-link",
                        label: "Custom Design",
                        linkExternal: "/studio/custom-design",
                        linkTarget: "_self",
                      },
                      {
                        _key: "partnerships-link",
                        label: "Partnerships",
                        linkExternal: "/studio/partnerships",
                        linkTarget: "_self",
                      },
                    ],
                  },
                ],
              },
              {
                _key: "group-about-3",
                title: "Resources",
                _type: "group",
                primaryButton: {
                  _key: "resources-primary",
                  label: "View Resources",
                  linkExternal: "/resources",
                  linkTarget: "_self",
                },
                links: [
                  {
                    _key: "catalogs",
                    title: "",
                    _type: "group",
                    links: [
                      {
                        _key: "catalogs-link",
                        label: "Catalogs",
                        linkExternal: "/resources/catalogs",
                        linkTarget: "_self",
                      },
                      {
                        _key: "finishes-link",
                        label: "Finishes",
                        linkExternal: "/resources/finishes",
                        linkTarget: "_self",
                      },
                      {
                        _key: "warranty-link",
                        label: "Warranty",
                        linkExternal: "/resources/warranty",
                        linkTarget: "_self",
                      },
                      {
                        _key: "brochure-link",
                        label: "Brochure",
                        linkExternal: "/resources/brochure",
                        linkTarget: "_self",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            _key: "products",
            _type: "dropdown",
            title: "Products",
            showcaseLink: [
              {
                _key: "product-showcase-1",
                _type: "showcaseLink",
                mainImage: {
                  image: "https://placehold.co/754x580?text=Featured+Product",
                  alt: "Featured Product",
                },
                primaryButton: {
                  _key: "product-showcase-1-btn",
                  label: "View Featured Product",
                  linkExternal: "/products/featured",
                  linkTarget: "_self",
                },
              },
            ],
            groupOfLinks: [
              {
                _key: "group-products-1",
                title: "Product Categories",
                _type: "group",
                primaryButton: {
                  _key: "products-primary",
                  label: "View All Products",
                  linkExternal: "/products",
                  linkTarget: "_self",
                },
                links: [
                  {
                    _key: "category-1",
                    title: "",
                    _type: "group",
                    links: [
                      {
                        _key: "category-1-link",
                        label: "Category 1",
                        linkExternal: "/products/category-1",
                        linkTarget: "_self",
                      },
                      {
                        _key: "category-2-link",
                        label: "Category 2",
                        linkExternal: "/products/category-2",
                        linkTarget: "_self",
                      },
                      {
                        _key: "category-3-link",
                        label: "Category 3",
                        linkExternal: "/products/category-3",
                        linkTarget: "_self",
                      },
                      {
                        _key: "category-4-link",
                        label: "Category 4",
                        linkExternal: "/products/category-4",
                        linkTarget: "_self",
                      },
                    ],
                  },
                  {
                    _key: "category-2",
                    title: "",
                    _type: "group",
                    links: [
                      {
                        _key: "category-5-link",
                        label: "Category 5",
                        linkExternal: "/products/category-5",
                        linkTarget: "_self",
                      },
                      {
                        _key: "category-6-link",
                        label: "Category 6",
                        linkExternal: "/products/category-6",
                        linkTarget: "_self",
                      },
                      {
                        _key: "category-7-link",
                        label: "Category 7",
                        linkExternal: "/products/category-7",
                        linkTarget: "_self",
                      },
                      {
                        _key: "category-8-link",
                        label: "Category 8",
                        linkExternal: "/products/category-8",
                        linkTarget: "_self",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            _key: "collections",
            _type: "dropdown",
            title: "Collections",
            showcaseLink: [
              {
                _key: "collection-showcase-1",
                _type: "showcaseLink",
                mainImage: {
                  image: "https://placehold.co/754x580?text=Featured+Collection",
                  alt: "Featured Collection",
                },
                primaryButton: {
                  _key: "collection-showcase-1-btn",
                  label: "View Featured Collection",
                  linkExternal: "/collections/featured",
                  linkTarget: "_self",
                },
              },
            ],
            groupOfLinks: [
              {
                _key: "group-collections-1",
                title: "Collections",
                _type: "group",
                primaryButton: {
                  _key: "collections-primary",
                  label: "View All Collections",
                  linkExternal: "/collections",
                  linkTarget: "_self",
                },
                links: [
                  {
                    _key: "collection-1",
                    title: "Spring Collection",
                    _type: "group",
                    links: [
                      {
                        _key: "collection-1-link",
                        label: "Spring 2024",
                        linkExternal: "/collections/spring-2024",
                        linkTarget: "_self",
                      },
                      {
                        _key: "collection-2-link",
                        label: "Spring 2023",
                        linkExternal: "/collections/spring-2023",
                        linkTarget: "_self",
                      },
                      {
                        _key: "collection-3-link",
                        label: "Spring 2022",
                        linkExternal: "/collections/spring-2022",
                        linkTarget: "_self",
                      },
                    ],
                  },
                  {
                    _key: "collection-2",
                    title: "Summer Collection",
                    _type: "group",
                    links: [
                      {
                        _key: "collection-4-link",
                        label: "Summer 2024",
                        linkExternal: "/collections/summer-2024",
                        linkTarget: "_self",
                      },
                      {
                        _key: "collection-5-link",
                        label: "Summer 2023",
                        linkExternal: "/collections/summer-2023",
                        linkTarget: "_self",
                      },
                      {
                        _key: "collection-6-link",
                        label: "Summer 2022",
                        linkExternal: "/collections/summer-2022",
                        linkTarget: "_self",
                      },
                    ],
                  },
                  {
                    _key: "collection-3",
                    title: "Fall Collection",
                    _type: "group",
                    links: [
                      {
                        _key: "collection-7-link",
                        label: "Fall 2024",
                        linkExternal: "/collections/fall-2024",
                        linkTarget: "_self",
                      },
                      {
                        _key: "collection-8-link",
                        label: "Fall 2023",
                        linkExternal: "/collections/fall-2023",
                        linkTarget: "_self",
                      },
                      {
                        _key: "collection-9-link",
                        label: "Fall 2022",
                        linkExternal: "/collections/fall-2022",
                        linkTarget: "_self",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            _key: "dealers",
            _type: "dropdown",
            title: "Dealers",
            showcaseLink: [
              {
                _key: "dealer-showcase-1",
                _type: "showcaseLink",
                mainImage: {
                  image: "https://placehold.co/754x580?text=Dealer+Network",
                  alt: "Dealer Network",
                },
                primaryButton: {
                  _key: "dealer-showcase-1-btn",
                  label: "Join Our Network",
                  linkExternal: "/dealers/join",
                  linkTarget: "_self",
                },
              },
            ],
            groupOfLinks: [
              {
                _key: "group-dealers-1",
                title: "Dealers",
                _type: "group",
                primaryButton: {
                  _key: "dealers-primary",
                  label: "Find a Dealer",
                  linkExternal: "/dealers",
                  linkTarget: "_self",
                },
                links: [
                  {
                    _key: "find-dealer",
                    title: "Find a Dealer",
                    _type: "group",
                    links: [
                      {
                        _key: "find-dealer-link",
                        label: "Find a Dealer",
                        linkExternal: "/dealers/find",
                        linkTarget: "_self",
                      },
                      {
                        _key: "become-dealer-link",
                        label: "Become a Dealer",
                        linkExternal: "/dealers/become",
                        linkTarget: "_self",
                      },
                      {
                        _key: "dealer-benefits-link",
                        label: "Dealer Benefits",
                        linkExternal: "/dealers/benefits",
                        linkTarget: "_self",
                      },
                      {
                        _key: "dealer-training-link",
                        label: "Dealer Training",
                        linkExternal: "/dealers/training",
                        linkTarget: "_self",
                      },
                    ],
                  },
                  {
                    _key: "dealer-resources",
                    title: "Dealer Resources",
                    _type: "group",
                    links: [
                      {
                        _key: "dealer-portal-link",
                        label: "Dealer Portal",
                        linkExternal: "/dealers/portal",
                        linkTarget: "_self",
                      },
                      {
                        _key: "dealer-support-link",
                        label: "Dealer Support",
                        linkExternal: "/dealers/support",
                        linkTarget: "_self",
                      },
                      {
                        _key: "dealer-marketing-link",
                        label: "Marketing Materials",
                        linkExternal: "/dealers/marketing",
                        linkTarget: "_self",
                      },
                      {
                        _key: "dealer-faq-link",
                        label: "Dealer FAQ",
                        linkExternal: "/dealers/faq",
                        linkTarget: "_self",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  },
};
