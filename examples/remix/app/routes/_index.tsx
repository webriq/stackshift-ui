import { Demo } from "@stackshift-ui/components";
import { LandingPage } from "@stackshift-ui/components/dist/server";

/** Remix App */
export default function Index(): JSX.Element {
  return (
    <LandingPage title="Remix Example">
      <Demo />
    </LandingPage>
  );
}
