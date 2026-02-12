import type { ComponentDoc } from "./index";

export const toggleGroupDoc: ComponentDoc = {
  name: "ToggleGroup",
  slug: "toggle-group",
  description:
    "A toggle group component built on Radix UI for managing a set of toggle buttons with coordinated state. Supports single or multiple selection modes. Includes ToggleGroupItem sub-component.",
  useCases: [
    "Text alignment controls (left, center, right)",
    "View mode switchers (grid, list, table)",
    "Filter selections with multiple options",
    "Toolbar button groups",
    "Size and variant selectors",
  ],
  category: "ui",
  importCode: `import { ToggleGroup, ToggleGroupItem } from "@stackshift-ui/react";`,
  individualImportCode: `import { ToggleGroup, ToggleGroupItem } from "@stackshift-ui/toggle-group";`,
  usageCode: `<ToggleGroup type="single">
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>`,
  props: [
    {
      name: "type",
      type: '"single" | "multiple"',
      required: true,
      description: "Whether single or multiple items can be selected.",
    },
    {
      name: "value",
      type: "string | string[]",
      required: false,
      description: "The controlled selected value(s).",
    },
    {
      name: "defaultValue",
      type: "string | string[]",
      required: false,
      description: "The default selected value(s) when uncontrolled.",
    },
    {
      name: "onValueChange",
      type: "(value: string | string[]) => void",
      required: false,
      description: "Callback when the selected value(s) change.",
    },
    {
      name: "disabled",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether the entire group is disabled.",
    },
    {
      name: "variant",
      type: '"default" | "outline"',
      required: false,
      default: '"default"',
      description: "The visual style variant of the items.",
    },
    {
      name: "size",
      type: '"default" | "sm" | "lg"',
      required: false,
      default: '"default"',
      description: "The size of the toggle items.",
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Additional CSS classes to apply.",
    },
  ],
  examples: [
    {
      title: "Single Selection",
      description: "Toggle group where only one item can be selected.",
      code: `<ToggleGroup type="single" defaultValue="center">
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`,
    },
    {
      title: "Multiple Selection",
      description: "Toggle group where multiple items can be selected.",
      code: `<ToggleGroup type="multiple" defaultValue={["bold", "italic"]}>
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
    <Strikethrough className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`,
    },
    {
      title: "Controlled Toggle Group",
      description: "Control the selection with React state.",
      code: `const [value, setValue] = React.useState("grid");

<div className="space-y-2">
  <ToggleGroup type="single" value={value} onValueChange={setValue}>
    <ToggleGroupItem value="grid" aria-label="Grid view">
      <Grid className="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="list" aria-label="List view">
      <List className="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="table" aria-label="Table view">
      <Table className="h-4 w-4" />
    </ToggleGroupItem>
  </ToggleGroup>
  <p className="text-sm">Selected view: {value}</p>
</div>`,
    },
    {
      title: "With Text Labels",
      description: "Toggle group items with text labels.",
      code: `<ToggleGroup type="single" defaultValue="md">
  <ToggleGroupItem value="sm">Small</ToggleGroupItem>
  <ToggleGroupItem value="md">Medium</ToggleGroupItem>
  <ToggleGroupItem value="lg">Large</ToggleGroupItem>
</ToggleGroup>`,
    },
    {
      title: "Outline Variant",
      description: "Toggle group with outline styling.",
      code: `<ToggleGroup type="single" variant="outline" defaultValue="week">
  <ToggleGroupItem value="day">Day</ToggleGroupItem>
  <ToggleGroupItem value="week">Week</ToggleGroupItem>
  <ToggleGroupItem value="month">Month</ToggleGroupItem>
  <ToggleGroupItem value="year">Year</ToggleGroupItem>
</ToggleGroup>`,
    },
    {
      title: "Different Sizes",
      description: "Toggle groups in various sizes.",
      code: `<div className="space-y-4">
  <ToggleGroup type="single" size="sm">
    <ToggleGroupItem value="1">Small</ToggleGroupItem>
    <ToggleGroupItem value="2">Small</ToggleGroupItem>
  </ToggleGroup>
  <ToggleGroup type="single" size="default">
    <ToggleGroupItem value="1">Default</ToggleGroupItem>
    <ToggleGroupItem value="2">Default</ToggleGroupItem>
  </ToggleGroup>
  <ToggleGroup type="single" size="lg">
    <ToggleGroupItem value="1">Large</ToggleGroupItem>
    <ToggleGroupItem value="2">Large</ToggleGroupItem>
  </ToggleGroup>
</div>`,
    },
    {
      title: "Disabled Items",
      description: "Disable specific items in the group.",
      code: `<ToggleGroup type="single">
  <ToggleGroupItem value="available">Available</ToggleGroupItem>
  <ToggleGroupItem value="coming-soon" disabled>
    Coming Soon
  </ToggleGroupItem>
  <ToggleGroupItem value="deprecated" disabled>
    Deprecated
  </ToggleGroupItem>
</ToggleGroup>`,
    },
  ],
};
