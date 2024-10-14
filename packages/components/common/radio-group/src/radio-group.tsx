import { DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";
import type { ElementType, HTMLProps, ReactNode } from "react";
import cn from "classnames";

type StyleVariants<T extends string> = Record<T, string>;
type Variant = "primary" | "inline";

export interface RadioGroupProps extends Omit<HTMLProps<HTMLElement>, "as"> {
  variant?: Variant;
  label?: string;
  name: string;
  labelClass?: string;
  noLabel?: boolean;
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}

const displayName = "RadioGroup";

export const RadioGroup: React.FC<RadioGroupProps> = ({
  variant = "primary",
  label,
  name,
  labelClass,
  noLabel = false,
  children,
  className,
  as,
  ...props
}) => {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  const commonClass = "ml-2";
  const primary = `${commonClass}`;
  const inline = `${commonClass} flex items-center gap-2`;

  const variants: StyleVariants<Variant> = {
    primary,
    inline,
  };

  const variantClass = variants[variant] ?? primary;

  return (
    <div>
      {!noLabel && <p className={labelClass}>{label || name}</p>}
      <Component
        as={as}
        className={cn(variantClass, className)}
        {...props}
        data-testid={displayName}>
        {children}
      </Component>
    </div>
  );
};

RadioGroup.displayName = displayName;
