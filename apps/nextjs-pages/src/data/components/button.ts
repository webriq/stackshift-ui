import type { ComponentDoc } from "./index";

export const buttonDoc: ComponentDoc = {
  name: "Button",
  slug: "button",
  description:
    "A versatile button component for triggering actions and events. Supports multiple variants, sizes, and can render as a link.",
  useCases: [
    "Form submissions and user actions",
    "Call-to-action elements on landing pages",
    "Navigation triggers and modal openers",
    "Confirmation and cancel actions in dialogs",
    "Toggle buttons for settings and preferences",
  ],
  category: "ui",
  importCode: `import { Button } from "@stackshift-ui/react";`,
  individualImportCode: `import { Button } from "@stackshift-ui/button";`,
  usageCode: `<Button variant="default">Click me</Button>`,
  props: [
    {
      name: "variant",
      type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "unstyled"',
      required: false,
      default: '"default"',
      description: "The visual style variant of the button.",
    },
    {
      name: "size",
      type: '"default" | "sm" | "lg" | "icon"',
      required: false,
      default: '"default"',
      description: "The size of the button.",
    },
    {
      name: "asChild",
      type: "boolean",
      required: false,
      default: "false",
      description:
        "When true, the button will render its child as the root element using Radix Slot.",
    },
    {
      name: "icon",
      type: "React.ReactNode",
      required: false,
      description: "Optional icon to display alongside the button text.",
    },
    {
      name: "iconPosition",
      type: '"left" | "right"',
      required: false,
      default: '"right"',
      description: "Position of the icon relative to the button text.",
    },
    {
      name: "as",
      type: '"link"',
      required: false,
      description: 'When set to "link", the button renders as an anchor element.',
    },
    {
      name: "link",
      type: "LabeledRoute",
      required: false,
      description: 'Link configuration object. Required when as="link".',
    },
    {
      name: "disabled",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether the button is disabled.",
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
      description: "The content of the button.",
    },
  ],
  examples: [
    {
      title: "Default",
      description: "The default button style with primary colors.",
      code: `<Button>Click me</Button>`,
    },
    {
      title: "Variants",
      description: "Different visual styles for various use cases.",
      code: `<div className="flex gap-2 flex-wrap">
  <Button variant="default">Default</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="destructive">Destructive</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="link">Link</Button>
</div>`,
    },
    {
      title: "Sizes",
      description: "Three size options to fit different contexts.",
      code: `<div className="flex gap-2 items-center">
  <Button size="sm">Small</Button>
  <Button size="default">Default</Button>
  <Button size="lg">Large</Button>
</div>`,
    },
    {
      title: "Disabled",
      description: "Disabled state prevents user interaction.",
      code: `<Button disabled>Disabled</Button>`,
    },
  ],
};
