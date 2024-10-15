import { Checkbox } from "@webriq-test/checkbox";
import { CheckboxGroup } from "@webriq-test/checkbox-group";
import { InputFile } from "@webriq-test/input-file";
import { Input } from "@webriq-test/input";
import { Radio } from "../../radio/dist";
import { RadioGroup } from "@webriq-test/radio-group";
import { Select } from "@webriq-test/select";
import { Textarea } from "@webriq-test/textarea";
import { FormTypes, Variant } from "./types";

type FormFieldProps = {
  type?: FormTypes;
  items?: string[];
  variant?: Variant;
  name: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  textSize?: "sm" | "md" | "lg";
  noLabel?: boolean;
  [key: string]: any;
};

export const FormField = ({
  type = "textarea",
  items = [],
  name,
  label = "",
  required,
  placeholder,
  textSize,
  noLabel,
  variant,
  ...props
}: FormFieldProps) => {
  const formType = {
    inputText: "text",
    inputEmail: "email",
    inputPassword: "password",
    inputNumber: "number",
    textarea: "textarea",
    inputFile: "file",
    inputRadio: "radio",
    inputCheckbox: "checkbox",
    inputSelect: "select",
  }[type];

  switch (type) {
    case "inputRadio":
      return (
        <RadioGroup noLabel={noLabel} label={label} name={name}>
          {items?.map(item => (
            <Radio key={item} ariaLabel={name} name={name} item={item} {...props} />
          ))}
        </RadioGroup>
      );

    case "inputSelect":
      return (
        <Select
          items={items}
          label={label}
          ariaLabel={label}
          name={name}
          required={required}
          noLabel={noLabel}
          {...props}
        />
      );

    case "inputCheckbox":
      return (
        <CheckboxGroup noLabel={noLabel} name={name} label={label}>
          {items?.map(item => (
            <Checkbox key={item} label={item} ariaLabel={name} name={name} item={item} {...props} />
          ))}
        </CheckboxGroup>
      );

    case "inputFile":
      return <InputFile ariaLabel={name} name={name} required={required} {...props} />;

    case "textarea":
      return (
        <Textarea
          noLabel={noLabel}
          ariaLabel={placeholder ?? name}
          placeholder={placeholder}
          name={name}
          variant={variant}
          required={required}
          label={label}
          {...props}
        />
      );

    default:
      return (
        <Input
          noLabel={noLabel}
          textSize={textSize}
          label={label || name}
          ariaLabel={label || name}
          required={required}
          name={name}
          placeholder={placeholder}
          type={formType as "number" | "text" | "email" | "password"}
          variant={variant}
          {...props}
        />
      );
  }
};
