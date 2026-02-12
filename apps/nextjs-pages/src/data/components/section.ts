import type { ComponentDoc } from "./index";

export const sectionDoc: ComponentDoc = {
  name: "Section",
  slug: "section",
  description:
    "A semantic section component for structuring page content with optional max-width constraints. Similar to Container but renders as a section element by default.",
  category: "layout",
  props: [
    {
      name: "maxWidth",
      type: '"sm" | "md" | "lg" | "xl" | "2xl" | "full" | number',
      required: false,
      default: '"full"',
      description:
        "The maximum width of the section. Can be a preset size or a custom number in pixels.",
    },
    {
      name: "as",
      type: "ElementType",
      required: false,
      default: '"section"',
      description: "The HTML element to render as.",
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
      description: "The content of the section.",
    },
  ],
  examples: [
    {
      title: "Basic Section",
      code: `import { Section } from "@stackshift-ui/react";

<Section className="py-12 bg-gray-50">
  <h2 className="text-2xl font-bold mb-4">Section Title</h2>
  <p>Section content goes here.</p>
</Section>`,
    },
    {
      title: "Constrained Width Section",
      code: `import { Section } from "@stackshift-ui/react";

<Section maxWidth="xl" className="py-8">
  <h2 className="text-2xl font-bold mb-4">Constrained Section</h2>
  <p>This content has a maximum width of 576px.</p>
</Section>`,
    },
    {
      title: "Hero Section",
      code: `import { Section, Flex } from "@stackshift-ui/react";

<Section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
  <Flex direction="col" align="center" justify="center" gap={4}>
    <h1 className="text-4xl font-bold">Welcome</h1>
    <p className="text-xl opacity-90">Build amazing experiences</p>
  </Flex>
</Section>`,
    },
  ],
};
