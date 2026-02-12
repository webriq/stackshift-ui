import type { ComponentDoc } from "./index";

export const dataTableDoc: ComponentDoc = {
  name: "DataTable",
  slug: "data-table",
  description:
    "A powerful data table component built on TanStack Table (React Table v8). Includes sorting, filtering, pagination, and column visibility features. Exports DataTableColumnHeader, DataTablePagination, and DataTableViewOptions sub-components.",
  useCases: [
    "Admin dashboards and data management interfaces",
    "E-commerce product catalogs and inventory lists",
    "User management and directory tables",
    "Analytics and reporting data displays",
    "Transaction histories and logs",
  ],
  category: "ui",
  importCode: `import {
  DataTable,
  DataTableColumnHeader,
  DataTablePagination,
  DataTableViewOptions,
  type ColumnDef
} from "@stackshift-ui/react";`,
  individualImportCode: `import {
  DataTable,
  DataTableColumnHeader,
  DataTablePagination,
  DataTableViewOptions,
  type ColumnDef
} from "@stackshift-ui/data-table";`,
  usageCode: `const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];

<DataTable columns={columns} data={users} />`,
  props: [
    {
      name: "columns",
      type: "ColumnDef<TData>[]",
      required: true,
      description: "Array of column definitions using TanStack Table format.",
    },
    {
      name: "data",
      type: "TData[]",
      required: true,
      description: "Array of data objects to display in the table.",
    },
    {
      name: "pagination",
      type: "PaginationState",
      required: false,
      description: "Pagination configuration object.",
    },
    {
      name: "sorting",
      type: "SortingState",
      required: false,
      description: "Sorting configuration object.",
    },
    {
      name: "filtering",
      type: "ColumnFiltersState",
      required: false,
      description: "Column filtering configuration.",
    },
    {
      name: "columnVisibility",
      type: "VisibilityState",
      required: false,
      description: "Column visibility configuration.",
    },
    {
      name: "onRowClick",
      type: "(row: TData) => void",
      required: false,
      description: "Callback when a row is clicked.",
    },
    {
      name: "enableSorting",
      type: "boolean",
      required: false,
      default: "true",
      description: "Enable sorting functionality.",
    },
    {
      name: "enableFiltering",
      type: "boolean",
      required: false,
      default: "true",
      description: "Enable filtering functionality.",
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Additional CSS classes to apply.",
    },
  ],
  examples: [
    {
      title: "Simple Table (No Pagination)",
      description: "Use the Table component directly for simple tables without pagination.",
      code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John Doe</TableCell>
      <TableCell>john@example.com</TableCell>
      <TableCell>Admin</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Jane Smith</TableCell>
      <TableCell>jane@example.com</TableCell>
      <TableCell>User</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Bob Johnson</TableCell>
      <TableCell>bob@example.com</TableCell>
      <TableCell>Editor</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
    },
    {
      title: "DataTable with Pagination",
      description: "DataTable includes built-in pagination, sorting, and filtering.",
      code: `<DataTable
  columns={[
    { accessorKey: "name", header: "Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "role", header: "Role" },
  ]}
  data={[
    { name: "John Doe", email: "john@example.com", role: "Admin" },
    { name: "Jane Smith", email: "jane@example.com", role: "User" },
    { name: "Bob Johnson", email: "bob@example.com", role: "Editor" },
  ]}
/>`,
    },
    {
      title: "With Status Badges",
      description: "Use custom cell renderers to display Badge components for status.",
      code: `<DataTable
  columns={[
    { accessorKey: "id", header: "ID" },
    { accessorKey: "amount", header: "Amount" },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <Badge variant={row.getValue("status") === "Paid" ? "default" : "secondary"}>
          {row.getValue("status")}
        </Badge>
      ),
    },
  ]}
  data={[
    { id: "INV001", amount: "$250.00", status: "Paid" },
    { id: "INV002", amount: "$150.00", status: "Pending" },
    { id: "INV003", amount: "$350.00", status: "Paid" },
  ]}
/>`,
    },
  ],
};
