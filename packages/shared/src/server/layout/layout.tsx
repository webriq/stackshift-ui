import { ForkMe } from "@mayank1513/fork-me/server";
import config from "@repo/scripts/rebrand.config.json";
import { ReactNode } from "react";
import styles from "./layout.module.scss";

const { owner, repo } = config;
interface LayoutProps {
  children?: ReactNode;
}

/**
 * # Layout
 * The default layout shared by all examples.
 */
export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      {children}
      <ForkMe
        gitHubUrl={`https://github.com/${owner}/${repo}`}
        bgColor="var(--text-color)"
        textColor="var(--bg-color)"
      />
    </div>
  );
}
