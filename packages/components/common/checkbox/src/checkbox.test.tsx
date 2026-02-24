import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, test } from "vitest";
import { Checkbox } from "./checkbox";

describe.concurrent("checkbox", () => {
  afterEach(cleanup);

  test("Common: Checkbox - test if renders without errors", ({ expect }) => {
    const clx = "checkbox-class";
    const { unmount } = render(<Checkbox aria-label="Test checkbox" className={clx} />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.classList).toContain(clx);
    expect(checkbox.ariaLabel).toBe("Test checkbox");
    unmount();
  });

  test("Common: Checkbox - test if renders with correct state", ({ expect }) => {
    const { unmount } = render(
      <Checkbox data-testid="checked-checkbox" aria-label="Test checkbox" defaultChecked />,
    );

    const checkbox = screen.getByTestId<HTMLButtonElement>("checked-checkbox");
    expect(checkbox.getAttribute("aria-checked")).toBe("true");
    unmount();
  });

  test("Common: Checkbox - test if clicking checkbox changes state", async ({ expect }) => {
    const user = userEvent.setup();
    const { unmount } = render(
      <Checkbox data-testid="unchecked-checkbox" aria-label="Test checkbox" />,
    );

    const checkbox = screen.getByTestId<HTMLButtonElement>("unchecked-checkbox");
    expect(checkbox.getAttribute("aria-checked")).toBe("false");

    await user.click(checkbox);

    waitFor(() => expect(checkbox.getAttribute("aria-checked")).toBe("true"));
    unmount();
  });
});
