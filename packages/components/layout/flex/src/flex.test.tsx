import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Flex } from "./flex";

describe.concurrent("flex", () => {
	afterEach(cleanup);

	test("Dummy test - test if renders without errors", ({ expect }) => {
		const clx = "my-class";
		render(<Flex className={clx} />);
		expect(screen.getByTestId("{ kebabCase name }}").classList).toContain(clx);
	});
});
