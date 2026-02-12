import type { ComponentDoc } from "./index";

export const linkDoc: ComponentDoc = {
  name: "Link",
  slug: "link",
  description:
    "A styled link component for navigation that extends the native anchor element. Supports internal and external links with consistent styling and hover states.",
  useCases: [
    "Navigation menu links",
    "In-content hyperlinks",
    "Call-to-action links",
    "Footer and header navigation",
    "Breadcrumb navigation",
  ],
  category: "ui",
  importCode: `import { Link } from "@stackshift-ui/react";`,
  individualImportCode: `import { Link } from "@stackshift-ui/link";`,
  usageCode: `<Link href="/about">About Us</Link>`,
  props: [
    {
      name: "href",
      type: "string",
      required: true,
      description: "The URL the link points to.",
    },
    {
      name: "target",
      type: '"_blank" | "_self" | "_parent" | "_top"',
      required: false,
      description: "Where to open the linked document.",
    },
    {
      name: "rel",
      type: "string",
      required: false,
      description: "The relationship between the current and linked document.",
    },
    {
      name: "variant",
      type: '"default" | "underline" | "muted"',
      required: false,
      default: '"default"',
      description: "The visual style variant of the link.",
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
      description: "The link text or content.",
    },
  ],
  examples: [
    {
      title: "Basic Link",
      description: "A simple navigation link.",
      code: `<Link href="/about">About Us</Link>`,
    },
    {
      title: "External Link",
      description: "Link that opens in a new tab.",
      code: `<Link
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Visit Website
</Link>`,
    },
    {
      title: "Link Variants",
      description: "Different visual styles for links.",
      code: `<div className="space-y-2">
  <div>
    <Link href="#" variant="default">Default Link</Link>
  </div>
  <div>
    <Link href="#" variant="underline">Underlined Link</Link>
  </div>
  <div>
    <Link href="#" variant="muted">Muted Link</Link>
  </div>
</div>`,
    },
    {
      title: "Link with Icon",
      description: "Link with an accompanying icon.",
      code: `<Link href="/docs" className="inline-flex items-center gap-2">
  <BookOpen className="h-4 w-4" />
  Documentation
</Link>`,
    },
    {
      title: "Breadcrumb Links",
      description: "Links used in breadcrumb navigation.",
      code: `<nav className="flex items-center space-x-2 text-sm">
  <Link href="/" variant="muted">Home</Link>
  <ChevronRight className="h-4 w-4 text-muted-foreground" />
  <Link href="/products" variant="muted">Products</Link>
  <ChevronRight className="h-4 w-4 text-muted-foreground" />
  <span className="text-foreground">Details</span>
</nav>`,
    },
  ],
};
