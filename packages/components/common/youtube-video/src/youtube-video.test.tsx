import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { YoutubeVideo } from "./youtube-video";

describe.concurrent("youtube-video", () => {
  afterEach(cleanup);

  test("Common: YouTube Video - test if renders without errors", ({ expect }) => {
    const clx = "aspect-video";
    render(<YoutubeVideo className={clx} />);
    expect(screen.getByTestId("div").classList).toContain(clx);
  });
});
