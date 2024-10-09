import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Link } from "./link";

describe.concurrent("link", () => {
	afterEach(cleanup);

	test("Dummy test - test if renders without errors", ({ expect }) => {
		const clx = "my-class";
		render(<Link className={clx} />);
		expect(screen.getByTestId("link").classList).toContain(clx);
	});
});
