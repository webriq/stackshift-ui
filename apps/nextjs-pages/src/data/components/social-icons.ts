import type { ComponentDoc } from "./index";

export const socialIconsDoc: ComponentDoc = {
  name: "SocialIcons",
  slug: "social-icons",
  description:
    "A component for displaying individual social media icons. Supports major platforms including Facebook, Twitter/X, Instagram, LinkedIn, and YouTube with consistent styling.",
  useCases: [
    "Footer social media links",
    "Author profile social connections",
    "Contact page social links",
    "Team member social profiles",
    "Share buttons and social sharing",
  ],
  category: "ui",
  importCode: `import { SocialIcons } from "@stackshift-ui/react";`,
  individualImportCode: `import { SocialIcons } from "@stackshift-ui/social-icons";`,
  usageCode: `<SocialIcons social="facebook" />`,
  props: [
    {
      name: "social",
      type: '"facebook" | "twitter" | "instagram" | "linkedin" | "youtube"',
      required: false,
      description: "The social media platform icon to display.",
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Additional CSS classes to apply for custom styling.",
    },
    {
      name: "as",
      type: "ElementType",
      required: false,
      description: "The element type to render as.",
    },
  ],
  examples: [
    {
      title: "Individual Social Icons",
      description: "Display individual social media icons.",
      code: `<div className="flex gap-4 items-center">
  <SocialIcons social="facebook" />
  <SocialIcons social="twitter" />
  <SocialIcons social="instagram" />
  <SocialIcons social="linkedin" />
  <SocialIcons social="youtube" />
</div>`,
    },
    {
      title: "Styled Social Icons",
      description: "Customize icon colors with className.",
      code: `<div className="flex gap-4 items-center p-4 bg-gray-100 rounded-lg">
  <SocialIcons social="facebook" className="text-blue-600" />
  <SocialIcons social="twitter" className="text-gray-800" />
  <SocialIcons social="instagram" className="text-pink-600" />
  <SocialIcons social="linkedin" className="text-blue-700" />
  <SocialIcons social="youtube" className="text-red-600" />
</div>`,
    },
  ],
};
