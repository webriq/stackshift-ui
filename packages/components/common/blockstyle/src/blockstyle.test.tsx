import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Blockstyle } from "./blockstyle";

describe.concurrent("blockstyle", () => {
  afterEach(cleanup);

  test("Common: Blockstyle - test if renders without errors", ({ expect }) => {
    const clx = "blockStyle-class";
    render(<Blockstyle data-testid="div" className={clx} />);

    expect(screen.getByTestId("div").classList).toContain(clx);
  });
});
