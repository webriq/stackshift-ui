import type { ComponentDoc } from "./index";

export const skeletonDoc: ComponentDoc = {
  name: "Skeleton",
  slug: "skeleton",
  description:
    "A skeleton loading component for displaying placeholder content while data is loading. Creates animated pulse effects to indicate loading states.",
  useCases: [
    "Loading states for content cards",
    "Placeholder for images and media",
    "Data table loading indicators",
    "Profile and user information loading",
    "List and feed loading states",
  ],
  category: "ui",
  importCode: `import { Skeleton } from "@stackshift-ui/react";`,
  individualImportCode: `import { Skeleton } from "@stackshift-ui/skeleton";`,
  usageCode: `<Skeleton className="h-12 w-12 rounded-full" />`,
  props: [
    {
      name: "className",
      type: "string",
      required: false,
      description: "Additional CSS classes to apply for sizing and styling.",
    },
  ],
  examples: [
    {
      title: "Basic Skeleton",
      description: "Simple skeleton shapes for various content types.",
      code: `<div className="space-y-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <Skeleton className="h-4 w-[250px]" />
  <Skeleton className="h-4 w-[200px]" />
</div>`,
    },
    {
      title: "Card Skeleton",
      description: "Loading skeleton for a card component.",
      code: `<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`,
    },
    {
      title: "List Skeleton",
      description: "Loading skeleton for a list of items.",
      code: `<div className="space-y-3">
  {Array.from({ length: 5 }).map((_, i) => (
    <div key={i} className="flex items-center space-x-4">
      <Skeleton className="h-10 w-10 rounded" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-3 w-3/4" />
      </div>
    </div>
  ))}
</div>`,
    },
    {
      title: "Article Skeleton",
      description: "Loading skeleton for an article or blog post.",
      code: `<div className="w-[400px] space-y-4">
  <Skeleton className="h-[200px] w-full rounded-lg" />
  <div className="space-y-2">
    <Skeleton className="h-6 w-3/4" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-2/3" />
  </div>
</div>`,
    },
    {
      title: "Table Skeleton",
      description: "Loading skeleton for data tables.",
      code: `<div className="w-[500px] space-y-2">
  <Skeleton className="h-10 w-full" />
  {Array.from({ length: 4 }).map((_, i) => (
    <Skeleton key={i} className="h-16 w-full" />
  ))}
</div>`,
    },
  ],
};
