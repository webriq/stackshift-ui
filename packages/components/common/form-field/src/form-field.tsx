import { Checkbox } from "@stackshift-ui/checkbox";
import { CheckboxGroup } from "@stackshift-ui/checkbox-group";
import { Input } from "@stackshift-ui/input";
import { InputFile } from "@stackshift-ui/input-file";
import { Label } from "@stackshift-ui/label";
import { RadioGroup, RadioGroupItem } from "@stackshift-ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@stackshift-ui/select";
import { Textarea } from "@stackshift-ui/textarea";
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
        <RadioGroup name={name} {...props}>
          <Label>{label}</Label>
          {items?.map(item => (
            <div className="flex items-center gap-3">
              {/* // <Radio key={item} ariaLabel={name} name={name} item={item} {...props} /> */}
              <RadioGroupItem id={item} key={item} value={item} />
              <Label htmlFor={item}>{item}</Label>
            </div>
          ))}
        </RadioGroup>
      );

    case "inputSelect":
      return (
        <Select name={name} {...props}>
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {items?.map(item => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );

    case "inputCheckbox":
      return (
        <CheckboxGroup noLabel={noLabel} name={name} label={label} {...props}>
          {items?.map(item => (
            <div className="flex flex-col gap-2 items-start">
              <Checkbox id={item} key={item} name={item} {...props} />
              <Label htmlFor={item}>{label}</Label>
            </div>
          ))}
        </CheckboxGroup>
      );

    case "inputFile":
      return <InputFile ariaLabel={name} name={name} required={required} {...props} />;

    case "textarea":
      return (
        // <Textarea
        //   noLabel={noLabel}
        //   ariaLabel={placeholder ?? name}
        //   placeholder={placeholder}
        //   name={name}
        //   variant={variant}
        //   required={required}
        //   label={label}
        //   {...props}
        // />
        <div>
          {!noLabel ? <Label htmlFor={name}>{label}</Label> : null}
          <Textarea id={name} name={name} placeholder={placeholder} {...props}></Textarea>
        </div>
      );

    default:
      return (
        <div className="flex flex-col gap-2 items-start">
          {!noLabel ? <Label htmlFor={name}>{label}</Label> : null}
          <Input
            id={name}
            name={name}
            placeholder={placeholder}
            type={formType as "number" | "text" | "email" | "password"}
            required={required}
            {...props}
          />
        </div>
        // <Input
        //   noLabel={noLabel}
        //   textSize={textSize}
        //   label={label || name}
        //   ariaLabel={label || name}
        //   required={required}
        //   name={name}
        //   placeholder={placeholder}
        //   type={formType as "number" | "text" | "email" | "password"}
        //   variant={variant}
        //   {...props}
        // />
      );
  }
};
