import type { HTMLProps } from "react";

export const DefaultComponent = <T extends keyof JSX.IntrinsicElements>(props: HTMLProps<T>) => {
  const Component = props.as || "div";

  return <Component {...props} />;
};
