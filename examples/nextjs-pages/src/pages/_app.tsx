import "@/styles/globals.css";
import { ComponentProvider } from "@repo/shared";
import type { AppProps } from "next/app";

import Button from "@/components/Button";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ComponentProvider components={{ Button }}>
      <Component {...pageProps} />
    </ComponentProvider>
  );
}
