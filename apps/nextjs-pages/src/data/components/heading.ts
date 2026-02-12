import type { ComponentDoc } from "./index";

export const headingDoc: ComponentDoc = {
  name: "Heading",
  slug: "heading",
  description:
    "A semantic heading component that renders h1-h6 elements with consistent typography styles. Provides size variants and responsive text sizing for creating clear content hierarchy.",
  useCases: [
    "Page titles and section headers",
    "Article and blog post headings",
    "Card and component titles",
    "Dashboard section labels",
    "Modal and dialog headers",
  ],
  category: "ui",
  importCode: `import { Heading } from "@stackshift-ui/react";`,
  individualImportCode: `import { Heading } from "@stackshift-ui/heading";`,
  usageCode: `<Heading type="h1" fontSize="2xl">Page Title</Heading>`,
  props: [
    {
      name: "type",
      type: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6"',
      required: false,
      default: '"h2"',
      description: "The semantic HTML heading element to render.",
    },
    {
      name: "fontSize",
      type: '"xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"',
      required: false,
      description: "The visual size of the heading, independent of the semantic level.",
    },
    {
      name: "weight",
      type: '"normal" | "medium" | "semibold" | "bold" | "extrabold"',
      required: false,
      default: '"bold"',
      description: "The font weight of the heading.",
    },
    {
      name: "muted",
      type: "boolean",
      required: false,
      default: "false",
      description: "Apply muted text color.",
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
      description: "The heading text content.",
    },
  ],
  examples: [
    {
      title: "Heading Hierarchy",
      description: "Different semantic heading levels.",
      code: `<div className="space-y-4">
  <Heading type="h1">Heading 1</Heading>
  <Heading type="h2">Heading 2</Heading>
  <Heading type="h3">Heading 3</Heading>
  <Heading type="h4">Heading 4</Heading>
  <Heading type="h5">Heading 5</Heading>
  <Heading type="h6">Heading 6</Heading>
</div>`,
    },
    {
      title: "Font Size Variants",
      description: "Control visual size independent of semantic level.",
      code: `<div className="space-y-4">
  <Heading type="h2" fontSize="4xl">Extra Large</Heading>
  <Heading type="h2" fontSize="3xl">3XL Heading</Heading>
  <Heading type="h2" fontSize="2xl">2XL Heading</Heading>
  <Heading type="h2" fontSize="xl">XL Heading</Heading>
  <Heading type="h2" fontSize="lg">Large Heading</Heading>
  <Heading type="h2" fontSize="base">Base Heading</Heading>
</div>`,
    },
    {
      title: "Font Weight",
      description: "Adjust heading font weight.",
      code: `<div className="space-y-4">
  <Heading type="h2" weight="extrabold">Extra Bold</Heading>
  <Heading type="h2" weight="bold">Bold (default)</Heading>
  <Heading type="h2" weight="semibold">Semi Bold</Heading>
  <Heading type="h2" weight="medium">Medium</Heading>
  <Heading type="h2" weight="normal">Normal</Heading>
</div>`,
    },
    {
      title: "Page Title",
      description: "A typical page header with title and subtitle.",
      code: `<div className="space-y-2">
  <Heading type="h1" fontSize="3xl" weight="bold">
    Welcome to Dashboard
  </Heading>
  <Text className="text-muted-foreground">
    Manage your account and view analytics
  </Text>
</div>`,
    },
  ],
};
