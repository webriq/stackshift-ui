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
      code: `<Container className="p-4 bg-blue-100">
  <p>Content inside a full-width container</p>
</Container>`,
    },
    {
      title: "Container Sizes",
      description: "Visual comparison of different container max-width options.",
      code: `<div className="space-y-4">
  <Container maxWidth="sm" className="p-4 bg-green-100">
    <p className="text-sm">sm - 384px</p>
  </Container>
  <Container maxWidth="md" className="p-4 bg-yellow-100">
    <p className="text-sm">md - 448px</p>
  </Container>
  <Container maxWidth="lg" className="p-4 bg-orange-100">
    <p className="text-sm">lg - 512px</p>
  </Container>
  <Container maxWidth="xl" className="p-4 bg-pink-100">
    <p className="text-sm">xl - 576px</p>
  </Container>
  <Container maxWidth="2xl" className="p-4 bg-purple-100">
    <p className="text-sm">2xl - 672px</p>
  </Container>
</div>`,
    },
    {
      title: "Container with Custom Width",
      code: `<Container maxWidth={800} className="p-4 bg-teal-100">
  <p>Content constrained to 800px</p>
</Container>`,
    },
    {
      title: "Container as Section",
      code: `<Container as="section" maxWidth="xl" className="py-8 bg-indigo-100">
  <h2 className="font-semibold mb-2">Section Title</h2>
  <p>Section content goes here.</p>
</Container>`,
    },
  ],
};
