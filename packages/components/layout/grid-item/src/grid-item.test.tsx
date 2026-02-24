import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { GridItem } from "./grid-item";

describe.concurrent("grid-item", () => {
  afterEach(cleanup);

  test("Layout: Grid Item - test if renders without errors", ({ expect }) => {
    const clx = "griditem-class";
    render(<GridItem data-testid="div" className={clx} />);
    expect(screen.getByTestId("div").classList).toContain(clx);
  });
});
