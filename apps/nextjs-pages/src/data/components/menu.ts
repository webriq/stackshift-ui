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
      description: "Navigation menu with dropdown sub-items.",
      code: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
          <li>
            <NavigationMenuLink href="/products/web">
              <div className="text-sm font-medium">Web Development</div>
              <p className="text-sm text-muted-foreground">
                Build modern web applications
              </p>
            </NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink href="/products/mobile">
              <div className="text-sm font-medium">Mobile Apps</div>
              <p className="text-sm text-muted-foreground">
                Create native mobile experiences
              </p>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
    },
    {
      title: "Mega Menu",
      description: "Large navigation menu with multiple columns.",
      code: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid w-[600px] grid-cols-3 gap-4 p-6">
          <div>
            <h4 className="mb-2 text-sm font-medium">By Industry</h4>
            <ul className="space-y-2">
              <li><NavigationMenuLink href="#">E-commerce</NavigationMenuLink></li>
              <li><NavigationMenuLink href="#">Healthcare</NavigationMenuLink></li>
              <li><NavigationMenuLink href="#">Finance</NavigationMenuLink></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-medium">By Size</h4>
            <ul className="space-y-2">
              <li><NavigationMenuLink href="#">Enterprise</NavigationMenuLink></li>
              <li><NavigationMenuLink href="#">Small Business</NavigationMenuLink></li>
              <li><NavigationMenuLink href="#">Startups</NavigationMenuLink></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-medium">Resources</h4>
            <ul className="space-y-2">
              <li><NavigationMenuLink href="#">Documentation</NavigationMenuLink></li>
              <li><NavigationMenuLink href="#">API Reference</NavigationMenuLink></li>
              <li><NavigationMenuLink href="#">Support</NavigationMenuLink></li>
            </ul>
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
    },
  ],
};
