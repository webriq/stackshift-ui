import type { ComponentDoc } from "./index";

export const imageDoc: ComponentDoc = {
  name: "Image",
  slug: "image",
  description:
    "An optimized image component with built-in lazy loading, responsive sizing, and accessibility features. Extends native HTML img element with enhanced capabilities.",
  useCases: [
    "Hero images and banners",
    "Product photos in e-commerce",
    "User avatars and profile pictures",
    "Gallery and portfolio displays",
    "Blog post featured images",
  ],
  category: "ui",
  importCode: `import { Image } from "@stackshift-ui/react";`,
  individualImportCode: `import { Image } from "@stackshift-ui/image";`,
  usageCode: `<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
/>`,
  props: [
    {
      name: "src",
      type: "string",
      required: true,
      description: "The image source URL.",
    },
    {
      name: "alt",
      type: "string",
      required: true,
      description: "Alternative text for accessibility and SEO.",
    },
    {
      name: "width",
      type: "number | string",
      required: false,
      description: "The width of the image.",
    },
    {
      name: "height",
      type: "number | string",
      required: false,
      description: "The height of the image.",
    },
    {
      name: "loading",
      type: '"lazy" | "eager"',
      required: false,
      default: '"lazy"',
      description: "Loading strategy for the image.",
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Additional CSS classes to apply.",
    },
    {
      name: "onLoad",
      type: "() => void",
      required: false,
      description: "Callback when the image loads successfully.",
    },
    {
      name: "onError",
      type: "() => void",
      required: false,
      description: "Callback when the image fails to load.",
    },
  ],
  examples: [
    {
      title: "Basic Image",
      description: "A simple image with alt text.",
      code: `<Image
  src="/photos/landscape.jpg"
  alt="Beautiful landscape"
  width={800}
  height={600}
/>`,
    },
    {
      title: "Responsive Image",
      description: "Image that scales with its container.",
      code: `<Image
  src="/photos/product.jpg"
  alt="Product photo"
  className="w-full h-auto"
/>`,
    },
    {
      title: "Rounded Image",
      description: "Apply border radius for rounded corners.",
      code: `<Image
  src="/photos/avatar.jpg"
  alt="User avatar"
  width={200}
  height={200}
  className="rounded-lg"
/>`,
    },
    {
      title: "Image with Aspect Ratio",
      description: "Maintain specific aspect ratio.",
      code: `<div className="aspect-video w-full overflow-hidden rounded-lg">
  <Image
    src="/photos/video-thumbnail.jpg"
    alt="Video thumbnail"
    className="w-full h-full object-cover"
  />
</div>`,
    },
  ],
};
