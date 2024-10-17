import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Portfolio } from "./portfolio";

describe.concurrent("portfolio", () => {
  afterEach(cleanup);

  test.skip("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<Portfolio />);
    expect(screen.getByTestId("{ kebabCase name }}").classList).toContain(clx);
  });
});
