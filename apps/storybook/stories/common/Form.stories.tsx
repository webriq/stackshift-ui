// @ts-nocheck - story demo file
import { Button, Form, FormField } from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

type FormTypes =
  | "inputText"
  | "inputEmail"
  | "inputPassword"
  | "inputNumber"
  | "textarea"
  | "inputFile"
  | "inputRadio"
  | "inputCheckbox"
  | "inputSelect";

const meta: Meta<typeof Form> = {
  title: "Common/Form",
  component: Form,
  tags: ["autodocs"],
  args: {
    name: "Form",
    id: "fc31c685-2d1a-447d-b891-ea63a38c5f57",
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof Form>;

const DUMMY_INPUTS = [
  {
    name: "Name",
    placeholder: "Name",
    label: "Name",
    _key: "KF4Watp0rdbnQFDzoNJaj",
    type: "inputText",
  },
  {
    placeholder: "name@example.com",
    _key: "WncOcChbz0IIlmTXT3Pf4",
    type: "inputEmail",
    name: "Email",
    label: "Email",
  },
  {
    _key: "544e404591c5",
    type: "inputPassword",
    label: "Password",
    name: "Password",
    placeholder: "*****",
  },
  {
    _key: "HH5DNYs-47nFOLhp7ePSR",
    type: "textarea",
    label: "Message",
    name: "Message...",
    placeholder: "Message...",
  },
  {
    name: "Add file",
    _key: "JVOHwWl7SKkl_Nz8IBYBC",
    type: "inputFile",
    label: "Add file",
  },
];

const DUMMY_RADIO = [
  {
    _key: "0cf9d7383c63",
    type: "inputRadio",

    name: "Radio",
    label: "Radio label",
    items: ["Option 1", "Option 2", "Option 3"],
  },
];

const DUMMY_CHECKBOX = [
  {
    name: "Checkbox",
    label: "Checkbox",
    _key: "5e8d1abf787a",
    type: "inputCheckbox",

    items: ["Option 1", "Option 2", "Option 3"],
  },
];

const DUMMY_SELECT = [
  {
    _key: "be3fca5ba2c5",
    type: "inputSelect",

    name: "Select",
    label: "Select",
    items: ["Select 1", "Select 2", "Select 3"],
  },
];

export const Primary: Story = {
  args: {
    children: (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          {DUMMY_INPUTS.map((field, index) => {
            return (
              <FormField
                label={field?.label}
                type={field.type as FormTypes}
                name={field.name}
                required={false}
                placeholder={field.placeholder}
                key={index}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-2">
          {DUMMY_RADIO.map((field, index) => {
            return (
              <FormField
                label={field?.label}
                type={field.type as FormTypes}
                name={field.name}
                required={false}
                items={field.items}
                key={index}
              />
            );
          })}
        </div>

        <div className="flex flex-col gap-2">
          {DUMMY_CHECKBOX.map((field, index) => {
            return (
              <FormField
                label={field?.label}
                type={field.type as FormTypes}
                name={field.name}
                required={false}
                items={field.items}
                key={index}
              />
            );
          })}
        </div>

        <div className="flex flex-col gap-2">
          {DUMMY_SELECT.map((field, index) => {
            return (
              <FormField
                label={field?.label}
                type={field.type as FormTypes}
                name={field.name}
                required={false}
                items={field.items}
                key={index}
              />
            );
          })}
        </div>

        <div className="items-center sm:flex sm:justify-between">
          <div>
            <div className="webriq-recaptcha" />
          </div>

          <Button aria-label={"Form submit button"} type="submit">
            Submit
          </Button>
        </div>
      </div>
    ),
  },
};

export const WithCustomField: Story = {
  args: {
    children: (
      <div className="flex flex-col gap-4">
        {DUMMY_INPUTS.map((field, index) => {
          if (field.type === "inputText") {
            return (
              <div className="mb-4" key={field?.name}>
                <FormField
                  className="border border-red-400 border-solid placeholder:text-red-500"
                  placeholder="This is a custom field!"
                  type={field.type as FormTypes}
                  name={field.name}
                  ariaLabel={field.label ?? field.name}
                  label={field.label ?? field.name}
                />
              </div>
            );
          }

          return (
            <FormField
              label={field?.label}
              type={field.type as FormTypes}
              name={field.name}
              required={false}
              placeholder={field.placeholder}
              ariaLabel={field.label ?? field.name}
              key={index}
            />
          );
        })}

        {DUMMY_RADIO.map((field, index) => {
          return (
            <FormField
              label={field?.label}
              type={field.type as FormTypes}
              name={field.name}
              required={false}
              items={field.items}
              key={index}
            />
          );
        })}

        {DUMMY_CHECKBOX.map((field, index) => {
          return (
            <FormField
              label={field?.label}
              type={field.type as FormTypes}
              name={field.name}
              required={false}
              items={field.items}
              key={index}
            />
          );
        })}

        {DUMMY_SELECT.map((field, index) => {
          return (
            <FormField
              label={field?.label}
              type={field.type as FormTypes}
              name={field.name}
              required={false}
              items={field.items}
              key={index}
            />
          );
        })}

        <div className="items-center sm:flex sm:justify-between">
          <div>
            <div className="webriq-recaptcha" />
          </div>

          <Button aria-label={"Form submit button"} type="submit">
            Submit
          </Button>
        </div>
      </div>
    ),
  },
};
