import React from "react";
import { Button } from "@webriq-test/button";
import { Form } from "@webriq-test/form";
import { Heading } from "@webriq-test/heading";
import { Image } from "@webriq-test/image";
import { Input } from "@webriq-test/input";
import { Text } from "@webriq-test/text";
import { Link } from "@webriq-test/link";
import { Section } from "@webriq-test/section";
import { Container } from "@webriq-test/container";
import { Flex } from "@webriq-test/flex";

import { Form as FormFields, Logo } from "./types";
import { getInputType, logoLink, thankYouPageLink } from "./helper";
import { NewsletterProps } from ".";

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
          variant="outline"
          noLabel
          ariaLabel={fields[0]?.placeholder ?? fields[0]?.name}
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
            as="button"
            ariaLabel={buttonLabel ?? "Newsletter form submit button"}
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
