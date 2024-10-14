import { DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";
import type { ElementType, HTMLProps, ReactNode } from "react";
import cn from "classnames";

type StyleVariants<T extends string> = Record<T, string>;
type Variant = "primary";

export interface RadioProps extends Omit<HTMLProps<HTMLInputElement>, "as"> {
  name: string;
  ariaLabel: string;
  variant?: Variant;
  item: string;
  labelClass?: string;
  onChange?: () => void;
  [key: string]: any;
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}

const displayName = "Radio";

export const Radio: React.FC<RadioProps> = ({
  name,
  ariaLabel,
  variant = "primary",
  item,
  labelClass,
  onChange,
  children,
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

  return (
    <Component
      htmlFor={item}
      as={as}
      className={cn("flex items-center gap-2", labelClass)}
      {...props}
      data-testid={displayName}>
      <input
        onChange={onChange}
        className={cn(variantClass, className)}
        name={name}
        value={item}
        type="radio"
        aria-label={ariaLabel || name}
        id={item}
        {...props}
      />
      {item}
    </Component>
  );
};

Radio.displayName = displayName;
