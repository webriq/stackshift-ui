import { Button } from "@stackshift-ui/button";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import { SigninSignup_A } from "@stackshift-ui/signin-signup";
import { buildSanityLink } from "@stackshift-ui/system";
import { Text } from "@stackshift-ui/text";
import React from "react";
import { ButtonProps, HeaderProps } from ".";

export default function Header_E({
  title,
  description,
  primaryButton,
  secondaryButton,
  formLinks,
  form,
}: HeaderProps) {
  return (
    <Section className="relative py-20 bg-background">
      <Container maxWidth={1280}>
        <Flex align="center" className="flex-col lg:flex-row" gap={4}>
          <Flex align="center" direction="col" className="w-full basis-1/2">
            <div className="max-w-md mx-auto text-center lg:text-left">
              <TitleAndDescription title={title} description={description} />
              <Buttons primaryButton={primaryButton} secondaryButton={secondaryButton} />
            </div>
          </Flex>
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <div className="max-w-sm mx-auto text-center">
              <SigninSignup_A form={form} formLinks={formLinks} />
            </div>
          </div>
        </Flex>
      </Container>
    </Section>
  );
}

function TitleAndDescription({ title, description }: { title?: string; description?: string }) {
  return (
    <React.Fragment>
      {title && (
        <Heading fontSize="3xl" className="mb-3">
          {title}
        </Heading>
      )}
      {description && (
        <Text muted className="my-6">
          {description}
        </Text>
      )}
    </React.Fragment>
  );
}

function Buttons({
  primaryButton,
  secondaryButton,
}: {
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
}) {
  const primaryButtonLink = buildSanityLink({
    type: "linkInternal",
    internalLink: primaryButton?.link?.target === "_self" ? primaryButton?.link?.route : "",
    externalLink: primaryButton?.link?.target != "_self" ? primaryButton?.link?.route : "",
  });

  const secondaryButtonLink = buildSanityLink({
    type: "linkInternal",
    internalLink: secondaryButton?.link?.target === "_self" ? secondaryButton?.link?.route : "",
    externalLink: secondaryButton?.link?.target != "_self" ? secondaryButton?.link?.route : "",
  });

  return (
    <Flex align="center" gap={2} className="flex-col md:flex-row justify-center lg:justify-start">
      {primaryButton?.label && (
        <Button variant="link" aria-label={primaryButton?.label} asChild>
          <Link
            href={primaryButtonLink.href}
            target={primaryButtonLink.target}
            rel={primaryButtonLink.rel}>
            {primaryButton?.label}
          </Link>
        </Button>
      )}
      {secondaryButton?.label && (
        <Button
          variant="link"
          className="bg-secondary hover:bg-secondary/50 inline-block rounded-global font-bold transition duration-200 px-6 py-3"
          aria-label={secondaryButton?.label}
          asChild>
          <Link
            href={secondaryButtonLink.href}
            target={secondaryButtonLink.target}
            rel={secondaryButtonLink.rel}>
            {secondaryButton?.label}
          </Link>
        </Button>
      )}
    </Flex>
  );
}

export { Header_E };
