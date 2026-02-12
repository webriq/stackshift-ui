import type { ComponentDoc } from "./index";

export const switchDoc: ComponentDoc = {
  name: "Switch",
  slug: "switch",
  description:
    "A toggle switch component built on Radix UI for binary on/off states. Provides an alternative to checkboxes for boolean settings with a more visual and mobile-friendly interface.",
  useCases: [
    "Settings and preferences toggles",
    "Feature flags and enable/disable options",
    "Notification and privacy controls",
    "Dark mode and theme toggles",
    "Show/hide content controls",
  ],
  category: "ui",
  importCode: `import { Switch } from "@stackshift-ui/react";`,
  individualImportCode: `import { Switch } from "@stackshift-ui/switch";`,
  usageCode: `<Switch />`,
  props: [
    {
      name: "checked",
      type: "boolean",
      required: false,
      description: "The controlled checked state of the switch.",
    },
    {
      name: "defaultChecked",
      type: "boolean",
      required: false,
      description: "The default checked state when uncontrolled.",
    },
    {
      name: "onCheckedChange",
      type: "(checked: boolean) => void",
      required: false,
      description: "Callback when the checked state changes.",
    },
    {
      name: "disabled",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether the switch is disabled.",
    },
    {
      name: "required",
      type: "boolean",
      required: false,
      default: "false",
      description: "Whether the switch is required in a form.",
    },
    {
      name: "name",
      type: "string",
      required: false,
      description: "The name attribute for form submission.",
    },
    {
      name: "value",
      type: "string",
      required: false,
      description: "The value attribute for form submission.",
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
      title: "Basic Switch",
      description: "A simple switch with label.",
      code: `<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`,
    },
    {
      title: "Controlled Switch",
      description: "Control the switch state with React state.",
      code: `const [enabled, setEnabled] = React.useState(false);

<div className="flex items-center justify-between">
  <Label htmlFor="notifications">Enable notifications</Label>
  <Switch
    id="notifications"
    checked={enabled}
    onCheckedChange={setEnabled}
  />
</div>

{enabled && (
  <p className="mt-2 text-sm text-muted-foreground">
    Notifications are enabled
  </p>
)}`,
    },
    {
      title: "Disabled Switch",
      description: "Switch in disabled state.",
      code: `<div className="space-y-4">
  <div className="flex items-center space-x-2">
    <Switch id="disabled-off" disabled />
    <Label htmlFor="disabled-off" className="text-muted-foreground">
      Disabled (Off)
    </Label>
  </div>
  <div className="flex items-center space-x-2">
    <Switch id="disabled-on" disabled defaultChecked />
    <Label htmlFor="disabled-on" className="text-muted-foreground">
      Disabled (On)
    </Label>
  </div>
</div>`,
    },
    {
      title: "Settings List",
      description: "Multiple switches in a settings interface.",
      code: `<div className="space-y-4">
  <div className="flex items-center justify-between">
    <div className="space-y-0.5">
      <Label htmlFor="marketing">Marketing emails</Label>
      <p className="text-sm text-muted-foreground">
        Receive emails about new products and features.
      </p>
    </div>
    <Switch id="marketing" />
  </div>
  <div className="flex items-center justify-between">
    <div className="space-y-0.5">
      <Label htmlFor="security">Security emails</Label>
      <p className="text-sm text-muted-foreground">
        Receive emails about your account security.
      </p>
    </div>
    <Switch id="security" defaultChecked />
  </div>
  <div className="flex items-center justify-between">
    <div className="space-y-0.5">
      <Label htmlFor="updates">Product updates</Label>
      <p className="text-sm text-muted-foreground">
        Receive emails about product updates and announcements.
      </p>
    </div>
    <Switch id="updates" />
  </div>
</div>`,
    },
  ],
};
