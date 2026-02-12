import { CodeBlock, DocsLayout, PreviewCodeTabs, PropsTable } from "@/components/docs";
import {
  formatComponentName,
  formatDisplayName,
  getAllComponentSlugs,
  getComponentDoc,
  type ComponentDoc,
} from "@/data/components";
import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import * as React from "react";
// Initialize registry
import "@/data/components/registry";

// Dynamic component imports for previews
import {
  // UI Components
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  CheckboxGroup,
  // Layout
  Container,
  DataTable,
  DatePicker,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Flex,
  Form,
  FormField,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Label,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RadioGroup,
  RadioGroupItem,
  ScrollArea,
  Section,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Skeleton,
  SocialIcons,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Text,
  Textarea,
  toast,
  Toaster,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Link as UILink,
  type ColumnDef,
} from "@stackshift-ui/react";

interface NavLink {
  slug: string;
  name: string;
}

interface ComponentPageProps {
  doc: ComponentDoc;
  prevComponent: NavLink | null;
  nextComponent: NavLink | null;
}

// Sample data for DataTable preview
type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const samplePayments: Payment[] = [
  { id: "1", amount: 316, status: "success", email: "ken@example.com" },
  { id: "2", amount: 242, status: "success", email: "abe@example.com" },
  { id: "3", amount: 837, status: "processing", email: "monserrat@example.com" },
  { id: "4", amount: 874, status: "success", email: "silas@example.com" },
  { id: "5", amount: 721, status: "failed", email: "carmella@example.com" },
];

const paymentColumns: ColumnDef<Payment>[] = [
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];

// DataTable Preview Component
function DataTablePreview() {
  return (
    <div className="w-full">
      <DataTable columns={paymentColumns} data={samplePayments} />
    </div>
  );
}

// Component previews map - renders live previews based on component slug and example index
function getComponentPreview(slug: string, exampleIndex: number): React.ReactNode {
  const previews: Record<string, React.ReactNode[]> = {
    // Layout Components
    container: [
      <Container key="default" className="bg-gray-100 p-4 rounded">
        <p>Content inside a full-width container</p>
      </Container>,
      <Container key="lg" maxWidth="lg" className="bg-gray-100 p-4 rounded">
        <p>Content constrained to large width (512px)</p>
      </Container>,
    ],
    flex: [
      <Flex key="row" gap={4}>
        <div className="p-4 bg-blue-100 rounded">Item 1</div>
        <div className="p-4 bg-blue-100 rounded">Item 2</div>
        <div className="p-4 bg-blue-100 rounded">Item 3</div>
      </Flex>,
      <Flex key="col" direction="col" gap={4}>
        <div className="p-4 bg-green-100 rounded">Item 1</div>
        <div className="p-4 bg-green-100 rounded">Item 2</div>
        <div className="p-4 bg-green-100 rounded">Item 3</div>
      </Flex>,
      <Flex
        key="center"
        align="center"
        justify="center"
        className="h-32 bg-gray-100 rounded w-full">
        <div className="p-4 bg-purple-100 rounded">Centered Content</div>
      </Flex>,
      <Flex key="between" justify="between" className="w-full">
        <div className="p-4 bg-yellow-100 rounded">Left</div>
        <div className="p-4 bg-yellow-100 rounded">Center</div>
        <div className="p-4 bg-yellow-100 rounded">Right</div>
      </Flex>,
    ],
    grid: [
      <Grid key="3col" columns={3} gap={4} className="w-full">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="p-4 bg-blue-100 rounded text-center">
            Item {i}
          </div>
        ))}
      </Grid>,
      <Grid key="4col" columns={4} gap={6} className="w-full">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <div key={i} className="p-4 bg-green-100 rounded text-center">
            Item {i}
          </div>
        ))}
      </Grid>,
    ],
    "grid-item": [
      <Grid key="grid-item-span" columns={4} gap={4} className="w-full">
        <GridItem colSpan={2} className="p-4 bg-blue-100 rounded text-center">
          Spans 2 columns
        </GridItem>
        <div className="p-4 bg-blue-100 rounded text-center">Item 2</div>
        <div className="p-4 bg-blue-100 rounded text-center">Item 3</div>
      </Grid>,
    ],
    section: [
      <Section key="basic" className="py-8 bg-gray-50 rounded w-full">
        <h2 className="text-xl font-bold mb-2">Section Title</h2>
        <p>Section content goes here.</p>
      </Section>,
    ],

    // UI Components
    accordion: [
      <Accordion key="default" type="single" collapsible className="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match your theme.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>,
      <Accordion key="multiple" type="multiple" className="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
          <AccordionContent>
            Yes! With type=&quot;multiple&quot;, you can have any number of items open.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How does it work?</AccordionTrigger>
          <AccordionContent>
            Each item operates independently. Opening one doesn&apos;t close others.
          </AccordionContent>
        </AccordionItem>
      </Accordion>,
      <Accordion
        key="default-open"
        type="single"
        collapsible
        defaultValue="item-2"
        className="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>First Item</AccordionTrigger>
          <AccordionContent>This item is closed by default.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Second Item (Default Open)</AccordionTrigger>
          <AccordionContent>
            This item is open by default using defaultValue=&quot;item-2&quot;.
          </AccordionContent>
        </AccordionItem>
      </Accordion>,
    ],
    avatar: [
      <Avatar key="basic">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>,
      <Avatar key="fallback">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>,
      <div key="sizes" className="flex gap-4 items-center">
        <Avatar className="h-8 w-8">
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>MD</AvatarFallback>
        </Avatar>
        <Avatar className="h-16 w-16">
          <AvatarFallback>LG</AvatarFallback>
        </Avatar>
      </div>,
    ],
    badge: [
      <Badge key="default">Badge</Badge>,
      <div key="variants" className="flex gap-2 flex-wrap">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>,
    ],
    button: [
      <Button key="default">Click me</Button>,
      <div key="variants" className="flex gap-2 flex-wrap">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>,
      <div key="sizes" className="flex gap-2 items-center">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>,
      <Button key="disabled" disabled>
        Disabled
      </Button>,
    ],
    calendar: [<Calendar key="basic" className="rounded-md border" />],
    card: [
      <Card key="basic" className="w-[350px]">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content goes here. You can add any content inside the card.</p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </Card>,
      <Card key="simple">
        <CardContent className="pt-6">
          <p>A simple card with just content.</p>
        </CardContent>
      </Card>,
    ],
    checkbox: [
      <div key="basic" className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>,
      <div key="checked" className="flex items-center space-x-2">
        <Checkbox id="checked" defaultChecked />
        <Label htmlFor="checked">Checked by default</Label>
      </div>,
      <div key="disabled" className="flex items-center space-x-2">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled" className="text-gray-400">
          Disabled
        </Label>
      </div>,
    ],
    "checkbox-group": [
      <CheckboxGroup key="basic" className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="option1" />
          <Label htmlFor="option1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="option2" />
          <Label htmlFor="option2">Option 2</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="option3" />
          <Label htmlFor="option3">Option 3</Label>
        </div>
      </CheckboxGroup>,
    ],
    "data-table": [<DataTablePreview key="basic" />],
    "date-picker": [<DatePicker key="basic" label="Select Date" />],
    dialog: [
      // Index 0: Basic Dialog
      <Dialog key="basic">
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Welcome</DialogTitle>
            <DialogDescription>This is a simple dialog example.</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
      // Index 1: Confirmation Dialog
      <Dialog key="confirmation">
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
            <DialogClose asChild>
              <Button variant="destructive">Delete</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>,
      // Index 2: Form Dialog
      <Dialog key="form">
        <DialogTrigger asChild>
          <Button>Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>Make changes to your profile here.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="dialog-form-name">Name</Label>
              <Input id="dialog-form-name" defaultValue="John Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dialog-form-email">Email</Label>
              <Input id="dialog-form-email" type="email" defaultValue="john@example.com" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>,
      // Index 3: Controlled Dialog - show static preview since it requires useState
      null,
    ],
    "dropdown-menu": [
      // Index 0: Basic Dropdown Menu
      <DropdownMenu key="basic">
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
      // Index 1: With Icons and Shortcuts - requires icon imports, show simpler version
      <DropdownMenu key="icons">
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Actions</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
      // Index 2: With Checkboxes - requires useState, skip
      null,
      // Index 3: With Radio Groups - requires useState, skip
      null,
      // Index 4: With Sub-menus - requires SubMenu components not imported
      null,
    ],
    form: [
      <Form key="basic" name="contact-form" className="space-y-4 max-w-md">
        <div className="space-y-2">
          <Label htmlFor="form-name">Name</Label>
          <Input id="form-name" name="name" placeholder="Enter your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="form-email">Email</Label>
          <Input id="form-email" name="email" type="email" placeholder="Enter your email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="form-message">Message</Label>
          <Textarea id="form-message" name="message" placeholder="Enter your message" />
        </div>
        <Button type="submit">Submit</Button>
      </Form>,
    ],
    "form-field": [
      <div key="basic" className="space-y-4 max-w-md">
        <FormField type="inputText" name="username" label="Username" placeholder="Enter username" />
        <FormField type="inputEmail" name="email" label="Email" placeholder="Enter email" />
        <FormField type="textarea" name="bio" label="Bio" placeholder="Tell us about yourself" />
      </div>,
      <div key="select" className="space-y-4 max-w-md">
        <FormField
          type="inputSelect"
          name="country"
          label="Country"
          placeholder="Select a country"
          items={["United States", "Canada", "United Kingdom", "Australia"]}
        />
      </div>,
    ],
    heading: [
      <div key="levels" className="space-y-4">
        <Heading type="h1" fontSize="4xl">
          Heading 1 (4xl)
        </Heading>
        <Heading type="h2" fontSize="3xl">
          Heading 2 (3xl)
        </Heading>
        <Heading type="h3" fontSize="2xl">
          Heading 3 (2xl)
        </Heading>
        <Heading type="h4" fontSize="xl">
          Heading 4 (xl)
        </Heading>
        <Heading type="h5" fontSize="lg">
          Heading 5 (lg)
        </Heading>
        <Heading type="h6" fontSize="base">
          Heading 6 (base)
        </Heading>
      </div>,
    ],
    image: [
      <Image
        key="basic"
        src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=300&fit=crop"
        alt="Sample image"
        width={400}
        height={300}
        className="rounded-lg"
      />,
    ],
    input: [
      // Index 0: Basic Input
      <Input key="basic" type="text" placeholder="Enter your name" />,
      // Index 1: Input with Label
      <div key="with-label" className="space-y-2">
        <Label htmlFor="input-email">Email</Label>
        <Input id="input-email" type="email" placeholder="you@example.com" />
      </div>,
      // Index 2: Password Input
      <div key="password" className="space-y-2">
        <Label htmlFor="input-password">Password</Label>
        <Input id="input-password" type="password" placeholder="••••••••" />
      </div>,
      // Index 3: Controlled Input - requires useState, skip
      null,
      // Index 4: Disabled Input
      <Input
        key="disabled"
        type="text"
        placeholder="Disabled input"
        disabled
        defaultValue="Cannot edit this"
      />,
      // Index 5: Input Types
      <div key="types" className="space-y-4">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="number" placeholder="Number" />
        <Input type="tel" placeholder="Phone" />
        <Input type="url" placeholder="Website URL" />
        <Input type="search" placeholder="Search..." />
      </div>,
    ],
    "input-file": [
      <div key="basic" className="space-y-2">
        <Label htmlFor="file-upload">Upload File</Label>
        <Input id="file-upload" type="file" />
      </div>,
      <div key="multiple" className="space-y-2">
        <Label htmlFor="file-multiple">Upload Multiple Files</Label>
        <Input id="file-multiple" type="file" multiple />
      </div>,
    ],
    label: [
      <Label key="basic">Username</Label>,
      <div key="with-input" className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" />
      </div>,
    ],
    link: [
      <UILink key="basic" href="#">
        Basic Link
      </UILink>,
      <div key="variants" className="flex gap-4">
        <UILink href="#">Default Link</UILink>
        <UILink href="#" className="text-blue-600 hover:underline">
          Styled Link
        </UILink>
      </div>,
    ],
    pagination: [
      <Pagination key="basic">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>,
    ],
    popover: [
      // Index 0: Basic Popover
      <Popover key="basic">
        <PopoverTrigger asChild>
          <Button variant="outline">Open</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="space-y-2">
            <h4 className="font-medium">Information</h4>
            <p className="text-sm text-muted-foreground">
              This is some helpful information displayed in a popover.
            </p>
          </div>
        </PopoverContent>
      </Popover>,
      // Index 1: Popover with Form
      <Popover key="form">
        <PopoverTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-4">
            <h4 className="font-medium">Update Profile</h4>
            <div className="space-y-2">
              <Label htmlFor="popover-name">Name</Label>
              <Input id="popover-name" defaultValue="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="popover-email">Email</Label>
              <Input id="popover-email" type="email" defaultValue="john@example.com" />
            </div>
            <Button className="w-full">Save</Button>
          </div>
        </PopoverContent>
      </Popover>,
      // Index 2: Controlled Popover - requires useState, skip
      null,
      // Index 3: Popover with Custom Positioning
      <Popover key="positioning">
        <PopoverTrigger asChild>
          <Button variant="outline">Open</Button>
        </PopoverTrigger>
        <PopoverContent side="top" align="start">
          <p className="text-sm">This popover opens above the trigger and aligns to the start.</p>
        </PopoverContent>
      </Popover>,
    ],
    "radio-group": [
      <RadioGroup key="basic" defaultValue="option-1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-1" id="option-1" />
          <Label htmlFor="option-1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-2" id="option-2" />
          <Label htmlFor="option-2">Option 2</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-3" id="option-3" />
          <Label htmlFor="option-3">Option 3</Label>
        </div>
      </RadioGroup>,
    ],
    "scroll-area": [
      <ScrollArea key="basic" className="h-[200px] w-[350px] rounded-md border p-4">
        <div className="space-y-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="text-sm">
              Item {i + 1} - This is scrollable content inside a scroll area.
            </div>
          ))}
        </div>
      </ScrollArea>,
    ],
    select: [
      <Select key="basic">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>,
    ],
    sheet: [
      // Index 0: Basic Sheet
      <Sheet key="basic">
        <SheetTrigger asChild>
          <Button variant="outline">Open</Button>
        </SheetTrigger>
        <SheetContent className="p-6">
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>This is a description of the sheet content.</SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p>Sheet content goes here.</p>
          </div>
        </SheetContent>
      </Sheet>,
      // Index 1: Sheet Sides
      <div key="sides" className="flex gap-2 flex-wrap">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Top</Button>
          </SheetTrigger>
          <SheetContent side="top" className="p-6">
            <SheetHeader>
              <SheetTitle>Top Sheet</SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Right</Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-6">
            <SheetHeader>
              <SheetTitle>Right Sheet</SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Bottom</Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="p-6">
            <SheetHeader>
              <SheetTitle>Bottom Sheet</SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Left</Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-6">
            <SheetHeader>
              <SheetTitle>Left Sheet</SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>,
      // Index 2: Sheet with Form
      <Sheet key="form">
        <SheetTrigger asChild>
          <Button>Edit Profile</Button>
        </SheetTrigger>
        <SheetContent className="p-6">
          <SheetHeader className="pb-4">
            <SheetTitle>Edit Profile</SheetTitle>
            <SheetDescription>Make changes to your profile here.</SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="sheet-form-name">Name</Label>
              <Input id="sheet-form-name" defaultValue="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sheet-form-email">Email</Label>
              <Input id="sheet-form-email" type="email" defaultValue="john@example.com" />
            </div>
          </div>
          <SheetFooter className="pt-4">
            <Button type="submit">Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>,
      // Index 3: Controlled Sheet - requires useState, skip
      null,
    ],
    skeleton: [
      <div key="basic" className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>,
      <div key="card" className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>,
    ],
    switch: [
      <div key="basic" className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>,
      <div key="checked" className="flex items-center space-x-2">
        <Switch id="checked" defaultChecked />
        <Label htmlFor="checked">Enabled</Label>
      </div>,
      <div key="disabled" className="flex items-center space-x-2">
        <Switch id="disabled" disabled />
        <Label htmlFor="disabled" className="text-gray-400">
          Disabled
        </Label>
      </div>,
    ],
    table: [
      <Table key="basic">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Admin</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>User</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bob Johnson</TableCell>
            <TableCell>Inactive</TableCell>
            <TableCell>User</TableCell>
          </TableRow>
        </TableBody>
      </Table>,
    ],
    text: [
      <div key="basic" className="space-y-2">
        <Text>Default text paragraph.</Text>
        <Text fontSize="sm">Small text size.</Text>
        <Text fontSize="lg">Large text size.</Text>
      </div>,
    ],
    textarea: [
      <Textarea key="basic" placeholder="Type your message here..." />,
      <div key="with-label" className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Enter your message" />
      </div>,
      <Textarea key="disabled" disabled placeholder="Disabled textarea" />,
    ],
    toggle: [
      <Toggle key="basic" aria-label="Toggle italic">
        <span className="font-bold">B</span>
      </Toggle>,
      <div key="variants" className="flex gap-2">
        <Toggle variant="default">Default</Toggle>
        <Toggle variant="outline">Outline</Toggle>
      </div>,
    ],
    "toggle-group": [
      <ToggleGroup key="single" type="single">
        <ToggleGroupItem value="a" aria-label="Toggle A">
          A
        </ToggleGroupItem>
        <ToggleGroupItem value="b" aria-label="Toggle B">
          B
        </ToggleGroupItem>
        <ToggleGroupItem value="c" aria-label="Toggle C">
          C
        </ToggleGroupItem>
      </ToggleGroup>,
      <ToggleGroup key="multiple" type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <span className="font-bold">B</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <span className="italic">I</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <span className="underline">U</span>
        </ToggleGroupItem>
      </ToggleGroup>,
    ],
    tooltip: [
      <TooltipProvider key="basic">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>This is a tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    ],
    toast: [
      // Index 0: Setup - configuration example, no interactive preview
      null,
      // Index 1: Basic Toast
      <Button
        key="basic-toast"
        onClick={() =>
          toast("Notification", {
            description: "This is a basic toast notification.",
          })
        }>
        Show Toast
      </Button>,
      // Index 2: Success Toast
      <Button
        key="success-toast"
        onClick={() =>
          toast.success("Success", {
            description: "Your changes have been saved successfully.",
          })
        }>
        Save Changes
      </Button>,
      // Index 3: Error Toast
      <Button
        key="error-toast"
        variant="destructive"
        onClick={() =>
          toast.error("Error", {
            description: "Something went wrong. Please try again.",
          })
        }>
        Trigger Error
      </Button>,
      // Index 4: With Action
      <Button
        key="action-toast"
        onClick={() =>
          toast("File deleted", {
            description: "Your file has been permanently deleted.",
            action: {
              label: "Undo",
              onClick: () => toast.success("Undo successful!"),
            },
          })
        }>
        Delete File
      </Button>,
      // Index 5: Custom Duration
      <div key="duration-toast" className="flex gap-2">
        <Button
          onClick={() =>
            toast("Quick message", {
              duration: 2000,
            })
          }>
          2 seconds
        </Button>
        <Button
          onClick={() =>
            toast("Longer message", {
              duration: 10000,
            })
          }>
          10 seconds
        </Button>
      </div>,
      // Index 6: Promise Toast
      <Button
        key="promise-toast"
        onClick={() => {
          const promise = new Promise<{ count: number }>(resolve =>
            setTimeout(() => resolve({ count: 42 }), 2000),
          );
          toast.promise(promise, {
            loading: "Loading...",
            success: data => `Successfully loaded ${data.count} items`,
            error: "Failed to load data",
          });
        }}>
        Load Data
      </Button>,
      // Index 7: Positioning - configuration example, no interactive preview
      null,
      // Index 8: Per-Toast Position
      <Button
        key="per-toast-position"
        onClick={() => toast("This appears at top-center!", { position: "top-center" })}>
        Show at Top Center
      </Button>,
      // Index 9: Custom Toaster Configuration - configuration example, no interactive preview
      null,
    ],
    menu: [
      <NavigationMenu key="basic">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-4 w-[400px]">
                <div className="grid gap-3">
                  <a href="#" className="block rounded-md p-3 hover:bg-gray-100 transition-colors">
                    <div className="text-sm font-medium">Introduction</div>
                    <p className="text-sm text-gray-500 mt-1">
                      Learn about the basics and get started quickly.
                    </p>
                  </a>
                  <a href="#" className="block rounded-md p-3 hover:bg-gray-100 transition-colors">
                    <div className="text-sm font-medium">Installation</div>
                    <p className="text-sm text-gray-500 mt-1">
                      How to install and configure the component library.
                    </p>
                  </a>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-4 w-[400px]">
                <div className="grid gap-3">
                  <a href="#" className="block rounded-md p-3 hover:bg-gray-100 transition-colors">
                    <div className="text-sm font-medium">Button</div>
                    <p className="text-sm text-gray-500 mt-1">
                      Displays a button or a component that looks like a button.
                    </p>
                  </a>
                  <a href="#" className="block rounded-md p-3 hover:bg-gray-100 transition-colors">
                    <div className="text-sm font-medium">Card</div>
                    <p className="text-sm text-gray-500 mt-1">
                      Displays a card with header, content, and footer.
                    </p>
                  </a>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#">Documentation</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>,
    ],
    "social-icons": [
      <div key="basic" className="flex gap-4 items-center">
        <SocialIcons social="facebook" />
        <SocialIcons social="twitter" />
        <SocialIcons social="instagram" />
        <SocialIcons social="linkedin" />
        <SocialIcons social="youtube" />
      </div>,
      <div key="row" className="flex gap-4 items-center p-4 bg-gray-100 rounded-lg">
        <SocialIcons social="facebook" className="text-blue-600" />
        <SocialIcons social="twitter" className="text-gray-800" />
        <SocialIcons social="instagram" className="text-pink-600" />
        <SocialIcons social="linkedin" className="text-blue-700" />
        <SocialIcons social="youtube" className="text-red-600" />
      </div>,
    ],
    "stats-card": [
      <div key="recommended" className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <Card>
          <CardContent className="flex items-center p-6">
            <div className="p-3 mr-4 rounded-lg bg-blue-100">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
            </div>
            <div>
              <Text className="text-2xl font-bold">12,345</Text>
              <Text className="text-muted-foreground text-sm">Total Users</Text>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <div className="p-3 mr-4 rounded-lg bg-green-100">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <Text className="text-2xl font-bold">$45,678</Text>
              <Text className="text-muted-foreground text-sm">Revenue</Text>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <div className="p-3 mr-4 rounded-lg bg-purple-100">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <div>
              <Text className="text-2xl font-bold">2,890</Text>
              <Text className="text-muted-foreground text-sm">Orders</Text>
            </div>
          </CardContent>
        </Card>
      </div>,
    ],
  };

  return previews[slug]?.[exampleIndex] || null;
}

// Installation Tabs Component with dual installation mode support
interface InstallationTabsProps {
  slug: string;
}

function InstallationTabs({ slug }: InstallationTabsProps) {
  const [installMode, setInstallMode] = React.useState<"full" | "individual">("full");
  const [activeTab, setActiveTab] = React.useState<"pnpm" | "npm" | "yarn">("pnpm");

  const packageName = installMode === "full" ? "@stackshift-ui/react" : `@stackshift-ui/${slug}`;

  const commands = {
    pnpm: `pnpm add ${packageName}`,
    npm: `npm install ${packageName}`,
    yarn: `yarn add ${packageName}`,
  };

  return (
    <div className="space-y-4">
      {/* Explanatory note */}
      <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
        <p className="font-medium mb-2">Installation Options</p>
        <ul className="list-disc list-inside space-y-1 text-gray-500">
          <li>
            <strong>Full Library:</strong> Install all components at once
          </li>
          <li>
            <strong>Individual:</strong> Install only this component for smaller bundles
          </li>
        </ul>
      </div>

      {/* Install mode toggle */}
      <div className="flex gap-2">
        <button
          onClick={() => setInstallMode("full")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            installMode === "full"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}>
          Full Library
        </button>
        <button
          onClick={() => setInstallMode("individual")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            installMode === "individual"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}>
          Individual Component
        </button>
      </div>

      {/* Package manager tabs */}
      <div className="rounded-lg border border-gray-200 overflow-hidden">
        <div className="flex border-b border-gray-200 bg-gray-50">
          {(["pnpm", "npm", "yarn"] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-white text-gray-900 border-b-2 border-blue-600 -mb-px"
                  : "text-gray-600 hover:text-gray-900"
              }`}>
              {tab}
            </button>
          ))}
        </div>
        <div className="p-0">
          <CodeBlock code={commands[activeTab]} language="bash" />
        </div>
      </div>
    </div>
  );
}

export default function ComponentPage({ doc, prevComponent, nextComponent }: ComponentPageProps) {
  const componentName = formatComponentName(doc.slug);
  const mainPreview = getComponentPreview(doc.slug, 0);

  return (
    <>
      <Head>
        <title>{doc.name} - StackShift UI</title>
        <meta name="description" content={doc.description} />
      </Head>

      <DocsLayout>
        <div className="space-y-10">
          {/* 1. Component Name */}
          <header>
            <h1 className="text-3xl font-bold text-gray-900">{doc.name}</h1>
          </header>

          {/* 2. Description */}
          <section>
            <p className="text-lg text-gray-600">{doc.description}</p>
          </section>

          {/* 3. When to Use */}
          {doc.useCases && doc.useCases.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">When to use</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {doc.useCases.map((useCase, i) => (
                  <li key={i}>{useCase}</li>
                ))}
              </ul>
            </section>
          )}

          {/* 4. Visual Preview */}
          {mainPreview && (
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Preview</h2>
              <div className="p-6 border border-gray-200 rounded-lg bg-white">{mainPreview}</div>
            </section>
          )}

          {/* 5. Installation */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Installation</h2>
            <InstallationTabs slug={doc.slug} />

            {/* Import statements - showing both options */}
            <div className="mt-6 space-y-4">
              <h3 className="text-sm font-semibold text-gray-700">Import</h3>

              {/* Full library import */}
              <div>
                <p className="text-xs text-gray-500 mb-2">From full library:</p>
                {doc.importCode ? (
                  <CodeBlock code={doc.importCode} language="tsx" />
                ) : (
                  <CodeBlock
                    code={`import { ${componentName} } from "@stackshift-ui/react";`}
                    language="tsx"
                  />
                )}
              </div>

              {/* Individual package import */}
              <div>
                <p className="text-xs text-gray-500 mb-2">From individual package:</p>
                {doc.individualImportCode ? (
                  <CodeBlock code={doc.individualImportCode} language="tsx" />
                ) : (
                  <CodeBlock
                    code={`import { ${componentName} } from "@stackshift-ui/${doc.slug}";`}
                    language="tsx"
                  />
                )}
              </div>
            </div>
          </section>

          {/* 6. Examples */}
          {doc.examples.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Examples</h2>
              <div className="space-y-8">
                {doc.examples.map((example, i) => {
                  const preview = getComponentPreview(doc.slug, i);
                  return (
                    <div key={i} className="space-y-3">
                      <div>
                        <h3 className="text-lg font-medium text-gray-800">{example.title}</h3>
                        {example.description && (
                          <p className="text-sm text-gray-600 mt-1">{example.description}</p>
                        )}
                      </div>

                      {preview ? (
                        <PreviewCodeTabs preview={preview} code={example.code} />
                      ) : (
                        <CodeBlock code={example.code} language="tsx" />
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* 7. API Reference */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">API Reference</h2>

            {/* Main component props */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  {doc.slug === "toast" ? "Toast Props" : `${doc.name} Props`}
                </h3>
                <PropsTable props={doc.props} />
              </div>

              {/* Toaster props (for toast component) */}
              {doc.toasterProps && doc.toasterProps.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Toaster Props</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Props for the Toaster container component that controls global toast behavior
                    and positioning.
                  </p>
                  <PropsTable props={doc.toasterProps} />
                </div>
              )}
            </div>
          </section>

          {/* Previous / Next Navigation */}
          <nav className="flex items-center justify-between pt-8 border-t border-gray-200">
            {prevComponent ? (
              <Link
                href={`/components/${prevComponent.slug}`}
                className="group flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                <svg
                  className="w-4 h-4 text-gray-600 group-hover:text-gray-900 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="text-gray-900 font-medium">{prevComponent.name}</span>
              </Link>
            ) : (
              <div />
            )}

            {nextComponent ? (
              <Link
                href={`/components/${nextComponent.slug}`}
                className="group flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                <span className="text-gray-900 font-medium">{nextComponent.name}</span>
                <svg
                  className="w-4 h-4 text-gray-600 group-hover:text-gray-900 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </div>
      </DocsLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Initialize registry for static generation
  await import("@/data/components/registry");

  const slugs = getAllComponentSlugs();

  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ComponentPageProps> = async ({ params }) => {
  // Initialize registry
  await import("@/data/components/registry");

  const slug = params?.slug as string;
  const doc = getComponentDoc(slug);

  if (!doc) {
    return { notFound: true };
  }

  // Get all slugs and find prev/next
  const allSlugs = getAllComponentSlugs();
  const currentIndex = allSlugs.indexOf(slug);

  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  const prevComponent = prevSlug ? { slug: prevSlug, name: formatDisplayName(prevSlug) } : null;
  const nextComponent = nextSlug ? { slug: nextSlug, name: formatDisplayName(nextSlug) } : null;

  return {
    props: { doc, prevComponent, nextComponent },
  };
};
