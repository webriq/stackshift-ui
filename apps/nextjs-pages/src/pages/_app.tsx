import "@/styles/globals.css";
import { StackShiftUIProvider, Toaster } from "@stackshift-ui/react";
import type { AppProps } from "next/app";

import { Image, Link } from "@/components/index";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StackShiftUIProvider components={{ Link, Image }}>
      <Component {...pageProps} />
      <Toaster richColors closeButton />
    </StackShiftUIProvider>
  );
}
