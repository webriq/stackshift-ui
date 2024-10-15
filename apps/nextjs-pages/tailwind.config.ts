import sharedTWConfig from "@webriq-test/tailwind-config/tailwind";
import path from "path";
import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "./src/pages/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.{js,ts,jsx,tsx,mdx}",
    path.join(path.dirname(require.resolve("@webriq-test/react/")), "**/*.{js,ts,jsx,tsx,mdx}"),
  ],
  presets: [sharedTWConfig],
};

export default config;
