"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps, toast } from "sonner";

import { DefaultComponent, useStackShiftUIComponents } from "@stackshift-ui/system";

const displayName = "Toaster";

const Toaster = ({ ...props }: ToasterProps) => {
  const { [displayName]: Component = DefaultComponent } = useStackShiftUIComponents();
  const { theme = "system" } = useTheme();

  return (
    <Component
      as={Sonner}
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};
Toaster.displayName = displayName;

export { Toaster, toast, type ToasterProps };
