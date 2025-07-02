import { Button, Toaster, toast } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
// import { toast } from "sonner";

const meta: Meta<typeof Toaster> = {
  title: "Common/Toast",
  component: Toaster,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A toast component for displaying temporary notifications and messages to users. Uses Sonner under the hood.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: { type: "radio" },
      options: ["light", "dark", "system"],
      description: "Theme of the toast",
    },
    position: {
      control: { type: "radio" },
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
      description: "Position of the toast",
    },
  },
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => {
    return (
      <>
        <Toaster />
        <Button
          onClick={() =>
            toast("Default Toast", {
              description: "This is a default toast message.",
            })
          }>
          Show Toast
        </Button>
      </>
    );
  },
};

export const SuccessToast: Story = {
  render: () => {
    return (
      <>
        <Toaster />
        <Button
          onClick={() =>
            toast.success("Success!", {
              description: "Your changes have been saved successfully.",
            })
          }>
          Show Success Toast
        </Button>
      </>
    );
  },
};

export const ErrorToast: Story = {
  render: () => {
    return (
      <>
        <Toaster />
        <Button
          variant="destructive"
          onClick={() =>
            toast.error("Error", {
              description: "Something went wrong. Please try again.",
            })
          }>
          Show Error Toast
        </Button>
      </>
    );
  },
};

export const WarningToast: Story = {
  render: () => {
    return (
      <>
        <Toaster />
        <Button
          variant="outline"
          onClick={() =>
            toast.warning("Warning", {
              description: "This action cannot be undone.",
            })
          }>
          Show Warning Toast
        </Button>
      </>
    );
  },
};

export const InfoToast: Story = {
  render: () => {
    return (
      <>
        <Toaster />
        <Button
          variant="secondary"
          onClick={() =>
            toast.info("Information", {
              description: "Here's some useful information for you.",
            })
          }>
          Show Info Toast
        </Button>
      </>
    );
  },
};

export const WithActions: Story = {
  render: () => {
    return (
      <>
        <Toaster />
        <Button
          onClick={() =>
            toast("File uploaded", {
              description: "Your file has been uploaded successfully.",
              action: {
                label: "View",
                onClick: () => console.log("View clicked"),
              },
            })
          }>
          Show Toast with Action
        </Button>
      </>
    );
  },
};

export const PersistentToast: Story = {
  render: () => {
    return (
      <>
        <Toaster />
        <Button
          onClick={() =>
            toast("Persistent Toast", {
              description: "This toast will not auto-dismiss.",
              duration: Infinity,
            })
          }>
          Show Persistent Toast
        </Button>
      </>
    );
  },
};

export const MultipleToasts: Story = {
  render: () => {
    const showMultipleToasts = () => {
      toast("First toast", {
        description: "This is the first toast message.",
      });

      setTimeout(() => {
        toast.success("Second toast", {
          description: "This is the second toast message.",
        });
      }, 500);

      setTimeout(() => {
        toast.warning("Third toast", {
          description: "This is the third toast message.",
        });
      }, 1000);
    };

    return (
      <>
        <Toaster />
        <Button onClick={showMultipleToasts}>Show Multiple Toasts</Button>
      </>
    );
  },
};

export const FormValidationToasts: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      if (!formData.email) {
        toast.error("Validation Error", {
          description: "Email is required.",
        });
        return;
      }

      if (!formData.password) {
        toast.error("Validation Error", {
          description: "Password is required.",
        });
        return;
      }

      if (formData.password.length < 8) {
        toast.warning("Weak Password", {
          description: "Password should be at least 8 characters long.",
        });
        return;
      }

      toast.success("Login Successful", {
        description: "Welcome back!",
      });
    };

    return (
      <>
        <Toaster />
        <form onSubmit={handleSubmit} className="space-y-4 w-80">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
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
              onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </>
    );
  },
};

export const ProgressToast: Story = {
  render: () => {
    const [isUploading, setIsUploading] = useState(false);

    const simulateUpload = () => {
      setIsUploading(true);

      toast("Upload started", {
        description: "Your file is being uploaded...",
      });

      // Simulate progress updates
      setTimeout(() => {
        toast.info("Upload progress", {
          description: "50% complete...",
        });
      }, 2000);

      setTimeout(() => {
        toast.success("Upload complete", {
          description: "Your file has been uploaded successfully.",
        });
        setIsUploading(false);
      }, 4000);
    };

    return (
      <>
        <Toaster />
        <Button onClick={simulateUpload} disabled={isUploading}>
          {isUploading ? "Uploading..." : "Start Upload"}
        </Button>
      </>
    );
  },
};

export const CustomDuration: Story = {
  render: () => {
    return (
      <>
        <Toaster />
        <div className="space-y-2">
          <Button
            onClick={() =>
              toast("Quick toast", {
                description: "This will disappear in 1 second.",
                duration: 1000,
              })
            }>
            1 Second Toast
          </Button>

          <Button
            onClick={() =>
              toast("Normal toast", {
                description: "This will disappear in 5 seconds.",
                duration: 5000,
              })
            }>
            5 Second Toast
          </Button>

          <Button
            onClick={() =>
              toast("Long toast", {
                description: "This will disappear in 10 seconds.",
                duration: 10000,
              })
            }>
            10 Second Toast
          </Button>
        </div>
      </>
    );
  },
};

export const NotificationCenter: Story = {
  render: () => {
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
      <>
        <Toaster />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Notification Center</h3>
          <div className="grid grid-cols-2 gap-2">
            {notifications.map((notification, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => {
                  if (notification.variant === "success") {
                    toast.success(notification.title, {
                      description: notification.description,
                    });
                  } else if (notification.variant === "warning") {
                    toast.warning(notification.title, {
                      description: notification.description,
                    });
                  } else if (notification.variant === "error") {
                    toast.error(notification.title, {
                      description: notification.description,
                    });
                  } else {
                    toast(notification.title, {
                      description: notification.description,
                    });
                  }
                }}>
                {notification.title}
              </Button>
            ))}
          </div>
        </div>
      </>
    );
  },
};

export const UndoToast: Story = {
  render: () => {
    const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

    const deleteItem = (index: number) => {
      const item = items[index];
      const newItems = items.filter((_, i) => i !== index);
      setItems(newItems);

      toast(`"${item}" deleted`, {
        description: "Item has been deleted.",
        action: {
          label: "Undo",
          onClick: () => {
            setItems(prev => {
              const restored = [...prev];
              restored.splice(index, 0, item);
              return restored;
            });
            toast.success(`"${item}" restored`, {
              description: "Item has been restored.",
            });
          },
        },
      });
    };

    return (
      <>
        <Toaster />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Items</h3>
          <div className="space-y-2">
            {items.map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-center justify-between p-2 border rounded">
                <span>{item}</span>
                <Button variant="destructive" size="sm" onClick={() => deleteItem(index)}>
                  Delete
                </Button>
              </div>
            ))}
          </div>
          {items.length === 0 && (
            <p className="text-gray-500 text-center py-4">No items remaining</p>
          )}
        </div>
      </>
    );
  },
};

export const LoadingToast: Story = {
  render: () => {
    const showLoadingToast = () => {
      const promise = () => new Promise(resolve => setTimeout(resolve, 2000));

      toast.promise(promise, {
        loading: "Loading...",
        success: "Data loaded successfully!",
        error: "Failed to load data",
      });
    };

    return (
      <>
        <Toaster />
        <Button onClick={showLoadingToast}>Show Loading Toast</Button>
      </>
    );
  },
};

export const CustomPosition: Story = {
  render: args => {
    const position = args.position ?? "top-right";

    const showPositionAt = (position: string) => {
      toast("Custom Position Toast", {
        description: `This toast appears in the ${position}.`,
        position: position as any,
      });
    };

    return (
      <>
        <Toaster position="top-right" />
        <div className="space-y-2">
          <Button onClick={() => showPositionAt(position)}>Show Toast (Top Right)</Button>
        </div>
      </>
    );
  },
};
