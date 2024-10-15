import { DefaultComponent, useStackShiftUIComponents } from "@webriq-test/system";
import type { ElementType, HTMLProps, ReactNode } from "react";
import { useState } from "react";
import cn from "classnames";

type StyleVariants<T extends string> = Record<T, string>;
type Variant = "primary" | "outline";

export interface InputFileProps extends Omit<HTMLProps<HTMLInputElement>, "as"> {
  required?: boolean;
  variant?: Variant;
  name: string;
  ariaLabel: string;
  [key: string]: any;
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}

const displayName = "InputFile";

export const InputFile: React.FC<InputFileProps> = ({
  required = false,
  variant = "primary",
  name,
  ariaLabel,
  children,
  className,
  as,
  ...props
}) => {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  const [filename, setFilename] = useState("");

  const commonStyle =
    "my-1 ml-auto cursor-pointer rounded px-4 py-3 text-xs font-semibold leading-none transition duration-200";
  const primary = `${commonStyle} bg-primary-foreground hover:bg-primary`;
  const outline = `${commonStyle} text-primary-foreground border border-solid border-primary-foreground hover:bg-slate-100`;

  const variants: StyleVariants<Variant> = {
    primary,
    outline,
  };

  const variantClass = variants[variant] ?? primary;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFilename(file.name);
    } else {
      setFilename("");
    }
  };

  return (
    <div className={"relative rounded bg-white px-2 w-full"}>
      <input
        aria-label={ariaLabel ?? "Attach file"}
        className="absolute w-full h-full opacity-0 cursor-pointer"
        type="file"
        name={name}
        required={required}
        id={name}
        onChange={handleFileChange}
        {...props}
      />
      <div className="flex">
        <span className="px-2 py-4 text-xs font-semibold leading-none">{filename}</span>
        <label htmlFor={name} className={cn(variantClass, className)}>
          {name}
        </label>
      </div>
    </div>
  );
};

InputFile.displayName = displayName;
