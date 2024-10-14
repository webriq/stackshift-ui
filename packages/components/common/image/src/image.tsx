import { useStackShiftUIComponents } from "@stackshift-ui/system";
import type { HTMLProps, ReactNode } from "react";
import { Link } from "@stackshift-ui/link";
import { Logo } from "./types";
import { logoLink } from "./helper";

export interface ImageProps extends HTMLProps<HTMLImageElement> {
  image?: Logo;
  logoAlt?: string;
  imageSize?: number;
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
  imgClass?: string;
  children?: ReactNode;
}

const displayName = "Image";
export const Image = ({ children, ...props }: ImageProps) => {
  const components = useStackShiftUIComponents();
  const { [displayName]: Component = "img" } = components;

  const { image, logoAlt, imageSize = 56, imageWidth, imageHeight, className, imgClass } = props;

  const width = imageSize ?? imageWidth;
  const height = imageSize ?? imageHeight;

  return (
    <Link
      aria-label={`Go to ${logoLink(image) === "/" ? "home page" : logoLink(image)}`}
      className={className}
      href={logoLink(image)}
      target={image?.linkTarget}
      rel={image?.linkTarget === "_blank" ? "noopener noreferrer" : ""}>
      <Component
        className={imgClass}
        src={`${image?.image}`}
        width={width}
        height={height}
        alt={logoAlt}
        {...props}
        data-testid="image"
      />
    </Link>
  );
};
