import { DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";
import cn from "classnames";
import type { ElementType, HTMLProps, ReactNode } from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

type Socials = "facebook" | "instagram" | "youtube" | "linkedin" | "twitter";

const FacebookIcon = (props: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
      <path
        fill="#0045d8"
        d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11 h4.205l-0.571,4H16v12H12z"
      />
  </svg>
  );
};
const XIcon = (props: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
      <path
        fill="#0045d8"
        d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"
      />
    </svg>
  );
};
const InstagramIcon = (props: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
      <path
        fill="#0045d8"
        d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
      />
    </svg>
  );
};

const SocialIconMap: Record<Socials, (x: any) => JSX.Element> = {
  facebook: FacebookIcon,
  twitter: XIcon,
  instagram: InstagramIcon,
  youtube: FaYoutube,
  linkedin: FaLinkedin,
};

export interface SocialIconsProps extends Omit<HTMLProps<HTMLElement>, "as"> {
  social?: Socials;
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}

const displayName = "SocialIcons";

export const SocialIcons: React.FC<SocialIconsProps> = ({
  social = "facebook",
  children,
  className,
  as,
  ...props
}) => {
  const { [displayName]: Component = SocialIconMap[social] ?? FaFacebook } =
    useStackShiftUIComponents();

  const commonClass = `w-8 h-8 text-primary-foreground`;

  return (
    <Component
      as={as}
      className={cn(commonClass, className)}
      {...props}
      data-testid={displayName.toLowerCase()}>
      {children}
    </Component>
  );
};

SocialIcons.displayName = displayName;
