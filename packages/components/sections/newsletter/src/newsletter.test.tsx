import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Newsletter } from "./newsletter";

describe.concurrent("newsletter", () => {
  afterEach(cleanup);

  test.skip("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<Newsletter data-testid="newsletter" />);
    expect(screen.getByTestId("newsletter").classList).toContain(clx);
  });
});
