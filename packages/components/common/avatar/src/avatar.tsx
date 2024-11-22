import { Flex } from "@stackshift-ui/flex";
import { Image } from "@stackshift-ui/image";
import { DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";
import cn from "classnames";
import type { ElementType, HTMLProps, ReactNode } from "react";
import { useState } from "react";

type ImageSize = "sm" | "md" | "lg" | "xl";

export interface AvatarProps extends Omit<HTMLProps<HTMLElement>, "as" | "size"> {
  src: string;
  alt: string;
  size?: ImageSize | number;
  text?: string;
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}

const displayName = "Avatar";

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "image",
  size = "sm",
  text,
  children,
  className,
  as,
  ...props
}) => {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

  const [loaded, setLoaded] = useState(false);
  const sizeMap = {
    sm: 40,
    md: 80,
    lg: 120,
    xl: 160,
  };
  const avatarSize = typeof size === "number" ? `${size}px` : `${sizeMap[size]}px`;
  const initials = text ? text?.split(" ")?.reduce((acc, curr) => acc + curr[0], "") : "AB";
  const baseClass = `relative flex rounded-full aspect-square overflow-hidden border-2 border-solid border-primary`;

  return (
    <Component
      as={as}
      className={cn(baseClass, className)}
      style={{ maxWidth: avatarSize }}
      {...props}
      data-testid={displayName}>
      {(!loaded || !src) && (
        <Flex align="center" justify="center" className="w-full h-full bg-primary">
          <p
            style={{
              fontSize: `calc(${avatarSize}/2)`,
            }}
            className="text-white">
            {initials}
          </p>
        </Flex>
      )}
      {src && (
        <Image
          className="object-cover object-center w-[100%] h-[100%]"
          src={src}
          alt={alt}
          width={100}
          height={100}
          onLoad={() => setLoaded(true)}
        />
      )}
    </Component>
  );
};

Avatar.displayName = displayName;
