import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { LogoCloud } from "./logo-cloud";

describe.concurrent("logo-cloud", () => {
  afterEach(cleanup);

  test.skip("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<LogoCloud />);
    expect(screen.getByTestId("{ kebabCase name }}").classList).toContain(clx);
  });
});
