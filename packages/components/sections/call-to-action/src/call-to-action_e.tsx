import { Card } from "@stackshift-ui/card";
import { Container } from "@stackshift-ui/container";
import { Section } from "@stackshift-ui/section";
import { SigninSignup_A } from "@stackshift-ui/signin-signup";

import { CTAProps } from ".";

export default function CallToAction_E({ form, formLinks, signInLink }: CTAProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={448}>
        <Card>
          {form ? (
            <SigninSignup_A form={form} formLinks={formLinks} signInLink={signInLink} />
          ) : null}
        </Card>
      </Container>
    </Section>
  );
}

export { CallToAction_E };
