import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@stackshift-ui/react";
import { Button } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  ChevronDown,
  MoreHorizontal,
  Edit,
  Copy,
  Trash,
  Archive,
  Share,
  Download,
} from "lucide-react";
import { useState } from "react";

const meta: Meta<typeof DropdownMenu> = {
  title: "Common/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A feature-rich and accessible dropdown menu component built on Radix UI primitives. Supports nested sub-menus, checkbox items, radio groups, keyboard navigation, and ARIA compliance. Includes destructive actions, shortcuts, icons, and complex hierarchical structures. Perfect for context menus, navigation, settings panels, and user actions.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    defaultOpen: {
      control: { type: "boolean" },
      description: "Whether the dropdown is open by default",
    },
    modal: {
      control: { type: "boolean" },
      description: "Whether the dropdown should be modal",
    },
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User />
          Profile
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard />
          Billing
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings />
          Settings
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Keyboard />
          Keyboard shortcuts
          <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Users />
          Team
        </DropdownMenuItem>
        <DropdownMenuItem>
          <UserPlus />
          Invite users
          <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Plus />
          New Team
          <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Github />
          GitHub
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy />
          Support
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud />
          API
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut />
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: "Basic dropdown menu with icons, shortcuts, and separators.",
      },
    },
  },
};

export const WithCheckboxes: Story = {
  render: () => {
    const [showStatusBar, setShowStatusBar] = useState(true);
    const [showActivityBar, setShowActivityBar] = useState(false);
    const [showPanel, setShowPanel] = useState(false);

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">View Options</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
            disabled
          >
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Dropdown menu with checkbox items for toggling options.",
      },
    },
  },
};

export const WithRadioGroup: Story = {
  render: () => {
    const [position, setPosition] = useState("bottom");

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Panel Position</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Dropdown menu with radio group for selecting single options.",
      },
    },
  },
};

export const WithSubMenus: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">More Options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <Mail />
          Email
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MessageSquare />
          Message
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <UserPlus />
            Invite users
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <Mail />
              Email
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MessageSquare />
              Message
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <PlusCircle />
              More...
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Plus />
            Create
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>New Document</DropdownMenuItem>
            <DropdownMenuItem>New Folder</DropdownMenuItem>
            <DropdownMenuItem>New Project</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>From Template</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Github />
          GitHub
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy />
          Support
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: "Dropdown menu with nested sub-menus for hierarchical navigation.",
      },
    },
  },
};

export const ContextMenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <Edit />
          Edit
          <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Copy />
          Copy
          <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Share />
          Share
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Download />
          Download
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Archive />
          Archive
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive">
          <Trash />
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: "Context menu style dropdown with common actions including destructive items.",
      },
    },
  },
};

export const WithGroups: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Account
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User />
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard />
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings />
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users />
            Team
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus />
              Invite users
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Mail />
                Email
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquare />
                Message
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusCircle />
                More...
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <Plus />
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Github />
          GitHub
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy />
          Support
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud />
          API
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut />
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: "Dropdown menu with grouped items for better organization.",
      },
    },
  },
};

export const SimpleActions: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          Actions
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>View</DropdownMenuItem>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Copy</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: "Simple dropdown menu with basic actions, no icons or shortcuts.",
      },
    },
  },
};

export const WithInsetItems: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">File Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <Plus />
          New File
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Copy />
          New from Template
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Recent Files</DropdownMenuLabel>
        <DropdownMenuItem inset>document.pdf</DropdownMenuItem>
        <DropdownMenuItem inset>spreadsheet.xlsx</DropdownMenuItem>
        <DropdownMenuItem inset>presentation.pptx</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Settings />
          Preferences
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: "Dropdown menu with inset items for hierarchical content structure.",
      },
    },
  },
};

export const DisabledStates: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Mixed States</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <User />
          Available Action
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Settings />
          Disabled Action
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Mail />
          Another Available Action
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked disabled>
          Disabled Checked
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={false} disabled>
          Disabled Unchecked
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value="option1">
          <DropdownMenuRadioItem value="option1">
            Available Option
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="option2" disabled>
            Disabled Option
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: "Dropdown menu showing various disabled states for different item types.",
      },
    },
  },
};

export const AccessibilityFeatures: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" aria-label="Open accessibility menu">
          Accessibility Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Accessibility Options</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Keyboard />
          Keyboard Navigation
          <DropdownMenuShortcut>Tab</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings />
          Screen Reader Mode
          <DropdownMenuShortcut>Alt+S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <User />
          High Contrast (Coming Soon)
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuLabel>Font Size</DropdownMenuLabel>
          <DropdownMenuItem inset>Small</DropdownMenuItem>
          <DropdownMenuItem inset>Medium</DropdownMenuItem>
          <DropdownMenuItem inset>Large</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: "Dropdown menu demonstrating accessibility features including keyboard shortcuts, ARIA labels, and screen reader support.",
      },
    },
  },
};

export const DestructiveActions: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Edit />
          Edit Item
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Copy />
          Duplicate
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Share />
          Share
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Archive />
          Archive
        </DropdownMenuItem>
        <DropdownMenuItem variant="destructive">
          <Trash />
          Delete Forever
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: "Dropdown menu with destructive actions properly styled and separated from regular actions.",
      },
    },
  },
};

export const ComplexNesting: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Complex Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>File Operations</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Plus />
            New
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Document</DropdownMenuItem>
            <DropdownMenuItem>Spreadsheet</DropdownMenuItem>
            <DropdownMenuItem>Presentation</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>From Template</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Business Plan</DropdownMenuItem>
                <DropdownMenuItem>Project Proposal</DropdownMenuItem>
                <DropdownMenuItem>Meeting Notes</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Download />
            Export
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>PDF</DropdownMenuItem>
            <DropdownMenuItem>Word Document</DropdownMenuItem>
            <DropdownMenuItem>Excel Spreadsheet</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>All Formats (ZIP)</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Settings />
          Preferences
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: "Complex nested dropdown menu with multiple levels of sub-menus and various content types.",
      },
    },
  },
};