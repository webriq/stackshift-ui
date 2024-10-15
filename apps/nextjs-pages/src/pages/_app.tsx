import { StackShiftUIProvider } from "@webriq-test/system";
import "@webriq-test/tailwind-config/styles.css";
import type { AppProps } from "next/app";
import "vanilla-cookieconsent/dist/cookieconsent.css";

import { Button, Image, Link } from "@/components/index";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StackShiftUIProvider components={{ Button, Link, Image }}>
      <Component {...pageProps} />
    </StackShiftUIProvider>
  );
}
