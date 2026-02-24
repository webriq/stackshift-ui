import type { ComponentDoc } from "./index";

export const sheetDoc: ComponentDoc = {
  name: "Sheet",
  slug: "sheet",
  description:
    "A sheet (drawer/sidebar) component built on Radix UI Dialog for displaying content that slides in from the edge of the screen. Includes sub-components: SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, and SheetClose.",
  useCases: [
    "Mobile navigation menus",
    "Filter panels and advanced search",
    "Shopping cart sidebars",
    "User profile quick views",
    "Form wizards and multi-step processes",
  ],
  category: "ui",
  importCode: `import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose
} from "@stackshift-ui/react";`,
  individualImportCode: `import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose
} from "@stackshift-ui/sheet";`,
  usageCode: `<Sheet>
  <SheetTrigger asChild>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
    </SheetHeader>
  </SheetContent>
</Sheet>`,
  props: [
    {
      name: "open",
      type: "boolean",
      required: false,
      description: "The controlled open state of the sheet.",
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
      name: "side",
      type: '"top" | "right" | "bottom" | "left"',
      required: false,
      default: '"right"',
      description: "The side from which the sheet slides in.",
    },
  ],
  examples: [
    {
      title: "Basic Sheet",
      description: "A simple sheet that slides in from the right.",
      code: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
      <SheetDescription>
        This is a description of the sheet content.
      </SheetDescription>
    </SheetHeader>
    <div className="p-4">
      <p>Sheet content goes here.</p>
    </div>
  </SheetContent>
</Sheet>`,
    },
    {
      title: "Sheet Sides",
      description: "Sheets can slide from any edge of the screen.",
      code: `<div className="flex gap-2 flex-wrap">
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Top</Button>
    </SheetTrigger>
    <SheetContent side="top">
      <SheetHeader>
        <SheetTitle>Top Sheet</SheetTitle>
      </SheetHeader>
    </SheetContent>
  </Sheet>

  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Right</Button>
    </SheetTrigger>
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>Right Sheet</SheetTitle>
      </SheetHeader>
    </SheetContent>
  </Sheet>

  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Bottom</Button>
    </SheetTrigger>
    <SheetContent side="bottom">
      <SheetHeader>
        <SheetTitle>Bottom Sheet</SheetTitle>
      </SheetHeader>
    </SheetContent>
  </Sheet>

  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Left</Button>
    </SheetTrigger>
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle>Left Sheet</SheetTitle>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</div>`,
    },
    {
      title: "Sheet with Form",
      description: "Use sheet for side panel forms.",
      code: `<Sheet>
  <SheetTrigger asChild>
    <Button>Edit Profile</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit Profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here.
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 p-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue="John Doe" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" defaultValue="john@example.com" />
      </div>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button type="submit">Save changes</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
    },
    {
      title: "Controlled Sheet",
      description: "Control the sheet state with React state.",
      code: `const [open, setOpen] = React.useState(false);

<Sheet open={open} onOpenChange={setOpen}>
  <SheetTrigger asChild>
    <Button>Open</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Controlled Sheet</SheetTitle>
    </SheetHeader>
    <div className="p-4">
      <Button onClick={() => setOpen(false)}>Close Sheet</Button>
    </div>
  </SheetContent>
</Sheet>`,
    },
  ],
};
