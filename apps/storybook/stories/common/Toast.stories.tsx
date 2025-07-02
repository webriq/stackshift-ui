import { Toast, ToastProvider, useToast } from "@stackshift-ui/react";
import { Button } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Toast> = {
  title: "Common/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A toast component for displaying temporary notifications and messages to users.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "success", "error", "warning"],
      description: "Visual variant of the toast",
    },
    duration: {
      control: { type: "number" },
      description: "Duration in milliseconds before auto-dismiss",
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: () => {
    const { toast } = useToast();

    return (
      <ToastProvider>
        <Button
          onClick={() =>
            toast({
              title: "Default Toast",
              description: "This is a default toast message.",
            })
          }
        >
          Show Toast
        </Button>
      </ToastProvider>
    );
  },
};

export const SuccessToast: Story = {
  render: () => {
    const { toast } = useToast();

    return (
      <ToastProvider>
        <Button
          onClick={() =>
            toast({
              variant: "success",
              title: "Success!",
              description: "Your changes have been saved successfully.",
            })
          }
        >
          Show Success Toast
        </Button>
      </ToastProvider>
    );
  },
};

export const ErrorToast: Story = {
  render: () => {
    const { toast } = useToast();

    return (
      <ToastProvider>
        <Button
          variant="destructive"
          onClick={() =>
            toast({
              variant: "error",
              title: "Error",
              description: "Something went wrong. Please try again.",
            })
          }
        >
          Show Error Toast
        </Button>
      </ToastProvider>
    );
  },
};

export const WarningToast: Story = {
  render: () => {
    const { toast } = useToast();

    return (
      <ToastProvider>
        <Button
          variant="outline"
          onClick={() =>
            toast({
              variant: "warning",
              title: "Warning",
              description: "This action cannot be undone.",
            })
          }
        >
          Show Warning Toast
        </Button>
      </ToastProvider>
    );
  },
};

export const WithActions: Story = {
  render: () => {
    const { toast } = useToast();

    return (
      <ToastProvider>
        <Button
          onClick={() =>
            toast({
              title: "File uploaded",
              description: "Your file has been uploaded successfully.",
              action: {
                label: "View",
                onClick: () => console.log("View clicked"),
              },
            })
          }
        >
          Show Toast with Action
        </Button>
      </ToastProvider>
    );
  },
};

export const PersistentToast: Story = {
  render: () => {
    const { toast } = useToast();

    return (
      <ToastProvider>
        <Button
          onClick={() =>
            toast({
              title: "Persistent Toast",
              description: "This toast will not auto-dismiss.",
              duration: Infinity,
            })
          }
        >
          Show Persistent Toast
        </Button>
      </ToastProvider>
    );
  },
};

export const MultipleToasts: Story = {
  render: () => {
    const { toast } = useToast();

    const showMultipleToasts = () => {
      toast({
        title: "First toast",
        description: "This is the first toast message.",
      });

      setTimeout(() => {
        toast({
          variant: "success",
          title: "Second toast",
          description: "This is the second toast message.",
        });
      }, 500);

      setTimeout(() => {
        toast({
          variant: "warning",
          title: "Third toast",
          description: "This is the third toast message.",
        });
      }, 1000);
    };

    return (
      <ToastProvider>
        <Button onClick={showMultipleToasts}>
          Show Multiple Toasts
        </Button>
      </ToastProvider>
    );
  },
};

export const FormValidationToasts: Story = {
  render: () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (!formData.email) {
        toast({
          variant: "error",
          title: "Validation Error",
          description: "Email is required.",
        });
        return;
      }

      if (!formData.password) {
        toast({
          variant: "error",
          title: "Validation Error",
          description: "Password is required.",
        });
        return;
      }

      if (formData.password.length < 8) {
        toast({
          variant: "warning",
          title: "Weak Password",
          description: "Password should be at least 8 characters long.",
        });
        return;
      }

      toast({
        variant: "success",
        title: "Login Successful",
        description: "Welcome back!",
      });
    };

    return (
      <ToastProvider>
        <form onSubmit={handleSubmit} className="space-y-4 w-80">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </ToastProvider>
    );
  },
};

export const ProgressToast: Story = {
  render: () => {
    const { toast } = useToast();
    const [isUploading, setIsUploading] = useState(false);

    const simulateUpload = () => {
      setIsUploading(true);
      
      toast({
        title: "Upload started",
        description: "Your file is being uploaded...",
      });

      // Simulate progress updates
      setTimeout(() => {
        toast({
          title: "Upload progress",
          description: "50% complete...",
        });
      }, 2000);

      setTimeout(() => {
        toast({
          variant: "success",
          title: "Upload complete",
          description: "Your file has been uploaded successfully.",
        });
        setIsUploading(false);
      }, 4000);
    };

    return (
      <ToastProvider>
        <Button 
          onClick={simulateUpload}
          disabled={isUploading}
        >
          {isUploading ? "Uploading..." : "Start Upload"}
        </Button>
      </ToastProvider>
    );
  },
};

export const CustomDuration: Story = {
  render: () => {
    const { toast } = useToast();

    return (
      <ToastProvider>
        <div className="space-y-2">
          <Button
            onClick={() =>
              toast({
                title: "Quick toast",
                description: "This will disappear in 1 second.",
                duration: 1000,
              })
            }
          >
            1 Second Toast
          </Button>

          <Button
            onClick={() =>
              toast({
                title: "Normal toast",
                description: "This will disappear in 5 seconds.",
                duration: 5000,
              })
            }
          >
            5 Second Toast
          </Button>

          <Button
            onClick={() =>
              toast({
                title: "Long toast",
                description: "This will disappear in 10 seconds.",
                duration: 10000,
              })
            }
          >
            10 Second Toast
          </Button>
        </div>
      </ToastProvider>
    );
  },
};

export const NotificationCenter: Story = {
  render: () => {
    const { toast } = useToast();

    const notifications = [
      {
        type: "message",
        title: "New Message",
        description: "You have a new message from Sarah",
        variant: "default" as const,
      },
      {
        type: "update",
        title: "System Update",
        description: "A new system update is available",
        variant: "warning" as const,
      },
      {
        type: "payment",
        title: "Payment Received",
        description: "Payment of $99.00 has been received",
        variant: "success" as const,
      },
      {
        type: "error",
        title: "Connection Failed",
        description: "Failed to connect to the server",
        variant: "error" as const,
      },
    ];

    return (
      <ToastProvider>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Notification Center</h3>
          <div className="grid grid-cols-2 gap-2">
            {notifications.map((notification, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() =>
                  toast({
                    variant: notification.variant,
                    title: notification.title,
                    description: notification.description,
                  })
                }
              >
                {notification.title}
              </Button>
            ))}
          </div>
        </div>
      </ToastProvider>
    );
  },
};

export const UndoToast: Story = {
  render: () => {
    const { toast } = useToast();
    const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

    const deleteItem = (index: number) => {
      const item = items[index];
      const newItems = items.filter((_, i) => i !== index);
      setItems(newItems);

      toast({
        title: "Item deleted",
        description: `"${item}" has been deleted.`,
        action: {
          label: "Undo",
          onClick: () => {
            setItems(prev => {
              const restored = [...prev];
              restored.splice(index, 0, item);
              return restored;
            });
            toast({
              variant: "success",
              title: "Item restored",
              description: `"${item}" has been restored.`,
            });
          },
        },
      });
    };

    return (
      <ToastProvider>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Items</h3>
          <div className="space-y-2">
            {items.map((item, index) => (
              <div key={`${item}-${index}`} className="flex items-center justify-between p-2 border rounded">
                <span>{item}</span>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteItem(index)}
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>
          {items.length === 0 && (
            <p className="text-gray-500 text-center py-4">No items remaining</p>
          )}
        </div>
      </ToastProvider>
    );
  },
};