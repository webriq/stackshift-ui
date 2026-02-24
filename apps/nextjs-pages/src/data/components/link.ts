import type { ComponentDoc } from "./index";

export const linkDoc: ComponentDoc = {
  name: "Link",
  slug: "link",
  description:
    "A link component for navigation that extends the native anchor element. Supports all standard anchor attributes and can be styled with Tailwind classes.",
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
      name: "className",
      type: "string",
      required: false,
      description: "CSS classes for styling the link.",
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
      title: "Link Styles",
      description: "Different visual styles using CSS classes.",
      code: `<div className="space-y-2">
  <div>
    <Link href="#" className="text-primary hover:underline">
      Default Link
    </Link>
  </div>
  <div>
    <Link href="#" className="underline text-primary hover:text-primary/80">
      Underlined Link
    </Link>
  </div>
  <div>
    <Link href="#" className="text-muted-foreground hover:text-foreground">
      Muted Link
    </Link>
  </div>
</div>`,
    },
    {
      title: "Link with Icon",
      description: "Link with an accompanying icon.",
      code: `<Link href="/docs" className="inline-flex items-center gap-2 text-primary hover:underline">
  <BookOpen className="h-4 w-4" />
  Documentation
</Link>`,
    },
    {
      title: "Breadcrumb Links",
      description: "Links used in breadcrumb navigation.",
      code: `<nav className="flex items-center space-x-2 text-sm">
  <Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link>
  <ChevronRight className="h-4 w-4 text-muted-foreground" />
  <Link href="/products" className="text-muted-foreground hover:text-foreground">Products</Link>
  <ChevronRight className="h-4 w-4 text-muted-foreground" />
  <span className="text-foreground">Details</span>
</nav>`,
    },
  ],
};
