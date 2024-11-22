import { DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";
import cn from "classnames";
import type { ElementType, HTMLProps, ReactNode } from "react";

type StyleVariants<T extends string> = Record<T, string>;
type Variant = "primary" | "outline" | "secondary";

export interface TextareaProps extends Omit<HTMLProps<HTMLTextAreaElement>, "as"> {
  required?: boolean;
  name: string;
  ariaLabel: string;
  placeholder?: string;
  onChange?: (...args: any) => any;
  labelClass?: string;
  variant?: Variant;
  label?: string;
  noLabel?: boolean;
  [key: string]: any;
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}

const displayName = "Textarea";

export const Textarea: React.FC<TextareaProps> = ({
  required = false,
  name,
  ariaLabel,
  placeholder,
  onChange,
  labelClass,
  variant = "primary",
  label,
  noLabel,
  children,
  className,
  as = "textarea",
  ...props
}) => {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  const commonStyle = "h-24 w-full resize rounded-global p-4 text-xs leading-none";
  const primary = `${commonStyle}`;
  const secondary = `${commonStyle} p-4 outline-none`;
  const outline = `${commonStyle}  py-3 border border-slate-300`;

  const variants: StyleVariants<Variant> = {
    primary,
    outline,
    secondary,
  };

  const variantClass = variants[variant] ?? primary;

  return (
    <>
      {!noLabel && (
        <label htmlFor={name} className={labelClass}>
          {label || name}
        </label>
      )}
      <Component
        as={as}
        {...props}
        data-testid={displayName}
        onChange={onChange}
        aria-label={ariaLabel || name}
        className={cn(variantClass, className)}
        placeholder={placeholder}
        name={name}
        required={required}
        id={name}
        {...props}
      />
    </>
  );
};

Textarea.displayName = displayName;
