import React from "react";
import { Text } from "@stackshift-ui/text";
import { Button } from "@stackshift-ui/button";
import { Heading } from "@stackshift-ui/heading";
import { Section } from "@stackshift-ui/section";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { SigninSignup_A } from "@stackshift-ui/signin-signup";
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
          <div className="w-full lg:w-1/2">
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
  return (
    <Flex align="center" gap={2} className="flex-col md:flex-row justify-center lg:justify-start">
      {primaryButton?.label && (
        <Button as="link" link={primaryButton} ariaLabel={primaryButton?.label}>
          {primaryButton?.label}
        </Button>
      )}
      {secondaryButton?.label && (
        <Button
          as="link"
          link={secondaryButton}
          className="text-black bg-white hover:bg-gray-50 inline-block rounded-l-xl rounded-t-xl font-bold transition duration-200 px-6 py-3"
          ariaLabel={secondaryButton?.label}>
          {secondaryButton?.label}
        </Button>
      )}
    </Flex>
  );
}

export { Header_E };