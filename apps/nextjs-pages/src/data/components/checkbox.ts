import type { ComponentDoc } from "./index";

export const checkboxDoc: ComponentDoc = {
  name: "Checkbox",
  slug: "checkbox",
  description:
    "A checkbox component for binary selections built on Radix UI. Supports checked, unchecked, and indeterminate states with full keyboard navigation and accessibility.",
  useCases: [
    "Form inputs for yes/no or true/false selections",
    "Multi-select lists and data tables",
    "Terms and conditions acceptance",
    "Feature toggles and settings panels",
    "Task lists and todo applications",
  ],
  category: "ui",
  importCode: `import { Checkbox } from "@stackshift-ui/react";`,
  individualImportCode: `import { Checkbox } from "@stackshift-ui/checkbox";`,
  usageCode: `<Checkbox id="terms" />`,
  props: [
    {
      name: "checked",
      type: 'boolean | "indeterminate"',
      required: false,
      description: "The controlled checked state of the checkbox.",
    },
    {
      name: "defaultChecked",
      type: "boolean",
      required: false,
      description: "The default checked state when uncontrolled.",
    },
    {
      name: "onCheckedChange",
      type: "(checked: boolean | 'indeterminate') => void",
      required: false,
      description: "Callback when the checked state changes.",
    },
    {
      name: "disabled",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether the checkbox is disabled.",
    },
    {
      name: "required",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether the checkbox is required in a form.",
    },
    {
      name: "name",
      type: "string",
      required: false,
      description: "The name attribute for form submission.",
    },
    {
      name: "value",
      type: "string",
      required: false,
      description: "The value attribute for form submission.",
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
      title: "Basic Checkbox",
      description: "A simple checkbox with label.",
      code: `<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <label htmlFor="terms" className="text-sm font-medium">
    Accept terms and conditions
  </label>
</div>`,
    },
    {
      title: "Controlled Checkbox",
      description: "Control the checkbox state with React state.",
      code: `const [checked, setChecked] = React.useState(false);

<div className="flex items-center space-x-2">
  <Checkbox
    id="notifications"
    checked={checked}
    onCheckedChange={setChecked}
  />
  <label htmlFor="notifications" className="text-sm">
    Enable notifications
  </label>
</div>`,
    },
    {
      title: "Disabled Checkbox",
      description: "A checkbox in disabled state.",
      code: `<div className="flex items-center space-x-2">
  <Checkbox id="disabled" disabled />
  <label htmlFor="disabled" className="text-sm text-muted-foreground">
    This option is disabled
  </label>
</div>`,
    },
    {
      title: "With Description",
      description: "Checkbox with additional descriptive text.",
      code: `<div className="space-y-2">
  <div className="flex items-center space-x-2">
    <Checkbox id="marketing" />
    <label htmlFor="marketing" className="text-sm font-medium">
      Marketing emails
    </label>
  </div>
  <p className="text-sm text-muted-foreground ml-6">
    Receive emails about new products, features, and more.
  </p>
</div>`,
    },
  ],
};
