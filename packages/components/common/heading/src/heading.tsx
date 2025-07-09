import { DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";
import cn from "classnames";
import type { ElementType, HTMLProps, ReactNode } from "react";

type StyleVariants<T extends string> = Record<T, string>;
type Type = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type fontSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
type Weight =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "semibold"
  | "bold"
  | "medium"
  | "extrabold"
  | "black";

export interface HeadingProps extends Omit<HTMLProps<HTMLElement>, "as"> {
  type?: Type;
  style?: React.CSSProperties;
  muted?: boolean;
  weight?: Weight;
  fontSize?: fontSize;
  children?: ReactNode;
  className?: string;
  // as?: ElementType;
}

const displayName = "Heading";

export const Heading: React.FC<HeadingProps> = ({
  type = "h1",
  style,
  muted = false,
  weight = "bold",
  fontSize = "3xl",
  children,
  className,
  // as,
  ...props
}) => {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  const fontSizeMap = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
  };

  const fontWeightMap = {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    semibold: "font-semibold",
    bold: "font-bold",
    medium: "font-medium",
    extrabold: "font-extrabold",
    black: "font-black",
  };

  const size = fontSizeMap[fontSize];
  const fontWeight = fontWeightMap[weight];
  const commonClass = `text-primary ${muted && "text-gray-500"} ${
    weight ? `${fontWeight}` : "font-bold"
  } `;
  const variants: StyleVariants<Type> = {
    h1: `${commonClass} font-bold font-heading ${size ?? `text-4xl lg:text-5xl`} `,
    h2: `${commonClass} ${size ?? `text-3xl lg:text-4xl`} font-bold`,
    h3: `${commonClass} font-bold ${size ?? `text-2xl lg:text-3xl`}`,
    h4: `${commonClass} font-bold text-2xl ${size}`,
    h5: `${commonClass} font-medium text-xl ${size}`,
    h6: `${commonClass} font-medium text-lg ${size}`,
  };

  const Element: Type = ["h1", "h2", "h3", "h4", "h5", "h6"].includes(type) ? type : "h1";

  const variantClass = variants[Element] ?? variants.h1;

  return (
    <Component as={type} className={cn(variantClass, className)} {...props}>
      {children}
    </Component>
  );
};

Heading.displayName = displayName;
