import { SigninSignup_A } from "@webriq-test/signin-signup";
import { Section } from "@webriq-test/section";
import { Container } from "@webriq-test/container";
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
