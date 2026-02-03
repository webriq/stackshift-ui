import { FormField } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof FormField> = {
  title: "Common/FormField",
  component: FormField,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile form field component that renders different input types based on the type prop. Supports text inputs, textareas, selects, radios, checkboxes, and file uploads.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: [
        "inputText",
        "inputEmail",
        "inputPassword",
        "inputNumber",
        "textarea",
        "inputFile",
        "inputRadio",
        "inputCheckbox",
        "inputSelect",
      ],
      description: "Type of form field to render",
    },
    name: {
      control: { type: "text" },
      description: "Name attribute for the form field",
    },
    label: {
      control: { type: "text" },
      description: "Label text for the form field",
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text for the input",
    },
    required: {
      control: { type: "boolean" },
      description: "Whether the field is required",
    },
    noLabel: {
      control: { type: "boolean" },
      description: "Hide the label",
    },
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof FormField>;

export const TextInput: Story = {
  args: {
    type: "inputText",
    name: "firstName",
    label: "First Name",
    placeholder: "Enter your first name",
  },
  parameters: {
    docs: {
      description: {
        story: "Basic text input field with label and placeholder.",
      },
    },
  },
};

export const EmailInput: Story = {
  args: {
    type: "inputEmail",
    name: "email",
    label: "Email Address",
    placeholder: "Enter your email",
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Email input field with validation.",
      },
    },
  },
};

export const PasswordInput: Story = {
  args: {
    type: "inputPassword",
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Password input field with hidden text.",
      },
    },
  },
};

export const NumberInput: Story = {
  args: {
    type: "inputNumber",
    name: "age",
    label: "Age",
    placeholder: "Enter your age",
  },
  parameters: {
    docs: {
      description: {
        story: "Number input field for numeric values.",
      },
    },
  },
};

export const TextareaField: Story = {
  args: {
    type: "textarea",
    name: "message",
    label: "Message",
    placeholder: "Enter your message here...",
  },
  parameters: {
    docs: {
      description: {
        story: "Textarea field for longer text input.",
      },
    },
  },
};

export const SelectField: Story = {
  args: {
    type: "inputSelect",
    name: "country",
    label: "Country",
    placeholder: "Select your country",
    items: ["United States", "Canada", "United Kingdom", "Australia", "Germany", "France"],
  },
  parameters: {
    docs: {
      description: {
        story: "Select dropdown field with predefined options.",
      },
    },
  },
};

export const RadioField: Story = {
  args: {
    type: "inputRadio",
    name: "size",
    label: "Size",
    items: ["Small", "Medium", "Large", "Extra Large"],
  },
  parameters: {
    docs: {
      description: {
        story: "Radio button group for single selection.",
      },
    },
  },
};

export const CheckboxField: Story = {
  args: {
    type: "inputCheckbox",
    name: "interests",
    label: "Interests",
    items: ["Technology", "Design", "Business", "Science"],
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox group for multiple selections.",
      },
    },
  },
};

export const FileUpload: Story = {
  args: {
    type: "inputFile",
    name: "avatar",
    label: "Profile Picture",
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: "File upload field for selecting files.",
      },
    },
  },
};
