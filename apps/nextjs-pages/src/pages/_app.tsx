import "@/styles/globals.css";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import { StackShiftUIProvider } from "@stackshift-ui/system";
import type { AppProps } from "next/app";

import { Button, Image, Link } from "@/components/index";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StackShiftUIProvider components={{ Button, Link, Image }}>
      <Component {...pageProps} />
    </StackShiftUIProvider>
  );
}
