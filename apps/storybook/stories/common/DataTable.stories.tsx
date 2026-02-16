// @ts-nocheck - story demo file
import {
  Badge,
  Button,
  Checkbox,
  ColumnDef,
  DataTable,
  DataTableColumnHeader,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Skeleton,
} from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  AlertTriangle,
  Calendar,
  CheckCircle,
  ChevronDown,
  Clock,
  DollarSign,
  Edit,
  FileText,
  Filter,
  Mail,
  MoreHorizontal,
  Package,
  Star,
  Trash2,
  User,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

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
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white">
          <FileText className="h-4 w-4" />
        </div>
        <div>
          <div className="font-mono font-medium">{row.getValue("id")}</div>
          <div className="text-sm text-muted-foreground">Invoice ID</div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "customer",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Customer" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-medium">
          {row.getValue<string>("customer").charAt(0)}
        </div>
        <div>
          <div className="font-medium">{row.getValue("customer")}</div>
          <div className="text-sm text-muted-foreground">{row.original.email}</div>
        </div>
      </div>
    ),
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

      const isLarge = amount > 2000;

      return (
        <div className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-muted-foreground" />
          <span className={`font-medium ${isLarge ? "text-green-600" : ""}`}>{formatted}</span>
          {isLarge && (
            <Badge variant="secondary" className="text-xs">
              High Value
            </Badge>
          )}
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
        Paid: { dot: "bg-green-500", text: "text-green-700", icon: CheckCircle },
        Pending: { dot: "bg-yellow-500", text: "text-yellow-700", icon: Clock },
        Overdue: { dot: "bg-red-500", text: "text-red-700", icon: AlertTriangle },
      };
      const config = statusConfig[status as keyof typeof statusConfig];
      const IconComponent = config.icon;

      return (
        <div className="flex items-center gap-2">
          <div className={`h-2 w-2 rounded-full ${config.dot}`} />
          <div className="flex items-center gap-1">
            <IconComponent className={`h-3 w-3 ${config.text}`} />
            <span className={`text-sm font-medium ${config.text}`}>{status}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Invoice Date" />,
    cell: ({ row }) => {
      const date = row.getValue("date") as string;
      const isRecent = new Date(date) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

      return (
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className={isRecent ? "text-blue-600 font-medium" : "text-muted-foreground"}>
            {new Date(date).toLocaleDateString()}
          </span>
          {isRecent && (
            <Badge variant="secondary" className="text-xs">
              Recent
            </Badge>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "dueDate",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Due Date" />,
    cell: ({ row }) => {
      const dueDate = row.getValue("dueDate") as string;
      const status = row.original.status;
      const isOverdue = new Date(dueDate) < new Date() && status !== "Paid";
      const isDueSoon =
        new Date(dueDate) < new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) && status !== "Paid";

      return (
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span
            className={`text-sm ${isOverdue ? "text-red-600 font-medium" : isDueSoon ? "text-yellow-600 font-medium" : ""}`}>
            {new Date(dueDate).toLocaleDateString()}
          </span>
          {isOverdue && (
            <Badge variant="destructive" className="text-xs">
              Overdue
            </Badge>
          )}
          {isDueSoon && !isOverdue && (
            <Badge variant="secondary" className="text-xs">
              Due Soon
            </Badge>
          )}
        </div>
      );
    },
  },
];

const generateLargeUserDataset = (size = 1000): User[] => {
  return Array.from({ length: size }, (_, i) => ({
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
};

const generateLargeProductDataset = (size = 1000): Product[] => {
  const productNames = [
    "Wireless Headphones",
    "Smartphone Case",
    "Bluetooth Speaker",
    "USB Cable",
    "Laptop Stand",
    "Wireless Mouse",
    "Keyboard",
    "Monitor",
    "Webcam",
    "Tablet",
    "Smartwatch",
    "Power Bank",
    "Gaming Chair",
    "Desk Lamp",
    "Phone Charger",
    "External Hard Drive",
    "Router",
    "Printer",
    "Scanner",
    "Microphone",
    "Graphics Card",
    "RAM Module",
    "SSD Drive",
    "CPU Cooler",
    "Motherboard",
    "Power Supply",
    "Gaming Headset",
    "Mechanical Keyboard",
    "Gaming Mouse",
    "Monitor Stand",
    "Cable Management",
    "Surge Protector",
    "UPS Battery",
    "Network Switch",
  ];

  const categories = ["Electronics", "Accessories", "Office", "Gaming", "Storage", "Networking"];

  return Array.from({ length: size }, (_, i) => ({
    id: `${i + 1}`,
    name: `${productNames[i % productNames.length]} ${Math.floor(i / productNames.length) + 1}`,
    category: categories[i % categories.length],
    price: Math.round((Math.random() * 500 + 10) * 100) / 100,
    stock: Math.floor(Math.random() * 100),
    rating: Math.round((Math.random() * 2 + 3) * 10) / 10, // 3.0 to 5.0
    status: (["In Stock", "Out of Stock", "Low Stock"] as const)[i % 3],
  }));
};

const generateLargeInvoiceDataset = (size = 1000): Invoice[] => {
  const companies = [
    "Acme Corp",
    "Tech Solutions",
    "Global Industries",
    "StartupXYZ",
    "Innovation Labs",
    "Digital Dynamics",
    "Future Systems",
    "Smart Solutions",
    "Alpha Technologies",
    "Beta Corp",
    "Gamma Industries",
    "Delta Systems",
    "Epsilon Tech",
    "Zeta Solutions",
    "Eta Innovations",
    "Theta Corp",
    "Iota Systems",
    "Kappa Tech",
    "Lambda Solutions",
    "Mu Industries",
  ];

  return Array.from({ length: size }, (_, i) => ({
    id: `INV${String(i + 1).padStart(4, "0")}`,
    customer: `${companies[i % companies.length]} ${Math.floor(i / companies.length) + 1}`,
    email: `billing${i + 1}@${companies[i % companies.length].toLowerCase().replace(/\s+/g, "")}.com`,
    amount: Math.round((Math.random() * 5000 + 100) * 100) / 100,
    status: (["Paid", "Pending", "Overdue"] as const)[i % 3],
    date: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    dueDate: new Date(Date.now() + Math.random() * 60 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
  }));
};

const DataTableSkeleton = () => (
  <div className="space-y-4">
    <div className="rounded-md border">
      <div className="p-4">
        <div className="space-y-3">
          {/* Header skeleton */}
          <div className="flex space-x-4">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-4 w-16" />
          </div>
          {/* Row skeletons */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex space-x-4">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* Pagination skeleton */}
    <div className="flex items-center justify-between">
      <Skeleton className="h-4 w-32" />
      <div className="flex space-x-2">
        <Skeleton className="h-8 w-8" />
        <Skeleton className="h-8 w-8" />
        <Skeleton className="h-8 w-8" />
        <Skeleton className="h-8 w-8" />
      </div>
    </div>
  </div>
);

export const Default: Story = {
  render: () => {
    const [globalFilter, setGlobalFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");
    const [datasetSize, setDatasetSize] = useState(1000);
    const [isLoading, setIsLoading] = useState(true);
    const [baseData, setBaseData] = useState<User[]>([]);

    useEffect(() => {
      const timer = setTimeout(() => {
        setBaseData(generateLargeUserDataset(datasetSize));
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }, [datasetSize]);

    // Apply filters to the base data
    const filteredData = useMemo(() => {
      let filtered = baseData;

      if (globalFilter) {
        filtered = filtered.filter(
          (user: User) =>
            user.name.toLowerCase().includes(globalFilter.toLowerCase()) ||
            user.email.toLowerCase().includes(globalFilter.toLowerCase()),
        );
      }

      if (statusFilter !== "all") {
        filtered = filtered.filter((user: User) => user.status === statusFilter);
      }

      return filtered;
    }, [baseData, globalFilter, statusFilter]);

    if (isLoading) {
      return <DataTableSkeleton />;
    }

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-medium">Default - Users with Filtering & Performance</h3>
            <div className="flex items-center space-x-4">
              <label htmlFor="dataset-size-default" className="text-sm font-medium">
                Dataset Size:
              </label>
              <select
                id="dataset-size-default"
                value={datasetSize}
                onChange={e => setDatasetSize(Number(e.target.value))}
                className="text-sm border rounded px-2 py-1">
                <option value={500}>500 rows</option>
                <option value={1000}>1,000 rows</option>
                <option value={2500}>2,500 rows</option>
                <option value={5000}>5,000 rows</option>
                <option value={10000}>10,000 rows</option>
              </select>
            </div>
          </div>
          <Badge variant="outline">{baseData.length} rows</Badge>
        </div>
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
          {filteredData.length !== baseData.length && (
            <Badge variant="secondary" className="text-xs">
              {filteredData.length} of {baseData.length} shown
            </Badge>
          )}
        </div>
        <DataTable columns={userColumns} data={filteredData} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Comprehensive data table combining performance testing and filtering capabilities. Features configurable dataset size (500-10,000 rows), global search, status filtering, and shows loading state on initial render. Perfect demonstration of DataTable handling large datasets with real-time filtering.",
      },
    },
  },
};

export const AdvancedFiltering: Story = {
  render: () => {
    const [globalFilter, setGlobalFilter] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [statusFilter, setStatusFilter] = useState("all");
    const [isLoading, setIsLoading] = useState(true);
    const [baseData, setBaseData] = useState<Product[]>([]);

    useEffect(() => {
      const timer = setTimeout(() => {
        setBaseData(generateLargeProductDataset(1000));
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }, []);

    const filteredData = useMemo(() => {
      let filtered = baseData;

      if (globalFilter) {
        filtered = filtered.filter(
          (product: Product) =>
            product.name.toLowerCase().includes(globalFilter.toLowerCase()) ||
            product.category.toLowerCase().includes(globalFilter.toLowerCase()),
        );
      }

      if (categoryFilter !== "all") {
        filtered = filtered.filter((product: Product) => product.category === categoryFilter);
      }

      if (statusFilter !== "all") {
        filtered = filtered.filter((product: Product) => product.status === statusFilter);
      }

      return filtered;
    }, [baseData, globalFilter, categoryFilter, statusFilter]);

    if (isLoading) {
      return <DataTableSkeleton />;
    }

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Advanced Filtering - Products</h3>
          <Badge variant="outline">{baseData.length} rows</Badge>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <Input
            placeholder="Search products..."
            value={globalFilter}
            onChange={e => setGlobalFilter(e.target.value)}
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Category: {categoryFilter === "all" ? "All" : categoryFilter}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => setCategoryFilter("all")}>
                All Categories
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategoryFilter("Electronics")}>
                Electronics
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategoryFilter("Accessories")}>
                Accessories
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategoryFilter("Office")}>
                Office
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategoryFilter("Gaming")}>
                Gaming
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategoryFilter("Storage")}>
                Storage
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCategoryFilter("Networking")}>
                Networking
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
              <DropdownMenuItem onClick={() => setStatusFilter("In Stock")}>
                In Stock
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("Out of Stock")}>
                Out of Stock
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("Low Stock")}>
                Low Stock
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <DataTable columns={productColumns} data={filteredData} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Advanced data table with product data, multiple filters, search, and column visibility controls. Shows loading state on initial render and uses large dataset for performance testing.",
      },
    },
  },
};

export const CustomCellRenderers: Story = {
  render: () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<Invoice[]>([]);

    useEffect(() => {
      const timer = setTimeout(() => {
        setData(generateLargeInvoiceDataset(1000));
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return <DataTableSkeleton />;
    }

    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Custom Cell Renderers - Invoices</h3>
          <Badge variant="outline">{data.length} rows</Badge>
        </div>
        <DataTable columns={invoiceColumns} data={data} />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Data table with custom cell renderers for invoice data including customer avatars, status indicators with icons, amount highlighting, and date-based conditional formatting. Shows loading state on initial render and uses large dataset for performance testing.",
      },
    },
  },
};
