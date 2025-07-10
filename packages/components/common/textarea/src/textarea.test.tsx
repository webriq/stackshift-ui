import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Textarea } from "./textarea";

describe.concurrent("textarea", () => {
  afterEach(() => {
    cleanup();
  });

  test("Common: Textarea - test if renders without errors", ({ expect }) => {
    const clx = "textarea-class";
    const { unmount } = render(<Textarea className={clx} placeholder="Enter text here" />);
    const textarea = screen.getByPlaceholderText("Enter text here");
    expect(textarea.classList).toContain(clx);
    expect(textarea.tagName.toLowerCase()).toBe("textarea");
    unmount();
  });

  test("Common: Textarea - test with aria-label", ({ expect }) => {
    const { unmount } = render(<Textarea aria-label="Text area input" />);
    const textarea = screen.getByLabelText("Text area input");
    expect(textarea.tagName.toLowerCase()).toBe("textarea");
    unmount();
  });

  test("Common: Textarea - test with rows prop", ({ expect }) => {
    const { unmount } = render(<Textarea placeholder="Test rows" rows={3} />);
    const textarea = screen.getByPlaceholderText("Test rows");
    screen.debug(textarea);
    expect(textarea.getAttribute("rows")).toBe("3");
    unmount();
  });
});
