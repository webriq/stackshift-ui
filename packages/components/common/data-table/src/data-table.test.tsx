import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  test("Common: Data Table - test if renders with correct number of rows", ({ expect }) => {
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
      {
        name: "Jane Doe",
      },
    ];

    render(<DataTable data-testid="data-table-2" columns={columns} data={data} />);

    const table = screen.getByTestId("data-table-2");
    const rows = table.querySelectorAll("tr");

    expect(rows).toHaveLength(3);
  });

  test("Common: Data Table - test if renders with correct number of columns", ({ expect }) => {
    const columns: ColumnDef<{ name: string; email: string }>[] = [
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
    ];

    const data = [
      {
        name: "John Doe",
        email: "john@example.com",
      },
    ];

    render(<DataTable data-testid="data-table-3" columns={columns} data={data} />);

    const table = screen.getByTestId("data-table-3");
    const headers = table.querySelectorAll("th");

    expect(headers).toHaveLength(2);
  });
});
