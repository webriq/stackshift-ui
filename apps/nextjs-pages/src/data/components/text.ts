import type { ComponentDoc } from "./index";

export const textDoc: ComponentDoc = {
  name: "Text",
  slug: "text",
  description:
    "A semantic text component for rendering paragraphs and inline text with consistent typography. Supports various fontSizes, weights, and semantic HTML elements for proper document structure.",
  useCases: [
    "Body text and paragraphs",
    "Descriptions and captions",
    "List items and inline content",
    "Form helper text and labels",
    "Card and component descriptions",
  ],
  category: "ui",
  importCode: `import { Text } from "@stackshift-ui/react";`,
  individualImportCode: `import { Text } from "@stackshift-ui/text";`,
  usageCode: `<Text>This is body text</Text>`,
  props: [
    {
      name: "as",
      type: '"p" | "span" | "div" | "label"',
      required: false,
      default: '"p"',
      description: "The HTML element to render.",
    },
    {
      name: "fontSize",
      type: '"xs" | "sm" | "base" | "lg" | "xl"',
      required: false,
      default: '"base"',
      description: "The font fontSize of the text.",
    },
    {
      name: "weight",
      type: '"normal" | "medium" | "semibold" | "bold"',
      required: false,
      default: '"normal"',
      description: "The font weight of the text.",
    },
    {
      name: "variant",
      type: '"default" | "muted" | "primary" | "destructive"',
      required: false,
      default: '"default"',
      description: "The color variant of the text.",
    },
    {
      name: "align",
      type: '"left" | "center" | "right" | "justify"',
      required: false,
      description: "Text alignment.",
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
      description: "The text content.",
    },
  ],
  examples: [
    {
      title: "Basic Text",
      description: "Simple paragraph text.",
      code: `<Text>
  This is a paragraph of body text with the default styling.
</Text>`,
    },
    {
      title: "Text Sizes",
      description: "Different text fontSizes for various contexts.",
      code: `<div className="space-y-2">
  <Text fontSize="xs">Extra small text</Text>
  <Text fontSize="sm">Small text</Text>
  <Text fontSize="base">Base text (default)</Text>
  <Text fontSize="lg">Large text</Text>
  <Text fontSize="xl">Extra large text</Text>
</div>`,
    },
    {
      title: "Text Weights",
      description: "Different font weights for emphasis.",
      code: `<div className="space-y-2">
  <Text weight="normal">Normal weight (default)</Text>
  <Text weight="medium">Medium weight</Text>
  <Text weight="semibold">Semibold weight</Text>
  <Text weight="bold">Bold weight</Text>
</div>`,
    },
    {
      title: "Text Variants",
      description: "Different color variants.",
      code: `<div className="space-y-2">
  <Text variant="default">Default text color</Text>
  <Text variant="muted">Muted text color</Text>
  <Text variant="primary">Primary text color</Text>
  <Text variant="destructive">Destructive text color</Text>
</div>`,
    },
    {
      title: "Text Elements",
      description: "Render as different HTML elements.",
      code: `<div className="space-y-2">
  <Text as="p">This is a paragraph</Text>
  <Text as="span">This is an inline span</Text>
  <Text as="div">This is a div element</Text>
  <Text as="label">This is a label element</Text>
</div>`,
    },
    {
      title: "Text Alignment",
      description: "Control text alignment.",
      code: `<div className="space-y-2">
  <Text align="left">Left aligned text</Text>
  <Text align="center">Center aligned text</Text>
  <Text align="right">Right aligned text</Text>
  <Text align="justify">
    Justified text that spans multiple lines and is aligned to both left and right margins.
  </Text>
</div>`,
    },
  ],
};
