import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Header } from "./header";

describe.concurrent("header", () => {
  afterEach(cleanup);

  test.skip("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<Header data-testid="header" />);
    expect(screen.getByTestId("header").classList).toContain(clx);
  });
});
