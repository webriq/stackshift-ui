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
toast("Success", {
  description: "Your changes have been saved."
})`,
  props: [
    {
      name: "message",
      type: "string | React.ReactNode",
      required: true,
      description: "The first argument to toast() - the main message/title of the toast.",
    },
    {
      name: "description",
      type: "string | React.ReactNode",
      required: false,
      description: "Additional description text shown below the message.",
    },
    {
      name: "duration",
      type: "number",
      required: false,
      default: "4000",
      description: "Duration in milliseconds before the toast auto-dismisses.",
    },
    {
      name: "action",
      type: "{ label: string, onClick: () => void }",
      required: false,
      description: "Optional action button to display in the toast.",
    },
    {
      name: "id",
      type: "string | number",
      required: false,
      description: "Custom ID for the toast. Useful for updating or dismissing specific toasts.",
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
      title: "Basic Toast",
      description: "Display a simple toast notification. Note: Requires Toaster component in your app root.",
      code: `<div>
  <Toaster />
  <Button
    onClick={() => {
      toast("Notification", {
        description: "This is a basic toast notification."
      });
    }}
  >
    Show Toast
  </Button>
</div>`,
    },
    {
      title: "Success Toast",
      description: "Show a success message.",
      code: `<div>
  <Toaster />
  <Button
    onClick={() => {
      toast.success("Your changes have been saved successfully.");
    }}
  >
    Save Changes
  </Button>
</div>`,
    },
    {
      title: "Error Toast",
      description: "Display error notifications.",
      code: `<div>
  <Toaster />
  <Button
    variant="destructive"
    onClick={() => {
      toast.error("Something went wrong. Please try again.");
    }}
  >
    Trigger Error
  </Button>
</div>`,
    },
    {
      title: "With Action",
      description: "Toast with an action button.",
      code: `<div>
  <Toaster />
  <Button
    onClick={() => {
      toast("File deleted", {
        description: "Your file has been permanently deleted.",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo clicked")
        }
      });
    }}
  >
    Delete File
  </Button>
</div>`,
    },
    {
      title: "Custom Duration",
      description: "Control how long the toast is displayed.",
      code: `<div>
  <Toaster />
  <div className="flex gap-2">
    <Button
      onClick={() => {
        toast("Quick message", { duration: 2000 });
      }}
    >
      2 seconds
    </Button>
    <Button
      onClick={() => {
        toast("Longer message", { duration: 10000 });
      }}
    >
      10 seconds
    </Button>
  </div>
</div>`,
    },
    {
      title: "Toaster Positions",
      description: "The Toaster component supports different positions. Configure it in your app root.",
      code: `<div className="space-y-2">
  <Text className="text-sm text-muted-foreground">
    Available positions: top-left, top-right, top-center, bottom-left, bottom-right, bottom-center
  </Text>
  <Toaster position="top-right" />
  <Button
    onClick={() => {
      toast("Top Right", {
        description: "This toast appears in the top right corner."
      });
    }}
  >
    Show Toast
  </Button>
</div>`,
    },
  ],
};
