import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Textarea } from "./textarea";

describe.concurrent("textarea", () => {
  afterEach(cleanup);

  test("Common: Textarea - test if renders without errors", ({ expect }) => {
    const clx = "textarea-class";
    render(<Textarea className={clx} name="stackshift-textarea" ariaLabel="text area" />);
    expect(screen.getByTestId("textarea").classList).toContain(clx);
  });
});
