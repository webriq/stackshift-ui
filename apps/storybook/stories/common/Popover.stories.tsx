import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@stackshift-ui/react";
import { Button } from "@stackshift-ui/react";
import { Label } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const meta: Meta<typeof Popover> = {
  title: "Common/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A popover component built on Radix UI primitives for displaying rich content in a floating container.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: { type: "boolean" },
      description: "Whether the popover is open",
    },
    modal: {
      control: { type: "boolean" },
      description: "Whether the popover is modal",
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Dimensions</h4>
          <p className="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const WithForm: Story = {
  render: () => {
    const [width, setWidth] = useState("100");
    const [height, setHeight] = useState("25");

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Settings</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Width</Label>
                <input
                  id="width"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="col-span-2 h-8 px-2 border border-gray-300 rounded text-sm"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">Height</Label>
                <input
                  id="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="col-span-2 h-8 px-2 border border-gray-300 rounded text-sm"
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
};

export const UserProfile: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <img
            className="rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
            alt="User avatar"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64" align="end">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-3">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
              alt="User avatar"
            />
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-gray-500">john@example.com</p>
            </div>
          </div>
          
          <div className="border-t pt-4">
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start" size="sm">
                Profile Settings
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm">
                Billing
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm">
                Team
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm">
                Subscription
              </Button>
            </div>
          </div>
          
          <div className="border-t pt-4">
            <Button variant="ghost" className="w-full justify-start text-red-600" size="sm">
              Log out
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const NotificationCenter: Story = {
  render: () => {
    const notifications = [
      { id: 1, title: "New message", description: "You have a new message from Sarah", time: "2 min ago", unread: true },
      { id: 2, title: "System update", description: "System will be updated tonight", time: "1 hour ago", unread: true },
      { id: 3, title: "Payment received", description: "Payment of $99 received", time: "3 hours ago", unread: false },
    ];

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="relative">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 17H4l5 5v-5zM12 3v18" />
            </svg>
            Notifications
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80" align="end">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Notifications</h4>
              <Button variant="ghost" size="sm" className="text-xs">
                Mark all read
              </Button>
            </div>
            
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 rounded-lg border ${
                    notification.unread ? "bg-blue-50 border-blue-200" : "bg-gray-50"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">{notification.title}</p>
                      <p className="text-xs text-gray-600">{notification.description}</p>
                      <p className="text-xs text-gray-400">{notification.time}</p>
                    </div>
                    {notification.unread && (
                      <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <Button variant="outline" className="w-full" size="sm">
              View All Notifications
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
};

export const SharePopover: Story = {
  render: () => {
    const shareOptions = [
      { name: "Twitter", icon: "🐦", color: "bg-blue-500" },
      { name: "Facebook", icon: "📘", color: "bg-blue-600" },
      { name: "LinkedIn", icon: "💼", color: "bg-blue-700" },
      { name: "Email", icon: "📧", color: "bg-gray-600" },
      { name: "Copy Link", icon: "🔗", color: "bg-gray-500" },
    ];

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            Share
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <div className="space-y-4">
            <h4 className="font-medium">Share this content</h4>
            
            <div className="grid grid-cols-2 gap-2">
              {shareOptions.map((option) => (
                <Button
                  key={option.name}
                  variant="ghost"
                  className="h-auto p-3 flex flex-col items-center space-y-1"
                >
                  <div className={`w-8 h-8 rounded-full ${option.color} flex items-center justify-center text-white text-sm`}>
                    {option.icon}
                  </div>
                  <span className="text-xs">{option.name}</span>
                </Button>
              ))}
            </div>
            
            <div className="border-t pt-4">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value="https://example.com/shared-content"
                  readOnly
                  className="flex-1 px-2 py-1 text-xs border rounded bg-gray-50"
                />
                <Button size="sm" variant="outline">
                  Copy
                </Button>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
};

export const ColorPicker: Story = {
  render: () => {
    const [selectedColor, setSelectedColor] = useState("#3b82f6");
    
    const colors = [
      "#ef4444", "#f97316", "#f59e0b", "#eab308",
      "#84cc16", "#22c55e", "#10b981", "#14b8a6",
      "#06b6d4", "#0ea5e9", "#3b82f6", "#6366f1",
      "#8b5cf6", "#a855f7", "#d946ef", "#ec4899",
    ];

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-20 h-10 p-1">
            <div
              className="w-full h-full rounded border"
              style={{ backgroundColor: selectedColor }}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <div className="space-y-4">
            <h4 className="font-medium">Pick a color</h4>
            
            <div className="grid grid-cols-8 gap-1">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded border-2 ${
                    selectedColor === color ? "border-gray-900" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="hex-input">Hex Color</Label>
              <input
                id="hex-input"
                type="text"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-full px-2 py-1 text-sm border rounded"
              />
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600">
                Preview
              </div>
              <div
                className="w-8 h-8 rounded border"
                style={{ backgroundColor: selectedColor }}
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
};

export const ControlledPopover: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Button onClick={() => setOpen(true)} disabled={open}>
            Open Popover
          </Button>
          <Button onClick={() => setOpen(false)} disabled={!open} variant="outline">
            Close Popover
          </Button>
        </div>
        
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline">Trigger Button</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-4">
              <h4 className="font-medium">Controlled Popover</h4>
              <p className="text-sm text-gray-600">
                This popover's open state is controlled externally.
              </p>
              <Button onClick={() => setOpen(false)} size="sm">
                Close from inside
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
};

export const PositionVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 justify-center">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Top</Button>
        </PopoverTrigger>
        <PopoverContent side="top" className="w-48">
          <p className="text-sm">Popover positioned on top</p>
        </PopoverContent>
      </Popover>
      
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </PopoverTrigger>
        <PopoverContent side="bottom" className="w-48">
          <p className="text-sm">Popover positioned on bottom</p>
        </PopoverContent>
      </Popover>
      
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Left</Button>
        </PopoverTrigger>
        <PopoverContent side="left" className="w-48">
          <p className="text-sm">Popover positioned on left</p>
        </PopoverContent>
      </Popover>
      
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Right</Button>
        </PopoverTrigger>
        <PopoverContent side="right" className="w-48">
          <p className="text-sm">Popover positioned on right</p>
        </PopoverContent>
      </Popover>
    </div>
  ),
};