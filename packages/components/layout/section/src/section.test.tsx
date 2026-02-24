import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Section } from "./section";

describe.concurrent("section", () => {
  afterEach(cleanup);

  test("Layout: Section - test if renders without errors", ({ expect }) => {
    const clx = "section-class";
    render(<Section data-testid="div" className={clx} />);
    expect(screen.getByTestId("div").classList).toContain(clx);
  });
});
