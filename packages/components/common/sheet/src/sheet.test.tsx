import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, test } from "vitest";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

describe.concurrent("sheet", () => {
  afterEach(cleanup);

  test("Dummy test - test if renders without errors", async ({ expect }) => {
    const clx = "my-class";

    const user = userEvent.setup();

    render(
      <Sheet>
        <SheetTrigger asChild data-testid="sheet-trigger">
          <button>Open Sheet</button>
        </SheetTrigger>
        <SheetContent data-testid="sheet-container" className={clx}>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>Sheet Description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );

    const trigger = screen.getByTestId("sheet-trigger");
    expect(trigger).toBeInTheDocument();

    user.click(trigger);

    const sheet = await screen.findByTestId("sheet-container");

    expect(sheet).toBeInTheDocument();
  });
});
