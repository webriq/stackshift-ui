// tailwind config is required for editor support

import sharedTWConfig from "@webriq-test/tailwind-config/tailwind";
import path from "path";
import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    path.join(path.dirname(require.resolve("@webriq-test/react/")), "**/*.{js,ts,jsx,tsx,mdx}"),
  ],
  presets: [sharedTWConfig],
};

export default config;
