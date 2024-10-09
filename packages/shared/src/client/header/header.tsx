import { useState } from "react";
import { Logo, LogoProps } from "../../server";
import { Button } from "../button";
import { DrawerButton } from "../drawer-button";
import styles from "./header.module.scss";
import ThemeSwitch from "./theme-switch";

/**
 * # Header
 * Header and navigation drawer - creating as client component
 *
 * This could be a server component with leaf nodes being client components.
 * However, we want to reuse as much code as possible across different examples and also optimize for the best use of bleading edge features.
 */
export function Header(logoProps: LogoProps) {
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <p>This is the header component</p>
      <div>
        <DrawerButton {...{ open, setOpen }} />
        <Logo {...logoProps} />
        <nav className={open ? styles.open : ""}>
          <a
            href="https://stackshift-ui.webriq.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.author}>
            By WebriQ
          </a>
          <ThemeSwitch />
        </nav>
      </div>

      <Button>I am a button from library</Button>
    </header>
  );
}
