import type { ComponentDoc } from "./index";

export const checkboxGroupDoc: ComponentDoc = {
  name: "CheckboxGroup",
  slug: "checkbox-group",
  description:
    "A container component for managing multiple related checkboxes as a group. Provides coordinated state management and accessibility features for checkbox collections.",
  useCases: [
    "Multi-select filter interfaces",
    "Permission and role selection forms",
    "Feature preference configurations",
    "Category and tag selection",
    "Survey and questionnaire multiple-choice questions",
  ],
  category: "ui",
  importCode: `import { CheckboxGroup } from "@stackshift-ui/react";`,
  individualImportCode: `import { CheckboxGroup } from "@stackshift-ui/checkbox-group";`,
  usageCode: `<CheckboxGroup label="Select options">
  <div className="space-y-3">
    <div className="flex items-center space-x-2">
      <Checkbox id="option1" />
      <Label htmlFor="option1">Option 1</Label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="option2" />
      <Label htmlFor="option2">Option 2</Label>
    </div>
  </div>
</CheckboxGroup>`,
  props: [
    {
      name: "variant",
      type: '"primary" | "inline"',
      required: false,
      default: '"primary"',
      description: "Layout variant - primary (block) or inline (flex row).",
    },
    {
      name: "name",
      type: "string",
      required: false,
      description: "Name for the checkbox group, also used as fallback label.",
    },
    {
      name: "label",
      type: "string",
      required: false,
      description: "Label text displayed above the checkbox group.",
    },
    {
      name: "noLabel",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether to hide the label.",
    },
    {
      name: "labelClass",
      type: "string",
      required: false,
      description: "Additional CSS classes for the label.",
    },
    {
      name: "children",
      type: "ReactNode",
      required: false,
      description: "Checkbox elements to render inside the group.",
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
      title: "Basic Checkbox Group",
      description: "A simple group of checkboxes with a label.",
      code: `<CheckboxGroup label="Select frameworks">
  <div className="space-y-3">
    <div className="flex items-center space-x-2">
      <Checkbox id="react" />
      <Label htmlFor="react">React</Label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="vue" />
      <Label htmlFor="vue">Vue</Label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="angular" />
      <Label htmlFor="angular">Angular</Label>
    </div>
  </div>
</CheckboxGroup>`,
    },
    {
      title: "Inline Layout",
      description: "Display checkboxes in a horizontal row using the inline variant.",
      code: `<CheckboxGroup label="Select size" variant="inline">
  <div className="flex items-center space-x-2">
    <Checkbox id="sm" />
    <Label htmlFor="sm">Small</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="md" />
    <Label htmlFor="md">Medium</Label>
  </div>
  <div className="flex items-center space-x-2">
    <Checkbox id="lg" />
    <Label htmlFor="lg">Large</Label>
  </div>
</CheckboxGroup>`,
    },
    {
      title: "Without Label",
      description: "Hide the group label using noLabel prop.",
      code: `<CheckboxGroup noLabel>
  <div className="space-y-3">
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="newsletter" />
      <Label htmlFor="newsletter">Subscribe to newsletter</Label>
    </div>
  </div>
</CheckboxGroup>`,
    },
    {
      title: "With Disabled Checkboxes",
      description: "Disable specific checkboxes in the group.",
      code: `<CheckboxGroup label="Features">
  <div className="space-y-3">
    <div className="flex items-center space-x-2">
      <Checkbox id="available" />
      <Label htmlFor="available">Available</Label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="soon" disabled />
      <Label htmlFor="soon" className="text-gray-400">Coming Soon</Label>
    </div>
    <div className="flex items-center space-x-2">
      <Checkbox id="deprecated" disabled />
      <Label htmlFor="deprecated" className="text-gray-400">Deprecated</Label>
    </div>
  </div>
</CheckboxGroup>`,
    },
  ],
};
