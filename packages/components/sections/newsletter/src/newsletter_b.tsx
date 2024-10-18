import { Button } from "@stackshift-ui/button";
import { Form } from "@stackshift-ui/form";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Input } from "@stackshift-ui/input";
import { Text } from "@stackshift-ui/text";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import React from "react";

import { Form as FormFields, Logo } from "./types";
import { getInputType, logoLink, thankYouPageLink } from "./helper";
import { NewsletterProps } from ".";

export default function Newsletter_B({
  logo,
  title,
  description,
  form,
}: NewsletterProps): React.JSX.Element {
  return (
    <Section className="mx-auto w-full py-20 bg-background">
      <Container maxWidth={1280}>
        <Flex wrap align="center">
          <div className="w-full mb-4 text-center lg:mr-8 lg:w-auto">
            <Flex align="center" justify="center" className="mx-auto">
              <LogoSection logo={logo} />
            </Flex>
          </div>
          <Container
            maxWidth={412}
            className="mx-auto px-4 w-full mb-6 text-center lg:ml-0 lg:text-left">
            <TitleAndDescriptionText title={title} description={description} />
          </Container>
          <div className="w-full lg:w-[35%]">
            <NewsletterForm
              {...{
                id: form?.id,
                fields: form?.fields,
                thankYouPage: form?.thankYouPage,
                buttonLabel: form?.buttonLabel,
              }}
            />
          </div>
        </Flex>
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
        <Heading fontSize="2xl" className="text-primary">
          {title}
        </Heading>
      )}
      {description && (
        <Text className="my-4 leading-loose" muted>
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
      name="NewsletterB-Form"
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

export { Newsletter_B };
