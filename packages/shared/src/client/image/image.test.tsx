import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { Image } from "./image";

describe.concurrent("image", () => {
	afterEach(cleanup);

	test("Dummy test - test if renders without errors", ({ expect }) => {
		const clx = "my-class";
		render(<Image className={clx} />);
		expect(screen.getByTestId("image").classList).toContain(clx);
	});
});
