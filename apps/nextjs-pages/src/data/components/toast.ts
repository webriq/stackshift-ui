import type { ComponentDoc } from "./index";

export const toastDoc: ComponentDoc = {
  name: "Toast",
  slug: "toast",
  description:
    "A toast notification system for displaying temporary messages and alerts. Includes Toaster component for the container and toast function for triggering notifications programmatically.",
  useCases: [
    "Success messages after form submission",
    "Error notifications and alerts",
    "Loading states and progress updates",
    "Undo actions and confirmations",
    "System notifications and updates",
  ],
  category: "ui",
  importCode: `import { Toaster, toast } from "@stackshift-ui/react";`,
  individualImportCode: `import { Toaster, toast } from "@stackshift-ui/toast";`,
  usageCode: `// Add Toaster to your app root
<Toaster />

// Trigger toast notifications
toast({
  title: "Success",
  description: "Your changes have been saved."
})`,
  props: [
    {
      name: "title",
      type: "string | React.ReactNode",
      required: false,
      description: "The title of the toast notification.",
    },
    {
      name: "description",
      type: "string | React.ReactNode",
      required: false,
      description: "The description or body content of the toast.",
    },
    {
      name: "variant",
      type: '"default" | "destructive"',
      required: false,
      default: '"default"',
      description: "The visual variant of the toast.",
    },
    {
      name: "duration",
      type: "number",
      required: false,
      default: "5000",
      description: "Duration in milliseconds before the toast auto-dismisses.",
    },
    {
      name: "action",
      type: "ToastAction",
      required: false,
      description: "Optional action button to display in the toast.",
    },
    {
      name: "position",
      type: '"top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center"',
      required: false,
      default: '"bottom-right"',
      description:
        "Position of the toast on the screen. Can be set on the Toaster for global positioning or per-toast for individual control.",
    },
  ],
  toasterProps: [
    {
      name: "position",
      type: '"top-left" | "top-right" | "top-center" | "bottom-left" | "bottom-right" | "bottom-center"',
      required: false,
      default: '"bottom-right"',
      description: "Global position for all toasts rendered by this Toaster.",
    },
    {
      name: "theme",
      type: '"light" | "dark" | "system"',
      required: false,
      default: '"system"',
      description:
        "Theme for the toasts. Automatically syncs with next-themes if not specified.",
    },
    {
      name: "richColors",
      type: "boolean",
      required: false,
      default: "false",
      description: "Enable rich colors for different toast types (success, error, etc.).",
    },
    {
      name: "expand",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether toasts should expand to show full content.",
    },
    {
      name: "visibleToasts",
      type: "number",
      required: false,
      default: "3",
      description: "Maximum number of toasts visible at once.",
    },
    {
      name: "closeButton",
      type: "boolean",
      required: false,
      default: "false",
      description: "Show a close button on each toast.",
    },
    {
      name: "offset",
      type: "string | number",
      required: false,
      description: "Offset distance from the edge of the viewport.",
    },
    {
      name: "gap",
      type: "number",
      required: false,
      default: "14",
      description: "Gap between multiple toasts in pixels.",
    },
    {
      name: "dir",
      type: '"ltr" | "rtl" | "auto"',
      required: false,
      default: '"auto"',
      description: "Text direction for RTL language support.",
    },
  ],
  examples: [
    {
      title: "Setup",
      description: "Add the Toaster component to your app root.",
      code: `// In your root layout or App component
import { Toaster } from "@stackshift-ui/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}`,
    },
    {
      title: "Basic Toast",
      description: "Display a simple toast notification.",
      code: `import { toast } from "@stackshift-ui/react";

<Button
  onClick={() => {
    toast({
      title: "Notification",
      description: "This is a basic toast notification."
    });
  }}
>
  Show Toast
</Button>`,
    },
    {
      title: "Success Toast",
      description: "Show a success message.",
      code: `<Button
  onClick={() => {
    toast({
      title: "Success",
      description: "Your changes have been saved successfully."
    });
  }}
>
  Save Changes
</Button>`,
    },
    {
      title: "Error Toast",
      description: "Display error notifications.",
      code: `<Button
  variant="destructive"
  onClick={() => {
    toast({
      variant: "destructive",
      title: "Error",
      description: "Something went wrong. Please try again."
    });
  }}
>
  Trigger Error
</Button>`,
    },
    {
      title: "With Action",
      description: "Toast with an action button.",
      code: `<Button
  onClick={() => {
    toast({
      title: "File deleted",
      description: "Your file has been permanently deleted.",
      action: {
        label: "Undo",
        onClick: () => {
          console.log("Undo clicked");
        }
      }
    });
  }}
>
  Delete File
</Button>`,
    },
    {
      title: "Custom Duration",
      description: "Control how long the toast is displayed.",
      code: `<div className="flex gap-2">
  <Button
    onClick={() => {
      toast({
        title: "Quick message",
        duration: 2000
      });
    }}
  >
    2 seconds
  </Button>
  <Button
    onClick={() => {
      toast({
        title: "Longer message",
        duration: 10000
      });
    }}
  >
    10 seconds
  </Button>
</div>`,
    },
    {
      title: "Promise Toast",
      description: "Show loading state and update based on promise result.",
      code: `<Button
  onClick={() => {
    const promise = fetch("/api/data").then(res => res.json());

    toast.promise(promise, {
      loading: "Loading...",
      success: (data) => \`Successfully loaded \${data.count} items\`,
      error: "Failed to load data"
    });
  }}
>
  Load Data
</Button>`,
    },
    {
      title: "Positioning",
      description:
        "Configure where toasts appear on the screen. Set position on the Toaster component for global positioning.",
      code: `// Top right (common for notifications)
<Toaster position="top-right" />

// Bottom center (common for mobile-friendly apps)
<Toaster position="bottom-center" />

// Top center (common for important alerts)
<Toaster position="top-center" />

// Available positions:
// "top-left" | "top-right" | "top-center"
// "bottom-left" | "bottom-right" | "bottom-center"`,
    },
    {
      title: "Per-Toast Position",
      description: "Override the global position for individual toasts.",
      code: `<Button
  onClick={() => {
    toast("This appears at top-center!", {
      position: "top-center"
    });
  }}
>
  Show at Top Center
</Button>`,
    },
    {
      title: "Custom Toaster Configuration",
      description:
        "Customize the Toaster with positioning, spacing, and appearance options.",
      code: `// In your root layout
<Toaster
  position="top-right"
  expand={true}
  richColors
  closeButton
  visibleToasts={5}
  offset={16}
  gap={8}
/>`,
    },
  ],
};
