import { Demo } from "@webriq-test/components";
import { LandingPage } from "@webriq-test/components/dist/server";
import MyButton from "./button";

export const metadata = {
  title: "Stackshift UI",
};

/** next.js landing page */
export default function Page(): JSX.Element {
  return (
    <LandingPage title="Next.js Example">
      <Demo />
      <MyButton />
    </LandingPage>
  );
}
