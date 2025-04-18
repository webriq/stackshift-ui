import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Footer } from "./footer";

describe.concurrent("footer", () => {
  afterEach(cleanup);

  test.skip("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<Footer />);
    expect(screen.getByTestId("{ kebabCase name }}").classList).toContain(clx);
  });
});
