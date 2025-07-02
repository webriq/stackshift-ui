import { Button, Input, Label } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { CreditCard, Eye, EyeOff, Lock, Mail, Phone, Search, User } from "lucide-react";
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
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
  parameters: {
    docs: {
      description: {
        story: "Default text input with placeholder.",
      },
    },
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input with associated label for better accessibility.",
      },
    },
  },
};

export const InputTypes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="text-input">Text</Label>
        <Input id="text-input" type="text" placeholder="Enter text" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-input">Email</Label>
        <Input id="email-input" type="email" placeholder="Enter email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password-input">Password</Label>
        <Input id="password-input" type="password" placeholder="Enter password" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="number-input">Number</Label>
        <Input id="number-input" type="number" placeholder="Enter number" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="tel-input">Phone</Label>
        <Input id="tel-input" type="tel" placeholder="Enter phone number" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="search-input">Search</Label>
        <Input id="search-input" type="search" placeholder="Search..." />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different input types for various data formats.",
      },
    },
  },
};

export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="user-input">Username</Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input id="user-input" className="pl-10" placeholder="Enter username" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-icon">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input id="email-icon" type="email" className="pl-10" placeholder="Enter email" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="search-icon">Search</Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input id="search-icon" type="search" className="pl-10" placeholder="Search..." />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Inputs with icons to enhance visual context.",
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

export const States: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="normal">Normal</Label>
        <Input id="normal" placeholder="Normal input" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="disabled" className="text-muted-foreground">
          Disabled
        </Label>
        <Input id="disabled" placeholder="Disabled input" disabled />
      </div>
      <div className="space-y-2">
        <Label htmlFor="readonly">Read Only</Label>
        <Input id="readonly" value="Read only value" readOnly />
      </div>
      <div className="space-y-2">
        <Label htmlFor="required">Required</Label>
        <Input id="required" placeholder="Required input" required />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different input states including disabled, readonly, and required.",
      },
    },
  },
};

export const Validation: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="valid">Valid Input</Label>
        <Input
          id="valid"
          className="border-green-500 focus:ring-green-500"
          placeholder="Valid input"
          defaultValue="valid@example.com"
        />
        <p className="text-sm text-green-600">✓ Email format is correct</p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="invalid">Invalid Input</Label>
        <Input
          id="invalid"
          className="border-red-500 focus:ring-red-500"
          placeholder="Invalid input"
          defaultValue="invalid-email"
        />
        <p className="text-sm text-red-600">✗ Please enter a valid email address</p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="warning">Warning Input</Label>
        <Input
          id="warning"
          className="border-yellow-500 focus:ring-yellow-500"
          placeholder="Warning input"
          defaultValue="test@tempmail.com"
        />
        <p className="text-sm text-yellow-600">
          ⚠ Temporary email addresses may not receive notifications
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input validation states with custom styling and messages.",
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="small" className="text-sm">
          Small
        </Label>
        <Input id="small" className="h-8 text-sm" placeholder="Small input" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="default-size">Default</Label>
        <Input id="default-size" placeholder="Default input" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="large" className="text-lg">
          Large
        </Label>
        <Input id="large" className="h-12 text-lg" placeholder="Large input" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input fields in different sizes using custom classes.",
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

export const LoginForm: Story = {
  render: () => (
    <form className="space-y-4 w-80">
      <h2 className="text-2xl font-bold text-center">Login</h2>

      <div className="space-y-2">
        <Label htmlFor="login-email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="login-email"
            type="email"
            className="pl-10"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="login-password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="login-password"
            type="password"
            className="pl-10"
            placeholder="Enter your password"
            required
          />
        </div>
      </div>

      <Button type="submit" className="w-full">
        Sign In
      </Button>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: "Complete login form with email and password inputs.",
      },
    },
  },
};
