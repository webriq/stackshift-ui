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
      title: "Basic Data Table",
      description: "A simple data table with sortable columns.",
      code: `const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];

<DataTable columns={columns} data={payments} />`,
    },
    {
      title: "With Pagination",
      description: "Add pagination controls to the data table.",
      code: `const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
});

<div>
  <DataTable columns={columns} data={data} />
  <DataTablePagination table={table} />
</div>`,
    },
    {
      title: "With Column Visibility",
      description: "Allow users to toggle column visibility.",
      code: `const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
});

<div className="space-y-4">
  <DataTableViewOptions table={table} />
  <DataTable columns={columns} data={data} />
</div>`,
    },
    {
      title: "With Custom Cells",
      description: "Render custom components in table cells.",
      code: `const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <Badge variant={status === "active" ? "default" : "secondary"}>
          {status}
        </Badge>
      );
    },
  },
];

<DataTable columns={columns} data={users} />`,
    },
  ],
};
