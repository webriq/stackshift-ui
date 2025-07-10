import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach } from "node:test";
import React from "react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

describe("avatar", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  beforeEach(() => {
    vi.mock("./avatar", async () => {
      const actual = await vi.importActual("./avatar");

      return {
        ...actual,
        AvatarImage: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
          return <img {...props} />;
        },
      };
    });
  });

  test("Common: Avatar - test if renders image when src is provided", () => {
    const loadMock = vi.fn();

    const { unmount } = render(
      <Avatar data-testid="avatar" className="avatar-class">
        <AvatarImage
          data-testid="avatar-image"
          onLoad={loadMock}
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>,
    );

    const image = screen.getByRole("img");
    fireEvent.load(image);
    expect(loadMock).toHaveBeenCalled();

    const avatar = screen.getByTestId("avatar");
    expect(avatar).toHaveClass("avatar-class");
    expect(image).toHaveAttribute("src", "https://github.com/shadcn.png");
    expect(image).toHaveAttribute("alt", "@shadcn");
    unmount();
  });

  test("Common: Avatar - test if renders fallback when image fails to load", () => {
    const loadMock = vi.fn();
    const errorMock = vi.fn();

    const { unmount } = render(
      <Avatar data-testid="avatar" className="avatar-class">
        <AvatarImage
          data-testid="avatar-image"
          onLoad={loadMock}
          onError={errorMock}
          src="https://github.com/shadcn.png"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>,
    );

    const image = screen.getByRole("img");
    fireEvent.error(image);
    expect(errorMock).toHaveBeenCalled();

    const fallback = screen.getByText("CN");
    expect(fallback).toBeInTheDocument();
    unmount();
  });
});
