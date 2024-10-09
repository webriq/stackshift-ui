import "@/styles/globals.css";
import { ComponentProvider } from "@repo/shared";
import type { AppProps } from "next/app";

import { Button, Image, Link } from "@/components/index";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ComponentProvider components={{ Button, Link, Image }}>
      <Component {...pageProps} />
    </ComponentProvider>
  );
}
