import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { ScrollArea } from "./scroll-area";

describe.concurrent("scroll-area", () => {
  afterEach(cleanup);

  test("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    render(<ScrollArea data-testid="scroll-area" className={clx} />);
    expect(screen.getByTestId("scroll-area").classList).toContain(clx);
  });
});
