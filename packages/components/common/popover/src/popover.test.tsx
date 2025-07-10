import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, test } from "vitest";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

describe.concurrent("popover", () => {
  afterEach(cleanup);

  test("Dummy test - test if renders without errors", async ({ expect }) => {
    const clx = "my-class";
    const user = userEvent.setup();

    const { unmount } = render(
      <Popover data-testid="popover">
        <PopoverTrigger asChild data-testid="popover-trigger">
          <button>Open Popover</button>
        </PopoverTrigger>
        <PopoverContent data-testid="popover-content" className={clx}>
          <p>This is a popover</p>
        </PopoverContent>
      </Popover>,
    );

    const trigger = screen.getByTestId("popover-trigger");
    expect(trigger).toBeInTheDocument();

    user.click(trigger);

    const popover = await screen.findByTestId("popover-content");
    expect(popover).toBeInTheDocument();
    unmount();
  });
});
