import { Button } from "@stackshift-ui/button";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Form } from "@stackshift-ui/form";
import { Heading } from "@stackshift-ui/heading";
import { Input } from "@stackshift-ui/input";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import { CTAProps } from ".";
import { thankYouPageLink } from "./helper";
import { Form as iForm } from "./types";

export default function CallToAction_C({ title, plainText, features, form }: CTAProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Flex align="center" className="flex-col lg:flex-row" gap={4} justify="between">
          <HeadingAndText title={title} text={plainText} />
          <FormSection form={form} features={features} />
        </Flex>
      </Container>
    </Section>
  );
}

function HeadingAndText({ title, text }: { title?: string; text?: string }) {
  return (
    <div className="w-full text-center lg:text-left px-4 mb-8 lg:mb-0 lg:w-1/2">
      {title ? (
        <Heading fontSize="3xl" className="mb-4">
          {title}
        </Heading>
      ) : null}
      {text ? <Text muted>{text}</Text> : null}
    </div>
  );
}

function FormSection({ form, features }: { form?: iForm; features?: string[] }) {
  return (
    <div className="w-full px-4 lg:w-1/2">
      {form?.fields ? <ActionForm form={form} /> : null}
      {features?.length ? <FeaturesList features={features} /> : null}
    </div>
  );
}

function ActionForm({ form }: { form?: iForm }) {
  if (!form) return null;

  return (
    <Form
      id={form?.id || ""}
      name="Calltoaction-VariantC-Form"
      className="items-center mb-4 form-callToAction lg:flex lg:justify-end"
      thankyouPage={thankYouPageLink(form?.thankYouPage)}>
      <Flex
        gap={2}
        align="center"
        justify="center"
        direction="col"
        className="lg:items-start lg:justify-end sm:flex-row w-full">
        {form?.fields?.[0] ? <CTAInput field={form.fields[0]} /> : null}
        <CTAButton form={form} />
        <div>
          <div className="webriq-recaptcha" />
        </div>
      </Flex>
    </Form>
  );
}

function CTAInput({ field }: { field?: any }) {
  const inputType = getInputType(field?.type);

  return (
    <Input
      aria-label={field?.placeholder ?? field?.name}
      className="w-full sm:max-w-60 bg-white"
      type={inputType}
      placeholder={field?.placeholder}
      name={field?.name}
      required={field?.isRequired}
    />
  );
}

function getInputType(type: string | undefined) {
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

function FeaturesList({ features }: { features: string[] }) {
  return (
    <Flex
      as="ul"
      align="center"
      className="text-gray-500 sm:justify-center lg:justify-end"
      gap={4}
      wrap>
      {features.map((feature, index) => (
        <Flex as="li" align="center" key={index}>
          <CheckIcon />
          <Text muted>{feature}</Text>
        </Flex>
      ))}
    </Flex>
  );
}

function CheckIcon() {
  return (
    <span>
      <svg
        className="w-6 h-6 mr-2 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"></path>
      </svg>
    </span>
  );
}

function CTAButton({ form }: { form?: iForm }) {
  if (!form?.buttonLabel) return null;

  return (
    <Button
      className="w-full sm:w-fit"
      aria-label={form?.buttonLabel ?? "Call to action form submit button"}
      type="submit">
      {form?.buttonLabel}
    </Button>
  );
}

export { CallToAction_C };
