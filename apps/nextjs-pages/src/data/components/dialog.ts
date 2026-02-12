import type { ComponentDoc } from "./index";

export const dialogDoc: ComponentDoc = {
  name: "Dialog",
  slug: "dialog",
  description:
    "A modal dialog component built on Radix UI for displaying content that requires user attention. Includes multiple sub-components: DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose, DialogOverlay, and DialogPortal.",
  useCases: [
    "Confirmation dialogs for destructive actions",
    "Forms and data entry modals",
    "Alert and notification messages",
    "Image galleries and media viewers",
    "Multi-step wizards and onboarding flows",
  ],
  category: "ui",
  importCode: `import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from "@stackshift-ui/react";`,
  individualImportCode: `import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from "@stackshift-ui/dialog";`,
  usageCode: `<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description here.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
  props: [
    {
      name: "open",
      type: "boolean",
      required: false,
      description: "The controlled open state of the dialog.",
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
      default: "true",
      description: "Whether the dialog is modal (blocks interaction with content behind).",
    },
    {
      name: "showCloseButton",
      type: "boolean",
      required: false,
      default: "true",
      description: "Whether to show the close button in the top-right corner of DialogContent.",
    },
  ],
  examples: [
    {
      title: "Basic Dialog",
      description: "A simple dialog with title and description.",
      code: `<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Welcome</DialogTitle>
      <DialogDescription>
        This is a simple dialog example.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`,
    },
    {
      title: "Confirmation Dialog",
      description: "A dialog for confirming destructive actions.",
      code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button variant="destructive">Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
    },
    {
      title: "Form Dialog",
      description: "A dialog containing a form.",
      code: `<Dialog>
  <DialogTrigger asChild>
    <Button>Edit Profile</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here.
      </DialogDescription>
    </DialogHeader>
    <div className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue="John Doe" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" defaultValue="john@example.com" />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
    },
    {
      title: "Controlled Dialog",
      description: "Control the dialog state with React state.",
      code: `const [open, setOpen] = React.useState(false);

<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Controlled Dialog</DialogTitle>
    </DialogHeader>
    <DialogFooter>
      <Button onClick={() => setOpen(false)}>Close</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
    },
    {
      title: "Without Close Button",
      description: "A dialog without the default close button. Users must use the action buttons to close.",
      code: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open Dialog</Button>
  </DialogTrigger>
  <DialogContent showCloseButton={false}>
    <DialogHeader>
      <DialogTitle>Action Required</DialogTitle>
      <DialogDescription>
        Please confirm or cancel this action. The close button is hidden.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <DialogClose asChild>
        <Button>Confirm</Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
    },
  ],
};
