import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Container } from "./container";

describe.concurrent("container", () => {
  afterEach(cleanup);

  test("Layout: Container - test if renders without errors", ({ expect }) => {
    const clx = "container-class";
    render(<Container className={clx} />);
    expect(screen.getByTestId("div").classList).toContain(clx);
  });
});
