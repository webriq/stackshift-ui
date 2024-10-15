/* eslint-disable @typescript-eslint/no-unsafe-call */
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it } from "vitest";
import { DefaultComponent } from "./default-component";

describe("DefaultComponent", () => {
  afterEach(cleanup);

  it("should render a div by default", ({ expect }) => {
    render(<DefaultComponent />);
    const divElements = screen.getAllByRole("generic");

    expect(divElements[0].nodeName).toBe("DIV");
  });

  it("should render the specified component", ({ expect }) => {
    render(<DefaultComponent as="span" />);

    expect(screen.getByTestId("span").nodeName).toBe("SPAN");
  });

  it("should pass props to the rendered component", ({ expect }) => {
    render(<DefaultComponent as="button" type="submit" />);

    expect(screen.getByRole("button").nodeName).toBe("BUTTON");
    expect(screen.getByRole("button").getAttribute("type")).toBe("submit");
  });
});
