import React from "react";
import { Text } from "@stackshift-ui/text";
import { Heading } from "@stackshift-ui/heading";
import { Button } from "@stackshift-ui/button";
import { Image } from "@stackshift-ui/image";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import { Container } from "@stackshift-ui/container";
import { LabeledRoute, Logo } from "./types";
import { CTAProps } from ".";
import { logoLink } from "./helper";

export default function CallToAction_A({ logo, title, plainText, button }: CTAProps) {
  return (
    <Section className="py-20 bg-background">
      <Container className="text-center" maxWidth={580}>
        <LogoSection logo={logo} />
        <HeadingAndText title={title} text={plainText} />
        <CTAButton button={button} />
      </Container>
    </Section>
  );
}

function LogoSection({ logo }: { logo?: Logo }) {
  if (!logo?.image) return null;

  return (
    <Link
      aria-label={logoLink(logo) === "/" ? "Go to home page" : `Go to ${logoLink(logo)}`}
      className="inline-block mb-6 text-3xl font-bold leading-none"
      href={logoLink(logo)}
      target={logo?.linkTarget}
      rel={logo?.linkTarget === "_blank" ? "noopener noreferrer" : ""}>
      <Image
        src={logo?.image}
        alt={logo?.alt ?? "callToAction-logo"}
        width={64}
        height={64}
        className="inline-block mb-6 text-3xl font-bold leading-none"
      />
    </Link>
  );
}

function HeadingAndText({ title, text }: { title?: string; text?: string }) {
  return (
    <React.Fragment>
      {title ? (
        <Heading fontSize="3xl" className="mb-2">
          {title}
        </Heading>
      ) : null}
      {text ? <Text className="mb-6">{text}</Text> : null}
    </React.Fragment>
  );
}

function CTAButton({ button }: { button?: LabeledRoute }) {
  if (!button?.label) return null;

  return (
    <Button as="link" link={button} ariaLabel={button?.label}>
      {button?.label}
    </Button>
  );
}

export { CallToAction_A };
