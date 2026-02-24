import type { ComponentDoc } from "./index";

export const radioDoc: ComponentDoc = {
  name: "RadioGroup",
  slug: "radio",
  description:
    "A radio group component for single selection within a group of options. Built on Radix UI with full keyboard navigation and accessibility support. Uses RadioGroup as the container and RadioGroupItem for individual options.",
  useCases: [
    "Single-choice form selections",
    "Settings and preference toggles",
    "Survey and poll questions",
    "Shipping and payment method selection",
    "Filter and sorting options",
  ],
  category: "ui",
  importCode: `import { RadioGroup, RadioGroupItem } from "@stackshift-ui/react";`,
  individualImportCode: `import { RadioGroup, RadioGroupItem } from "@stackshift-ui/radio-group";`,
  usageCode: `<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="r1" />
    <Label htmlFor="r1">Option 1</Label>
  </div>
</RadioGroup>`,
  props: [
    {
      name: "value",
      type: "string",
      required: false,
      description: "The controlled value of the selected radio item.",
    },
    {
      name: "defaultValue",
      type: "string",
      required: false,
      description: "The default selected value when uncontrolled.",
    },
    {
      name: "onValueChange",
      type: "(value: string) => void",
      required: false,
      description: "Callback when the selected value changes.",
    },
    {
      name: "disabled",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether the entire radio group is disabled.",
    },
    {
      name: "required",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether a selection is required.",
    },
    {
      name: "name",
      type: "string",
      required: false,
      description: "The name attribute for form submission.",
    },
    {
      name: "orientation",
      type: '"horizontal" | "vertical"',
      required: false,
      default: '"vertical"',
      description: "The orientation of the radio group.",
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
      title: "Basic Radio Group",
      description: "A simple radio group with multiple options.",
      code: `<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="r1" />
    <Label htmlFor="r1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="r2" />
    <Label htmlFor="r2">Option 2</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option3" id="r3" />
    <Label htmlFor="r3">Option 3</Label>
  </div>
</RadioGroup>`,
    },
    {
      title: "Controlled Radio Group",
      description: "Radio group with controlled state.",
      code: `const [value, setValue] = React.useState("comfortable");

<div className="space-y-2">
  <RadioGroup value={value} onValueChange={setValue}>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="default" id="default" />
      <Label htmlFor="default">Default</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="comfortable" id="comfortable" />
      <Label htmlFor="comfortable">Comfortable</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="compact" id="compact" />
      <Label htmlFor="compact">Compact</Label>
    </div>
  </RadioGroup>
  <Text className="text-sm">Selected: {value}</Text>
</div>`,
    },
    {
      title: "Horizontal Radio Group",
      description: "Radio options displayed horizontally.",
      code: `<RadioGroup defaultValue="medium" className="flex space-x-4">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="small" id="small" />
    <Label htmlFor="small">Small</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="medium" id="medium" />
    <Label htmlFor="medium">Medium</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="large" id="large" />
    <Label htmlFor="large">Large</Label>
  </div>
</RadioGroup>`,
    },
    {
      title: "With Disabled Options",
      description: "Radio group with some disabled options.",
      code: `<RadioGroup defaultValue="active">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="active" id="active" />
    <Label htmlFor="active">Active</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="pending" id="pending" />
    <Label htmlFor="pending">Pending</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="disabled" id="disabled-opt" disabled />
    <Label htmlFor="disabled-opt" className="text-muted-foreground">
      Disabled Option
    </Label>
  </div>
</RadioGroup>`,
    },
  ],
};
