import { DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";
import type { ElementType, HTMLProps, ReactNode } from "react";
import cn from "classnames";

type StyleVariants<T extends string> = Record<T, string>;
type Variant = "primary" | "outline" | "secondary";
type InputType = "number" | "password" | "email" | "text";
type TextSize = "sm" | "md" | "lg";

export interface InputProps extends Omit<HTMLProps<HTMLInputElement>, "as"> {
  noLabel?: boolean;
  label?: string;
  ariaLabel?: string;
  required?: boolean;
  name?: string;
  labelClass?: string;
  placeholder?: string;
  type?: InputType;
  variant?: Variant;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textSize?: TextSize;
  [key: string]: any;
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}

const displayName = "Input";

export const Input: React.FC<InputProps> = ({
  noLabel,
  label,
  ariaLabel,
  required = false,
  name,
  labelClass,
  placeholder,
  type = "text",
  variant = "primary",
  onChange,
  textSize = "md",
  children,
  className,
  as = "input",
  ...props
}) => {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  const commonStyle = "w-full rounded px-4 py-2 leading-loose";
  const primary = `${commonStyle}`;
  const secondary = `${commonStyle} bg-gray-100 p-4 text-xs outline-none`;
  const outline = `${commonStyle} text-xs py-3 border border-slate-300`;

  const text = {
    sm: "text-xs",
    md: "text-base",
    lg: "text-lg",
  }[textSize];

  const variants: StyleVariants<Variant> = {
    primary,
    secondary,
    outline,
  };

  const variantClass = variants[variant] ?? primary;

  return (
    <>
      {!noLabel && (
        <label className={labelClass} htmlFor={name}>
          {label || name}
        </label>
      )}
      <Component
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        aria-label={ariaLabel || name}
        type={type}
        as={as}
        className={cn(variantClass, text, className)}
        onChange={onChange}
        {...props}
        data-testid={displayName}
      />
    </>
  );
};

Input.displayName = displayName;
