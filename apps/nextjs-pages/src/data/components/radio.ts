import type { ComponentDoc } from "./index";

export const radioDoc: ComponentDoc = {
  name: "Radio",
  slug: "radio",
  description:
    "A radio button component for single selection within a group. Built on Radix UI with full keyboard navigation and accessibility support. Typically used within RadioGroup for coordinated state management.",
  useCases: [
    "Single-choice form selections",
    "Settings and preference toggles",
    "Survey and poll questions",
    "Shipping and payment method selection",
    "Filter and sorting options",
  ],
  category: "ui",
  importCode: `import { Radio } from "@stackshift-ui/react";`,
  individualImportCode: `import { Radio } from "@stackshift-ui/radio";`,
  usageCode: `<Radio value="option1" />`,
  props: [
    {
      name: "value",
      type: "string",
      required: true,
      description: "The value of the radio button.",
    },
    {
      name: "checked",
      type: "boolean",
      required: false,
      description: "The controlled checked state.",
    },
    {
      name: "defaultChecked",
      type: "boolean",
      required: false,
      description: "The default checked state when uncontrolled.",
    },
    {
      name: "onCheckedChange",
      type: "(checked: boolean) => void",
      required: false,
      description: "Callback when the checked state changes.",
    },
    {
      name: "disabled",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether the radio button is disabled.",
    },
    {
      name: "required",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether the radio button is required.",
    },
    {
      name: "name",
      type: "string",
      required: false,
      description: "The name attribute for form submission.",
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
      title: "Basic Radio",
      description: "A simple radio button with label.",
      code: `<div className="flex items-center space-x-2">
  <Radio value="option1" id="r1" />
  <Label htmlFor="r1">Option 1</Label>
</div>`,
    },
    {
      title: "Radio Group",
      description: "Radio buttons used within a RadioGroup (recommended).",
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
      title: "Disabled Radio",
      description: "Radio button in disabled state.",
      code: `<div className="flex items-center space-x-2">
  <Radio value="disabled" id="disabled" disabled />
  <Label htmlFor="disabled" className="text-muted-foreground">
    Disabled option
  </Label>
</div>`,
    },
  ],
};
