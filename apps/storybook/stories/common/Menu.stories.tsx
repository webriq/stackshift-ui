import { 
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  MenuSeparator,
  MenuLabel,
  MenuGroup,
  MenuSub,
  MenuSubContent,
  MenuSubTrigger,
} from "@stackshift-ui/react";
import { Button } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Menu> = {
  title: "Common/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A menu component built on Radix UI primitives for displaying contextual actions and navigation options.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: { type: "boolean" },
      description: "Whether the menu is open",
    },
    modal: {
      control: { type: "boolean" },
      description: "Whether the menu is modal",
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">Open Menu</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem>New File</MenuItem>
        <MenuItem>Open File</MenuItem>
        <MenuItem>Save</MenuItem>
        <MenuSeparator />
        <MenuItem>Exit</MenuItem>
      </MenuContent>
    </Menu>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">
          <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
          Actions
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem>
          <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          New
        </MenuItem>
        <MenuItem>
          <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          Edit
        </MenuItem>
        <MenuItem>
          <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy
        </MenuItem>
        <MenuSeparator />
        <MenuItem className="text-red-600">
          <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Delete
        </MenuItem>
      </MenuContent>
    </Menu>
  ),
};

export const ContextMenu: Story = {
  render: () => {
    const [lastAction, setLastAction] = useState<string>("");

    return (
      <div className="space-y-4">
        <Menu>
          <MenuTrigger asChild>
            <div className="w-64 h-32 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50">
              Right-click or tap for context menu
            </div>
          </MenuTrigger>
          <MenuContent>
            <MenuLabel>Actions</MenuLabel>
            <MenuItem onClick={() => setLastAction("Cut")}>
              Cut
            </MenuItem>
            <MenuItem onClick={() => setLastAction("Copy")}>
              Copy
            </MenuItem>
            <MenuItem onClick={() => setLastAction("Paste")}>
              Paste
            </MenuItem>
            <MenuSeparator />
            <MenuItem onClick={() => setLastAction("Select All")}>
              Select All
            </MenuItem>
            <MenuSeparator />
            <MenuItem onClick={() => setLastAction("Properties")}>
              Properties
            </MenuItem>
          </MenuContent>
        </Menu>
        
        {lastAction && (
          <p className="text-sm text-gray-600">
            Last action: <strong>{lastAction}</strong>
          </p>
        )}
      </div>
    );
  },
};

export const UserAccountMenu: Story = {
  render: () => (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <img
            className="rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
            alt="User avatar"
          />
        </Button>
      </MenuTrigger>
      <MenuContent className="w-56" align="end">
        <MenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">John Doe</p>
            <p className="text-xs leading-none text-muted-foreground">
              john@example.com
            </p>
          </div>
        </MenuLabel>
        <MenuSeparator />
        <MenuGroup>
          <MenuItem>
            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Profile
          </MenuItem>
          <MenuItem>
            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Billing
          </MenuItem>
          <MenuItem>
            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </MenuItem>
          <MenuItem>
            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Team
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuItem className="text-red-600">
          <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Log out
        </MenuItem>
      </MenuContent>
    </Menu>
  ),
};

export const NestedMenu: Story = {
  render: () => (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">File Menu</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem>New File</MenuItem>
        <MenuItem>Open File</MenuItem>
        <MenuSeparator />
        <MenuSub>
          <MenuSubTrigger>
            Recent Files
            <svg className="h-4 w-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </MenuSubTrigger>
          <MenuSubContent>
            <MenuItem>Document1.txt</MenuItem>
            <MenuItem>Document2.txt</MenuItem>
            <MenuItem>Document3.txt</MenuItem>
            <MenuSeparator />
            <MenuItem>Clear Recent</MenuItem>
          </MenuSubContent>
        </MenuSub>
        <MenuSub>
          <MenuSubTrigger>
            Export
            <svg className="h-4 w-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </MenuSubTrigger>
          <MenuSubContent>
            <MenuItem>Export as PDF</MenuItem>
            <MenuItem>Export as Word</MenuItem>
            <MenuItem>Export as HTML</MenuItem>
            <MenuSeparator />
            <MenuItem>Custom Export...</MenuItem>
          </MenuSubContent>
        </MenuSub>
        <MenuSeparator />
        <MenuItem>Save</MenuItem>
        <MenuItem>Save As...</MenuItem>
        <MenuSeparator />
        <MenuItem>Exit</MenuItem>
      </MenuContent>
    </Menu>
  ),
};

export const TableRowMenu: Story = {
  render: () => {
    const [selectedRow, setSelectedRow] = useState<string>("");

    const users = [
      { id: "1", name: "John Doe", email: "john@example.com", role: "Admin" },
      { id: "2", name: "Jane Smith", email: "jane@example.com", role: "User" },
      { id: "3", name: "Bob Johnson", email: "bob@example.com", role: "User" },
    ];

    return (
      <div className="space-y-4">
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Email</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Role</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-900">{user.name}</td>
                  <td className="px-4 py-2 text-sm text-gray-500">{user.email}</td>
                  <td className="px-4 py-2 text-sm text-gray-500">{user.role}</td>
                  <td className="px-4 py-2">
                    <Menu>
                      <MenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                          </svg>
                        </Button>
                      </MenuTrigger>
                      <MenuContent align="end">
                        <MenuItem onClick={() => setSelectedRow(`View ${user.name}`)}>
                          View Details
                        </MenuItem>
                        <MenuItem onClick={() => setSelectedRow(`Edit ${user.name}`)}>
                          Edit User
                        </MenuItem>
                        <MenuItem onClick={() => setSelectedRow(`Reset password for ${user.name}`)}>
                          Reset Password
                        </MenuItem>
                        <MenuSeparator />
                        <MenuItem 
                          className="text-red-600"
                          onClick={() => setSelectedRow(`Delete ${user.name}`)}
                        >
                          Delete User
                        </MenuItem>
                      </MenuContent>
                    </Menu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {selectedRow && (
          <p className="text-sm text-gray-600">
            Action: <strong>{selectedRow}</strong>
          </p>
        )}
      </div>
    );
  },
};

export const NavigationMenu: Story = {
  render: () => (
    <div className="border-b">
      <nav className="flex space-x-8 px-6 py-4">
        <Menu>
          <MenuTrigger asChild>
            <Button variant="ghost" className="text-sm font-medium">
              Products
              <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
          </MenuTrigger>
          <MenuContent className="w-56">
            <MenuGroup>
              <MenuLabel>Web Development</MenuLabel>
              <MenuItem>React Components</MenuItem>
              <MenuItem>Vue Components</MenuItem>
              <MenuItem>Angular Components</MenuItem>
            </MenuGroup>
            <MenuSeparator />
            <MenuGroup>
              <MenuLabel>Mobile Development</MenuLabel>
              <MenuItem>React Native</MenuItem>
              <MenuItem>Flutter</MenuItem>
              <MenuItem>Ionic</MenuItem>
            </MenuGroup>
          </MenuContent>
        </Menu>

        <Menu>
          <MenuTrigger asChild>
            <Button variant="ghost" className="text-sm font-medium">
              Solutions
              <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
          </MenuTrigger>
          <MenuContent className="w-56">
            <MenuItem>E-commerce</MenuItem>
            <MenuItem>SaaS Platforms</MenuItem>
            <MenuItem>Enterprise</MenuItem>
            <MenuItem>Startups</MenuItem>
          </MenuContent>
        </Menu>

        <Button variant="ghost" className="text-sm font-medium">
          Pricing
        </Button>

        <Button variant="ghost" className="text-sm font-medium">
          About
        </Button>
      </nav>
    </div>
  ),
};

export const DisabledItems: Story = {
  render: () => (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">Menu with Disabled Items</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem>Available Action</MenuItem>
        <MenuItem disabled>Disabled Action</MenuItem>
        <MenuItem>Another Available Action</MenuItem>
        <MenuSeparator />
        <MenuItem disabled>Disabled Feature</MenuItem>
        <MenuItem>Settings</MenuItem>
      </MenuContent>
    </Menu>
  ),
};