import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { FormField } from "./form-field";

describe.concurrent("form-field", () => {
  afterEach(cleanup);

  test("Common: Form Field - test if renders without errors", ({ expect }) => {
    const clx = "formfield-class";
    render(<FormField data-testid="textarea" className={clx} name="stackshift-formfield" />);
    expect(screen.getByTestId("textarea").classList).toContain(clx);
  });
});
