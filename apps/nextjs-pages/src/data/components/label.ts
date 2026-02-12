import type { ComponentDoc } from "./index";

export const labelDoc: ComponentDoc = {
  name: "Label",
  slug: "label",
  description:
    "A label component built on Radix UI for form field labels. Provides proper accessibility attributes and automatic association with form controls.",
  useCases: [
    "Form field labels",
    "Checkbox and radio button labels",
    "Input field descriptions",
    "Settings and configuration labels",
    "Accessible form markup",
  ],
  category: "ui",
  importCode: `import { Label } from "@stackshift-ui/react";`,
  individualImportCode: `import { Label } from "@stackshift-ui/label";`,
  usageCode: `<Label htmlFor="email">Email</Label>`,
  props: [
    {
      name: "htmlFor",
      type: "string",
      required: false,
      description: "The ID of the form element this label is associated with.",
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
      description: "The label text or content.",
    },
  ],
  examples: [
    {
      title: "Basic Label",
      description: "A simple label for an input field.",
      code: `<div className="space-y-2">
  <Label htmlFor="name">Name</Label>
  <Input id="name" type="text" />
</div>`,
    },
    {
      title: "Label with Required Indicator",
      description: "Show required field with asterisk.",
      code: `<div className="space-y-2">
  <Label htmlFor="email">
    Email <span className="text-destructive">*</span>
  </Label>
  <Input id="email" type="email" required />
</div>`,
    },
    {
      title: "Label for Checkbox",
      description: "Label associated with a checkbox.",
      code: `<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms" className="cursor-pointer">
    Accept terms and conditions
  </Label>
</div>`,
    },
    {
      title: "Label with Description",
      description: "Label with additional help text.",
      code: `<div className="space-y-2">
  <Label htmlFor="username">
    Username
  </Label>
  <Input id="username" type="text" />
  <p className="text-sm text-muted-foreground">
    Choose a unique username for your account.
  </p>
</div>`,
    },
    {
      title: "Disabled Label",
      description: "Label for disabled form controls.",
      code: `<div className="space-y-2">
  <Label htmlFor="disabled" className="text-muted-foreground">
    Disabled Field
  </Label>
  <Input id="disabled" type="text" disabled />
</div>`,
    },
  ],
};
