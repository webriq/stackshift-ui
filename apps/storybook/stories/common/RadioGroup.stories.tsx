import { RadioGroup, RadioGroupItem } from "@stackshift-ui/react";
import { Label } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const meta: Meta<typeof RadioGroup> = {
  title: "Common/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A radio group component built on Radix UI primitives for selecting a single option from multiple choices.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "text" },
      description: "The selected value",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the radio group is disabled",
    },
    required: {
      control: { type: "boolean" },
      description: "Whether the radio group is required",
    },
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "Layout orientation of the radio group",
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <Label htmlFor="option1">Option 1</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <Label htmlFor="option2">Option 2</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="option3" />
        <Label htmlFor="option3">Option 3</Label>
      </div>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "Basic radio group with multiple options.",
      },
    },
  },
};

export const WithDescriptions: Story = {
  render: () => (
    <RadioGroup defaultValue="basic">
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="basic" id="basic" className="mt-1" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="basic" className="text-sm font-medium">
            Basic Plan
          </Label>
          <p className="text-xs text-muted-foreground">
            Perfect for individuals getting started. $9/month
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="pro" id="pro" className="mt-1" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="pro" className="text-sm font-medium">
            Pro Plan
          </Label>
          <p className="text-xs text-muted-foreground">
            Best for growing teams and businesses. $29/month
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="enterprise" id="enterprise" className="mt-1" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="enterprise" className="text-sm font-medium">
            Enterprise Plan
          </Label>
          <p className="text-xs text-muted-foreground">
            For large organizations with advanced needs. $99/month
          </p>
        </div>
      </div>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "Radio group with descriptive text for each option.",
      },
    },
  },
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="medium" className="flex space-x-6">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="small" id="small" />
        <Label htmlFor="small">Small</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="medium" id="medium" />
        <Label htmlFor="medium">Medium</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="large" id="large" />
        <Label htmlFor="large">Large</Label>
      </div>
    </RadioGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: "Radio group arranged horizontally.",
      },
    },
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Normal Radio Group</h3>
        <RadioGroup defaultValue="option1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option1" id="normal1" />
            <Label htmlFor="normal1">Option 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option2" id="normal2" />
            <Label htmlFor="normal2">Option 2</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3 text-muted-foreground">Disabled Radio Group</h3>
        <RadioGroup defaultValue="disabled1" disabled>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="disabled1" id="disabled1" />
            <Label htmlFor="disabled1" className="text-muted-foreground">Option 1 (Disabled)</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="disabled2" id="disabled2" />
            <Label htmlFor="disabled2" className="text-muted-foreground">Option 2 (Disabled)</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3">Individual Disabled Options</h3>
        <RadioGroup defaultValue="enabled">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="enabled" id="enabled" />
            <Label htmlFor="enabled">Enabled Option</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="individual-disabled" id="individual-disabled" disabled />
            <Label htmlFor="individual-disabled" className="text-muted-foreground">Disabled Option</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Radio groups in disabled states, both entire group and individual options.",
      },
    },
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState("option2");
    
    return (
      <div className="space-y-4">
        <RadioGroup value={value} onValueChange={setValue}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option1" id="controlled1" />
            <Label htmlFor="controlled1">Option 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option2" id="controlled2" />
            <Label htmlFor="controlled2">Option 2</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option3" id="controlled3" />
            <Label htmlFor="controlled3">Option 3</Label>
          </div>
        </RadioGroup>
        
        <div className="pt-4 border-t">
          <p className="text-sm text-muted-foreground">
            Selected value: <span className="font-medium">{value}</span>
          </p>
          <div className="flex gap-2 mt-2">
            <button 
              onClick={() => setValue("option1")}
              className="px-3 py-1 text-xs bg-secondary rounded hover:bg-secondary/80"
            >
              Select Option 1
            </button>
            <button 
              onClick={() => setValue("option2")}
              className="px-3 py-1 text-xs bg-secondary rounded hover:bg-secondary/80"
            >
              Select Option 2
            </button>
            <button 
              onClick={() => setValue("option3")}
              className="px-3 py-1 text-xs bg-secondary rounded hover:bg-secondary/80"
            >
              Select Option 3
            </button>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Controlled radio group with external state management.",
      },
    },
  },
};

export const PaymentMethod: Story = {
  render: () => (
    <div className="max-w-md space-y-4">
      <h3 className="text-lg font-medium">Payment Method</h3>
      <RadioGroup defaultValue="card">
        <div className="flex items-start space-x-3 p-4 border rounded-lg">
          <RadioGroupItem value="card" id="card" className="mt-1" />
          <div className="flex-1">
            <Label htmlFor="card" className="text-sm font-medium">
              💳 Credit Card
            </Label>
            <p className="text-xs text-muted-foreground mt-1">
              Pay with Visa, Mastercard, or American Express
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3 p-4 border rounded-lg">
          <RadioGroupItem value="paypal" id="paypal" className="mt-1" />
          <div className="flex-1">
            <Label htmlFor="paypal" className="text-sm font-medium">
              🅿️ PayPal
            </Label>
            <p className="text-xs text-muted-foreground mt-1">
              Pay securely with your PayPal account
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3 p-4 border rounded-lg">
          <RadioGroupItem value="bank" id="bank" className="mt-1" />
          <div className="flex-1">
            <Label htmlFor="bank" className="text-sm font-medium">
              🏦 Bank Transfer
            </Label>
            <p className="text-xs text-muted-foreground mt-1">
              Direct bank transfer (2-3 business days)
            </p>
          </div>
        </div>
      </RadioGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Payment method selection with styled cards.",
      },
    },
  },
};

export const DeliveryOptions: Story = {
  render: () => (
    <div className="max-w-md space-y-4">
      <h3 className="text-lg font-medium">Delivery Options</h3>
      <RadioGroup defaultValue="standard">
        <div className="flex items-center justify-between p-3 border rounded-lg">
          <div className="flex items-center space-x-3">
            <RadioGroupItem value="standard" id="standard" />
            <div>
              <Label htmlFor="standard" className="text-sm font-medium">
                Standard Delivery
              </Label>
              <p className="text-xs text-muted-foreground">5-7 business days</p>
            </div>
          </div>
          <span className="text-sm font-medium">Free</span>
        </div>
        
        <div className="flex items-center justify-between p-3 border rounded-lg">
          <div className="flex items-center space-x-3">
            <RadioGroupItem value="express" id="express" />
            <div>
              <Label htmlFor="express" className="text-sm font-medium">
                Express Delivery
              </Label>
              <p className="text-xs text-muted-foreground">2-3 business days</p>
            </div>
          </div>
          <span className="text-sm font-medium">$9.99</span>
        </div>
        
        <div className="flex items-center justify-between p-3 border rounded-lg">
          <div className="flex items-center space-x-3">
            <RadioGroupItem value="overnight" id="overnight" />
            <div>
              <Label htmlFor="overnight" className="text-sm font-medium">
                Overnight Delivery
              </Label>
              <p className="text-xs text-muted-foreground">Next business day</p>
            </div>
          </div>
          <span className="text-sm font-medium">$24.99</span>
        </div>
      </RadioGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Delivery options with pricing information.",
      },
    },
  },
};

export const SurveyQuestion: Story = {
  render: () => (
    <div className="max-w-lg space-y-4">
      <div>
        <h3 className="text-lg font-medium">How satisfied are you with our service?</h3>
        <p className="text-sm text-muted-foreground">Please select one option</p>
      </div>
      
      <RadioGroup>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="very-satisfied" id="very-satisfied" />
          <Label htmlFor="very-satisfied">😊 Very Satisfied</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="satisfied" id="satisfied" />
          <Label htmlFor="satisfied">🙂 Satisfied</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="neutral" id="neutral" />
          <Label htmlFor="neutral">😐 Neutral</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="dissatisfied" id="dissatisfied" />
          <Label htmlFor="dissatisfied">🙁 Dissatisfied</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="very-dissatisfied" id="very-dissatisfied" />
          <Label htmlFor="very-dissatisfied">😞 Very Dissatisfied</Label>
        </div>
      </RadioGroup>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Survey question with emoji-enhanced options.",
      },
    },
  },
};

export const FormIntegration: Story = {
  render: () => (
    <form className="max-w-md space-y-6">
      <h2 className="text-xl font-bold">User Preferences</h2>
      
      <div className="space-y-3">
        <Label className="text-sm font-medium">Preferred Contact Method</Label>
        <RadioGroup name="contact" defaultValue="email">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="email" id="contact-email" />
            <Label htmlFor="contact-email">Email</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="phone" id="contact-phone" />
            <Label htmlFor="contact-phone">Phone</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sms" id="contact-sms" />
            <Label htmlFor="contact-sms">SMS</Label>
          </div>
        </RadioGroup>
      </div>
      
      <div className="space-y-3">
        <Label className="text-sm font-medium">Newsletter Frequency</Label>
        <RadioGroup name="frequency" defaultValue="weekly">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="daily" id="freq-daily" />
            <Label htmlFor="freq-daily">Daily</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="weekly" id="freq-weekly" />
            <Label htmlFor="freq-weekly">Weekly</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="monthly" id="freq-monthly" />
            <Label htmlFor="freq-monthly">Monthly</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="never" id="freq-never" />
            <Label htmlFor="freq-never">Never</Label>
          </div>
        </RadioGroup>
      </div>
      
      <button 
        type="submit"
        className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 transition-colors"
      >
        Save Preferences
      </button>
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple radio groups integrated in a form.",
      },
    },
  },
};