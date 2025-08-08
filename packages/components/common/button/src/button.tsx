import { Slot } from "@radix-ui/react-slot";
import { Link } from "@stackshift-ui/link";
import {
  buildSanityLink,
  cn,
  DefaultComponent,
  useStackShiftUIComponents,
} from "@stackshift-ui/system";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { LabeledRoute } from "./types";

const displayName = "Button";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        unstyled:
          "bg-transparent p-0 border-none shadow-none hover:bg-transparent ring-0 outline-none text-inherit",
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    iconPosition?: "left" | "right";
    icon?: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
  };

type LinkButtonProps = BaseButtonProps & {
  as: "link";
  link: LabeledRoute;
};

type DefaultButtonProps = BaseButtonProps & {
  as?: undefined;
  link?: never;
};

export type ButtonProps = LinkButtonProps | DefaultButtonProps;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, iconPosition = "right", icon, children, ...props },
    ref,
  ) => {
    const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

    const Comp = asChild ? Slot : "button";

    if (props.as === "link") {
      const { link, ...rest } = props as ButtonProps;
      const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;

      if (!link) return;

      const processedLink = buildSanityLink(link);

      return (
        <Link
          className={cn(buttonVariants({ variant, size, className }))}
          aria-label={link.ariaLabel}
          href={processedLink.href}
          target={processedLink.target}
          rel={processedLink.rel}
          {...anchorProps}>
          {children}
        </Link>
      );
    }

    return (
      <Component
        as={Comp}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}>
        <span className="flex items-center gap-2">
          {iconPosition === "left" && icon && <span>{icon}</span>}
          {children}
          {iconPosition === "right" && icon && <span>{icon}</span>}
        </span>
      </Component>
    );
  },
);
Button.displayName = displayName;

export { Button, buttonVariants };
