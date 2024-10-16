import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Navigation } from "./navigation";

describe.concurrent("navigation", () => {
  afterEach(cleanup);

  test.skip("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<Navigation />);
    expect(screen.getByTestId("{ kebabCase name }}").classList).toContain(clx);
  });
});
