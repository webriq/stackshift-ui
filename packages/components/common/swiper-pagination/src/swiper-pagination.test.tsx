import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { SwiperPagination } from "./swiper-pagination";

describe.concurrent("swiper-pagination", () => {
  afterEach(cleanup);

  test("Common: Swiper Pagination - test if renders without errors", ({ expect }) => {
    const clx = "swiperpgn-class";
    render(<SwiperPagination data-testid="swiper-pagination" className={clx} />);
    expect(screen.getByTestId("swiper-pagination").classList).toContain(clx);
  });
});
