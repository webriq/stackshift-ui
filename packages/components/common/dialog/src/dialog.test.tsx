import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, test } from "vitest";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

describe.concurrent("dialog", () => {
  afterEach(cleanup);

  test("Dummy test - test if renders without errors", async ({ expect }) => {
    const clx = "my-class";

    const user = userEvent.setup();

    const { unmount } = render(
      <Dialog>
        <DialogTrigger asChild data-testid="dialog-trigger-1">
          <button>Open Dialog</button>
        </DialogTrigger>
        <DialogContent data-testid="dialog-container-1" className={clx}>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>Dialog Description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );

    const trigger = screen.getByTestId("dialog-trigger-1");
    expect(trigger).toBeInTheDocument();

    await user.click(trigger);

    const dialog = await screen.findByTestId("dialog-container-1");

    expect(dialog).toBeInTheDocument();

    unmount();
  });

  test("Common: Dialog - test if closes when clicking outside", async ({ expect }) => {
    const user = userEvent.setup();
    const { unmount } = render(
      <>
        <button data-testid="outside-button">Outside Button</button>
        <Dialog>
          <DialogTrigger asChild data-testid="dialog-trigger">
            <button>Open Dialog</button>
          </DialogTrigger>
          <DialogContent data-testid="dialog-container">
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogDescription>Dialog Description</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </>,
    );

    const outsideButton = screen.getByTestId("outside-button");
    expect(outsideButton).toBeInTheDocument();

    const trigger = screen.getByTestId("dialog-trigger");
    expect(trigger).toBeInTheDocument();

    await user.click(trigger);

    await waitFor(() => {
      const dialog = screen.getByTestId("dialog-container");
      expect(dialog).toBeInTheDocument();
    });

    await user.click(outsideButton);

    waitFor(() => {
      const dialog = screen.queryByTestId("dialog-container");
      expect(dialog).not.toBeInTheDocument();
    });

    unmount();
  });
});
