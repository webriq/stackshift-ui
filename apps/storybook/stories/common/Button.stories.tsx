import { Button } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowRight, Download, Mail, Plus, Search, Settings, Trash2 } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Common/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile button component with multiple variants and sizes. Built with class-variance-authority for consistent styling.",
      },
    },
  },
  args: {
    iconPosition: "right",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      description: "Visual style variant of the button",
    },
    size: {
      control: { type: "select" },
      options: ["default", "sm", "lg", "icon"],
      description: "Size of the button",
    },
    iconPosition: {
      control: { type: "radio" },
      options: ["left", "right"],
      description: "Position of the icon in the button",
    },
    asChild: {
      control: { type: "boolean" },
      description: "Render as a child component using Radix Slot",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    icon: <ArrowRight />,
  },
  parameters: {
    docs: {
      description: {
        story: "Default button with primary styling.",
      },
    },
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All available button variants showing different visual styles.",
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <Settings className="h-4 w-4" />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different button sizes including an icon-only variant.",
      },
    },
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>
        <Mail className="mr-2 h-4 w-4" />
        Email
      </Button>
      <Button variant="outline">
        <Download className="mr-2 h-4 w-4" />
        Download
      </Button>
      <Button variant="secondary">
        <Plus className="mr-2 h-4 w-4" />
        Add Item
      </Button>
      <Button variant="destructive">
        <Trash2 className="mr-2 h-4 w-4" />
        Delete
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Buttons with icons to enhance visual communication.",
      },
    },
  },
};

export const IconOnly: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button size="icon">
        <Search className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="outline">
        <Settings className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="secondary">
        <Plus className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="destructive">
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Icon-only buttons for compact interfaces.",
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>Normal</Button>
      <Button disabled>Disabled</Button>
      <Button variant="outline">Normal Outline</Button>
      <Button variant="outline" disabled>
        Disabled Outline
      </Button>
      <Button variant="destructive">Normal Destructive</Button>
      <Button variant="destructive" disabled>
        Disabled Destructive
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Button states including normal and disabled variants.",
      },
    },
  },
};

export const Loading: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button disabled>
        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        Loading...
      </Button>
      <Button variant="outline" disabled>
        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        Processing
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Loading state buttons with spinner indicators.",
      },
    },
  },
};

export const AsChild: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button asChild>
        <a href="#" target="_blank" rel="noopener noreferrer">
          External Link
        </a>
      </Button>
      <Button variant="outline" asChild>
        <a href="#docs">Documentation</a>
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Using asChild prop to render buttons as other elements like links.",
      },
    },
  },
};

export const ButtonGroup: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex rounded-md shadow-sm" role="group">
        <Button variant="outline" className="rounded-r-none border-r-0">
          Left
        </Button>
        <Button variant="outline" className="rounded-none border-r-0">
          Center
        </Button>
        <Button variant="outline" className="rounded-l-none">
          Right
        </Button>
      </div>
      <div className="flex gap-2">
        <Button size="sm">Save</Button>
        <Button size="sm" variant="outline">
          Cancel
        </Button>
        <Button size="sm" variant="destructive">
          Delete
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Grouped buttons for related actions and button combinations.",
      },
    },
  },
};
