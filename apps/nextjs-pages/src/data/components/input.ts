import type { ComponentDoc } from "./index";

export const inputDoc: ComponentDoc = {
  name: "Input",
  slug: "input",
  description:
    "A styled text input component that extends the native HTML input element with consistent design and focus states. Supports all standard HTML input types and attributes.",
  useCases: [
    "Form text fields for user input",
    "Search bars and filters",
    "Login and registration forms",
    "Data entry and edit interfaces",
    "Number, date, and specialized input types",
  ],
  category: "ui",
  importCode: `import { Input } from "@stackshift-ui/react";`,
  individualImportCode: `import { Input } from "@stackshift-ui/input";`,
  usageCode: `<Input type="text" placeholder="Enter text" />`,
  props: [
    {
      name: "type",
      type: '"text" | "email" | "password" | "number" | "tel" | "url" | "search" | "date" | "time" | etc.',
      required: false,
      default: '"text"',
      description: "The HTML input type.",
    },
    {
      name: "placeholder",
      type: "string",
      required: false,
      description: "Placeholder text displayed when input is empty.",
    },
    {
      name: "value",
      type: "string | number",
      required: false,
      description: "The controlled value of the input.",
    },
    {
      name: "defaultValue",
      type: "string | number",
      required: false,
      description: "The default value for uncontrolled input.",
    },
    {
      name: "onChange",
      type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
      required: false,
      description: "Callback when the input value changes.",
    },
    {
      name: "disabled",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether the input is disabled.",
    },
    {
      name: "required",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether the input is required in a form.",
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
      title: "Basic Input",
      description: "A simple text input field.",
      code: `<Input type="text" placeholder="Enter your name" />`,
    },
    {
      title: "Input with Label",
      description: "Input field with associated label.",
      code: `<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`,
    },
    {
      title: "Password Input",
      description: "Password field with masked input.",
      code: `<div className="space-y-2">
  <Label htmlFor="password">Password</Label>
  <Input id="password" type="password" placeholder="••••••••" />
</div>`,
    },
    {
      title: "Controlled Input",
      description: "Input with controlled state.",
      code: `const [value, setValue] = React.useState("");

<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Type something..."
/>`,
    },
    {
      title: "Disabled Input",
      description: "Input in disabled state.",
      code: `<Input
  type="text"
  placeholder="Disabled input"
  disabled
  defaultValue="Cannot edit this"
/>`,
    },
    {
      title: "Input Types",
      description: "Different HTML input types.",
      code: `<div className="space-y-4">
  <Input type="email" placeholder="Email" />
  <Input type="password" placeholder="Password" />
  <Input type="number" placeholder="Number" />
  <Input type="tel" placeholder="Phone" />
  <Input type="url" placeholder="Website URL" />
  <Input type="search" placeholder="Search..." />
</div>`,
    },
  ],
};
