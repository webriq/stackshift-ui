import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "@stackshift-ui/react";
import { useState } from "react";

const meta: Meta<typeof Toggle> = {
  title: "Common/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  args: {
    children: "Toggle",
    variant: "default",
    size: "default",
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["default", "outline"],
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "default", "lg"],
    },
    pressed: {
      control: { type: "boolean" },
      description: "Whether the toggle is pressed",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the toggle is disabled",
    },
    onPressedChange: {
      action: "pressed changed",
      description: "Callback fired when the toggle state changes",
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Basic: Story = {
  render: args => <Toggle {...args} />,
};

export const Variants: Story = {
  render: args => (
    <div className="flex gap-4">
      <Toggle variant="default">Default</Toggle>
      <Toggle variant="outline">Outline</Toggle>
    </div>
  ),
};

export const Sizes: Story = {
  render: args => (
    <div className="flex items-center gap-4">
      <Toggle size="sm">Small</Toggle>
      <Toggle size="default">Default</Toggle>
      <Toggle size="lg">Large</Toggle>
    </div>
  ),
};

export const Controlled: Story = {
  render: args => {
    const [pressed, setPressed] = useState(false);
    return (
      <div className="space-y-4">
        <Toggle 
          pressed={pressed} 
          onPressedChange={setPressed}
          {...args}
        >
          {pressed ? "On" : "Off"}
        </Toggle>
        <p className="text-sm text-gray-600">
          Toggle is {pressed ? "pressed" : "not pressed"}
        </p>
      </div>
    );
  },
};

export const WithIcons: Story = {
  render: args => (
    <div className="flex gap-4">
      <Toggle aria-label="Bold">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z" />
        </svg>
      </Toggle>
      
      <Toggle aria-label="Italic">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 4l4 16M6 20h8M6 4h8" />
        </svg>
      </Toggle>
      
      <Toggle aria-label="Underline">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4v12a4 4 0 004 4 4 4 0 004-4V4M4 20h16" />
        </svg>
      </Toggle>
    </div>
  ),
};

export const TextFormatting: Story = {
  render: args => {
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);
    
    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <Toggle 
            pressed={bold} 
            onPressedChange={setBold}
            variant="outline"
            aria-label="Bold"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z" />
            </svg>
          </Toggle>
          
          <Toggle 
            pressed={italic} 
            onPressedChange={setItalic}
            variant="outline"
            aria-label="Italic"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 4l4 16M6 20h8M6 4h8" />
            </svg>
          </Toggle>
          
          <Toggle 
            pressed={underline} 
            onPressedChange={setUnderline}
            variant="outline"
            aria-label="Underline"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4v12a4 4 0 004 4 4 4 0 004-4V4M4 20h16" />
            </svg>
          </Toggle>
        </div>
        
        <div className="p-4 border rounded-md bg-gray-50">
          <p 
            className={`
              ${bold ? 'font-bold' : ''}
              ${italic ? 'italic' : ''}
              ${underline ? 'underline' : ''}
            `}
          >
            This text will be formatted based on the toggle states above.
          </p>
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: args => (
    <div className="flex gap-4">
      <Toggle disabled>Disabled Off</Toggle>
      <Toggle disabled pressed>Disabled On</Toggle>
    </div>
  ),
};

export const WithText: Story = {
  render: args => (
    <div className="flex gap-4">
      <Toggle>
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        Like
      </Toggle>
      
      <Toggle variant="outline">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
        </svg>
        Share
      </Toggle>
    </div>
  ),
};

export const DefaultPressed: Story = {
  args: {
    defaultPressed: true,
  },
  render: args => (
    <Toggle {...args}>
      Default Pressed
    </Toggle>
  ),
};