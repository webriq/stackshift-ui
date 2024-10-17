import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { HowItWorks } from "./how-it-works";

describe.concurrent("how-it-works", () => {
  afterEach(cleanup);

  test.skip("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<HowItWorks />);
    expect(screen.getByTestId("{ kebabCase name }}").classList).toContain(clx);
  });
});
