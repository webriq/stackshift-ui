import sharedTWConfig from "@stackshift-ui/tailwind-config/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.css",
    "../../packages/components/common/**/src/*.{ts,tsx}",
    "../../packages/components/layout/**/src/*.{ts,tsx}",
    "../../packages/components/sections/**/src/*.{ts,tsx}",

    // Exclude node_modules from being matched
    "!../../packages/components/**/node_modules/**/*",
  ],
  presets: [sharedTWConfig],
};

export default config;
