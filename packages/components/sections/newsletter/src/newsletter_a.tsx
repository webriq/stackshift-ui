import { Button } from "@stackshift-ui/button";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Form } from "@stackshift-ui/form";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Input } from "@stackshift-ui/input";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import React from "react";

import { NewsletterProps } from ".";
import { getInputType, logoLink, thankYouPageLink } from "./helper";
import { Form as FormFields, Logo } from "./types";

export default function Newsletter_A({
  logo,
  title,
  description,
  form,
}: NewsletterProps): React.JSX.Element {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Container maxWidth={576} className="text-center">
          <LogoSection logo={logo} />
          <TitleAndDescriptionText title={title} description={description} />
          <NewsletterForm
            id={form?.id ?? undefined}
            fields={form?.fields}
            buttonLabel={form?.buttonLabel}
            thankYouPage={form?.thankYouPage}
          />
        </Container>
      </Container>
    </Section>
  );
}

function LogoSection({ logo }: { logo?: Logo | null }) {
  if (!logo) return null;

  return (
    <Link
      aria-label={logoLink(logo) === "/" ? "Go to home page" : `Go to ${logoLink(logo)}`}
      className="inline-block mb-6 text-3xl font-bold leading-none"
      href={logoLink(logo)}
      target={logo?.linkTarget}
      rel={logo?.linkTarget === "_blank" ? "noopener noreferrer" : ""}>
      <Image
        src={logo?.image}
        alt={logo.alt ?? "newsletter-logo"}
        width={48}
        height={48}
        className="inline-block mb-6 text-3xl font-bold leading-none"
      />
    </Link>
  );
}

function TitleAndDescriptionText({
  title,
  description,
}: {
  title?: string | null;
  description?: string | null;
}) {
  return (
    <React.Fragment>
      {title && (
        <Heading fontSize="2xl" className="mb-3 text-primary">
          {title}
        </Heading>
      )}
      {description && (
        <Text muted className="my-4">
          {description}
        </Text>
      )}
    </React.Fragment>
  );
}

function NewsletterForm({ id, fields, thankYouPage, buttonLabel }: FormFields) {
  const hasFields = Array.isArray(fields) && fields.length > 0;

  if (!hasFields) return null;

  return (
    <Form
      id={id ?? undefined}
      name="NewsletterA-Form"
      className="form-newsletter"
      thankyouPage={thankYouPageLink(thankYouPage)}>
      <Flex align="center" gap={2} className="max-w-md mx-auto">
        <Input
          aria-label={fields[0]?.placeholder ?? fields[0]?.name}
          className="flex-grow w-full"
          type={getInputType(fields[0]?.type)}
          placeholder={fields[0]?.placeholder}
          name={fields[0]?.name}
          required={fields[0]?.isRequired}
        />

        <div>
          <div className="webriq-recaptcha" />
        </div>
        {buttonLabel && (
          <Button
            aria-label={buttonLabel ?? "Newsletter form submit button"}
            type="submit"
            className="w-1/2 text-white">
            {buttonLabel}
          </Button>
        )}
      </Flex>
    </Form>
  );
}

export { Newsletter_A };
