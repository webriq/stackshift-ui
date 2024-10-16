import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Grid } from "./grid";

describe.concurrent("grid", () => {
  afterEach(cleanup);

  test("Layout: Grid - test if renders without errors", ({ expect }) => {
    const clx = "grid-class";
    render(<Grid className={clx} />);
    expect(screen.getByTestId("div").classList).toContain(clx);
  });
});
