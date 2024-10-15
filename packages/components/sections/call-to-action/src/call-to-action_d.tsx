import React from "react";
import { CTAProps } from ".";
import { SigninSignup_A } from "@webriq-test/signin-signup";
import { Button } from "@webriq-test/button";
import { Link } from "@webriq-test/link";
import { Image } from "@webriq-test/image";
import { Heading } from "@webriq-test/heading";
import { Text } from "@webriq-test/text";
import { Section } from "@webriq-test/section";
import { Container } from "@webriq-test/container";
import { Flex } from "@webriq-test/flex";
import { Form as iForm, LabeledRoute, LabeledRouteWithKey, Logo } from "./types";
import { logoLink } from "./helper";

export default function CallToAction_D({
  logo,
  title,
  plainText,
  button,
  form,
  formLinks,
  signInLink,
}: CTAProps) {
  return (
    <Section className="px-10 py-20 bg-background">
      <Container maxWidth={1280}>
        <Flex align="center" gap={4} direction="col" className="lg:justify-between lg:flex-row">
          <div className="mb-10 lg:mb-0 text-center lg:text-left basis-1/2">
            <LogoSection logo={logo} />
            <TitleAndText title={title} text={plainText} />
            <CTABtton button={button} />
          </div>
          <FormFields form={form} formLinks={formLinks} signInLink={signInLink} />
        </Flex>
      </Container>
    </Section>
  );
}

function LogoSection({ logo }: { logo?: Logo }) {
  if (!logo?.image) return null;

  return (
    <Link
      aria-label={logoLink(logo) === "/" ? "Go to home page" : `Go to ${logoLink(logo)}`}
      className="inline-block mb-10 text-3xl font-bold leading-none"
      href={logoLink(logo)}
      target={logo?.linkTarget}
      rel={logo?.linkTarget === "_blank" ? "noopener noreferrer" : ""}>
      <Image
        src={logo?.image}
        alt={logo?.alt ?? "callToAction-logo"}
        width={56}
        height={56}
        className="inline-block mb-10 text-3xl font-bold leading-none"
      />
    </Link>
  );
}

function TitleAndText({ title, text }: { title?: string; text?: string }) {
  return (
    <React.Fragment>
      {title ? (
        <Heading fontSize="3xl" className="mb-4">
          {title}
        </Heading>
      ) : null}
      {text ? (
        <Text className="mb-8 leading-loose" muted>
          {text}
        </Text>
      ) : null}
    </React.Fragment>
  );
}

function CTABtton({ button }: { button?: LabeledRoute }) {
  if (!button?.label) return null;

  return (
    <Button as="link" link={button} ariaLabel={button?.label}>
      {button?.label}
    </Button>
  );
}

function FormFields({
  form,
  formLinks,
  signInLink,
}: {
  form?: iForm;
  formLinks?: LabeledRouteWithKey[];
  signInLink?: LabeledRoute;
}) {
  return (
    <div className="mx-auto lg:mx-0 max-w-sm">
      {form?.fields ? (
        <SigninSignup_A form={form} formLinks={formLinks} signInLink={signInLink} />
      ) : null}
    </div>
  );
}

export { CallToAction_D };
