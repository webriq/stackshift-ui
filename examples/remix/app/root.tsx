import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { Header } from "@stackshift-ui/components";
import { Layout } from "@stackshift-ui/components/dist/server";
import { Analytics } from "@vercel/analytics/react";
import { Core } from "nextjs-darkmode";
import styles from "./styles.css";

/** Page metadata */
export const meta: MetaFunction = () => [
  {
    charset: "utf-8",
    title: `Blog | React18 Loaders`,
    viewport: "width=device-width,initial-scale=1",
  },
];

/** Add links to head */
export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

/** Remix app root */
export default function App(): JSX.Element {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Core t="background .5s" />
          <Header />
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Analytics />
      </body>
    </html>
  );
}
