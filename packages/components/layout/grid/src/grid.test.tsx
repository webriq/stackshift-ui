import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Grid } from "./grid";

describe.concurrent("grid", () => {
	afterEach(cleanup);

	test("Dummy test - test if renders without errors", ({ expect }) => {
		const clx = "my-class";
		render(<Grid className={clx} />);
		expect(screen.getByTestId("{ kebabCase name }}").classList).toContain(clx);
	});
});
