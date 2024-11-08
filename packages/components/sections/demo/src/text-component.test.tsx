import "@testing-library/jest-dom";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, test } from "vitest";
import { TextComponent } from "./text-component";

const variants = {
  title: "Trusted by brands all over the world",
  firstColumn: [
    {
      _key: "unique-key",
      style: "normal",
      _type: "block",
      markDefs: [],
      children: [
        {
          _type: "span",
          text: "Etiam facilisis mauris leo, eu aliquet est iaculis eu. Mauris vitae pellentesque augue, quis efficitur elit. Suspendisse potenti. Vivamus et sem eget ligula bibendum pulvinar. Nullam libero velit, efficitur ut dui eget, tempus ultricies felis. Pellentesque ut lorem id velit aliquam pharetra id placerat purus. Aliquam erat mauris, cursus eget cursus in, rutrum et nisi. Phasellus consequat vehicula metus non sagittis. Sed quis ipsum non velit tempus consequat sit amet eget augue. Donec feugiat ultricies ultrices",
        },
      ],
    },
  ],
};

describe("text-component", () => {
  afterEach(cleanup);

  test("variant_a: renders without errors", async ({ expect }) => {
    // @todo: We should consider adding this static data into its own repository so we can reuse it across different projects
    render(
      <TextComponent
        data={{
          variant: "variant_a",
          variants,
        }}
      />,
    );
    await waitFor(() => screen.findByText("Trusted by brands all over the world"));
    screen.debug();

    expect(screen.getByText("Trusted by brands all over the world")).toBeInTheDocument();
    expect(
      screen.getByText(/Etiam facilisis mauris leo, eu aliquet est iaculis eu/),
    ).toBeInTheDocument();
  });

  test("variant_b: renders without errors", async ({ expect }) => {
    // @todo: We should consider adding this static data into its own repository so we can reuse it across different projects
    render(
      <TextComponent
        data={{
          variant: "variant_b",
          variants,
        }}
      />,
    );
    await waitFor(() => screen.findByText("Trusted by brands all over the world"));
    screen.debug();

    expect(screen.getByText("Trusted by brands all over the world")).toBeInTheDocument();
    expect(
      screen.getByText(/Etiam facilisis mauris leo, eu aliquet est iaculis eu/),
    ).toBeInTheDocument();
  });
});
