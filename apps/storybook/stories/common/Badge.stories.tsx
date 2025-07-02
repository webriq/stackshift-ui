import { Badge } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

type BadgeProps = React.ComponentProps<typeof Badge> & {
  variant: "default" | "secondary" | "outline" | "destructive";
};

const meta: Meta<BadgeProps> = {
  title: "Common/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A small status descriptor for UI elements. Badges are used to highlight an item's status for quick recognition.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    children: "Badge",
    variant: "default",
    className: "",
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "secondary", "outline", "destructive"],
      description: "The visual style variant of the badge",
    },
    children: {
      control: { type: "text" },
      description: "The content to display inside the badge",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply",
    },
  },
} satisfies Meta<BadgeProps>;

export default meta;
type Story = StoryObj<BadgeProps>;

export const Default: Story = {
  args: {
    children: "Default",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All available badge variants displayed together for comparison.",
      },
    },
  },
};

export const StatusExamples: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Order Status:</span>
        <Badge variant="default">Processing</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Payment:</span>
        <Badge variant="secondary">Pending</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Subscription:</span>
        <Badge variant="outline">Active</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Account:</span>
        <Badge variant="destructive">Suspended</Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Real-world examples of badges used for status indicators in different contexts.",
      },
    },
  },
};

export const WithNumbers: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <div className="flex items-center gap-2">
        <span className="text-sm">Notifications</span>
        <Badge variant="destructive">3</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Cart Items</span>
        <Badge variant="default">12</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">New Messages</span>
        <Badge variant="secondary">99+</Badge>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Badges displaying numerical values for counts and notifications.",
      },
    },
  },
};

export const CategoryTags: Story = {
  render: () => (
    <div className="space-y-3">
      <div>
        <h4 className="text-sm font-medium mb-2">Article Categories</h4>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Technology</Badge>
          <Badge variant="outline">Design</Badge>
          <Badge variant="outline">Development</Badge>
          <Badge variant="outline">Business</Badge>
        </div>
      </div>
      <div>
        <h4 className="text-sm font-medium mb-2">Skill Tags</h4>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">React</Badge>
          <Badge variant="secondary">TypeScript</Badge>
          <Badge variant="secondary">Node.js</Badge>
          <Badge variant="secondary">GraphQL</Badge>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Badges used as category tags and skill indicators in content organization.",
      },
    },
  },
};
