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
import type { Meta, StoryObj } from "@storybook/react";
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
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
        <SelectItem value="grape">Grape</SelectItem>
      </SelectContent>
    </Select>
  ),
  parameters: {
    docs: {
      description: {
        story: "Basic select dropdown with fruit options.",
      },
    },
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="fruit-select">Choose a fruit</Label>
      <Select>
        <SelectTrigger id="fruit-select" className="w-[180px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="grape">Grape</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Select with associated label for better accessibility.",
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

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="normal-select">Normal Select</Label>
        <Select>
          <SelectTrigger id="normal-select" className="w-[180px]">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="disabled-select" className="text-muted-foreground">
          Disabled Select
        </Label>
        <Select disabled>
          <SelectTrigger id="disabled-select" className="w-[180px]">
            <SelectValue placeholder="Cannot select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="disabled-items">Select with Disabled Items</Label>
        <Select>
          <SelectTrigger id="disabled-items" className="w-[180px]">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="available">Available</SelectItem>
            <SelectItem value="disabled" disabled>
              Disabled Option
            </SelectItem>
            <SelectItem value="another">Another Option</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Select in disabled states and with disabled individual items.",
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

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="small-select" className="text-sm">
          Small
        </Label>
        <Select>
          <SelectTrigger id="small-select" className="w-[150px] h-8 text-sm">
            <SelectValue placeholder="Small select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="default-select">Default</Label>
        <Select>
          <SelectTrigger id="default-select" className="w-[180px]">
            <SelectValue placeholder="Default select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="large-select" className="text-lg">
          Large
        </Label>
        <Select>
          <SelectTrigger id="large-select" className="w-[220px] h-12 text-lg">
            <SelectValue placeholder="Large select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Select components in different sizes using custom classes.",
      },
    },
  },
};
