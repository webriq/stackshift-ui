import type { ComponentDoc } from "./index";

export const popoverDoc: ComponentDoc = {
  name: "Popover",
  slug: "popover",
  description:
    "A popover component built on Radix UI for displaying content in a floating panel. Includes sub-components: PopoverTrigger, PopoverContent, and PopoverAnchor for flexible positioning and interaction patterns.",
  useCases: [
    "Additional information and help text",
    "User profile quick views",
    "Action menus and option selectors",
    "Date pickers and color pickers",
    "Form field suggestions and autocomplete",
  ],
  category: "ui",
  importCode: `import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor
} from "@stackshift-ui/react";`,
  individualImportCode: `import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor
} from "@stackshift-ui/popover";`,
  usageCode: `<Popover>
  <PopoverTrigger asChild>
    <Button>Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <p>Popover content here</p>
  </PopoverContent>
</Popover>`,
  props: [
    {
      name: "open",
      type: "boolean",
      required: false,
      description: "The controlled open state of the popover.",
    },
    {
      name: "defaultOpen",
      type: "boolean",
      required: false,
      description: "The default open state when uncontrolled.",
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      required: false,
      description: "Callback when the open state changes.",
    },
    {
      name: "modal",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether the popover is modal.",
    },
  ],
  examples: [
    {
      title: "Basic Popover",
      description: "A simple popover with content.",
      code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h4 className="font-medium">Information</h4>
      <p className="text-sm text-muted-foreground">
        This is some helpful information displayed in a popover.
      </p>
    </div>
  </PopoverContent>
</Popover>`,
    },
    {
      title: "Popover with Form",
      description: "Use popover for inline forms.",
      code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Edit Profile</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-4">
      <h4 className="font-medium">Update Profile</h4>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue="John Doe" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" defaultValue="john@example.com" />
      </div>
      <Button className="w-full">Save</Button>
    </div>
  </PopoverContent>
</Popover>`,
    },
    {
      title: "Controlled Popover",
      description: "Control the popover state with React state.",
      code: `const [open, setOpen] = React.useState(false);

<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button variant="outline">Toggle</Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <p>Controlled popover content</p>
      <Button onClick={() => setOpen(false)} size="sm">
        Close
      </Button>
    </div>
  </PopoverContent>
</Popover>`,
    },
    {
      title: "Popover with Custom Positioning",
      description: "Customize popover placement.",
      code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open</Button>
  </PopoverTrigger>
  <PopoverContent side="top" align="start">
    <p className="text-sm">
      This popover opens above the trigger and aligns to the start.
    </p>
  </PopoverContent>
</Popover>`,
    },
  ],
};
