import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { RadioGroup } from "./radio-group";

describe.concurrent("radio-group", () => {
  afterEach(cleanup);

  test("Common: Radio Group - test if renders without errors", ({ expect }) => {
    const clx = "radiogroup-class";
    const { unmount } = render(
      <RadioGroup data-testid="radio-group" className={clx} name="stackshift-radiogroup" />,
    );
    expect(screen.getByTestId("radio-group").classList).toContain(clx);
    unmount();
  });
});
