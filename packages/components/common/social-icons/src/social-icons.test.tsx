import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { SocialIcons } from "./social-icons";

describe.concurrent("social-icons", () => {
  afterEach(cleanup);

  test.skip("Common: Social Icons - test if renders without errors", ({ expect }) => {
    const clx = "socialicons-class";
    render(<SocialIcons className={clx} />);
    expect(screen.getByRole("socialicons").classList).toContain(clx);
  });
});
