import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Heading } from "./heading";

describe.concurrent("heading", () => {
  afterEach(cleanup);

  test("Common: Heading - test if renders without errors", ({ expect }) => {
    const clx = "heading-class";
    const { unmount } = render(<Heading className={clx}>Test Heading</Heading>);

    const heading = screen.getByRole("heading", { name: "Test Heading", level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading.classList).toContain(clx);
    unmount();
  });

  test("Common: Heading - test with different heading type", ({ expect }) => {
    const { unmount } = render(
      <>
        <Heading data-testid="Heading1" type="h1">
          Test H1
        </Heading>
        <Heading data-testid="Heading2" type="h2">
          Test H2
        </Heading>
        <Heading data-testid="Heading3" type="h3">
          Test H3
        </Heading>
        <Heading data-testid="Heading4" type="h4">
          Test H4
        </Heading>
        <Heading data-testid="Heading5" type="h5">
          Test H5
        </Heading>
        <Heading data-testid="Heading6" type="h6">
          Test H6
        </Heading>
      </>,
    );

    expect(screen.getByRole("heading", { name: "Test H1", level: 1 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Test H2", level: 2 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Test H3", level: 3 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Test H4", level: 4 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Test H5", level: 5 })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Test H6", level: 6 })).toBeInTheDocument();
    unmount();
  });
});
