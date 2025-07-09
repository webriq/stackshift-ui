import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { ColumnDef, DataTable } from "./data-table";

// TODO: add more tests
describe.concurrent("data-table", () => {
  afterEach(cleanup);

  test("Dummy test - test if renders without errors", ({ expect }) => {
    const columns: ColumnDef<{ name: string }>[] = [
      {
        accessorKey: "name",
        header: "Name",
      },
    ];

    const data = [
      {
        name: "John Doe",
      },
    ];

    render(<DataTable data-testid="data-table" columns={columns} data={data} />);
    expect(screen.getByText("John Doe")).not.toBeNull();
  });
});
