import type { ComponentDoc } from "./index";

export const containerDoc: ComponentDoc = {
  name: "Container",
  slug: "container",
  description:
    "A layout component that wraps content with a maximum width constraint and centers it horizontally. Useful for creating consistent page layouts.",
  category: "layout",
  props: [
    {
      name: "maxWidth",
      type: '"sm" | "md" | "lg" | "xl" | "2xl" | "full" | number',
      required: false,
      default: '"full"',
      description:
        "The maximum width of the container. Can be a preset size or a custom number in pixels.",
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
      description: "The content to wrap.",
    },
  ],
  examples: [
    {
      title: "Default Container",
      code: `<Container>
  <p>Content inside a full-width container</p>
</Container>`,
    },
    {
      title: "Container with Max Width",
      code: `<Container maxWidth="lg">
  <p>Content constrained to large width (512px)</p>
</Container>`,
    },
    {
      title: "Container with Custom Width",
      code: `<Container maxWidth={800}>
  <p>Content constrained to 800px</p>
</Container>`,
    },
    {
      title: "Container as Section",
      code: `<Container as="section" maxWidth="xl" className="py-8">
  <h2>Section Title</h2>
  <p>Section content goes here.</p>
</Container>`,
    },
  ],
};
