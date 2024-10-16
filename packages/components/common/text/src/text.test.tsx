import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Text } from "./text";

describe.concurrent("text", () => {
  afterEach(cleanup);

  test("Common: Text - test if renders without errors", ({ expect }) => {
    const clx = "text-class";
    render(<Text className={clx} />);
    expect(screen.getByTestId("p").classList).toContain(clx);
  });
});
