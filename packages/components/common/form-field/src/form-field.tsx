import { Checkbox } from "@stackshift-ui/checkbox";
import { CheckboxGroup } from "@stackshift-ui/checkbox-group";
import { InputFile } from "@stackshift-ui/input-file";
import { Input } from "@stackshift-ui/input";
import { Radio } from "../../radio/dist";
import { RadioGroup } from "@stackshift-ui/radio-group";
import { Select } from "@stackshift-ui/select";
import { Textarea } from "@stackshift-ui/textarea";

export type FormTypes =
  | "inputText"
  | "inputEmail"
  | "inputPassword"
  | "inputNumber"
  | "textarea"
  | "inputFile"
  | "inputRadio"
  | "inputCheckbox"
  | "inputSelect";

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

type Variant = "primary" | "secondary" | "outline";

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
