import type { ComponentDoc } from "./index";

export const menuDoc: ComponentDoc = {
  name: "NavigationMenu",
  slug: "menu",
  description:
    "A comprehensive navigation menu component built on Radix UI. Includes sub-components: NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink, NavigationMenuIndicator, and NavigationMenuViewport for creating complex navigation structures.",
  useCases: [
    "Main site navigation in headers",
    "Mega menus with multiple columns",
    "Multi-level dropdown navigation",
    "Product category navigation",
    "Documentation and resource menus",
  ],
  category: "ui",
  importCode: `import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from "@stackshift-ui/react";`,
  individualImportCode: `import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from "@stackshift-ui/menu";`,
  usageCode: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink href="/">Home</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
  props: [
    {
      name: "orientation",
      type: '"horizontal" | "vertical"',
      required: false,
      default: '"horizontal"',
      description: "The orientation of the navigation menu.",
    },
    {
      name: "dir",
      type: '"ltr" | "rtl"',
      required: false,
      description: "The reading direction of the navigation menu.",
    },
    {
      name: "value",
      type: "string",
      required: false,
      description: "The controlled value of the menu item that is currently open.",
    },
    {
      name: "onValueChange",
      type: "(value: string) => void",
      required: false,
      description: "Callback when the open menu item changes.",
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
      title: "Basic Navigation",
      description: "A simple horizontal navigation menu.",
      code: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink href="/">Home</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/about">About</NavigationMenuLink>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
    },
    {
      title: "With Dropdown",
      description: "Navigation menu with dropdown sub-items. Click 'Products' to see the dropdown.",
      code: `<div className="relative min-h-[200px] overflow-visible">
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-white border rounded-md shadow-lg">
          <ul className="grid w-[300px] gap-2 p-4">
            <li>
              <NavigationMenuLink href="/products/web" className="block p-2 hover:bg-gray-100 rounded">
                <div className="text-sm font-medium">Web Development</div>
                <p className="text-xs text-muted-foreground">Build modern web apps</p>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink href="/products/mobile" className="block p-2 hover:bg-gray-100 rounded">
                <div className="text-sm font-medium">Mobile Apps</div>
                <p className="text-xs text-muted-foreground">Create native experiences</p>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="/about">About</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</div>`,
    },
    {
      title: "Mega Menu",
      description: "Large navigation menu with multiple columns. Click 'Solutions' to expand.",
      code: `<div className="relative min-h-[280px] overflow-visible">
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-white border rounded-md shadow-lg">
          <div className="grid w-[400px] grid-cols-2 gap-4 p-4">
            <div>
              <h4 className="mb-2 text-sm font-medium">By Industry</h4>
              <ul className="space-y-1 text-sm">
                <li><NavigationMenuLink href="#" className="block p-1 hover:bg-gray-100 rounded">E-commerce</NavigationMenuLink></li>
                <li><NavigationMenuLink href="#" className="block p-1 hover:bg-gray-100 rounded">Healthcare</NavigationMenuLink></li>
                <li><NavigationMenuLink href="#" className="block p-1 hover:bg-gray-100 rounded">Finance</NavigationMenuLink></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-medium">By Size</h4>
              <ul className="space-y-1 text-sm">
                <li><NavigationMenuLink href="#" className="block p-1 hover:bg-gray-100 rounded">Enterprise</NavigationMenuLink></li>
                <li><NavigationMenuLink href="#" className="block p-1 hover:bg-gray-100 rounded">Small Business</NavigationMenuLink></li>
                <li><NavigationMenuLink href="#" className="block p-1 hover:bg-gray-100 rounded">Startups</NavigationMenuLink></li>
              </ul>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</div>`,
    },
  ],
};
