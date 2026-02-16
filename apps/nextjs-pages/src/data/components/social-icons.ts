import type { ComponentDoc } from "./index";

export const socialIconsDoc: ComponentDoc = {
  name: "SocialIcons",
  slug: "social-icons",
  description:
    "A component for displaying individual social media icons. Supports major platforms including Facebook, Twitter/X, Instagram, LinkedIn, YouTube, TikTok, Pinterest, GitHub, Discord, and Threads with consistent styling.",
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
      type: '"facebook" | "twitter" | "instagram" | "linkedin" | "youtube" | "tiktok" | "pinterest" | "github" | "discord" | "threads"',
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
      description: "Display individual social media icons with brand colors.",
      code: `<div className="flex gap-4 items-center flex-wrap">
  <SocialIcons social="facebook" className="text-blue-600" />
  <SocialIcons social="twitter" className="text-gray-900" />
  <SocialIcons social="instagram" className="text-pink-600" />
  <SocialIcons social="linkedin" className="text-blue-700" />
  <SocialIcons social="youtube" className="text-red-600" />
  <SocialIcons social="tiktok" className="text-gray-900" />
  <SocialIcons social="pinterest" className="text-red-700" />
  <SocialIcons social="github" className="text-gray-900" />
  <SocialIcons social="discord" className="text-indigo-600" />
  <SocialIcons social="threads" className="text-gray-900" />
</div>`,
    },
    {
      title: "Monochrome Social Icons",
      description: "Display icons in a single color for minimal designs.",
      code: `<div className="flex gap-4 items-center p-4 bg-primary rounded-lg flex-wrap">
  <SocialIcons social="facebook" className="text-white" />
  <SocialIcons social="twitter" className="text-white" />
  <SocialIcons social="instagram" className="text-white" />
  <SocialIcons social="linkedin" className="text-white" />
  <SocialIcons social="youtube" className="text-white" />
  <SocialIcons social="tiktok" className="text-white" />
  <SocialIcons social="pinterest" className="text-white" />
  <SocialIcons social="github" className="text-white" />
  <SocialIcons social="discord" className="text-white" />
  <SocialIcons social="threads" className="text-white" />
</div>`,
    },
  ],
};
