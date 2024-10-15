// tailwind config is required for editor support

//import sharedConfig from "@webriq-test/react/tailwind-config";
import sharedTWConfig from "../nextjs-pages/tailwind.config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./stories/**/*.stories.tsx"],
  presets: [sharedTWConfig],
};

export default config;
