import type { ComponentDoc } from "./index";

export const flexDoc: ComponentDoc = {
  name: "Flex",
  slug: "flex",
  description:
    "A flexible box layout component that provides an easy way to create flexbox layouts with customizable direction, alignment, justification, and gap.",
  category: "layout",
  props: [
    {
      name: "direction",
      type: '"row" | "row-reverse" | "col" | "col-reverse"',
      required: false,
      default: '"row"',
      description: "The flex direction of the container.",
    },
    {
      name: "align",
      type: '"start" | "end" | "center" | "baseline" | "stretch"',
      required: false,
      default: '"start"',
      description: "Alignment of items along the cross axis.",
    },
    {
      name: "justify",
      type: '"normal" | "start" | "end" | "center" | "between" | "around" | "evenly" | "stretch"',
      required: false,
      default: '"start"',
      description: "Justification of items along the main axis.",
    },
    {
      name: "wrap",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether flex items should wrap to the next line.",
    },
    {
      name: "gap",
      type: "number",
      required: false,
      default: "0",
      description: "Gap between flex items (uses Tailwind gap scale).",
    },
    {
      name: "as",
      type: "ElementType",
      required: false,
      default: '"div"',
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
      description: "The flex items to render.",
    },
  ],
  examples: [
    {
      title: "Basic Row Layout",
      code: `<Flex gap={4}>
  <div className="p-4 bg-blue-100">Item 1</div>
  <div className="p-4 bg-blue-100">Item 2</div>
  <div className="p-4 bg-blue-100">Item 3</div>
</Flex>`,
    },
    {
      title: "Column Layout",
      code: `<Flex direction="col" gap={4}>
  <div className="p-4 bg-green-100">Item 1</div>
  <div className="p-4 bg-green-100">Item 2</div>
  <div className="p-4 bg-green-100">Item 3</div>
</Flex>`,
    },
    {
      title: "Centered Content",
      code: `<Flex align="center" justify="center" className="h-32 bg-gray-100">
  <div className="p-4 bg-purple-100">Centered Content</div>
</Flex>`,
    },
    {
      title: "Space Between",
      code: `<Flex justify="between" className="w-full">
  <div className="p-4 bg-yellow-100">Left</div>
  <div className="p-4 bg-yellow-100">Center</div>
  <div className="p-4 bg-yellow-100">Right</div>
</Flex>`,
    },
    {
      title: "Wrapping Items",
      code: `<Flex wrap gap={4} className="max-w-md">
  {[1, 2, 3, 4, 5, 6].map((i) => (
    <div key={i} className="p-4 bg-pink-100 w-24">Item {i}</div>
  ))}
</Flex>`,
    },
  ],
};
