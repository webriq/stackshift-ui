/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { StackShiftUIProvider, useStackShiftUIComponents } from "./system";

describe("StackShiftUIProvider", () => {
  afterEach(cleanup);

  it("should provide custom components", () => {
    function CustomComponent() {
      return <div>Custom Component</div>;
    }
    const components = { CustomComponent };

    render(
      <StackShiftUIProvider components={components}>
        <CustomComponent />
      </StackShiftUIProvider>,
    );

    const element = screen.getByText("Custom Component");

    expect(element).not.toBeNull(); // Check that the element is not null
    expect(document.body.contains(element)).toBe(true); // Check that the element is in the document
  });

  it("should use default components if none are provided", () => {
    function DefaultComponent() {
      const { DefaultComponent: Component = "div" } = useStackShiftUIComponents();
      return <Component>Default Component</Component>;
    }

    render(
      <StackShiftUIProvider>
        <DefaultComponent />
      </StackShiftUIProvider>,
    );

    const element = screen.getByText("Default Component");

    expect(element).not.toBeNull(); // Check that the element is not null
    expect(document.body.contains(element)).toBe(true); // Check that the element is in the document
  });
});
