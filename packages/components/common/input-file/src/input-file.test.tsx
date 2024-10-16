import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { InputFile } from "./input-file";

describe.concurrent("input-file", () => {
  afterEach(cleanup);

  test("Common: Input File - test if renders without errors", ({ expect }) => {
    const clx = "inputfile-class";
    render(
      <InputFile className={clx} name="stackshift-inputfile" ariaLabel="stackshift input file" />,
    );
    expect(screen.getByTestId("inputfile").classList).toBeDefined();
  });
});
