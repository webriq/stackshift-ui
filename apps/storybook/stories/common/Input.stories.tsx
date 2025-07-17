import { Button, Input, Label } from "@stackshift-ui/react";
import { cn } from "@stackshift-ui/system";
import type { Meta, StoryObj } from "@storybook/react";
import { Eye, EyeOff, Lock, Search } from "lucide-react";
import { useState } from "react";

const meta: Meta<typeof Input> = {
  title: "Common/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible input component that supports various input types with consistent styling and accessibility features.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url", "search"],
      description: "Type of input field",
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text for the input",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the input is disabled",
    },
    required: {
      control: { type: "boolean" },
      description: "Whether the input is required",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply to the input",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: args => {
    const { showLabel, size, validationState, validationMessage, ...inputArgs } = args as any;

    const sizeClasses = {
      sm: "h-8 text-xs px-2",
      md: "h-10 text-sm px-3",
      lg: "h-12 text-base px-4",
    };

    const sizeClass = size ? sizeClasses[size as keyof typeof sizeClasses] : "";

    return (
      <div className="flex flex-col gap-2 w-80">
        {showLabel && (
          <Label htmlFor="default-input" className="text-sm font-medium">
            {args.label || "Input Label"}
          </Label>
        )}
        <Input
          type={args.type}
          id="default-input"
          name="default-input"
          className={cn(sizeClass, args.className)}
          aria-invalid={validationState === "invalid"}
          {...inputArgs}
        />
        {validationState === "invalid" && validationMessage && (
          <p className="text-xs text-destructive mt-1">{validationMessage}</p>
        )}
      </div>
    );
  },
  args: {
    placeholder: "Enter text...",
    type: "text",
    showLabel: true,
    label: "Input Field",
    size: "md",
    validationState: "valid",
    validationMessage: "This field is required",
    required: false,
    disabled: false,
  },
  argTypes: {
    showLabel: {
      control: { type: "boolean" },
      description: "Whether to show the input label",
    },
    label: {
      control: { type: "text" },
      description: "Label text for the input",
      if: { arg: "showLabel", eq: true },
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Size of the input field",
    },
    validationState: {
      control: { type: "select" },
      options: ["valid", "invalid"],
      description: "Validation state of the input",
    },
    validationMessage: {
      control: { type: "text" },
      description: "Validation message to display when invalid",
      if: { arg: "validationState", eq: "invalid" },
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Default input with configurable label, size, type, and validation state.",
      },
    },
  },
};

export const PasswordToggle: Story = {
  render: () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="space-y-2 w-80">
        <Label htmlFor="password-toggle">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="password-toggle"
            type={showPassword ? "text" : "password"}
            className="pl-10 pr-10"
            placeholder="Enter password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground">
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Password input with toggle visibility functionality.",
      },
    },
  },
};

export const SearchForm: Story = {
  render: () => (
    <form className="flex gap-2 w-96">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input type="search" className="pl-10" placeholder="Search products..." />
      </div>
      <Button type="submit">Search</Button>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: "Search input combined with a submit button.",
      },
    },
  },
};

export const FileInput: Story = {
  render: () => {
    return (
      <>
        <form className="flex gap-2 w-96">
          <div className="relative flex-1">
            <Input type="file" className="pl-10" placeholder="Select file..." />
          </div>
        </form>
      </>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "File input",
      },
    },
  },
};
