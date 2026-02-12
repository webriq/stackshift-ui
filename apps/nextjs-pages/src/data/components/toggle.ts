import type { ComponentDoc } from "./index";

export const toggleDoc: ComponentDoc = {
  name: "Toggle",
  slug: "toggle",
  description:
    "A two-state toggle button component built on Radix UI. Similar to a button but maintains a pressed/unpressed state. Commonly used for toolbar actions and formatting controls.",
  useCases: [
    "Text editor formatting buttons (bold, italic)",
    "Toolbar action toggles",
    "View mode switches (grid/list)",
    "Filter and option toggles",
    "Favorite and bookmark buttons",
  ],
  category: "ui",
  importCode: `import { Toggle } from "@stackshift-ui/react";`,
  individualImportCode: `import { Toggle } from "@stackshift-ui/toggle";`,
  usageCode: `<Toggle aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
</Toggle>`,
  props: [
    {
      name: "pressed",
      type: "boolean",
      required: false,
      description: "The controlled pressed state of the toggle.",
    },
    {
      name: "defaultPressed",
      type: "boolean",
      required: false,
      description: "The default pressed state when uncontrolled.",
    },
    {
      name: "onPressedChange",
      type: "(pressed: boolean) => void",
      required: false,
      description: "Callback when the pressed state changes.",
    },
    {
      name: "disabled",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether the toggle is disabled.",
    },
    {
      name: "variant",
      type: '"default" | "outline"',
      required: false,
      default: '"default"',
      description: "The visual style variant.",
    },
    {
      name: "size",
      type: '"default" | "sm" | "lg"',
      required: false,
      default: '"default"',
      description: "The size of the toggle.",
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
      description: "The toggle content, typically an icon.",
    },
  ],
  examples: [
    {
      title: "Basic Toggle",
      description: "A simple toggle button with an icon.",
      code: `<Toggle aria-label="Toggle italic">
  <Italic className="h-4 w-4" />
</Toggle>`,
    },
    {
      title: "Toggle with Text",
      description: "Toggle button with text label.",
      code: `<Toggle aria-label="Toggle bold">
  <Bold className="h-4 w-4 mr-2" />
  Bold
</Toggle>`,
    },
    {
      title: "Controlled Toggle",
      description: "Control the toggle state with React state.",
      code: `const [pressed, setPressed] = React.useState(false);

<div className="space-y-2">
  <Toggle
    pressed={pressed}
    onPressedChange={setPressed}
    aria-label="Toggle bold"
  >
    <Bold className="h-4 w-4" />
  </Toggle>
  <p className="text-sm">
    Bold is {pressed ? "enabled" : "disabled"}
  </p>
</div>`,
    },
    {
      title: "Toggle Sizes",
      description: "Different sizes for toggles.",
      code: `<div className="flex items-center gap-2">
  <Toggle size="sm" aria-label="Small toggle">
    <Star className="h-3 w-3" />
  </Toggle>
  <Toggle size="default" aria-label="Default toggle">
    <Star className="h-4 w-4" />
  </Toggle>
  <Toggle size="lg" aria-label="Large toggle">
    <Star className="h-5 w-5" />
  </Toggle>
</div>`,
    },
    {
      title: "Toggle Variants",
      description: "Different visual styles.",
      code: `<div className="flex items-center gap-2">
  <Toggle variant="default" aria-label="Default variant">
    <Bold className="h-4 w-4" />
  </Toggle>
  <Toggle variant="outline" aria-label="Outline variant">
    <Italic className="h-4 w-4" />
  </Toggle>
</div>`,
    },
    {
      title: "Disabled Toggle",
      description: "Toggle in disabled state.",
      code: `<Toggle disabled aria-label="Disabled toggle">
  <Underline className="h-4 w-4" />
</Toggle>`,
    },
    {
      title: "Toolbar Example",
      description: "Multiple toggles in a text formatting toolbar.",
      code: `const [bold, setBold] = React.useState(false);
const [italic, setItalic] = React.useState(false);
const [underline, setUnderline] = React.useState(false);

<div className="flex items-center gap-1 border rounded-md p-1">
  <Toggle
    pressed={bold}
    onPressedChange={setBold}
    aria-label="Toggle bold"
  >
    <Bold className="h-4 w-4" />
  </Toggle>
  <Toggle
    pressed={italic}
    onPressedChange={setItalic}
    aria-label="Toggle italic"
  >
    <Italic className="h-4 w-4" />
  </Toggle>
  <Toggle
    pressed={underline}
    onPressedChange={setUnderline}
    aria-label="Toggle underline"
  >
    <Underline className="h-4 w-4" />
  </Toggle>
</div>`,
    },
  ],
};
