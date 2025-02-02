import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { AppPromo } from "./app-promo";

describe.concurrent("app-promo", () => {
  afterEach(cleanup);

  test.skip("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<AppPromo />);
    expect(screen.getByTestId("{ kebabCase name }}").classList).toContain(clx);
  });
});
