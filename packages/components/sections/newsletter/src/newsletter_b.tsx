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

export default function Newsletter_B({
  logo,
  title,
  description,
  form,
}: NewsletterProps): React.JSX.Element {
  return (
    <Section className="mx-auto w-full py-20 bg-background">
      <Container maxWidth={1280}>
        <Flex
          wrap
          align="center"
          className="flex-col [@media(min-width:900px)]:flex-row [@media(min-width:900px)]:justify-between">
          <div className="flex flex-col items-center [@media(min-width:900px)]:flex-row [@media(min-width:900px)]:items-start gap-5">
            <LogoSection logo={logo} />
            <Container
              maxWidth={412}
              className="mx-auto px-4 w-full text-center [@media(min-width:900px)]:text-left">
              <TitleAndDescriptionText title={title} description={description} />
            </Container>
          </div>
          <NewsletterForm
            {...{
              id: form?.id,
              fields: form?.fields,
              thankYouPage: form?.thankYouPage,
              buttonLabel: form?.buttonLabel,
            }}
          />
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
      href={logoLink(logo)}
      target={logo?.linkTarget}
      rel={logo?.linkTarget === "_blank" ? "noopener noreferrer" : ""}>
      <Image src={logo?.image} alt={logo.alt ?? "newsletter-logo"} width={48} height={48} />
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
      className="form-newsletter w-full sm:w-1/2 [@media(min-width:900px)]:w-2/5"
      thankyouPage={thankYouPageLink(thankYouPage)}>
      <div className="flex flex-col [@media(min-width:900px)]:flex-row gap-3">
        <Input
          aria-label={fields[0]?.placeholder ?? fields[0]?.name}
          className="flex-grow w-full bg-white"
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
            className="text-white">
            {buttonLabel}
          </Button>
        )}
      </div>
    </Form>
  );
}

export { Newsletter_B };
