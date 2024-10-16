import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Avatar } from "./avatar";

describe.concurrent("avatar", () => {
  afterEach(cleanup);

  test("Common: Avatar - test if renders without errors", ({ expect }) => {
    const clx = "avatar-class";

    render(
      <Avatar
        className={clx}
        src="https://via.placeholder.com/150"
        alt="Sample Avatar"
        text="StackShift"
      />,
    );
    const elements = screen.getAllByTestId("div");
    elements.forEach(element => {
      expect(element.classList).toBeDefined();
    });
  });
});
