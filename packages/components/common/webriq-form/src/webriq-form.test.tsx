import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { WebriQForm } from "./webriq-form";

describe.concurrent("webriq-form", () => {
  afterEach(cleanup);

  test("Common: WebriQ Form - test if renders without errors", ({ expect }) => {
    const clx = "webriqform-class";
    render(<WebriQForm className={clx} />);
    expect(screen.getByTestId("webriq-form").classList).toContain(clx);
  });
});
