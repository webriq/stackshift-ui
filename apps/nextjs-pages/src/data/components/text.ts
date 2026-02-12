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
      type: "ElementType",
      required: false,
      default: '"p"',
      description: "The HTML element to render.",
    },
    {
      name: "fontSize",
      type: '"xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl"',
      required: false,
      default: '"base"',
      description: "The font size of the text.",
    },
    {
      name: "weight",
      type: '"thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black"',
      required: false,
      default: '"normal"',
      description: "The font weight of the text.",
    },
    {
      name: "muted",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether to render the text in a muted (gray) color.",
    },
    {
      name: "style",
      type: "React.CSSProperties",
      required: false,
      description: "Inline styles to apply.",
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
      description: "Different text sizes for various contexts.",
      code: `<div className="space-y-2">
  <Text fontSize="xs">Extra small text</Text>
  <Text fontSize="sm">Small text</Text>
  <Text fontSize="base">Base text (default)</Text>
  <Text fontSize="lg">Large text</Text>
  <Text fontSize="xl">Extra large text</Text>
  <Text fontSize="2xl">2XL text</Text>
  <Text fontSize="3xl">3XL text</Text>
</div>`,
    },
    {
      title: "Text Weights",
      description: "Different font weights for emphasis.",
      code: `<div className="space-y-2">
  <Text weight="thin">Thin weight</Text>
  <Text weight="light">Light weight</Text>
  <Text weight="normal">Normal weight (default)</Text>
  <Text weight="medium">Medium weight</Text>
  <Text weight="semibold">Semibold weight</Text>
  <Text weight="bold">Bold weight</Text>
  <Text weight="extrabold">Extrabold weight</Text>
</div>`,
    },
    {
      title: "Text Variants",
      description: "Different color styles using muted prop and className.",
      code: `<div className="space-y-2">
  <Text>Default text color</Text>
  <Text muted>Muted text color</Text>
  <Text className="text-primary">Primary text color</Text>
  <Text className="text-destructive">Destructive text color</Text>
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
      description: "Control text alignment using className.",
      code: `<div className="space-y-2">
  <Text className="text-left">Left aligned text</Text>
  <Text className="text-center">Center aligned text</Text>
  <Text className="text-right">Right aligned text</Text>
  <Text className="text-justify">
    Justified text that spans multiple lines and is aligned to both left and right margins.
  </Text>
</div>`,
    },
  ],
};
