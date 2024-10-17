import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Statistics } from "./statistics";

describe.concurrent("statistics", () => {
  afterEach(cleanup);

  test.skip("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<Statistics />);
    expect(screen.getByTestId("{ kebabCase name }}").classList).toContain(clx);
  });
});
