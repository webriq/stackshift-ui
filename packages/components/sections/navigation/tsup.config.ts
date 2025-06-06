import { rdiPlugin } from "esbuild-plugin-rdi";
import react18Plugin from "esbuild-plugin-react18";
import cssPlugin from "esbuild-plugin-react18-css";
import { defineConfig, type Options } from "tsup";

export default defineConfig(
  (options: Options) =>
    ({
      format: ["esm"],
      target: "es2019",
      entry: ["./src/**"],
      sourcemap: false,
      clean: !options.watch,
      bundle: true,
      minify: !options.watch,
      esbuildPlugins: [
        react18Plugin(),
        cssPlugin({ generateScopedName: "[folder]__[local]" }),
        rdiPlugin(),
      ],
      external: ["react"],
      ...options,
    }) as Options,
);
