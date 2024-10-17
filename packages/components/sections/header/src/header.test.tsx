import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Header } from "./header";

describe.concurrent("header", () => {
  afterEach(cleanup);

  test.skip("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<Header />);
    expect(screen.getByTestId("{ kebabCase name }}").classList).toContain(clx);
  });
});
