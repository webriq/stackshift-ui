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
  usageCode: `<CheckboxGroup
  options={[
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" }
  ]}
/>`,
  props: [
    {
      name: "options",
      type: "Array<{ label: string; value: string; disabled?: boolean }>",
      required: true,
      description: "Array of checkbox options with labels and values.",
    },
    {
      name: "value",
      type: "string[]",
      required: false,
      description: "The controlled selected values.",
    },
    {
      name: "defaultValue",
      type: "string[]",
      required: false,
      description: "The default selected values when uncontrolled.",
    },
    {
      name: "onValueChange",
      type: "(value: string[]) => void",
      required: false,
      description: "Callback when the selection changes.",
    },
    {
      name: "disabled",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether the entire group is disabled.",
    },
    {
      name: "orientation",
      type: '"horizontal" | "vertical"',
      required: false,
      default: '"vertical"',
      description: "The layout orientation of the checkboxes.",
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
      description: "A simple group of checkboxes.",
      code: `<CheckboxGroup
  options={[
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Angular", value: "angular" }
  ]}
/>`,
    },
    {
      title: "Controlled Checkbox Group",
      description: "Control the checkbox group selection with state.",
      code: `const [values, setValues] = React.useState<string[]>([]);

<CheckboxGroup
  options={[
    { label: "Email", value: "email" },
    { label: "SMS", value: "sms" },
    { label: "Push", value: "push" }
  ]}
  value={values}
  onValueChange={setValues}
/>`,
    },
    {
      title: "Horizontal Layout",
      description: "Display checkboxes in a horizontal row.",
      code: `<CheckboxGroup
  orientation="horizontal"
  options={[
    { label: "Small", value: "sm" },
    { label: "Medium", value: "md" },
    { label: "Large", value: "lg" }
  ]}
/>`,
    },
    {
      title: "With Disabled Options",
      description: "Disable specific options in the group.",
      code: `<CheckboxGroup
  options={[
    { label: "Available", value: "available" },
    { label: "Coming Soon", value: "soon", disabled: true },
    { label: "Deprecated", value: "deprecated", disabled: true }
  ]}
/>`,
    },
  ],
};
