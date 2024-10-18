import { DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";
import type { ElementType, HTMLProps, ReactNode } from "react";
import cn from "classnames";

type VariantType = "p";
type fontSize = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
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

export interface TextProps extends Omit<HTMLProps<HTMLElement>, "as"> {
  type?: string;
  style?: React.CSSProperties;
  muted?: boolean;
  weight?: Weight;
  fontSize?: fontSize;
  [key: string]: any;
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}

const displayName = "Text";

export const Text: React.FC<TextProps> = ({
  type = "p",
  style,
  muted = false,
  weight = "normal",
  fontSize = "base",
  children,
  className,
  as = "p",
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
    "5xl": "text-5xl",
    "6xl": "text-6xl",
  };

  const fontWeightMap = {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    semibold: "font-semibold",
    bold: "font-bold",
    medium: "font-mediun",
    extrabold: "font-extrabold",
    black: "font-black",
  };
  const size = fontSizeMap[fontSize] || "text-base";
  const fontWeight = fontWeightMap[weight] || "font-normal";
  const commonClass = `${size} ${fontWeight} ${muted && "text-gray-500"}`;

  const variants: Record<VariantType, string> = {
    p: commonClass,
  };

  const variantClass = variants[type as VariantType] ?? variants.p;

  return (
    <Component
      as={as}
      className={cn(variantClass, className)}
      style={style}
      {...props}
      data-testid={displayName}>
      {children}
    </Component>
  );
};

Text.displayName = displayName;
