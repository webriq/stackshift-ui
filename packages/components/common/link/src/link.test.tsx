import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Link } from "./link";

describe.concurrent("link", () => {
  afterEach(cleanup);

  test("Common: Link - test if renders without errors", ({ expect }) => {
    const clx = "link-class";
    render(<Link className={clx} />);
    expect(screen.getByTestId("link").classList).toContain(clx);
  });
});
