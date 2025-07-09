import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Badge } from "./badge";

describe.concurrent("badge", () => {
  afterEach(cleanup);

  test("Common: Badge - test if renders without errors", ({ expect }) => {
    render(<Badge data-testid="default-badge" />);

    const elements = screen.getAllByTestId("default-badge");
    elements.forEach(element => {
      expect(element.classList).toBeDefined();
    });
  });

  test("Common: Badge - test if renders with correct variant", ({ expect }) => {
    render(<Badge data-testid="badge-secondary" variant="secondary" />);

    const elements = screen.getAllByTestId("badge-secondary");
    elements.forEach(element => {
      expect(element.classList).toContain("bg-secondary");
    });
  });

  test("Common: Badge - test if renders with correct text", ({ expect }) => {
    render(
      <>
        <Badge data-testid="default-badge-2">Test</Badge>
        <Badge data-testid="destructive-badge" variant="destructive">
          Destructive
        </Badge>
        ,
      </>,
    );

    expect(screen.getByTestId("default-badge-2").textContent).toBe("Test");
    expect(screen.getByTestId("destructive-badge").textContent).toBe("Destructive");
  });
});
