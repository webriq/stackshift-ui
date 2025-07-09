import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Blog } from "./blog";

describe.concurrent("blog", () => {
  afterEach(cleanup);

  test.skip("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<Blog data-testid="blog" />);
    expect(screen.getByTestId("blog").classList).toContain(clx);
  });
});
