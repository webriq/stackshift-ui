import { SigninSignup_A } from "@stackshift-ui/signin-signup";
import { Section } from "@stackshift-ui/section";
import { Container } from "@stackshift-ui/container";
import { CTAProps } from ".";

export default function CallToAction_E({ form, formLinks, signInLink }: CTAProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={448}>
        {form ? <SigninSignup_A form={form} formLinks={formLinks} signInLink={signInLink} /> : null}
      </Container>
    </Section>
  );
}

export { CallToAction_E };
