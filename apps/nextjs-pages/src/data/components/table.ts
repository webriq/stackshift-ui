import type { ComponentDoc } from "./index";

export const tableDoc: ComponentDoc = {
  name: "Table",
  slug: "table",
  description:
    "A semantic table component for displaying tabular data. Includes comprehensive sub-components: TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, and TableCaption for building accessible and well-structured data tables.",
  useCases: [
    "Data displays and reports",
    "Product catalogs and pricing tables",
    "User lists and directories",
    "Transaction histories and invoices",
    "Comparison tables and feature matrices",
  ],
  category: "ui",
  importCode: `import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption
} from "@stackshift-ui/react";`,
  individualImportCode: `import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption
} from "@stackshift-ui/table";`,
  usageCode: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Column 1</TableHead>
      <TableHead>Column 2</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Data 1</TableCell>
      <TableCell>Data 2</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
  props: [
    {
      name: "className",
      type: "string",
      required: false,
      description: "Additional CSS classes to apply to the table.",
    },
  ],
  examples: [
    {
      title: "Basic Table",
      description: "A simple table with headers and data rows.",
      code: `<Table>
  <TableCaption>A list of recent transactions.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV002</TableCell>
      <TableCell>Pending</TableCell>
      <TableCell>PayPal</TableCell>
      <TableCell className="text-right">$150.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">INV003</TableCell>
      <TableCell>Unpaid</TableCell>
      <TableCell>Bank Transfer</TableCell>
      <TableCell className="text-right">$350.00</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
    },
    {
      title: "With Footer",
      description: "Table with a footer row for totals.",
      code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Item</TableHead>
      <TableHead>Quantity</TableHead>
      <TableHead className="text-right">Price</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Product A</TableCell>
      <TableCell>2</TableCell>
      <TableCell className="text-right">$100.00</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Product B</TableCell>
      <TableCell>1</TableCell>
      <TableCell className="text-right">$50.00</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={2}>Total</TableCell>
      <TableCell className="text-right">$150.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>`,
    },
    {
      title: "Striped Rows",
      description: "Table with alternating row colors.",
      code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {users.map((user, index) => (
      <TableRow key={user.id} className={index % 2 === 0 ? "bg-muted/50" : ""}>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.role}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`,
    },
    {
      title: "Interactive Table",
      description: "Table with clickable rows and actions.",
      code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className="cursor-pointer hover:bg-muted/50">
      <TableCell>Project Alpha</TableCell>
      <TableCell>
        <Badge>Active</Badge>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="sm">Edit</Button>
      </TableCell>
    </TableRow>
    <TableRow className="cursor-pointer hover:bg-muted/50">
      <TableCell>Project Beta</TableCell>
      <TableCell>
        <Badge variant="secondary">Pending</Badge>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="sm">Edit</Button>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>`,
    },
  ],
};
