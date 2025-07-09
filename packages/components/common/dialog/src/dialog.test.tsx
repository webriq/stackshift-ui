import { cleanup, render, screen } from "@testing-library/react";
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

    render(
      <Dialog>
        <DialogTrigger asChild data-testid="dialog-trigger">
          <button>Open Dialog</button>
        </DialogTrigger>
        <DialogContent data-testid="dialog-container" className={clx}>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>Dialog Description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );

    const trigger = screen.getByTestId("dialog-trigger");
    expect(trigger).toBeInTheDocument();

    user.click(trigger);

    const dialog = await screen.findByTestId("dialog-container");

    expect(dialog).toBeInTheDocument();
  });
});
