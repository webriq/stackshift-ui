import * as React from "react";

export const DefaultComponent = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & { as?: keyof JSX.IntrinsicElements }
>(({ as = "div", ...props }, ref) => {
  const Component = as as any;

  return <Component ref={ref} {...props} />;
});

DefaultComponent.displayName = "DefaultComponent";
