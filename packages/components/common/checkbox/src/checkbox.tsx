import { DefaultComponent, useStackShiftUIComponents } from "@webriq-test/system";
import cn from "classnames";
import type { ElementType, HTMLProps } from "react";

export type StyleVariants<T extends string> = Record<T, string>;
type Variant = "primary";

export interface CheckboxProps extends Omit<HTMLProps<HTMLInputElement>, "as"> {
  required?: boolean;
  name?: string;
  ariaLabel?: string;
  label?: string;
  labelClass?: string;
  item?: string;
  variant?: Variant;
  onChange?: () => void;
  className?: string;
  as?: ElementType;
}

const displayName = "Checkbox";

export const Checkbox: React.FC<CheckboxProps> = ({
  required = false,
  name,
  ariaLabel,
  label,
  labelClass,
  item,
  variant = "primary",
  onChange,
  className,
  as = "label",
  ...props
}) => {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  const commonStyle = "";
  const primary = `${commonStyle}`;

  const variants: StyleVariants<Variant> = {
    primary,
  };

  const variantClass = variants[variant] ?? primary;
  const defaultLabelClass = "flex gap-2 items-center";

  return (
    <Component
      as={as}
      htmlFor={item}
      className={cn(defaultLabelClass, labelClass)}
      {...props}
      data-testid={displayName}>
      <input
        aria-label={ariaLabel || name}
        className={cn(variantClass, className)}
        name={name}
        type="checkbox"
        value={item}
        required={required}
        onChange={onChange}
        id={item}
        {...props}
      />
      {label || item}
    </Component>
  );
};

Checkbox.displayName = displayName;
