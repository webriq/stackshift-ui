import { Checkbox } from "@stackshift-ui/checkbox";
import { CheckboxGroup } from "@stackshift-ui/checkbox-group";
import { Input } from "@stackshift-ui/input";
import { InputFile } from "@stackshift-ui/input-file";
import { Label } from "@stackshift-ui/label";
import { RadioGroup, RadioGroupItem } from "@stackshift-ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
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
        <RadioGroup name={name}>
          <Label>{label}</Label>
          {items?.map(item => (
            // <Radio key={item} ariaLabel={name} name={name} item={item} {...props} />
            <RadioGroupItem key={item} value={item} {...props}>
              {item}
            </RadioGroupItem>
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
            <SelectGroup>
              {items?.map(item => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      );

    case "inputCheckbox":
      return (
        <CheckboxGroup noLabel={noLabel} name={name} label={label}>
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
