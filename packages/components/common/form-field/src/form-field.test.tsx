import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, test } from "vitest";
import { FormField } from "./form-field";

describe.concurrent("form-field", () => {
  afterEach(cleanup);

  test("Common: Form Field - test if renders without errors", ({ expect }) => {
    const clx = "formfield-class";
    const { unmount } = render(
      <FormField data-testid="textarea" className={clx} name="stackshift-formfield" />,
    );
    expect(screen.getByTestId("textarea").classList).toContain(clx);
    unmount();
  });

  test("Common: Form Field - test if renders with correct type", ({ expect }) => {
    const { unmount } = render(
      <FormField data-testid="inputText" type="inputText" name="stackshift-inputtext" />,
    );
    expect(screen.getByTestId("inputText").tagName.toLowerCase()).toBe("input");
    unmount();
  });

  test("Common: Form Field - test if renders with correct label", ({ expect }) => {
    const { unmount } = render(
      <FormField
        data-testid="inputText"
        type="inputText"
        name="stackshift-inputtext"
        label="Stackshift Input Text"
      />,
    );
    expect(screen.getByText("Stackshift Input Text")).toBeInTheDocument();
    unmount();
  });

  test("Common: Form Field - test if renders with correct placeholder", ({ expect }) => {
    const { unmount } = render(
      <FormField
        data-testid="inputText"
        type="inputText"
        name="stackshift-inputtext"
        placeholder="Stackshift Input Text"
      />,
    );
    expect(screen.getByPlaceholderText("Stackshift Input Text")).toBeInTheDocument();
    unmount();
  });
});
