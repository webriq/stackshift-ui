import { Demo } from "@webriq-test/components";
import { LandingPage } from "@webriq-test/components/dist/server";

/** Remix App */
export default function Index(): JSX.Element {
  return (
    <LandingPage title="Remix Example">
      <Demo />
    </LandingPage>
  );
}
