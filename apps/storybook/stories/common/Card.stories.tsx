// @ts-nocheck - story demo file
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CalendarDays, MessageSquare, Share, ShoppingCart, Star, Users } from "lucide-react";

const meta: Meta<typeof Card> = {
  title: "Common/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible card component with header, content, and footer sections. Perfect for displaying grouped information.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
      description: "Additional CSS classes for the card container",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold">Total Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-start gap-6">
          <ShoppingCart className="w-10 h-10 text-primary" />
          <div className="flex flex-col gap-1">
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </div>
        </div>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Stats card showing a metric with trend indicator.",
      },
    },
  },
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent className="pt-6">
        <p>A simple card with just content and no header or footer.</p>
      </CardContent>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Minimal card with only content section.",
      },
    },
  },
};

export const ProductCard: Story = {
  render: () => (
    <Card className="w-[300px]">
      <CardHeader className="pb-3">
        <div className="aspect-square w-full bg-gray-100 rounded-md mb-4 flex items-center justify-center">
          <span className="text-gray-400">Product Image</span>
        </div>
        <CardTitle className="text-lg">Wireless Headphones</CardTitle>
        <CardDescription>Premium noise-cancelling headphones</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">$299</span>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">4.8 (124)</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Product card with image, pricing, and rating information.",
      },
    },
  },
};

export const UserProfile: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-lg">John Doe</CardTitle>
            <CardDescription>Senior Developer</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Users className="h-4 w-4" />
            <span>1.2k followers</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CalendarDays className="h-4 w-4" />
            <span>Joined March 2023</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="flex-1">Follow</Button>
        <Button variant="outline" size="icon">
          <MessageSquare className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "User profile card with avatar, stats, and action buttons.",
      },
    },
  },
};

export const BlogPost: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="secondary">Technology</Badge>
          <span className="text-sm text-muted-foreground">5 min read</span>
        </div>
        <CardTitle>Getting Started with React Hooks</CardTitle>
        <CardDescription>
          Learn the fundamentals of React Hooks and how they can simplify your component logic.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://github.com/shadcn.png" alt="Author" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <span>Jane Smith</span>
          </div>
          <span>Dec 15, 2023</span>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="ghost" size="sm">
          <MessageSquare className="h-4 w-4 mr-2" />
          12 Comments
        </Button>
        <Button variant="ghost" size="sm">
          <Share className="h-4 w-4 mr-2" />
          Share
        </Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Blog post card with metadata, author info, and engagement actions.",
      },
    },
  },
};

export const StatsCard: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <span className="text-2xl">💰</span>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">$45,231.89</div>
          <p className="text-xs text-muted-foreground">+20.1% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2,350</div>
          <p className="text-xs text-muted-foreground">+180.1% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Sales</CardTitle>
          <span className="text-2xl">📈</span>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12,234</div>
          <p className="text-xs text-muted-foreground">+19% from last month</p>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Statistics cards for dashboard displays with metrics and trends.",
      },
    },
  },
};

export const NotificationCard: Story = {
  render: () => (
    <Card className="w-[380px]">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-base">New message received</CardTitle>
            <CardDescription>2 minutes ago</CardDescription>
          </div>
          <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          You have received a new message from Sarah Wilson regarding the project update.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm">Reply</Button>
        <Button variant="ghost" size="sm">
          Mark as Read
        </Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Notification card with status indicator and action buttons.",
      },
    },
  },
};

export const PricingCard: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="relative">
        <CardHeader>
          <CardTitle>Basic</CardTitle>
          <CardDescription>Perfect for getting started</CardDescription>
          <div className="text-3xl font-bold">
            $9<span className="text-sm font-normal">/month</span>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li>✓ Up to 5 projects</li>
            <li>✓ 10GB storage</li>
            <li>✓ Email support</li>
            <li>✗ Advanced analytics</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Get Started
          </Button>
        </CardFooter>
      </Card>

      <Card className="relative border-primary">
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
          <Badge>Most Popular</Badge>
        </div>
        <CardHeader>
          <CardTitle>Pro</CardTitle>
          <CardDescription>Best for growing teams</CardDescription>
          <div className="text-3xl font-bold">
            $29<span className="text-sm font-normal">/month</span>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li>✓ Unlimited projects</li>
            <li>✓ 100GB storage</li>
            <li>✓ Priority support</li>
            <li>✓ Advanced analytics</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Get Started</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Enterprise</CardTitle>
          <CardDescription>For large organizations</CardDescription>
          <div className="text-3xl font-bold">
            $99<span className="text-sm font-normal">/month</span>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li>✓ Everything in Pro</li>
            <li>✓ Unlimited storage</li>
            <li>✓ 24/7 phone support</li>
            <li>✓ Custom integrations</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Contact Sales
          </Button>
        </CardFooter>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Pricing cards with different tiers and feature comparisons.",
      },
    },
  },
};

export const EventCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">15</div>
            <div className="text-sm text-muted-foreground">DEC</div>
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg">React Conference 2024</CardTitle>
            <CardDescription>Annual React developer conference</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 text-sm">
          <div>📍 San Francisco, CA</div>
          <div>🕐 9:00 AM - 6:00 PM</div>
          <div>👥 500+ attendees expected</div>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="flex-1">Register</Button>
        <Button variant="outline" size="icon">
          <Share className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story: "Event card with date, location, and registration information.",
      },
    },
  },
};
