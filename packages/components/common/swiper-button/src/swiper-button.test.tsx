import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { SwiperButton } from "./swiper-button";

describe.concurrent("swiper-button", () => {
  afterEach(cleanup);

  test("Common: Swiper Button - test if renders without errors", ({ expect }) => {
    const clx = "swiperbtn-class";
    render(<SwiperButton className={clx} />);
    expect(screen.getByRole("button").classList).toContain(clx);
  });
});
