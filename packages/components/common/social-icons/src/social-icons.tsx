import { useStackShiftUIComponents } from "@stackshift-ui/system";
import cn from "classnames";
import type { ElementType, HTMLProps, ReactNode } from "react";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
  FaThreads,
} from "react-icons/fa6";

type Socials =
  | "facebook"
  | "instagram"
  | "youtube"
  | "linkedin"
  | "twitter"
  | "tiktok"
  | "pinterest"
  | "github"
  | "discord"
  | "threads";

const SocialIconMap: Record<Socials, React.ComponentType<any>> = {
  facebook: FaFacebook,
  twitter: FaXTwitter,
  instagram: FaInstagram,
  youtube: FaYoutube,
  linkedin: FaLinkedin,
  tiktok: FaTiktok,
  pinterest: FaPinterest,
  github: FaGithub,
  discord: FaDiscord,
  threads: FaThreads,
};

export interface SocialIconsProps extends Omit<HTMLProps<HTMLElement>, "as"> {
  social?: Socials;
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}

const displayName = "SocialIcons";

export const SocialIcons: React.FC<SocialIconsProps> = ({
  social,
  children,
  className,
  as,
  ...props
}) => {
  if (!social || !SocialIconMap[social]) return null;

  const { [displayName]: Component = SocialIconMap[social] } = useStackShiftUIComponents();

  const commonClass = `w-8 h-8`;

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
