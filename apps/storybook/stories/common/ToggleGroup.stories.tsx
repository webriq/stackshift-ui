import { ToggleGroup, ToggleGroupItem } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof ToggleGroup> = {
  title: "Common/ToggleGroup",
  component: ToggleGroup,
  tags: ["autodocs"],
  args: {
    type: "single",
    variant: "default",
    size: "default",
  },
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["single", "multiple"],
      description: "Whether only one or multiple items can be selected",
    },
    variant: {
      control: { type: "radio" },
      options: ["default", "outline"],
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "default", "lg"],
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the entire group is disabled",
    },
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Single: Story = {
  render: args => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Multiple: Story = {
  args: {
    type: "multiple",
  },
  render: args => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
      <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
      <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const Variants: Story = {
  render: args => (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium">Default variant</p>
        <ToggleGroup variant="default" type="single">
          <ToggleGroupItem value="left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center">Center</ToggleGroupItem>
          <ToggleGroupItem value="right">Right</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Outline variant</p>
        <ToggleGroup variant="outline" type="single">
          <ToggleGroupItem value="left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center">Center</ToggleGroupItem>
          <ToggleGroupItem value="right">Right</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: args => (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium">Small</p>
        <ToggleGroup size="sm" type="single" variant="outline">
          <ToggleGroupItem value="left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center">Center</ToggleGroupItem>
          <ToggleGroupItem value="right">Right</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Default</p>
        <ToggleGroup size="default" type="single" variant="outline">
          <ToggleGroupItem value="left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center">Center</ToggleGroupItem>
          <ToggleGroupItem value="right">Right</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Large</p>
        <ToggleGroup size="lg" type="single" variant="outline">
          <ToggleGroupItem value="left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center">Center</ToggleGroupItem>
          <ToggleGroupItem value="right">Right</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: args => (
    <ToggleGroup type="single" variant="outline" {...args}>
      <ToggleGroupItem value="bold" aria-label="Bold">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z"
          />
        </svg>
      </ToggleGroupItem>

      <ToggleGroupItem value="italic" aria-label="Italic">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 4l4 16M6 20h8M6 4h8"
          />
        </svg>
      </ToggleGroupItem>

      <ToggleGroupItem value="underline" aria-label="Underline">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 4v12a4 4 0 004 4 4 4 0 004-4V4M4 20h16"
          />
        </svg>
      </ToggleGroupItem>

      <ToggleGroupItem value="strikethrough" aria-label="Strikethrough">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 12h12M8 4h8M8 20h8"
          />
        </svg>
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const TextAlignment: Story = {
  render: args => {
    const [alignment, setAlignment] = useState<string>("left");

    return (
      <div className="space-y-4">
        <ToggleGroup
          type="single"
          variant="outline"
          value={alignment}
          onValueChange={value => setAlignment(value || "left")}
          {...args}>
          <ToggleGroupItem value="left" aria-label="Align left">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </ToggleGroupItem>

          <ToggleGroupItem value="center" aria-label="Align center">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M8 12h8M4 18h16"
              />
            </svg>
          </ToggleGroupItem>

          <ToggleGroupItem value="right" aria-label="Align right">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M12 12h8M4 18h16"
              />
            </svg>
          </ToggleGroupItem>

          <ToggleGroupItem value="justify" aria-label="Justify">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </ToggleGroupItem>
        </ToggleGroup>

        <div className="p-4 border rounded-md bg-gray-50">
          <p
            className={`
              ${alignment === "left" ? "text-left" : ""}
              ${alignment === "center" ? "text-center" : ""}
              ${alignment === "right" ? "text-right" : ""}
              ${alignment === "justify" ? "text-justify" : ""}
            `}>
            This text will be aligned based on the toggle group selection above. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
    );
  },
};

export const MultipleSelection: Story = {
  render: args => {
    const [features, setFeatures] = useState<string[]>(["wifi"]);

    const handleValueChange = (value: string[] | string) => {
      setFeatures(value || []);
    };

    return (
      <div className="space-y-4">
        <ToggleGroup
          type="multiple"
          variant="outline"
          value={features}
          onValueChange={handleValueChange}
          {...args}>
          <ToggleGroupItem value="wifi">
            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
              />
            </svg>
            WiFi
          </ToggleGroupItem>

          <ToggleGroupItem value="bluetooth">
            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 2l4 4-4 4v8l4-4-4-4"
              />
            </svg>
            Bluetooth
          </ToggleGroupItem>

          <ToggleGroupItem value="location">
            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Location
          </ToggleGroupItem>
        </ToggleGroup>

        <div className="text-sm text-gray-600">
          Selected features:{" "}
          {Array.isArray(features) && features.length > 0 ? features.join(", ") : "None"}
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: args => (
    <div className="space-y-4">
      <div className="space-y-2">
        <p className="text-sm font-medium">Entire group disabled</p>
        <ToggleGroup disabled variant="outline" type="single">
          <ToggleGroupItem value="left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center">Center</ToggleGroupItem>
          <ToggleGroupItem value="right">Right</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">Individual items disabled</p>
        <ToggleGroup variant="outline" type="single">
          <ToggleGroupItem value="left">Left</ToggleGroupItem>
          <ToggleGroupItem value="center" disabled>
            Center (disabled)
          </ToggleGroupItem>
          <ToggleGroupItem value="right">Right</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  ),
};
