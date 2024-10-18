import { DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";
import { Fragment, type ElementType, type HTMLProps, type ReactNode } from "react";
import cn from "classnames";

type StyleVariants<T extends string> = Record<T, string>;
type Variant = "primary" | "inline";

export interface CheckboxGroupProps extends Omit<HTMLProps<HTMLElement>, "as"> {
  variant?: Variant;
  name?: string;
  label?: string;
  noLabel?: boolean;
  labelClass?: string;
  [key: string]: any;
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}

const displayName = "CheckboxGroup";

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  variant = "primary",
  name,
  label,
  noLabel = false,
  labelClass,
  children,
  className,
  as,
  ...props
}) => {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  const commonClass = "ml-2";
  const primary = `${commonClass} block`;
  const inline = `${commonClass} flex gap-4`;

  const variants: StyleVariants<Variant> = {
    primary,
    inline,
  };

  const variantClass = variants[variant] ?? primary;

  return (
    <Fragment>
      {!noLabel && <p className={labelClass}>{label || name}</p>}
      <Component
        as={as}
        className={cn(variantClass, className)}
        {...props}
        data-testid={displayName}>
        {children}
      </Component>
    </Fragment>
  );
};

CheckboxGroup.displayName = displayName;
