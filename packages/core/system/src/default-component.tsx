import type { HTMLProps } from "react";

export const DefaultComponent = <T extends keyof JSX.IntrinsicElements>(
  props: HTMLProps<T>,
): JSX.Element => {
  const { as = "div", ...rest } = props;
  const Component = as;

  return <Component {...rest} />;
};
