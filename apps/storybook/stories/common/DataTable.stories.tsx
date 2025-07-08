import {
  Badge,
  Button,
  Checkbox,
  ColumnDef,
  DataTable,
  DataTableColumnHeader,
  DataTableViewOptions,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
} from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  ArrowUpDown,
  Calendar,
  ChevronDown,
  DollarSign,
  Edit,
  Filter,
  Mail,
  MoreHorizontal,
  Package,
  Phone,
  Star,
  Trash2,
  User,
} from "lucide-react";
import { useMemo, useState } from "react";

const meta: Meta<typeof DataTable> = {
  title: "Common/DataTable",
  component: DataTable,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A powerful and feature-rich data table component built with TanStack Table. Provides advanced functionality including sorting, filtering, pagination, row selection, column visibility controls, and customizable cell renderers. Supports large datasets with excellent performance, loading states, empty states, and comprehensive accessibility features. Ideal for admin panels, dashboards, data management interfaces, and complex data visualization.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    data: {
      control: { type: "object" },
      description: "Array of data objects to display",
    },
    columns: {
      control: { type: "object" },
      description: "Column definitions for the table",
    },
  },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof DataTable>;

// Sample data types
type User = {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "User" | "Moderator";
  status: "Active" | "Inactive" | "Pending";
  lastLogin: string;
  joinDate: string;
};

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
  status: "In Stock" | "Out of Stock" | "Low Stock";
};

type Invoice = {
  id: string;
  customer: string;
  email: string;
  amount: number;
  status: "Paid" | "Pending" | "Overdue";
  date: string;
  dueDate: string;
};

// Sample data
const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2024-01-15",
    joinDate: "2023-01-15",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Active",
    lastLogin: "2024-01-14",
    joinDate: "2023-03-20",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "User",
    status: "Inactive",
    lastLogin: "2023-12-20",
    joinDate: "2023-02-10",
  },
  {
    id: "4",
    name: "Alice Brown",
    email: "alice@example.com",
    role: "Moderator",
    status: "Active",
    lastLogin: "2024-01-13",
    joinDate: "2023-04-05",
  },
  {
    id: "5",
    name: "Charlie Wilson",
    email: "charlie@example.com",
    role: "User",
    status: "Pending",
    lastLogin: "Never",
    joinDate: "2024-01-10",
  },
  {
    id: "6",
    name: "Diana Prince",
    email: "diana@example.com",
    role: "Admin",
    status: "Active",
    lastLogin: "2024-01-15",
    joinDate: "2023-01-01",
  },
  {
    id: "7",
    name: "Edward Clark",
    email: "edward@example.com",
    role: "User",
    status: "Active",
    lastLogin: "2024-01-12",
    joinDate: "2023-06-15",
  },
  {
    id: "8",
    name: "Fiona Davis",
    email: "fiona@example.com",
    role: "Moderator",
    status: "Inactive",
    lastLogin: "2023-11-30",
    joinDate: "2023-05-20",
  },
];

const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    category: "Electronics",
    price: 99.99,
    stock: 45,
    rating: 4.5,
    status: "In Stock",
  },
  {
    id: "2",
    name: "Smartphone Case",
    category: "Accessories",
    price: 19.99,
    stock: 0,
    rating: 4.2,
    status: "Out of Stock",
  },
  {
    id: "3",
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 79.99,
    stock: 12,
    rating: 4.7,
    status: "In Stock",
  },
  {
    id: "4",
    name: "USB Cable",
    category: "Accessories",
    price: 12.99,
    stock: 3,
    rating: 4.0,
    status: "Low Stock",
  },
  {
    id: "5",
    name: "Laptop Stand",
    category: "Office",
    price: 49.99,
    stock: 25,
    rating: 4.3,
    status: "In Stock",
  },
  {
    id: "6",
    name: "Wireless Mouse",
    category: "Electronics",
    price: 29.99,
    stock: 8,
    rating: 4.1,
    status: "Low Stock",
  },
];

const invoices: Invoice[] = [
  {
    id: "INV001",
    customer: "Acme Corp",
    email: "billing@acme.com",
    amount: 1250.0,
    status: "Paid",
    date: "2024-01-15",
    dueDate: "2024-02-15",
  },
  {
    id: "INV002",
    customer: "Tech Solutions",
    email: "accounts@techsol.com",
    amount: 750.0,
    status: "Pending",
    date: "2024-01-10",
    dueDate: "2024-02-10",
  },
  {
    id: "INV003",
    customer: "Global Industries",
    email: "finance@global.com",
    amount: 2100.0,
    status: "Overdue",
    date: "2023-12-20",
    dueDate: "2024-01-20",
  },
  {
    id: "INV004",
    customer: "StartupXYZ",
    email: "billing@startup.com",
    amount: 450.0,
    status: "Paid",
    date: "2024-01-12",
    dueDate: "2024-02-12",
  },
];

// Column definitions
const userColumns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <User className="h-4 w-4 text-muted-foreground" />
        <span className="font-medium">{row.getValue("name")}</span>
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Mail className="h-4 w-4 text-muted-foreground" />
        <span>{row.getValue("email")}</span>
      </div>
    ),
  },
  {
    accessorKey: "role",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Role" />,
    cell: ({ row }) => {
      const role = row.getValue("role") as string;
      return <Badge variant={role === "Admin" ? "default" : "secondary"}>{role}</Badge>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge
          variant={
            status === "Active" ? "default" : status === "Inactive" ? "destructive" : "secondary"
          }>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "lastLogin",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Last Login" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Calendar className="h-4 w-4 text-muted-foreground" />
        <span>{row.getValue("lastLogin")}</span>
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(user.id)}>
              Copy user ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Edit className="mr-2 h-4 w-4" />
              Edit user
            </DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete user
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const productColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Product" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Package className="h-4 w-4 text-muted-foreground" />
        <span className="font-medium">{row.getValue("name")}</span>
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Category" />,
  },
  {
    accessorKey: "price",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Price" />,
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price);

      return (
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-muted-foreground" />
          <span className="font-medium">{formatted}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "stock",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Stock" />,
    cell: ({ row }) => {
      const stock = row.getValue("stock") as number;
      return <span className={stock <= 5 ? "text-destructive font-medium" : ""}>{stock}</span>;
    },
  },
  {
    accessorKey: "rating",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Rating" />,
    cell: ({ row }) => {
      const rating = row.getValue("rating") as number;
      return (
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span>{rating}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge
          variant={
            status === "In Stock"
              ? "default"
              : status === "Out of Stock"
                ? "destructive"
                : "secondary"
          }>
          {status}
        </Badge>
      );
    },
  },
];

const invoiceColumns: ColumnDef<Invoice>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Invoice" />,
    cell: ({ row }) => <span className="font-mono font-medium">{row.getValue("id")}</span>,
  },
  {
    accessorKey: "customer",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Customer" />,
  },
  {
    accessorKey: "amount",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Amount" />,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <span className="font-medium">{formatted}</span>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge
          variant={
            status === "Paid" ? "default" : status === "Pending" ? "secondary" : "destructive"
          }>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Date" />,
  },
  {
    accessorKey: "dueDate",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Due Date" />,
  },
];

export const Default: Story = {
  render: () => <DataTable columns={userColumns} data={users} />,
  parameters: {
    docs: {
      description: {
        story: "Basic data table with user data, sorting, pagination, and row selection.",
      },
    },
  },
};

export const WithFiltering: Story = {
  render: () => {
    const [globalFilter, setGlobalFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

    const filteredData = useMemo(() => {
      let filtered = users;

      if (globalFilter) {
        filtered = filtered.filter(
          user =>
            user.name.toLowerCase().includes(globalFilter.toLowerCase()) ||
            user.email.toLowerCase().includes(globalFilter.toLowerCase()),
        );
      }

      if (statusFilter !== "all") {
        filtered = filtered.filter(user => user.status === statusFilter);
      }

      return filtered;
    }, [globalFilter, statusFilter]);

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Input
            placeholder="Search users..."
            value={globalFilter}
            onChange={e => setGlobalFilter(e.target.value)}
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Status: {statusFilter === "all" ? "All" : statusFilter}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => setStatusFilter("all")}>
                All Statuses
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("Active")}>Active</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("Inactive")}>
                Inactive
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("Pending")}>
                Pending
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <DataTable columns={userColumns} data={filteredData} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Data table with global search and status filtering capabilities.",
      },
    },
  },
};

export const ProductCatalog: Story = {
  render: () => <DataTable columns={productColumns} data={products} />,
  parameters: {
    docs: {
      description: {
        story: "Product catalog table with pricing, stock levels, and ratings.",
      },
    },
  },
};

export const InvoiceManagement: Story = {
  render: () => <DataTable columns={invoiceColumns} data={invoices} />,
  parameters: {
    docs: {
      description: {
        story: "Invoice management table with payment status and due dates.",
      },
    },
  },
};

export const EmptyState: Story = {
  render: () => <DataTable columns={userColumns} data={[]} />,
  parameters: {
    docs: {
      description: {
        story: "Data table empty state when no data is available.",
      },
    },
  },
};

export const LoadingState: Story = {
  render: () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<User[]>([]);

    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      setData(users.slice(0, 3));
    }, 2000);

    if (isLoading) {
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="h-10 w-[300px] bg-muted animate-pulse rounded" />
            <div className="h-10 w-[120px] bg-muted animate-pulse rounded" />
          </div>
          <div className="border rounded-md">
            <div className="h-12 bg-muted animate-pulse" />
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-16 border-t bg-muted/50 animate-pulse" />
            ))}
          </div>
        </div>
      );
    }

    return <DataTable columns={userColumns} data={data} />;
  },
  parameters: {
    docs: {
      description: {
        story: "Data table with loading state simulation using skeleton placeholders.",
      },
    },
  },
};

export const LargeDataset: Story = {
  render: () => {
    // Generate a larger dataset
    const largeUserData = Array.from({ length: 100 }, (_, i) => ({
      id: `${i + 1}`,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      role: (["Admin", "User", "Moderator"] as const)[i % 3],
      status: (["Active", "Inactive", "Pending"] as const)[i % 3],
      lastLogin: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      joinDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
    }));

    return <DataTable columns={userColumns} data={largeUserData} />;
  },
  parameters: {
    docs: {
      description: {
        story: "Data table with a large dataset (100 rows) demonstrating pagination performance.",
      },
    },
  },
};

export const AdvancedFiltering: Story = {
  render: () => {
    const [globalFilter, setGlobalFilter] = useState("");
    const [roleFilter, setRoleFilter] = useState("all");
    const [statusFilter, setStatusFilter] = useState("all");

    const filteredData = useMemo(() => {
      let filtered = users;

      if (globalFilter) {
        filtered = filtered.filter(
          user =>
            user.name.toLowerCase().includes(globalFilter.toLowerCase()) ||
            user.email.toLowerCase().includes(globalFilter.toLowerCase()),
        );
      }

      if (roleFilter !== "all") {
        filtered = filtered.filter(user => user.role === roleFilter);
      }

      if (statusFilter !== "all") {
        filtered = filtered.filter(user => user.status === statusFilter);
      }

      return filtered;
    }, [globalFilter, roleFilter, statusFilter]);

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-4 flex-wrap">
          <Input
            placeholder="Search users..."
            value={globalFilter}
            onChange={e => setGlobalFilter(e.target.value)}
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Role: {roleFilter === "all" ? "All" : roleFilter}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => setRoleFilter("all")}>
                All Roles
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setRoleFilter("Admin")}>Admin</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setRoleFilter("User")}>User</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setRoleFilter("Moderator")}>
                Moderator
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Status: {statusFilter === "all" ? "All" : statusFilter}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => setStatusFilter("all")}>
                All Statuses
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("Active")}>Active</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("Inactive")}>
                Inactive
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("Pending")}>
                Pending
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DataTableViewOptions table={undefined} />
        </div>
        <DataTable columns={userColumns} data={filteredData} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Advanced data table with multiple filters, search, and column visibility controls.",
      },
    },
  },
};

export const CustomCellRenderers: Story = {
  render: () => {
    const customColumns: ColumnDef<User>[] = [
      {
        accessorKey: "name",
        header: ({ column }) => <DataTableColumnHeader column={column} title="User" />,
        cell: ({ row }) => (
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-medium">
              {row.getValue<string>("name").charAt(0)}
            </div>
            <div>
              <div className="font-medium">{row.getValue("name")}</div>
              <div className="text-sm text-muted-foreground">{row.original.email}</div>
            </div>
          </div>
        ),
      },
      {
        accessorKey: "role",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Role" />,
        cell: ({ row }) => {
          const role = row.getValue("role") as string;
          const roleConfig = {
            Admin: { icon: "👑", color: "bg-red-100 text-red-800" },
            Moderator: { icon: "🛡️", color: "bg-blue-100 text-blue-800" },
            User: { icon: "👤", color: "bg-gray-100 text-gray-800" },
          };
          const config = roleConfig[role as keyof typeof roleConfig];
          
          return (
            <div className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
              <span>{config.icon}</span>
              {role}
            </div>
          );
        },
      },
      {
        accessorKey: "status",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
        cell: ({ row }) => {
          const status = row.getValue("status") as string;
          const statusConfig = {
            Active: { dot: "bg-green-500", text: "text-green-700" },
            Inactive: { dot: "bg-red-500", text: "text-red-700" },
            Pending: { dot: "bg-yellow-500", text: "text-yellow-700" },
          };
          const config = statusConfig[status as keyof typeof statusConfig];
          
          return (
            <div className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${config.dot}`} />
              <span className={`text-sm ${config.text}`}>{status}</span>
            </div>
          );
        },
      },
      {
        accessorKey: "lastLogin",
        header: ({ column }) => <DataTableColumnHeader column={column} title="Last Active" />,
        cell: ({ row }) => {
          const lastLogin = row.getValue("lastLogin") as string;
          const isRecent = lastLogin !== "Never" && new Date(lastLogin) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
          
          return (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className={isRecent ? "text-green-600 font-medium" : "text-muted-foreground"}>
                {lastLogin === "Never" ? "Never" : new Date(lastLogin).toLocaleDateString()}
              </span>
              {isRecent && <Badge variant="secondary" className="text-xs">Recent</Badge>}
            </div>
          );
        },
      },
    ];

    return <DataTable columns={customColumns} data={users} />;
  },
  parameters: {
    docs: {
      description: {
        story: "Data table with custom cell renderers including avatars, status indicators, and conditional formatting.",
      },
    },
  },
};

export const PerformanceDemo: Story = {
  render: () => {
    // Generate a very large dataset for performance testing
    const largeDataset = useMemo(() => {
      return Array.from({ length: 1000 }, (_, i) => ({
        id: `${i + 1}`,
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        role: (["Admin", "User", "Moderator"] as const)[i % 3],
        status: (["Active", "Inactive", "Pending"] as const)[i % 3],
        lastLogin: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0],
        joinDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0],
      }));
    }, []);

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Performance Demo</h3>
          <Badge variant="outline">{largeDataset.length} rows</Badge>
        </div>
        <DataTable columns={userColumns} data={largeDataset} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Performance demonstration with 1000 rows to test pagination, sorting, and filtering performance.",
      },
    },
  },
};