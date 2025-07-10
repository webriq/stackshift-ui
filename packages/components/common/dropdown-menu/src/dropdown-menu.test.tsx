import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as React from "react";
import { afterEach, beforeEach, describe, test, vi } from "vitest";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./dropdown-menu";

describe("dropdown-menu", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(cleanup);

  test("Common: DropdownMenu - test if renders with proper structure and data attributes", ({
    expect,
  }) => {
    const customClass = "custom-dropdown";

    const { unmount } = render(
      <DropdownMenu>
        <DropdownMenuTrigger data-testid="dropdown-trigger" className={customClass}>
          Open Menu
        </DropdownMenuTrigger>
        <DropdownMenuContent data-testid="dropdown-content">
          <DropdownMenuItem data-testid="dropdown-item">Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const trigger = screen.getByTestId("dropdown-trigger");

    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveAttribute("data-slot", "dropdown-menu-trigger");
    expect(trigger.classList).toContain(customClass);
    unmount();
  });

  test("Common: DropdownMenu - test if trigger interactions and content display work correctly", async ({
    expect,
  }) => {
    const user = userEvent.setup();

    const { unmount } = render(
      <DropdownMenu>
        <DropdownMenuTrigger data-testid="trigger-test">Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent data-testid="content-test" sideOffset={8}>
          <DropdownMenuItem data-testid="menu-item-1">First Item</DropdownMenuItem>
          <DropdownMenuItem data-testid="menu-item-2">Second Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const trigger = screen.getByTestId("trigger-test");

    expect(screen.queryByTestId("content-test")).not.toBeInTheDocument();

    await user.click(trigger);

    // Wait for content to appear
    const content = await screen.findByTestId("content-test");
    expect(content).toBeInTheDocument();
    expect(content).toHaveAttribute("data-slot", "dropdown-menu-content");

    expect(screen.getByTestId("menu-item-1")).toBeInTheDocument();
    expect(screen.getByTestId("menu-item-2")).toBeInTheDocument();
    unmount();
  });

  test("Common: DropdownMenu - test if menu items with variants and states work properly", async ({
    expect,
  }) => {
    const handleClick = vi.fn();

    const { unmount } = render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent data-testid="variants-content">
          <DropdownMenuItem data-testid="default-item" onSelect={handleClick}>
            Default Item
          </DropdownMenuItem>
          <DropdownMenuItem
            data-testid="destructive-item"
            variant="destructive"
            onSelect={handleClick}>
            Delete Item
          </DropdownMenuItem>
          <DropdownMenuItem data-testid="inset-item" inset>
            Inset Item
          </DropdownMenuItem>
          <DropdownMenuItem data-testid="disabled-item" disabled>
            Disabled Item
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const content = await screen.findByTestId("variants-content");
    expect(content).toBeInTheDocument();

    const defaultItem = screen.getByTestId("default-item");
    const destructiveItem = screen.getByTestId("destructive-item");
    const insetItem = screen.getByTestId("inset-item");
    const disabledItem = screen.getByTestId("disabled-item");

    // Check data attributes and styling
    expect(defaultItem).toHaveAttribute("data-slot", "dropdown-menu-item");
    expect(defaultItem).toHaveAttribute("data-variant", "default");
    expect(destructiveItem).toHaveAttribute("data-variant", "destructive");
    expect(insetItem).toHaveAttribute("data-inset", "true");
    expect(disabledItem).toHaveAttribute("data-disabled");
    unmount();
  });

  test("Common: DropdownMenu - test if checkbox and radio item functionality works correctly", async ({
    expect,
  }) => {
    function TestComponent() {
      const [checkboxChecked, setCheckboxChecked] = React.useState(false);
      const [radioValue, setRadioValue] = React.useState("option1");

      return (
        <DropdownMenu defaultOpen>
          <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
          <DropdownMenuContent data-testid="checkbox-radio-content">
            <DropdownMenuCheckboxItem
              data-testid="checkbox-item"
              checked={checkboxChecked}
              onCheckedChange={setCheckboxChecked}>
              Checkbox Item
            </DropdownMenuCheckboxItem>
            <DropdownMenuRadioGroup value={radioValue} onValueChange={setRadioValue}>
              <DropdownMenuRadioItem data-testid="radio-item-1" value="option1">
                Radio Option 1
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem data-testid="radio-item-2" value="option2">
                Radio Option 2
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    const { unmount } = render(<TestComponent />);

    const content = await screen.findByTestId("checkbox-radio-content");
    expect(content).toBeInTheDocument();

    const checkboxItem = screen.getByTestId("checkbox-item");
    const radioItem1 = screen.getByTestId("radio-item-1");
    const radioItem2 = screen.getByTestId("radio-item-2");

    expect(checkboxItem).toHaveAttribute("data-slot", "dropdown-menu-checkbox-item");
    expect(radioItem1).toHaveAttribute("data-slot", "dropdown-menu-radio-item");
    expect(radioItem2).toHaveAttribute("data-slot", "dropdown-menu-radio-item");

    expect(checkboxItem).toHaveAttribute("data-state", "unchecked");
    expect(radioItem1).toHaveAttribute("data-state", "checked");
    expect(radioItem2).toHaveAttribute("data-state", "unchecked");
    unmount();
  });

  test("Common: DropdownMenu - test if keyboard navigation and accessibility work properly", async ({
    expect,
  }) => {
    const user = userEvent.setup();

    const { unmount } = render(
      <DropdownMenu>
        <DropdownMenuTrigger data-testid="keyboard-trigger">Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent data-testid="keyboard-content">
          <DropdownMenuItem data-testid="item-1">First Item</DropdownMenuItem>
          <DropdownMenuItem data-testid="item-2">Second Item</DropdownMenuItem>
          <DropdownMenuItem data-testid="item-3">Third Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const trigger = screen.getByTestId("keyboard-trigger");

    await user.click(trigger);

    const content = await screen.findByTestId("keyboard-content");
    expect(content).toBeInTheDocument();
    expect(content).toHaveAttribute("role", "menu");
    expect(content).toHaveAttribute("data-slot", "dropdown-menu-content");

    expect(screen.getByTestId("item-1")).toBeInTheDocument();
    expect(screen.getByTestId("item-2")).toBeInTheDocument();
    expect(screen.getByTestId("item-3")).toBeInTheDocument();
    unmount();
  });

  test("Common: DropdownMenu - test if sub-menu functionality works correctly", async ({
    expect,
  }) => {
    const { unmount } = render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent data-testid="main-content">
          <DropdownMenuItem>Regular Item</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger data-testid="sub-trigger" inset>
              More Options
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent data-testid="sub-content">
              <DropdownMenuItem data-testid="sub-item-1">Sub Item 1</DropdownMenuItem>
              <DropdownMenuItem data-testid="sub-item-2">Sub Item 2</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const mainContent = await screen.findByTestId("main-content");
    expect(mainContent).toBeInTheDocument();

    const subTrigger = screen.getByTestId("sub-trigger");

    expect(subTrigger).toHaveAttribute("data-slot", "dropdown-menu-sub-trigger");
    expect(subTrigger).toHaveAttribute("data-inset", "true");

    expect(screen.queryByTestId("sub-content")).not.toBeInTheDocument();
    unmount();
  });

  test("Common: DropdownMenu - test if menu structure components render with proper styling", ({
    expect,
  }) => {
    const { unmount } = render(
      <DropdownMenu defaultOpen>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent data-testid="structure-content">
          <DropdownMenuLabel data-testid="menu-label" inset>
            Menu Section
          </DropdownMenuLabel>
          <DropdownMenuGroup data-testid="menu-group">
            <DropdownMenuItem>
              Item with shortcut
              <DropdownMenuShortcut data-testid="menu-shortcut">⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator data-testid="menu-separator" />
          <DropdownMenuItem>Another Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    const label = screen.getByTestId("menu-label");
    const group = screen.getByTestId("menu-group");
    const shortcut = screen.getByTestId("menu-shortcut");
    const separator = screen.getByTestId("menu-separator");

    expect(label).toHaveAttribute("data-slot", "dropdown-menu-label");
    expect(label).toHaveAttribute("data-inset", "true");
    expect(group).toHaveAttribute("data-slot", "dropdown-menu-group");
    expect(shortcut).toHaveAttribute("data-slot", "dropdown-menu-shortcut");
    expect(separator).toHaveAttribute("data-slot", "dropdown-menu-separator");

    expect(label).toHaveTextContent("Menu Section");
    expect(shortcut).toHaveTextContent("⌘K");
    unmount();
  });

  test("Common: DropdownMenu - test if portal and positioning behavior work correctly", async ({
    expect,
  }) => {
    const user = userEvent.setup();

    const { unmount } = render(
      <div data-testid="container">
        <DropdownMenu>
          <DropdownMenuTrigger data-testid="portal-trigger">Open Menu</DropdownMenuTrigger>
          <DropdownMenuContent data-testid="portal-content" sideOffset={12}>
            <DropdownMenuItem>Portal Item</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>,
    );

    const trigger = screen.getByTestId("portal-trigger");
    const container = screen.getByTestId("container");

    expect(screen.queryByTestId("portal-content")).not.toBeInTheDocument();

    await user.click(trigger);

    const content = await screen.findByTestId("portal-content");
    expect(content).toBeInTheDocument();

    expect(container).not.toContainElement(content);

    expect(content).toHaveAttribute("data-side");
    expect(content).toHaveAttribute("data-align");
    unmount();
  });
});
