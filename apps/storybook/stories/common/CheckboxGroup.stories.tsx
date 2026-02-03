import { Checkbox, CheckboxGroup, Label } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const meta: Meta<typeof CheckboxGroup> = {
  title: "Common/Checkbox Group",
  component: CheckboxGroup,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "inline"],
    },
    className: { control: "text" },
    label: { control: "text" },
    noLabel: { control: "boolean" },
    labelClass: { control: "text" },
  },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {
  args: {
    argTypes: {
      className: { control: "text" },
      label: { control: "text" },
      noLabel: { control: "boolean" },
      labelClass: { control: "text" },
    },
    variant: "default",
    name: "Select your interests",
    children: ["Technology", "Design", "Business", "Science"].map((item, index) => {
      const id = item.toLowerCase();
      return (
        <div className="flex items-center space-x-2 py-2">
          <Checkbox id={id} />
          <Label htmlFor={id}>{item}</Label>
        </div>
      );
    }),
  },
};

export const Inline: Story = {
  args: {
    variant: "inline",
    name: "Inline",
    children: ["Option 1", "Option 2", "Option 3"].map((item, index) => {
      const id = item.toLowerCase();

      return (
        <div className="flex items-center gap-1">
          <Checkbox id={id} />
          <Label htmlFor={id}>{item}</Label>
        </div>
      );
    }),
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
