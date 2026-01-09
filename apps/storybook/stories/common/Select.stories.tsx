// @ts-nocheck - story demo file
import {
  Button,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

const meta: Meta<typeof Select> = {
  title: "Common/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A select component built on Radix UI primitives for choosing from a list of options with dropdown functionality.",
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
      description: "Whether the select is disabled",
    },
    required: {
      control: { type: "boolean" },
      description: "Whether the select is required",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: args => {
    const { showLabel, size, label, ...selectProps } = args as any;

    const sizes = {
      sm: {
        trigger: "w-[150px] h-8 text-sm px-2 py-1",
        content: "w-[150px]",
        label: "text-sm mb-1",
      },
      md: {
        trigger: "w-[180px] h-10 text-sm px-3 py-2",
        content: "w-[180px]",
        label: "text-base mb-1.5",
      },
      lg: {
        trigger: "w-[220px] h-12 text-base px-4 py-2.5",
        content: "w-[220px]",
        label: "text-lg mb-2",
      },
    };

    const sizeConfig = sizes[size as keyof typeof sizes] || sizes.md;

    return (
      <div className="space-y-1.5">
        {showLabel && (
          <Label htmlFor="default-select" className={sizeConfig.label}>
            {label || "Select field"}
          </Label>
        )}
        <Select disabled={selectProps.disabled}>
          <SelectTrigger id="default-select" className={sizeConfig.trigger}>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent className={sizeConfig.content}>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="orange">Orange</SelectItem>
            <SelectItem value="grape">Grape</SelectItem>
          </SelectContent>
        </Select>
      </div>
    );
  },
  args: {
    showLabel: true,
    size: "md",
    label: "Select field",
    disabled: false,
  },
  argTypes: {
    showLabel: {
      control: { type: "boolean" },
      description: "Whether to show the select label",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Size of the select field",
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Basic select dropdown with fruit options.",
      },
    },
  },
};

export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Frontend</SelectLabel>
          <SelectItem value="react">React</SelectItem>
          <SelectItem value="vue">Vue</SelectItem>
          <SelectItem value="angular">Angular</SelectItem>
          <SelectItem value="svelte">Svelte</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Backend</SelectLabel>
          <SelectItem value="node">Node.js</SelectItem>
          <SelectItem value="python">Python</SelectItem>
          <SelectItem value="java">Java</SelectItem>
          <SelectItem value="go">Go</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
  parameters: {
    docs: {
      description: {
        story: "Select with grouped options and separators.",
      },
    },
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="controlled-select">Controlled Select</Label>
          <Select value={value} onValueChange={setValue}>
            <SelectTrigger id="controlled-select" className="w-[200px]">
              <SelectValue placeholder="Select a programming language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="typescript">TypeScript</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="java">Java</SelectItem>
              <SelectItem value="csharp">C#</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="pt-4 border-t">
          <p className="text-sm text-muted-foreground">
            Selected value: <span className="font-medium">{value || "None"}</span>
          </p>
          <div className="flex gap-2 mt-2">
            <Button variant="outline" size="sm" onClick={() => setValue("javascript")}>
              Select JavaScript
            </Button>
            <Button variant="outline" size="sm" onClick={() => setValue("python")}>
              Select Python
            </Button>
            <Button variant="outline" size="sm" onClick={() => setValue("")}>
              Clear
            </Button>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Controlled select with external state management.",
      },
    },
  },
};

export const CountrySelector: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="country-select">Country</Label>
      <Select>
        <SelectTrigger id="country-select" className="w-[250px]">
          <SelectValue placeholder="Select your country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">🇺🇸 United States</SelectItem>
          <SelectItem value="ca">🇨🇦 Canada</SelectItem>
          <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
          <SelectItem value="de">🇩🇪 Germany</SelectItem>
          <SelectItem value="fr">🇫🇷 France</SelectItem>
          <SelectItem value="jp">🇯🇵 Japan</SelectItem>
          <SelectItem value="au">🇦🇺 Australia</SelectItem>
          <SelectItem value="br">🇧🇷 Brazil</SelectItem>
          <SelectItem value="in">🇮🇳 India</SelectItem>
          <SelectItem value="cn">🇨🇳 China</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Country selector with flag emojis for visual enhancement.",
      },
    },
  },
};

export const TimeZoneSelector: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="timezone-select">Time Zone</Label>
      <Select>
        <SelectTrigger id="timezone-select" className="w-[300px]">
          <SelectValue placeholder="Select your timezone" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>North America</SelectLabel>
            <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
            <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
            <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
            <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Europe</SelectLabel>
            <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
            <SelectItem value="cet">Central European Time (CET)</SelectItem>
            <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Asia</SelectLabel>
            <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
            <SelectItem value="cst-china">China Standard Time (CST)</SelectItem>
            <SelectItem value="ist">India Standard Time (IST)</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Time zone selector with grouped options by region.",
      },
    },
  },
};
