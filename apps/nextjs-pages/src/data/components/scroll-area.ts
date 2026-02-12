import type { ComponentDoc } from "./index";

export const scrollAreaDoc: ComponentDoc = {
  name: "ScrollArea",
  slug: "scroll-area",
  description:
    "A scroll area component built on Radix UI for creating custom scrollable containers with styled scrollbars. Includes ScrollBar sub-component for horizontal and vertical scrolling.",
  useCases: [
    "Long content lists and menus",
    "Code blocks and text editors",
    "Chat message histories",
    "Sidebar navigation with many items",
    "Data tables with overflow content",
  ],
  category: "ui",
  importCode: `import { ScrollArea, ScrollBar } from "@stackshift-ui/react";`,
  individualImportCode: `import { ScrollArea, ScrollBar } from "@stackshift-ui/scroll-area";`,
  usageCode: `<ScrollArea className="h-72 w-full">
  <div>Long content here...</div>
</ScrollArea>`,
  props: [
    {
      name: "type",
      type: '"auto" | "always" | "scroll" | "hover"',
      required: false,
      default: '"hover"',
      description: "When to show the scrollbar.",
    },
    {
      name: "scrollHideDelay",
      type: "number",
      required: false,
      default: "600",
      description: "Time in milliseconds before hiding scrollbar after scroll stops.",
    },
    {
      name: "dir",
      type: '"ltr" | "rtl"',
      required: false,
      description: "The reading direction of the scroll area.",
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
      required: true,
      description: "The scrollable content.",
    },
  ],
  examples: [
    {
      title: "Vertical Scroll",
      description: "A simple vertically scrollable area.",
      code: `<ScrollArea className="h-72 w-full rounded-md border p-4">
  <div className="space-y-4">
    {Array.from({ length: 50 }).map((_, i) => (
      <p key={i} className="text-sm">
        Item {i + 1}: This is a scrollable content area.
      </p>
    ))}
  </div>
</ScrollArea>`,
    },
    {
      title: "Horizontal Scroll",
      description: "A horizontally scrollable area.",
      code: `<ScrollArea className="w-full whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {Array.from({ length: 20 }).map((_, i) => (
      <div key={i} className="shrink-0">
        <div className="h-32 w-48 rounded-md bg-muted" />
      </div>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`,
    },
    {
      title: "Both Directions",
      description: "Scroll area with both vertical and horizontal scrolling.",
      code: `<ScrollArea className="h-72 w-full rounded-md border">
  <div className="p-4">
    <table className="w-max">
      <thead>
        <tr>
          {Array.from({ length: 10 }).map((_, i) => (
            <th key={i} className="px-4 py-2 text-left">
              Column {i + 1}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 50 }).map((_, i) => (
          <tr key={i}>
            {Array.from({ length: 10 }).map((_, j) => (
              <td key={j} className="px-4 py-2">
                Cell {i + 1},{j + 1}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`,
    },
    {
      title: "Tags List",
      description: "Horizontal scrollable tag list.",
      code: `<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-2 p-4">
    {["React", "Next.js", "TypeScript", "Tailwind", "Radix UI", "Framer Motion", "Zustand", "React Query"].map((tag) => (
      <Badge key={tag} variant="secondary">
        {tag}
      </Badge>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`,
    },
  ],
};
