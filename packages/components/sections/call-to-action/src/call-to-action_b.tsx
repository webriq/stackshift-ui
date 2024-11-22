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
import { CTAProps } from ".";
import { logoLink, thankYouPageLink } from "./helper";
import { Logo, Form as iForm } from "./types";

export default function CallToAction_B({ logo, title, plainText, form }: CTAProps) {
  return (
    <Section className="py-20 bg-background">
      <Container className="text-center" maxWidth={576}>
        <LogoSection logo={logo} />
        <HeadingAndText title={title} text={plainText} />
        <CTAForm form={form} />
      </Container>
    </Section>
  );
}

function LogoSection({ logo }: { logo?: Logo }) {
  if (!logo?.image) return null;

  return (
    <Link
      aria-label={logoLink(logo) === "/" ? "Go to home page" : `Go to ${logoLink(logo)}`}
      className="inline-block p-3 mb-6 rounded"
      href={logoLink(logo)}
      target={logo?.linkTarget}
      rel={logo?.linkTarget === "_blank" ? "noopener noreferrer" : ""}>
      <Image
        src={logo?.image}
        alt={logo?.alt ?? "callToAction-logo"}
        width={70}
        height={70}
        className="inline-block p-3 mb-6 rounded"
      />
    </Link>
  );
}

function HeadingAndText({ title, text }: { title?: string; text?: string }) {
  return (
    <React.Fragment>
      {title ? (
        <Heading fontSize="3xl" className="mb-4">
          {title}
        </Heading>
      ) : null}
      {text ? <Text className="mb-6 text-gray-500">{text}</Text> : null}
    </React.Fragment>
  );
}

function CTAForm({ form }: { form?: iForm }) {
  if (!form) return null;

  return (
    <Form
      id={form?.id || ""}
      name="Calltoaction-VariantB-Form"
      thankyouPage={thankYouPageLink(form?.thankYouPage)}>
      <Flex align="center" gap={2} className="md:justify-between">
        <FormFields fields={form?.fields?.slice(0, 2)} />
        <div>
          <div className="webriq-recaptcha" />
        </div>
        <CTABtton form={form} />
      </Flex>
    </Form>
  );
}

function FormFields({ fields }: { fields?: iForm["fields"] }) {
  if (!fields) return null;

  return (
    <React.Fragment>
      {fields.map(field => (
        <Input
          noLabel
          key={field?._key}
          className="mb-4 md:mb-0"
          ariaLabel={field?.placeholder ?? field?.name}
          type={getInputType(field?.type)}
          placeholder={field?.placeholder}
          name={field?.name}
          required={field?.isRequired}
        />
      ))}
    </React.Fragment>
  );
}

function getInputType(
  type?: string | undefined,
): "text" | "email" | "password" | "number" | undefined {
  switch (type) {
    case "inputEmail":
      return "email";
    case "inputPassword":
      return "password";
    case "inputNumber":
      return "number";
    default:
      return "text";
  }
}

function CTABtton({ form }: { form?: iForm }) {
  if (!form?.buttonLabel) return null;

  return (
    <Button as="button" className="w-full" ariaLabel={form?.buttonLabel} type="submit">
      {form?.buttonLabel}
    </Button>
  );
}

export { CallToAction_B };
