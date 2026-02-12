import type { ComponentDoc } from "./index";

export const tooltipDoc: ComponentDoc = {
  name: "Tooltip",
  slug: "tooltip",
  description:
    "A tooltip component built on Radix UI for displaying helpful information on hover or focus. Includes sub-components: TooltipProvider, TooltipTrigger, and TooltipContent for flexible tooltip implementations.",
  useCases: [
    "Icon button labels and descriptions",
    "Form field help text and hints",
    "Truncated text preview on hover",
    "Disabled element explanations",
    "Keyboard shortcut displays",
  ],
  category: "ui",
  importCode: `import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider
} from "@stackshift-ui/react";`,
  individualImportCode: `import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider
} from "@stackshift-ui/tooltip";`,
  usageCode: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>
      <p>Tooltip content</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
  props: [
    {
      name: "delayDuration",
      type: "number",
      required: false,
      default: "700",
      description: "Delay in milliseconds before showing the tooltip.",
    },
    {
      name: "skipDelayDuration",
      type: "number",
      required: false,
      default: "300",
      description: "Duration to skip delay when quickly hovering between tooltips.",
    },
    {
      name: "open",
      type: "boolean",
      required: false,
      description: "The controlled open state of the tooltip.",
    },
    {
      name: "defaultOpen",
      type: "boolean",
      required: false,
      description: "The default open state when uncontrolled.",
    },
    {
      name: "onOpenChange",
      type: "(open: boolean) => void",
      required: false,
      description: "Callback when the open state changes.",
    },
  ],
  examples: [
    {
      title: "Basic Tooltip",
      description: "A simple tooltip with text content.",
      code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>This is a tooltip</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
    },
    {
      title: "Icon Button with Tooltip",
      description: "Tooltip providing label for an icon-only button.",
      code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline" size="icon">
        <Settings className="h-4 w-4" />
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Settings</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
    },
    {
      title: "Tooltip with Keyboard Shortcut",
      description: "Display keyboard shortcuts in tooltips.",
      code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">
        <Copy className="h-4 w-4 mr-2" />
        Copy
      </Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Copy to clipboard</p>
      <kbd className="text-xs">⌘C</kbd>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
    },
    {
      title: "Multiple Tooltips",
      description: "Multiple tooltips sharing the same provider.",
      code: `<TooltipProvider>
  <div className="flex gap-2">
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon">
          <Trash className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Delete</p>
      </TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon">
          <Edit className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Edit</p>
      </TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon">
          <Share className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Share</p>
      </TooltipContent>
    </Tooltip>
  </div>
</TooltipProvider>`,
    },
    {
      title: "Custom Positioning",
      description: "Control tooltip placement.",
      code: `<TooltipProvider>
  <div className="flex gap-4">
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Top</Button>
      </TooltipTrigger>
      <TooltipContent side="top">
        <p>Tooltip on top</p>
      </TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Right</Button>
      </TooltipTrigger>
      <TooltipContent side="right">
        <p>Tooltip on right</p>
      </TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Bottom</Button>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p>Tooltip on bottom</p>
      </TooltipContent>
    </Tooltip>

    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Left</Button>
      </TooltipTrigger>
      <TooltipContent side="left">
        <p>Tooltip on left</p>
      </TooltipContent>
    </Tooltip>
  </div>
</TooltipProvider>`,
    },
    {
      title: "Disabled Element Tooltip",
      description: "Show tooltip for disabled elements.",
      code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <span className="inline-block">
        <Button disabled>
          Disabled Button
        </Button>
      </span>
    </TooltipTrigger>
    <TooltipContent>
      <p>This feature is currently unavailable</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
    },
  ],
};
