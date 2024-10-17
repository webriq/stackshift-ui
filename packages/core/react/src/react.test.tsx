import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";

describe.concurrent("react", () => {
  afterEach(cleanup);

  test.skip("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    // render(<Blog />);
    expect(screen.getByTestId("{ kebabCase name }}").classList).toContain(clx);
  });
});
