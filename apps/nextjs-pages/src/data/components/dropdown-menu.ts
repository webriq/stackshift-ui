import type { ComponentDoc } from "./index";

export const dropdownMenuDoc: ComponentDoc = {
  name: "DropdownMenu",
  slug: "dropdown-menu",
  description:
    "A dropdown menu component built on Radix UI for displaying a list of actions or options. Includes comprehensive sub-components: DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuSub, and more.",
  useCases: [
    "User profile and account menus",
    "Context menus and right-click actions",
    "Action menus in data tables and lists",
    "Navigation dropdowns in headers",
    "Bulk action selectors with checkboxes",
  ],
  category: "ui",
  importCode: `import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@stackshift-ui/react";`,
  individualImportCode: `import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from "@stackshift-ui/dropdown-menu";`,
  usageCode: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
  props: [
    {
      name: "open",
      type: "boolean",
      required: false,
      description: "The controlled open state of the dropdown.",
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
      description: "Whether the dropdown is modal.",
    },
  ],
  examples: [
    {
      title: "Basic Dropdown Menu",
      description: "A simple dropdown with menu items.",
      code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
    },
    {
      title: "With Icons and Shortcuts",
      description: "Add icons and keyboard shortcuts to menu items.",
      code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Actions</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      <User className="mr-2 h-4 w-4" />
      <span>Profile</span>
      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Settings className="mr-2 h-4 w-4" />
      <span>Settings</span>
      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <LogOut className="mr-2 h-4 w-4" />
      <span>Log out</span>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
    },
    {
      title: "With Checkboxes",
      description: "Use checkbox items for multi-select options.",
      code: `const [showPanel, setShowPanel] = React.useState(true);
const [showSidebar, setShowSidebar] = React.useState(false);

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">View</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Toggle Views</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuCheckboxItem
      checked={showPanel}
      onCheckedChange={setShowPanel}
    >
      Side Panel
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem
      checked={showSidebar}
      onCheckedChange={setShowSidebar}
    >
      Sidebar
    </DropdownMenuCheckboxItem>
  </DropdownMenuContent>
</DropdownMenu>`,
    },
    {
      title: "With Radio Groups",
      description: "Use radio items for single-select options.",
      code: `const [position, setPosition] = React.useState("bottom");

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Position</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
      <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
  </DropdownMenuContent>
</DropdownMenu>`,
    },
    {
      title: "With Sub-menus",
      description: "Create nested dropdown menus.",
      code: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">More</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>New Tab</DropdownMenuItem>
    <DropdownMenuItem>New Window</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem>Email</DropdownMenuItem>
        <DropdownMenuItem>Messages</DropdownMenuItem>
        <DropdownMenuItem>Copy Link</DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  </DropdownMenuContent>
</DropdownMenu>`,
    },
  ],
};
