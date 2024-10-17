import "@/styles/globals.css";
import { StackShiftUIProvider } from "@webriq-test/react";
import type { AppProps } from "next/app";

import { Button, Image, Link } from "@/components/index";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StackShiftUIProvider components={{ Button, Link, Image }}>
      <Component {...pageProps} />
    </StackShiftUIProvider>
  );
}
