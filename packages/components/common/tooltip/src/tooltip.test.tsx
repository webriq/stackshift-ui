import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, test, vi } from "vitest";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

describe.concurrent("tooltip", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
    vi.resetAllMocks();
  });

  test("Dummy test - test if renders without errors", async ({ expect }) => {
    const clx = "my-class";
    const user = userEvent.setup();

    render(
      <Tooltip>
        <TooltipTrigger asChild data-testid="tooltip-trigger">
          <button>Hover me</button>
        </TooltipTrigger>
        <TooltipContent data-testid="tooltip" className={clx}>
          <p>This is a tooltip</p>
        </TooltipContent>
      </Tooltip>,
    );

    const tooltipTrigger = screen.getByTestId("tooltip-trigger");
    expect(tooltipTrigger).toBeInTheDocument();

    screen.debug(tooltipTrigger);
    await user.hover(tooltipTrigger);
    screen.debug(tooltipTrigger);

    expect(await screen.findByTestId("tooltip")).toBeInTheDocument();
  });
});
