import "@/styles/globals.css";
import { StackShiftUIProvider, Toaster } from "@stackshift-ui/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { Image, Link } from "@/components/index";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isToastPage = router.pathname === "/components/toast";

  return (
    <StackShiftUIProvider components={{ Link, Image }}>
      <Component {...pageProps} />
      {/* {!isToastPage && <Toaster richColors closeButton />} */}
    </StackShiftUIProvider>
  );
}
