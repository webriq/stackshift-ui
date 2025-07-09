import * as React from "react";

import { cn, DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";

const displayName = "Card";
const displayNameHeader = "CardHeader";
const displayNameTitle = "CardTitle";
const displayNameDescription = "CardDescription";
const displayNameContent = "CardContent";
const displayNameFooter = "CardFooter";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();

    return (
      <Component
        ref={ref}
        className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
        {...props}
      />
    );
  },
);
Card.displayName = displayName;

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { [displayNameHeader]: Component = DefaultComponent } = useStackShiftUIComponents();

    return (
      <Component ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
    );
  },
);
CardHeader.displayName = displayNameHeader;

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { [displayNameTitle]: Component = DefaultComponent } = useStackShiftUIComponents();
    return (
      <Component
        ref={ref}
        className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
        {...props}
      />
    );
  },
);
CardTitle.displayName = displayNameTitle;

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { [displayNameDescription]: Component = DefaultComponent } = useStackShiftUIComponents();

    return (
      <Component ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
    );
  },
);
CardDescription.displayName = displayNameDescription;

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { [displayNameContent]: Component = DefaultComponent } = useStackShiftUIComponents();

    return <Component ref={ref} className={cn("p-6 pt-0", className)} {...props} />;
  },
);
CardContent.displayName = displayNameContent;

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { [displayNameFooter]: Component = DefaultComponent } = useStackShiftUIComponents();

    return (
      <Component ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
    );
  },
);
CardFooter.displayName = displayNameFooter;

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
