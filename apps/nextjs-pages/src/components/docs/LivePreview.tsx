import * as React from "react";
import { LiveProvider, LivePreview as ReactLivePreview, LiveError } from "react-live";
import {
  User,
  Settings,
  LogOut,
  Mail,
  MessageSquare,
  PlusCircle,
  CreditCard,
  Keyboard,
  Users,
  UserPlus,
  Github,
  LifeBuoy,
  Cloud,
  // Toggle & Toggle Group icons
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  Star,
  // Link icons
  ChevronRight,
  BookOpen,
  // Tooltip icons
  Copy,
  Trash,
  Edit,
  Share,
  // Toggle Group icons
  LayoutGrid,
} from "lucide-react";
import {
  // Layout Components
  Container,
  Flex,
  Grid,
  GridItem,
  Section,
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
  DataTable,
  DatePicker,
  DatePickerInput,
  DatePickerTime,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
  Form,
  FormField,
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
  PaginationEllipsis,
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
  ScrollBar,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Sheet,
  SheetClose,
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
  TableCaption,
  TableCell,
  TableFooter,
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
} from "@stackshift-ui/react";

interface LivePreviewProps {
  code: string;
}

// Scope object containing all components available in previews
const scope = {
  // React
  React,
  useState: React.useState,
  useEffect: React.useEffect,
  // Layout Components
  Container,
  Flex,
  Grid,
  GridItem,
  Section,
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
  DataTable,
  DatePicker,
  DatePickerInput,
  DatePickerTime,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
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
  Form,
  FormField,
  Heading,
  Image,
  Input,
  Label,
  Link: UILink,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
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
  ScrollBar,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Sheet,
  SheetClose,
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
  TableCaption,
  TableCell,
  TableFooter,
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
  // Lucide Icons
  User,
  Settings,
  LogOut,
  Mail,
  MessageSquare,
  PlusCircle,
  CreditCard,
  Keyboard,
  Users,
  UserPlus,
  Github,
  LifeBuoy,
  Cloud,
  // Toggle & Toggle Group icons
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  Star,
  // Link icons
  ChevronRight,
  BookOpen,
  // Tooltip icons
  Copy,
  Trash,
  Edit,
  Share,
  // Toggle Group icons
  LayoutGrid,
};

export function LivePreview({ code }: LivePreviewProps) {
  // Transform code for react-live's noInline mode
  const wrappedCode = transformCodeForLive(code);

  return (
    <LiveProvider code={wrappedCode} scope={scope} noInline>
      <ReactLivePreview />
      <LiveError className="text-red-500 text-sm mt-2 p-2 bg-red-50 rounded" />
    </LiveProvider>
  );
}

/**
 * Transform example code to work with react-live's noInline mode.
 * Handles three cases:
 * 1. Pure JSX (starts with <) - wrap in render()
 * 2. Code with statements + JSX - wrap in a function component
 * 3. Code that already has render() - use as-is
 */
function transformCodeForLive(code: string): string {
  const trimmed = code.trim();

  // If code already contains render(), use as-is
  if (trimmed.includes("render(")) {
    return trimmed;
  }

  // If code starts with JSX, just wrap in render()
  if (trimmed.startsWith("<")) {
    return `render(${trimmed})`;
  }

  // Code has statements before JSX - wrap in a function component
  // Find where the JSX starts (look for a line that starts with <)
  const lines = trimmed.split("\n");
  let jsxStartIndex = -1;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim().startsWith("<")) {
      jsxStartIndex = i;
      break;
    }
  }

  if (jsxStartIndex === -1) {
    // No JSX found, return as-is with a render call
    return `render(<div>Preview not available</div>)`;
  }

  const statements = lines.slice(0, jsxStartIndex).join("\n");
  const jsx = lines.slice(jsxStartIndex).join("\n");

  // Remove TypeScript type annotations for runtime
  const cleanStatements = stripTypeAnnotations(statements);

  return `function Example() {
  ${cleanStatements}

  return (
    ${jsx}
  );
}

render(<Example />)`;
}

/**
 * Strip TypeScript type annotations from code for runtime evaluation.
 * Handles: useState<Type>(), const x: Type = ..., function params, etc.
 */
function stripTypeAnnotations(code: string): string {
  return code
    // Remove generic type parameters like <Date>, <DateRange | undefined>, <Date[]>
    .replace(/useState<[^>]+>/g, "useState")
    .replace(/useRef<[^>]+>/g, "useRef")
    .replace(/useCallback<[^>]+>/g, "useCallback")
    .replace(/useMemo<[^>]+>/g, "useMemo")
    // Remove type annotations after variable names: const x: Type = or let x: Type =
    .replace(/:\s*[A-Za-z][A-Za-z0-9]*(?:\s*\|\s*[A-Za-z][A-Za-z0-9]*)*(?:\[\])?\s*(?==)/g, " ")
    // Remove type annotations in destructuring: const [x, setX]: [Type, ...] =
    .replace(/\]:\s*\[[^\]]+\]\s*(?==)/g, "] ");
}
