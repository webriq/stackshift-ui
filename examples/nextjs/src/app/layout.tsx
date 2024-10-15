import { GlobalLoader, Header } from "@webriq-test/components";
import { Layout } from "@webriq-test/components/dist/server";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Core } from "nextjs-darkmode";
import { MouseTrail } from "react-mouse-trails";
import "react18-loaders/dist/index.css";
import { Particles } from "webgl-generative-particles/react";
import "./styles.css";

const inter = Inter({ subsets: ["latin"] });

/** Root layout. */
export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Core />
        <Layout>
          <Header linkComponent={Link} />
          {children}
        </Layout>
        <GlobalLoader />
        <MouseTrail />
        <Particles fullScreenOverlay />
      </body>
    </html>
  );
}
