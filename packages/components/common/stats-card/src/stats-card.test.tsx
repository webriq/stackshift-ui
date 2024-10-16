import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { StatsCard } from "./stats-card";

const ARGS = {
  LABEL: "Total Revenue",
  VALUE: "$33,261",
  ICON: "https://cdn.sanity.io/images/9itgab5x/staging/97b6696849c90facc200537fd780b03d373e5212-980x830.png",
};

describe.concurrent("stats-card", () => {
  afterEach(cleanup);

  test("Common: Stats Card - test if renders without errors", ({ expect }) => {
    const clx = "statscard-class";
    render(<StatsCard className={clx} icon={ARGS.ICON} value={ARGS.VALUE} label={ARGS.LABEL} />);
    expect(screen.getByTestId("div").classList).toContain(clx);
  });
});
