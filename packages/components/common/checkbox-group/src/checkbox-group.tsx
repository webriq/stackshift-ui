import { DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";
import cn from "classnames";
import { forwardRef, Fragment, type ElementType, type HTMLProps, type ReactNode } from "react";

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

export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>((props, ref) => {
  const {
    variant = "primary",
    name,
    label,
    noLabel = false,
    labelClass,
    children,
    className,
    as,
    ...rest
  } = props;

  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  const commonClass = "ml-2";
  const primary = `${commonClass} block`;
  const inline = `${commonClass} flex gap-4`;
  const combinedLabelClass = `mb-2 ${labelClass}`;

  const variants: StyleVariants<Variant> = {
    primary,
    inline,
  };

  const variantClass = variants[variant as Variant] ?? primary;

  return (
    <Fragment>
      {!noLabel && <p className={combinedLabelClass}>{label || name}</p>}
      <Component ref={ref} as={as} className={cn(variantClass, className)} {...rest}>
        {children}
      </Component>
    </Fragment>
  );
});

CheckboxGroup.displayName = displayName;
