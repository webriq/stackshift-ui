import type { ComponentDoc } from "./index";

export const radioGroupDoc: ComponentDoc = {
  name: "RadioGroup",
  slug: "radio-group",
  description:
    "A radio group component built on Radix UI for managing a set of radio buttons with coordinated state. Ensures only one option can be selected at a time. Includes RadioGroupItem sub-component.",
  useCases: [
    "Single-choice form fields",
    "Settings and configuration options",
    "Subscription plan selection",
    "Shipping and payment methods",
    "Survey and questionnaire responses",
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
      description: "The controlled selected value.",
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
      description: "Whether the entire group is disabled.",
    },
    {
      name: "required",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether selection is required.",
    },
    {
      name: "orientation",
      type: '"horizontal" | "vertical"',
      required: false,
      default: '"vertical"',
      description: "The orientation of the radio group.",
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
      title: "Basic Radio Group",
      description: "A simple radio group with options.",
      code: `<RadioGroup defaultValue="comfortable">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Default</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Comfortable</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="compact" id="r3" />
    <Label htmlFor="r3">Compact</Label>
  </div>
</RadioGroup>`,
    },
    {
      title: "Controlled Radio Group",
      description: "Control the selected value with React state.",
      code: `const [value, setValue] = React.useState("card");

<RadioGroup value={value} onValueChange={setValue}>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="card" id="card" />
    <Label htmlFor="card">Credit Card</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="paypal" id="paypal" />
    <Label htmlFor="paypal">PayPal</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="apple" id="apple" />
    <Label htmlFor="apple">Apple Pay</Label>
  </div>
</RadioGroup>

<p className="mt-2 text-sm">Selected: {value}</p>`,
    },
    {
      title: "With Descriptions",
      description: "Add descriptive text to each option.",
      code: `<RadioGroup defaultValue="starter">
  <div className="space-y-2">
    <div className="flex items-start space-x-2">
      <RadioGroupItem value="starter" id="starter" className="mt-1" />
      <div>
        <Label htmlFor="starter" className="font-medium">Starter Plan</Label>
        <p className="text-sm text-muted-foreground">
          Perfect for individuals and small projects
        </p>
      </div>
    </div>
    <div className="flex items-start space-x-2">
      <RadioGroupItem value="pro" id="pro" className="mt-1" />
      <div>
        <Label htmlFor="pro" className="font-medium">Pro Plan</Label>
        <p className="text-sm text-muted-foreground">
          Best for growing teams and businesses
        </p>
      </div>
    </div>
  </div>
</RadioGroup>`,
    },
    {
      title: "Horizontal Layout",
      description: "Display radio buttons in a horizontal row.",
      code: `<RadioGroup defaultValue="all" orientation="horizontal" className="flex space-x-4">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="all" id="all" />
    <Label htmlFor="all">All</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="active" id="active" />
    <Label htmlFor="active">Active</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="archived" id="archived" />
    <Label htmlFor="archived">Archived</Label>
  </div>
</RadioGroup>`,
    },
    {
      title: "With Disabled Options",
      description: "Disable specific options in the group.",
      code: `<RadioGroup defaultValue="standard">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="standard" id="standard" />
    <Label htmlFor="standard">Standard Shipping</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="express" id="express" />
    <Label htmlFor="express">Express Shipping</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="overnight" id="overnight" disabled />
    <Label htmlFor="overnight" className="text-muted-foreground">
      Overnight (Unavailable)
    </Label>
  </div>
</RadioGroup>`,
    },
  ],
};
