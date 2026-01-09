// @ts-nocheck - story demo file
import {
  Badge,
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Edit, ExternalLink, Trash2 } from "lucide-react";

const meta: Meta<typeof Table> = {
  title: "Common/Table",
  component: Table,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A flexible and accessible table component built with semantic HTML elements. Provides consistent styling, responsive behavior, and comprehensive support for displaying structured data. Features include striped rows, bordered variants, compact layouts, interactive elements, and empty states. Perfect for dashboards, data management interfaces, and content presentation.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply to the table",
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof Table>;

// Sample data for examples
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User", status: "Inactive" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Moderator", status: "Active" },
];

export const Default: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(invoice => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: "Basic table with headers, body, and caption showing invoice data.",
      },
    },
  },
};

export const WithFooter: Story = {
  render: () => (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.slice(0, 4).map(invoice => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$1,200.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: "Table with a footer row showing totals or summary information.",
      },
    },
  },
};

export const WithBadges: Story = {
  render: () => (
    <Table>
      <TableCaption>User management table with status badges.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map(user => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              <Badge variant={user.role === "Admin" ? "default" : "secondary"}>{user.role}</Badge>
            </TableCell>
            <TableCell>
              <Badge variant={user.status === "Active" ? "default" : "destructive"}>
                {user.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: "Table using badges to display status and role information with color coding.",
      },
    },
  },
};

export const WithActions: Story = {
  render: () => (
    <Table>
      <TableCaption>User table with action buttons.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map(user => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <Button size="sm" variant="outline">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: "Table with action buttons for edit, view, and delete operations.",
      },
    },
  },
};

export const WithSelection: Story = {
  render: () => (
    <Table>
      <TableCaption>Selectable table with checkboxes.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">
            <Checkbox />
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map(user => (
          <TableRow key={user.id}>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>
              <Badge variant={user.status === "Active" ? "default" : "destructive"}>
                {user.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: "Table with checkboxes for row selection functionality.",
      },
    },
  },
};

export const Striped: Story = {
  render: () => (
    <Table>
      <TableCaption>Striped table for better readability.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice, index) => (
          <TableRow key={invoice.invoice} className={index % 2 === 0 ? "bg-muted/50" : ""}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: "Table with alternating row background colors for improved readability.",
      },
    },
  },
};

export const Compact: Story = {
  render: () => (
    <Table>
      <TableCaption>Compact table with reduced padding.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="h-8 px-2 py-1">Invoice</TableHead>
          <TableHead className="h-8 px-2 py-1">Status</TableHead>
          <TableHead className="h-8 px-2 py-1">Method</TableHead>
          <TableHead className="h-8 px-2 py-1 text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.slice(0, 5).map(invoice => (
          <TableRow key={invoice.invoice}>
            <TableCell className="px-2 py-1 font-medium">{invoice.invoice}</TableCell>
            <TableCell className="px-2 py-1">{invoice.paymentStatus}</TableCell>
            <TableCell className="px-2 py-1">{invoice.paymentMethod}</TableCell>
            <TableCell className="px-2 py-1 text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: "Compact table variant with reduced padding for dense data display.",
      },
    },
  },
};

export const EmptyState: Story = {
  render: () => (
    <Table>
      <TableCaption>Table showing empty state.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell colSpan={4} className="h-24 text-center">
            <div className="flex flex-col items-center gap-2">
              <p className="text-muted-foreground">No users found.</p>
              <Button size="sm">Add User</Button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: "Table empty state with helpful message and call-to-action.",
      },
    },
  },
};

export const ResponsiveOverflow: Story = {
  render: () => (
    <div className="w-[300px] border rounded-md">
      <Table>
        <TableCaption>Responsive table with horizontal scroll.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-[100px]">Invoice Number</TableHead>
            <TableHead className="min-w-[120px]">Payment Status</TableHead>
            <TableHead className="min-w-[120px]">Payment Method</TableHead>
            <TableHead className="min-w-[100px] text-right">Total Amount</TableHead>
            <TableHead className="min-w-[100px]">Date Created</TableHead>
            <TableHead className="min-w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.slice(0, 3).map(invoice => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">{invoice.totalAmount}</TableCell>
              <TableCell>2024-01-15</TableCell>
              <TableCell>
                <Button size="sm" variant="outline">
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Table with horizontal scroll for responsive behavior when content overflows.",
      },
    },
  },
};

export const BorderedTable: Story = {
  render: () => (
    <Table className="border">
      <TableCaption>Bordered table variant with cell borders.</TableCaption>
      <TableHeader>
        <TableRow className="border-b">
          <TableHead className="border-r">Invoice</TableHead>
          <TableHead className="border-r">Status</TableHead>
          <TableHead className="border-r">Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.slice(0, 4).map(invoice => (
          <TableRow key={invoice.invoice} className="border-b">
            <TableCell className="border-r font-medium">{invoice.invoice}</TableCell>
            <TableCell className="border-r">{invoice.paymentStatus}</TableCell>
            <TableCell className="border-r">{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: "Table with borders around cells and rows for clear data separation.",
      },
    },
  },
};

export const InteractiveElements: Story = {
  render: () => (
    <Table>
      <TableCaption>Table with various interactive elements.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.slice(0, 3).map(user => (
          <TableRow key={user.id}>
            <TableCell>
              <Button variant="link" className="p-0 h-auto font-medium">
                {user.name}
              </Button>
            </TableCell>
            <TableCell>
              <Button variant="link" className="p-0 h-auto text-muted-foreground">
                {user.email}
              </Button>
            </TableCell>
            <TableCell>
              <Badge variant={user.status === "Active" ? "default" : "destructive"}>
                {user.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <Button size="sm" variant="outline">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline">
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: "Table with interactive elements like clickable names, emails, and action buttons.",
      },
    },
  },
};

export const DenseTable: Story = {
  render: () => (
    <Table>
      <TableCaption>Dense table layout for maximum data visibility.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="h-8 px-2 py-1 text-xs">ID</TableHead>
          <TableHead className="h-8 px-2 py-1 text-xs">Name</TableHead>
          <TableHead className="h-8 px-2 py-1 text-xs">Email</TableHead>
          <TableHead className="h-8 px-2 py-1 text-xs">Role</TableHead>
          <TableHead className="h-8 px-2 py-1 text-xs">Status</TableHead>
          <TableHead className="h-8 px-2 py-1 text-xs">Last Login</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map(user => (
          <TableRow key={user.id} className="h-8">
            <TableCell className="px-2 py-1 text-xs">{user.id}</TableCell>
            <TableCell className="px-2 py-1 text-xs font-medium">{user.name}</TableCell>
            <TableCell className="px-2 py-1 text-xs">{user.email}</TableCell>
            <TableCell className="px-2 py-1">
              <Badge variant="secondary" className="text-xs px-1 py-0">
                {user.role}
              </Badge>
            </TableCell>
            <TableCell className="px-2 py-1">
              <Badge
                variant={user.status === "Active" ? "default" : "destructive"}
                className="text-xs px-1 py-0">
                {user.status}
              </Badge>
            </TableCell>
            <TableCell className="px-2 py-1 text-xs">{user.lastLogin}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
  parameters: {
    docs: {
      description: {
        story: "Dense table layout with minimal padding and smaller text for maximum data density.",
      },
    },
  },
};
