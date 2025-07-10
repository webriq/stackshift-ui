import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { CheckboxGroup } from "./checkbox-group";

describe.concurrent("checkbox-group", () => {
  afterEach(cleanup);

  test("Common: Checkbox Group - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    const { unmount } = render(<CheckboxGroup data-testid="div" className={clx} />);
    expect(screen.getByTestId("div").classList).toContain(clx);
    unmount();
  });

  test("Common: Checkbox Group - test if renders with correct label", ({ expect }) => {
    const label = "My Label";
    const { unmount } = render(<CheckboxGroup label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
    unmount();
  });

  test("Common: Checkbox Group - test if renders with correct variant", ({ expect }) => {
    const clx = "w-full";
    const { unmount: unmountPrimary } = render(
      <CheckboxGroup
        data-testid="primary-checkbox-group"
        variant="primary"
        label="Primary"
        className={clx}
      />,
    );
    const checkboxGroup = screen.getByTestId("primary-checkbox-group");
    screen.debug(checkboxGroup);
    expect(checkboxGroup.classList).toContain(clx);
    expect(checkboxGroup.classList).toContain("block");
    expect(screen.getByText("Primary")).toBeInTheDocument();

    const { unmount: unmountInline } = render(
      <CheckboxGroup
        data-testid="inline-checkbox-group"
        variant="inline"
        label="Inline"
        className={clx}
      />,
    );
    const inlineCheckboxGroup = screen.getByTestId("inline-checkbox-group");
    expect(inlineCheckboxGroup.classList).toContain(clx);
    expect(inlineCheckboxGroup.classList).toContain("flex");
    expect(inlineCheckboxGroup.classList).toContain("gap-4");
    expect(screen.getByText("Inline")).toBeInTheDocument();

    unmountPrimary();
    unmountInline();
  });

  test("Common: Checkbox Group - test render with checkboxes", ({ expect }) => {
    const { unmount } = render(
      <CheckboxGroup>
        <input type="checkbox" id="1" name="1" value="1" />
        <label htmlFor="1">Option 1</label>
        <input type="checkbox" id="2" name="2" value="2" />
        <label htmlFor="2">Option 2</label>
      </CheckboxGroup>,
    );

    expect(screen.getByLabelText("Option 1")).toBeInTheDocument();
    expect(screen.getByLabelText("Option 2")).toBeInTheDocument();
    unmount();
  });
});
