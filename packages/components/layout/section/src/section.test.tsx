import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Section } from "./section";

describe.concurrent("section", () => {
	afterEach(cleanup);

	test("Dummy test - test if renders without errors", ({ expect }) => {
		const clx = "my-class";
		render(<Section className={clx} />);
		expect(screen.getByTestId("{ kebabCase name }}").classList).toContain(clx);
	});
});
