import * as React from "react";

type PolymorphicProps<T extends React.ElementType, P = {}> = P & { as?: T } & Omit<
    React.ComponentPropsWithRef<T>,
    keyof P | "as"
  >;

type DefaultElement = "div";

export const DefaultComponent = React.forwardRef(
  <T extends React.ElementType = DefaultElement>(
    props: PolymorphicProps<T>,
    ref: React.Ref<any>,
  ) => {
    const { as, ...restProps } = props;
    const Component = as || "div";
    return <Component ref={ref} {...restProps} />;
  },
);

DefaultComponent.displayName = "DefaultComponent";
