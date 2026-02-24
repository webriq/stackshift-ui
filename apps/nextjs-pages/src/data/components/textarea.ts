import type { ComponentDoc } from "./index";

export const textareaDoc: ComponentDoc = {
  name: "Textarea",
  slug: "textarea",
  description:
    "A multi-line text input component that extends the native HTML textarea element with consistent styling and focus states. Ideal for longer text input and comments.",
  useCases: [
    "Multi-line form inputs",
    "Comment and feedback forms",
    "Message and email composition",
    "Description and bio fields",
    "Code and content editors",
  ],
  category: "ui",
  importCode: `import { Textarea } from "@stackshift-ui/react";`,
  individualImportCode: `import { Textarea } from "@stackshift-ui/textarea";`,
  usageCode: `<Textarea placeholder="Type your message here" />`,
  props: [
    {
      name: "placeholder",
      type: "string",
      required: false,
      description: "Placeholder text displayed when textarea is empty.",
    },
    {
      name: "value",
      type: "string",
      required: false,
      description: "The controlled value of the textarea.",
    },
    {
      name: "defaultValue",
      type: "string",
      required: false,
      description: "The default value for uncontrolled textarea.",
    },
    {
      name: "onChange",
      type: "(event: React.ChangeEvent<HTMLTextAreaElement>) => void",
      required: false,
      description: "Callback when the textarea value changes.",
    },
    {
      name: "rows",
      type: "number",
      required: false,
      description: "The number of visible text rows.",
    },
    {
      name: "disabled",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether the textarea is disabled.",
    },
    {
      name: "required",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether the textarea is required in a form.",
    },
    {
      name: "maxLength",
      type: "number",
      required: false,
      description: "Maximum number of characters allowed.",
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
      title: "Basic Textarea",
      description: "A simple multi-line text input.",
      code: `<Textarea placeholder="Type your message here" />`,
    },
    {
      title: "With Label",
      description: "Textarea with an associated label.",
      code: `<div className="space-y-2">
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" placeholder="Enter your message..." />
</div>`,
    },
    {
      title: "Controlled Textarea",
      description: "Control the textarea value with React state.",
      code: `const [value, setValue] = React.useState("");

<div className="space-y-2">
  <Label htmlFor="bio">Bio</Label>
  <Textarea
    id="bio"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    placeholder="Tell us about yourself..."
  />
  <p className="text-sm text-muted-foreground">
    {value.length} / 250 characters
  </p>
</div>`,
    },
    {
      title: "Custom Rows",
      description: "Control the visible height of the textarea.",
      code: `<div className="space-y-4">
  <div className="space-y-2">
    <Label>Small (3 rows)</Label>
    <Textarea rows={3} placeholder="3 rows..." />
  </div>
  <div className="space-y-2">
    <Label>Medium (5 rows)</Label>
    <Textarea rows={5} placeholder="5 rows..." />
  </div>
  <div className="space-y-2">
    <Label>Large (10 rows)</Label>
    <Textarea rows={10} placeholder="10 rows..." />
  </div>
</div>`,
    },
    {
      title: "Disabled Textarea",
      description: "Textarea in disabled state.",
      code: `<Textarea
  placeholder="This textarea is disabled"
  disabled
  defaultValue="Cannot edit this content"
/>`,
    },
    {
      title: "With Character Limit",
      description: "Textarea with maximum length and counter.",
      code: `const [value, setValue] = React.useState("");
const maxLength = 200;

<div className="space-y-2">
  <Label htmlFor="description">Description</Label>
  <Textarea
    id="description"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    maxLength={maxLength}
    placeholder="Enter a description..."
  />
  <p className="text-sm text-muted-foreground text-right">
    {value.length} / {maxLength}
  </p>
</div>`,
    },
  ],
};
