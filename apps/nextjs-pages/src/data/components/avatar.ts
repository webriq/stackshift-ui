import type { ComponentDoc } from "./index";

export const avatarDoc: ComponentDoc = {
  name: "Avatar",
  slug: "avatar",
  description:
    "A versatile avatar component for displaying user profile images with automatic fallback support. Built on Radix UI primitives with three sub-components: Avatar (root), AvatarImage, and AvatarFallback.",
  useCases: [
    "User profile displays in headers and navigation",
    "Comment sections and social feeds",
    "Team member listings and directories",
    "Chat interfaces and messaging apps",
    "Author bylines in blog posts and articles",
  ],
  category: "ui",
  importCode: `import { Avatar, AvatarImage, AvatarFallback } from "@stackshift-ui/react";`,
  individualImportCode: `import { Avatar, AvatarImage, AvatarFallback } from "@stackshift-ui/avatar";`,
  usageCode: `<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`,
  props: [
    {
      name: "className",
      type: "string",
      required: false,
      description: "Additional CSS classes to apply to the avatar root container.",
    },
  ],
  examples: [
    {
      title: "Basic Avatar",
      description: "A simple avatar with image and fallback text.",
      code: `<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`,
    },
    {
      title: "Avatar with Fallback",
      description: "When the image fails to load, the fallback is displayed.",
      code: `<Avatar>
  <AvatarImage src="/broken-image.jpg" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`,
    },
    {
      title: "Multiple Avatars",
      description: "Display a group of avatars for team members or contributors.",
      code: `<div className="flex -space-x-2">
  <Avatar className="border-2 border-background">
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>SC</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarImage src="https://github.com/vercel.png" />
    <AvatarFallback>VC</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>+3</AvatarFallback>
  </Avatar>
</div>`,
    },
  ],
};
