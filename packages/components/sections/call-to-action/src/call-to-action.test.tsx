import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { CallToAction } from "./call-to-action";

describe.concurrent("call-to-action", () => {
  afterEach(cleanup);

  test.skip("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<CallToAction />);
    expect(screen.getByTestId("{ kebabCase name }}").classList).toContain(clx);
  });
});
