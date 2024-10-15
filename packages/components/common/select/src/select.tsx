import { DefaultComponent, useStackShiftUIComponents } from "@webriq-test/system";
import type { ElementType, HTMLProps, ReactNode } from "react";
import cn from "classnames";

type StyleVariants<T extends string> = Record<T, string>;
type Variant = "primary" | "outline";

export interface SelectProps extends Omit<HTMLProps<HTMLSelectElement>, "as"> {
  defaultValue?: string;
  variant?: Variant;
  label?: string;
  labelClass?: string;
  onChange?: () => void;
  required?: boolean;
  name: string;
  items: string[];
  ariaLabel: string;
  noLabel?: boolean;
  [key: string]: any;
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}

const displayName = "Select";

export const Select: React.FC<SelectProps> = ({
  defaultValue,
  variant = "primary",
  label,
  labelClass,
  onChange,
  required = false,
  name,
  items,
  ariaLabel,
  noLabel = false,
  children,
  className,
  as = "select",
  ...props
}) => {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  const commonStyle = "w-full rounded bg-white p-4 text-xs font-semibold leading-none outline-none";
  const primary = `${commonStyle}`;
  const outline = `${commonStyle} border border-solid border-primary-foreground`;

  const variants: StyleVariants<Variant> = {
    primary,
    outline,
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
        onChange={onChange}
        name={name}
        defaultValue={defaultValue}
        required={required}
        as={as}
        className={cn(variantClass, className)}
        {...props}
        data-testid={displayName}>
        {items &&
          items.length > 0 &&
          items.map(opt => {
            return (
              <option value={opt} key={opt}>
                {opt}
              </option>
            );
          })}
      </Component>
    </>
  );
};

Select.displayName = displayName;
