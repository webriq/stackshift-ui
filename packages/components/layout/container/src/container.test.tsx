import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Container } from "./container";

describe.concurrent("container", () => {
	afterEach(cleanup);

	test("Dummy test - test if renders without errors", ({ expect }) => {
		const clx = "my-class";
		render(<Container className={clx} />);
		expect(screen.getByTestId("{ kebabCase name }}").classList).toContain(clx);
	});
});
