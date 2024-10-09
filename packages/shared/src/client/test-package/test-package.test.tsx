import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { TestPackage } from "./test-package";

describe.concurrent("test-package", () => {
	afterEach(cleanup);

	test("Dummy test - test if renders without errors", ({ expect }) => {
		const clx = "my-class";
		render(<TestPackage className={clx} />);
		expect(screen.getByTestId("test-package").classList).toContain(clx);
	});
});
