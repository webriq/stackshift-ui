// tailwind config is required for editor support
import sharedTWConfig from "@webriq-test/tailwind-config/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./stories/**/*.{js,ts,jsx,tsx,mdx}"],
  presets: [sharedTWConfig],
};

export default config;
