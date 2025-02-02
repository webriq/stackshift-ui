import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Form } from "./form";

describe.concurrent("form", () => {
  afterEach(cleanup);

  test("Common: Form - test if renders without errors", ({ expect }) => {
    const clx = "form-class";
    render(<Form className={clx} />);
    expect(screen.getByTestId("stackshift-form").classList).toContain(clx);
  });
});
