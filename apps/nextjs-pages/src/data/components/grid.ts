import type { ComponentDoc } from "./index";

export const gridDoc: ComponentDoc = {
  name: "Grid",
  slug: "grid",
  description:
    "A CSS Grid layout component for creating responsive grid layouts with customizable columns, gap, and alignment.",
  category: "layout",
  props: [
    {
      name: "columns",
      type: '"none" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12',
      required: false,
      default: "1",
      description: "Number of columns in the grid.",
    },
    {
      name: "gap",
      type: "number",
      required: false,
      default: "0",
      description: "Gap between grid items (uses Tailwind gap scale).",
    },
    {
      name: "align",
      type: '"start" | "end" | "center" | "baseline" | "stretch"',
      required: false,
      default: '"stretch"',
      description: "Alignment of items along the cross axis.",
    },
    {
      name: "justify",
      type: '"normal" | "start" | "end" | "center" | "between" | "around" | "evenly" | "stretch"',
      required: false,
      default: '"start"',
      description: "Justification of items along the inline axis.",
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
      description: "The grid items to render.",
    },
  ],
  examples: [
    {
      title: "Basic 3-Column Grid",
      code: `<Grid columns={3} gap={4}>
  <div className="p-4 bg-blue-100">Item 1</div>
  <div className="p-4 bg-blue-100">Item 2</div>
  <div className="p-4 bg-blue-100">Item 3</div>
  <div className="p-4 bg-blue-100">Item 4</div>
  <div className="p-4 bg-blue-100">Item 5</div>
  <div className="p-4 bg-blue-100">Item 6</div>
</Grid>`,
    },
    {
      title: "4-Column Grid with Gap",
      code: `<Grid columns={4} gap={6}>
  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
    <div key={i} className="p-4 bg-green-100 text-center">
      Item {i}
    </div>
  ))}
</Grid>`,
    },
    {
      title: "Centered Grid Items",
      code: `<Grid columns={3} gap={4} align="center" justify="center">
  <div className="p-4 bg-purple-100 h-20">Short</div>
  <div className="p-4 bg-purple-100 h-32">Tall</div>
  <div className="p-4 bg-purple-100 h-24">Medium</div>
</Grid>`,
    },
  ],
};

export const gridItemDoc: ComponentDoc = {
  name: "GridItem",
  slug: "grid-item",
  description:
    "A component for controlling the placement and spanning of items within a Grid component.",
  category: "layout",
  props: [
    {
      name: "colSpan",
      type: "number",
      required: false,
      description: "Number of columns the item should span.",
    },
    {
      name: "rowSpan",
      type: "number",
      required: false,
      description: "Number of rows the item should span.",
    },
    {
      name: "colStart",
      type: "number",
      required: false,
      description: "Starting column position.",
    },
    {
      name: "rowStart",
      type: "number",
      required: false,
      description: "Starting row position.",
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
      description: "The content of the grid item.",
    },
  ],
  examples: [
    {
      title: "Spanning Multiple Columns",
      code: `<Grid columns={4} gap={4}>
  <GridItem colSpan={2} className="p-4 bg-blue-100">
    Spans 2 columns
  </GridItem>
  <div className="p-4 bg-blue-100">Item 2</div>
  <div className="p-4 bg-blue-100">Item 3</div>
</Grid>`,
    },
  ],
};
