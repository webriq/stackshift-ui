import type { ComponentDoc } from "./index";

export const cardDoc: ComponentDoc = {
  name: "Card",
  slug: "card",
  description:
    "A flexible card component for displaying content in a contained format. Includes subcomponents for header, title, description, content, and footer.",
  useCases: [
    "Product cards in e-commerce listings",
    "User profile cards and team member displays",
    "Dashboard widgets and statistics",
    "Blog post previews and article cards",
    "Form containers for login/signup flows",
  ],
  category: "ui",
  importCode: `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@stackshift-ui/react";`,
  individualImportCode: `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@stackshift-ui/card";`,
  usageCode: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`,
  props: [
    {
      name: "className",
      type: "string",
      required: false,
      description: "Additional CSS classes to apply to the card.",
    },
    {
      name: "children",
      type: "React.ReactNode",
      required: false,
      description: "The content of the card.",
    },
  ],
  examples: [
    {
      title: "Basic Card",
      description: "A card with header, content, and footer sections.",
      code: `<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here. You can add any content inside the card.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`,
    },
    {
      title: "Simple Card",
      description: "A minimal card with just content.",
      code: `<Card>
  <CardContent className="pt-6">
    <p>A simple card with just content.</p>
  </CardContent>
</Card>`,
    },
  ],
};

export const cardHeaderDoc: ComponentDoc = {
  name: "CardHeader",
  slug: "card-header",
  description: "The header section of a Card component.",
  category: "ui",
  props: [
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
      description: "The content of the header, typically CardTitle and CardDescription.",
    },
  ],
  examples: [],
};

export const cardTitleDoc: ComponentDoc = {
  name: "CardTitle",
  slug: "card-title",
  description: "The title element within a CardHeader.",
  category: "ui",
  props: [
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
      description: "The title text.",
    },
  ],
  examples: [],
};

export const cardDescriptionDoc: ComponentDoc = {
  name: "CardDescription",
  slug: "card-description",
  description: "The description element within a CardHeader.",
  category: "ui",
  props: [
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
      description: "The description text.",
    },
  ],
  examples: [],
};

export const cardContentDoc: ComponentDoc = {
  name: "CardContent",
  slug: "card-content",
  description: "The main content area of a Card component.",
  category: "ui",
  props: [
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
      description: "The content to display.",
    },
  ],
  examples: [],
};

export const cardFooterDoc: ComponentDoc = {
  name: "CardFooter",
  slug: "card-footer",
  description: "The footer section of a Card component, typically used for actions.",
  category: "ui",
  props: [
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
      description: "The footer content, typically buttons or links.",
    },
  ],
  examples: [],
};
