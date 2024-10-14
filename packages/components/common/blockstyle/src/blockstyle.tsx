import { DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";
import type { ElementType, HTMLProps, ReactNode } from "react";
import { PortableText } from "@portabletext/react";
import { defaultBlockStyle } from "./defaultBlockStyle";

export interface BlockstyleProps extends Omit<HTMLProps<HTMLElement>, "as"> {
  children?: ReactNode;
  className?: string;
  as?: ElementType;
  content?: any;
}

const displayName = "Blockstyle";

export const Blockstyle: React.FC<BlockstyleProps> = ({
  children,
  className,
  as,
  content,
  ...props
}) => {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  return (
    <Component as={as} className={className} {...props} data-testid={displayName}>
      {content ? <PortableText value={content} components={defaultBlockStyle} /> : children}
    </Component>
  );
};

Blockstyle.displayName = displayName;
