import type { ComponentDoc } from "./index";

export const selectDoc: ComponentDoc = {
  name: "Select",
  slug: "select",
  description:
    "A select dropdown component built on Radix UI for choosing from a list of options. Includes comprehensive sub-components: SelectTrigger, SelectValue, SelectContent, SelectItem, SelectLabel, SelectSeparator, SelectGroup, SelectScrollUpButton, and SelectScrollDownButton.",
  useCases: [
    "Form dropdown selections",
    "Filter and sort controls",
    "Language and region pickers",
    "Settings and preference selectors",
    "Category and status selectors",
  ],
  category: "ui",
  importCode: `import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectGroup
} from "@stackshift-ui/react";`,
  individualImportCode: `import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectGroup
} from "@stackshift-ui/select";`,
  usageCode: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
  </SelectContent>
</Select>`,
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
      description: "Whether the select is disabled.",
    },
    {
      name: "required",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether selection is required.",
    },
    {
      name: "name",
      type: "string",
      required: false,
      description: "The name attribute for form submission.",
    },
    {
      name: "open",
      type: "boolean",
      required: false,
      description: "The controlled open state.",
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      required: false,
      description: "Callback when the open state changes.",
    },
  ],
  examples: [
    {
      title: "Basic Select",
      description: "A simple select dropdown.",
      code: `<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
    <SelectItem value="grape">Grape</SelectItem>
  </SelectContent>
</Select>`,
    },
    {
      title: "With Groups",
      description: "Organize options into labeled groups.",
      code: `<Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Select timezone" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value="est">Eastern Standard Time</SelectItem>
      <SelectItem value="cst">Central Standard Time</SelectItem>
      <SelectItem value="pst">Pacific Standard Time</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Europe</SelectLabel>
      <SelectItem value="gmt">Greenwich Mean Time</SelectItem>
      <SelectItem value="cet">Central European Time</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`,
    },
    {
      title: "Controlled Select",
      description: "Control the select value with React state.",
      code: `const [value, setValue] = React.useState("");

<div className="space-y-2">
  <Select value={value} onValueChange={setValue}>
    <SelectTrigger className="w-[200px]">
      <SelectValue placeholder="Select a language" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="en">English</SelectItem>
      <SelectItem value="es">Spanish</SelectItem>
      <SelectItem value="fr">French</SelectItem>
      <SelectItem value="de">German</SelectItem>
    </SelectContent>
  </Select>
  {value && <p className="text-sm">Selected: {value}</p>}
</div>`,
    },
    {
      title: "With Label",
      description: "Select with a form label.",
      code: `<div className="space-y-2">
  <Label htmlFor="framework">Framework</Label>
  <Select>
    <SelectTrigger id="framework" className="w-[200px]">
      <SelectValue placeholder="Choose framework" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="react">React</SelectItem>
      <SelectItem value="vue">Vue</SelectItem>
      <SelectItem value="angular">Angular</SelectItem>
      <SelectItem value="svelte">Svelte</SelectItem>
    </SelectContent>
  </Select>
</div>`,
    },
    {
      title: "Disabled Select",
      description: "Select in disabled state.",
      code: `<Select disabled>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Option 1</SelectItem>
    <SelectItem value="2">Option 2</SelectItem>
  </SelectContent>
</Select>`,
    },
  ],
};
