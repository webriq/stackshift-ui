import type { ComponentDoc } from "./index";

export const badgeDoc: ComponentDoc = {
  name: "Badge",
  slug: "badge",
  description:
    "A small, inline component for displaying status, labels, or categories. Supports multiple visual variants and can be used to highlight important information.",
  useCases: [
    "Status indicators (active, pending, completed)",
    "Category labels and tags",
    "Notification counts and badges",
    "Feature flags and new item markers",
    "Version numbers and build tags",
  ],
  category: "ui",
  importCode: `import { Badge } from "@stackshift-ui/react";`,
  individualImportCode: `import { Badge } from "@stackshift-ui/badge";`,
  usageCode: `<Badge>Default</Badge>`,
  props: [
    {
      name: "variant",
      type: '"default" | "secondary" | "destructive" | "outline"',
      required: false,
      default: '"default"',
      description: "The visual style variant of the badge.",
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Additional CSS classes to apply.",
    },
    {
      name: "children",
      type: "React.ReactNode",
      required: false,
      description: "The content to display inside the badge.",
    },
  ],
  examples: [
    {
      title: "Default",
      description: "The default badge style with primary colors.",
      code: `<Badge>Default</Badge>`,
    },
    {
      title: "Variants",
      description: "Different visual styles for various use cases.",
      code: `<div className="flex gap-2 flex-wrap">
  <Badge variant="default">Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="destructive">Destructive</Badge>
  <Badge variant="outline">Outline</Badge>
</div>`,
    },
    {
      title: "With Icons",
      description: "Combine badges with icons for enhanced meaning.",
      code: `<div className="flex gap-2 flex-wrap">
  <Badge className="gap-1">
    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
    Online
  </Badge>
  <Badge variant="secondary" className="gap-1">
    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
    Away
  </Badge>
</div>`,
    },
  ],
};
