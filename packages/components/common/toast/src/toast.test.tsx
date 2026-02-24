import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test, vi } from "vitest";
import { toast, Toaster } from "./toast";

// Object.defineProperty(window, "matchMedia", {
//   writable: true,
//   value: query => ({
//     matches: false,
//     media: query,
//     onchange: null,
//     addListener: () => {},
//     removeListener: () => {},
//     addEventListener: () => {},
//     removeEventListener: () => {},
//     dispatchEvent: () => false,
//   }),
// });

window.matchMedia = vi.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));

// TODO: Proper test for Toaster component
describe.concurrent("toast", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
    vi.resetAllMocks();
  });

  test("Dummy test - test if renders without errors", ({ expect }) => {
    const clx = "my-class";
    const { unmount } = render(<Toaster data-testid="toast" className={clx} />);
    expect(screen.getByLabelText("Notifications alt+T")).toBeInTheDocument();
    unmount();
  });
});
