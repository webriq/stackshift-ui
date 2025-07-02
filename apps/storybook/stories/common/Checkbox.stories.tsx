import { Checkbox, Label } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Common/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A checkbox component built on Radix UI primitives with customizable styling and accessibility features.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: { type: "boolean" },
      description: "Whether the checkbox is checked",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the checkbox is disabled",
    },
    required: {
      control: { type: "boolean" },
      description: "Whether the checkbox is required",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Default checkbox with label.",
      },
    },
  },
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="checked" defaultChecked />
      <Label htmlFor="checked">This checkbox is checked by default</Label>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Checkbox that is checked by default.",
      },
    },
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-unchecked" disabled />
        <Label htmlFor="disabled-unchecked" className="text-muted-foreground">
          Disabled unchecked
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-checked" disabled defaultChecked />
        <Label htmlFor="disabled-checked" className="text-muted-foreground">
          Disabled checked
        </Label>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Disabled checkboxes in both checked and unchecked states.",
      },
    },
  },
};

export const WithText: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-start space-x-2">
        <Checkbox id="newsletter" />
        <div className="grid gap-1.5 leading-none">
          <Label
            htmlFor="newsletter"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Subscribe to newsletter
          </Label>
          <p className="text-xs text-muted-foreground">
            Get notified about new features and updates.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <Checkbox id="marketing" />
        <div className="grid gap-1.5 leading-none">
          <Label
            htmlFor="marketing"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Marketing emails
          </Label>
          <p className="text-xs text-muted-foreground">
            Receive emails about new products, features, and more.
          </p>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Checkboxes with descriptive text and labels.",
      },
    },
  },
};

export const CheckboxGroup: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Select your interests</h3>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox id="technology" />
          <Label htmlFor="technology">Technology</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="design" />
          <Label htmlFor="design">Design</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="business" />
          <Label htmlFor="business">Business</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="science" />
          <Label htmlFor="science">Science</Label>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple checkboxes grouped together for selecting multiple options.",
      },
    },
  },
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="controlled" checked={checked} onCheckedChange={setChecked} />
          <Label htmlFor="controlled">Controlled checkbox</Label>
        </div>
        <p className="text-sm text-muted-foreground">Status: {checked ? "Checked" : "Unchecked"}</p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Controlled checkbox with state management.",
      },
    },
  },
};

export const FormExample: Story = {
  render: () => (
    <form className="space-y-6 max-w-md">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Account Settings</h3>

        <div className="flex items-center space-x-2">
          <Checkbox id="notifications" defaultChecked />
          <Label htmlFor="notifications">Enable notifications</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="emails" />
          <Label htmlFor="emails">Email notifications</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="sms" />
          <Label htmlFor="sms">SMS notifications</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="public-profile" />
          <Label htmlFor="public-profile">Make profile public</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="analytics" defaultChecked />
          <Label htmlFor="analytics">Allow analytics tracking</Label>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms-form" required />
          <Label htmlFor="terms-form">
            I agree to the{" "}
            <a href="#" className="underline">
              terms and conditions
            </a>
          </Label>
        </div>
      </div>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: "Checkboxes used in a form context with various settings.",
      },
    },
  },
};

export const IndeterminateState: Story = {
  render: () => {
    const [checkedItems, setCheckedItems] = useState([false, false, false]);

    const allChecked = checkedItems.every(Boolean);
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

    return (
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="select-all"
            checked={allChecked}
            // @ts-ignore - Radix supports indeterminate
            indeterminate={isIndeterminate}
            onCheckedChange={checked => setCheckedItems([checked, checked, checked])}
          />
          <Label htmlFor="select-all" className="font-medium">
            Select All
          </Label>
        </div>

        <div className="ml-6 space-y-2">
          {["Option 1", "Option 2", "Option 3"].map((option, index) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={`option-${index}`}
                checked={checkedItems[index]}
                onCheckedChange={checked => {
                  const newItems = [...checkedItems];
                  newItems[index] = checked;
                  setCheckedItems(newItems);
                }}
              />
              <Label htmlFor={`option-${index}`}>{option}</Label>
            </div>
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox with indeterminate state for partial selections.",
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="small" className="h-3 w-3" />
        <Label htmlFor="small" className="text-sm">
          Small checkbox
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="default-size" />
        <Label htmlFor="default-size">Default checkbox</Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="large" className="h-5 w-5" />
        <Label htmlFor="large" className="text-lg">
          Large checkbox
        </Label>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Checkboxes in different sizes using custom classes.",
      },
    },
  },
};
