import type { ComponentDoc } from "./index";

export const formFieldDoc: ComponentDoc = {
  name: "FormField",
  slug: "form-field",
  description:
    "A versatile form field component that renders different input types based on the type prop. Supports text inputs, email, password, number, textarea, file upload, radio buttons, select dropdowns, and checkboxes. Must be used within a Form component.",
  useCases: [
    "Rendering different form input types dynamically",
    "Building forms with consistent field styling",
    "Select dropdowns with predefined options",
    "Radio button groups and checkboxes",
    "Text, email, and password input fields",
  ],
  category: "ui",
  importCode: `import { Form, FormField } from "@stackshift-ui/react";`,
  individualImportCode: `import { FormField } from "@stackshift-ui/form-field";`,
  usageCode: `<Form name="my-form">
  <FormField
    type="inputText"
    name="username"
    label="Username"
    placeholder="Enter your username"
  />
</Form>`,
  props: [
    {
      name: "type",
      type: '"inputText" | "inputEmail" | "inputPassword" | "inputNumber" | "textarea" | "inputFile" | "inputRadio" | "inputCheckbox" | "inputSelect"',
      required: false,
      default: '"inputText"',
      description: "The type of form field to render.",
    },
    {
      name: "name",
      type: "string",
      required: true,
      description: "The name attribute for the form field.",
    },
    {
      name: "label",
      type: "string",
      required: false,
      description: "Label text displayed above the field.",
    },
    {
      name: "placeholder",
      type: "string",
      required: false,
      description: "Placeholder text for the input.",
    },
    {
      name: "items",
      type: "string[]",
      required: false,
      description: "Array of options for select or radio field types.",
    },
    {
      name: "variant",
      type: '"primary" | "secondary" | "outline"',
      required: false,
      default: '"primary"',
      description: "The visual style variant of the field.",
    },
    {
      name: "isRequired",
      type: "boolean",
      required: false,
      description: "Whether the field is required.",
    },
  ],
  examples: [
    {
      title: "Text Input Field",
      description: "A basic text input field with label and placeholder.",
      code: `<Form name="text-form">
  <FormField
    type="inputText"
    name="username"
    label="Username"
    placeholder="Enter your username"
  />
</Form>`,
    },
    {
      title: "Email Input Field",
      description: "An email input field with validation type.",
      code: `<Form name="email-form">
  <FormField
    type="inputEmail"
    name="email"
    label="Email Address"
    placeholder="you@example.com"
  />
</Form>`,
    },
    {
      title: "Password Input Field",
      description: "A password input field with masked characters.",
      code: `<Form name="password-form">
  <FormField
    type="inputPassword"
    name="password"
    label="Password"
    placeholder="Enter your password"
  />
</Form>`,
    },
    {
      title: "Number Input Field",
      description: "A number input field for numeric values.",
      code: `<Form name="number-form">
  <FormField
    type="inputNumber"
    name="quantity"
    label="Quantity"
    placeholder="Enter a number"
  />
</Form>`,
    },
    {
      title: "Textarea Field",
      description: "A multi-line text area for longer content.",
      code: `<Form name="textarea-form">
  <FormField
    type="textarea"
    name="message"
    label="Your Message"
    placeholder="Type your message here..."
  />
</Form>`,
    },
    {
      title: "Select Dropdown",
      description: "A select dropdown with predefined options.",
      code: `<Form name="select-form">
  <FormField
    type="inputSelect"
    name="country"
    label="Country"
    items={["United States", "Canada", "United Kingdom", "Australia"]}
  />
</Form>`,
    },
    {
      title: "Radio Button Group",
      description: "Radio buttons for single-choice selection.",
      code: `<Form name="radio-form">
  <FormField
    type="inputRadio"
    name="plan"
    label="Select Plan"
    items={["Basic", "Pro", "Enterprise"]}
  />
</Form>`,
    },
    {
      title: "Checkbox Field",
      description: "A checkbox for boolean options. Use noLabel to show only the item label.",
      code: `<Form name="checkbox-form">
  <FormField
    type="inputCheckbox"
    name="terms"
    label="I agree to the terms and conditions"
    items={["terms"]}
    noLabel
  />
</Form>`,
    },
    {
      title: "File Input Field",
      description: "A file input for uploading files.",
      code: `<Form name="file-form">
  <FormField
    type="inputFile"
    name="document"
    label="Upload Document"
  />
</Form>`,
    },
  ],
};
