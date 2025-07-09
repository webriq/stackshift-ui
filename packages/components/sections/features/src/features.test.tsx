import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Features } from "./features";

describe.concurrent("features", () => {
  afterEach(cleanup);

  test.skip("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<Features data-testid="features" />);
    expect(screen.getByTestId("features").classList).toContain(clx);
  });
});
