import { PortableText, PortableTextComponents } from "@portabletext/react";
import { Button } from "@stackshift-ui/button";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Form } from "@stackshift-ui/form";
import { FormField } from "@stackshift-ui/form-field";
import { Heading } from "@stackshift-ui/heading";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import { SocialIcons } from "@stackshift-ui/social-icons";
import { Text } from "@stackshift-ui/text";
import React from "react";

import { ContactProps } from ".";
import { thankYouPageLink } from "./helper";
import { SocialLink, Form as iForm, Socials as iSocials } from "./types";

export default function Contact_A({
  contactDescription,
  officeInformation,
  contactEmail,
  contactNumber,
  socialLinks,
  form,
  block,
  title,
}: ContactProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Flex direction="col" gap={8} justify="between" className="lg:flex-row">
          <Flex direction="col" gap={8} className="px-10 w-full basis-1/2">
            <ContactTitleAndDescription
              form={form}
              title={title}
              contactDescription={contactDescription}
            />
            <OfficeInformation
              officeInformation={officeInformation}
              contactEmail={contactEmail}
              contactNumber={contactNumber}
            />
            <SocialLinksCard socialLinks={socialLinks} />
          </Flex>
          <FormFields form={form} block={block} blockCustomization={blockCustomization} />
        </Flex>
      </Container>
    </Section>
  );
}

function ContactTitleAndDescription({
  form,
  title,
  contactDescription,
}: {
  form?: iForm;
  title?: string;
  contactDescription?: string;
}) {
  return (
    <div>
      {(form?.name || title) && <Heading>{form?.name || title}</Heading>}
      {contactDescription && (
        <Text muted className="mt-5 leading-loose text-gray-700">
          {contactDescription}
        </Text>
      )}
    </div>
  );
}

function OfficeInformation({
  officeInformation,
  contactEmail,
  contactNumber,
}: {
  officeInformation?: string;
  contactEmail?: string;
  contactNumber?: string;
}) {
  if (!officeInformation) return null;

  return (
    <Flex gap={8} justify="between" className="flex-col w-full md:flex-row">
      <div>
        <Heading type="h2">{"Office"}</Heading>
        {officeInformation && (
          <Text className="mt-3" muted>
            {officeInformation}
          </Text>
        )}
      </div>
      <div>
        <Heading type="h2">{"Contacts"}</Heading>
        <Text className="my-3" muted>
          {contactEmail && <Link href={`mailto:${contactEmail}`}>{contactEmail}</Link>}
        </Text>
        <Text muted>
          {contactNumber && <Link href={`tel:${contactNumber}`}>{contactNumber}</Link>}
        </Text>
      </div>
    </Flex>
  );
}

function SocialLinksCard({ socialLinks }: { socialLinks?: SocialLink[] }) {
  if (!socialLinks) return null;
  return (
    <div className="w-full md:w-1/3 lg:w-full">
      <Heading type="h2" fontSize="2xl" className="mb-2">
        Socials
      </Heading>
      <Flex gap={4}>
        <SocialLinks socialLinks={socialLinks} />
      </Flex>
    </div>
  );
}

function SocialLinks({ socialLinks }: { socialLinks?: SocialLink[] }) {
  if (!socialLinks) return null;

  return (
    <React.Fragment>
      {socialLinks?.map(social => (
        <Link
          aria-label={social?.socialMedia || social?.socialMediaPlatform || ""}
          className="inline-block mr-4 rounded hover:bg-gray-100"
          target="_blank"
          rel="noopener noreferrer"
          href={social?.socialMediaLink ?? "/page-not-found"}
          key={social?._key}>
          {social?.socialMediaLink && <SocialIcons social={social.socialMedia as iSocials} />}
        </Link>
      ))}
    </React.Fragment>
  );
}

function FormFields({
  form,
  block,
  blockCustomization,
}: {
  form?: iForm;
  block: any;
  blockCustomization: PortableTextComponents;
}) {
  if (!form) return null;

  return (
    <div className="w-full px-5 sm:px-10 lg:w-1/2 lg:px-0 lg:pl-10 lg:pt-10">
      {form?.fields && (
        <Form
          id={form?.id ?? undefined}
          name="Contact-VariantA-Form"
          className="lg:mx-auto lg:max-w-md space-y-3 text-xs font-semibold"
          thankyouPage={thankYouPageLink(form?.thankYouPage)}>
          {form?.fields?.map((formFields, index) => (
            <div key={index}>
              {formFields?.type === "inputCheckbox" ? (
                <FormField
                  noLabel
                  name={formFields?.name ?? ""}
                  placeholder={formFields?.placeholder}
                  required={formFields?.isRequired}
                  {...formFields}
                />
              ) : (
                <FormField
                  noLabel
                  variant="primary"
                  name={formFields?.name ?? ""}
                  placeholder={formFields?.name}
                  required={formFields?.isRequired}
                  {...formFields}
                />
              )}
            </div>
          ))}
          <div className="items-center sm:flex sm:justify-between">
            {block && (
              <div className="inline-flex mt-2">
                <input
                  aria-label="Agree to terms"
                  className="mt-1 mr-2"
                  type="checkbox"
                  id="terms"
                  name="terms"
                  defaultValue={1}
                  required
                />
                <span className="text-sm font-semibold">
                  <PortableText
                    value={block}
                    components={blockCustomization}
                    onMissingComponent={false} // Disabling warnings / handling unknown types
                  />
                </span>
              </div>
            )}
            <div>
              <div className="webriq-recaptcha" />
            </div>
            {form?.buttonLabel && (
              <Button
                as="button"
                ariaLabel={form?.buttonLabel ?? "Contact form submit button"}
                className="inline-block px-6 py-2 mt-5 font-bold leading-loose text-white transition duration-200 rounded-l-xl rounded-t-xl bg-primary hover:bg-primary-foreground sm:mt-0"
                type="submit">
                {form?.buttonLabel}
              </Button>
            )}
          </div>
        </Form>
      )}
    </div>
  );
}

// block styling as props to `components` of the PortableText component
const blockCustomization: PortableTextComponents = {
  marks: {
    internalLink: ({ children, value }) => (
      <Link
        aria-label={value.href ?? "internal link"}
        style={{ color: "red" }}
        href={value.slug.current}>
        {children}
      </Link>
    ),
    link: ({ children, value }) =>
      value.blank ? (
        <Link
          aria-label={value.href ?? "external link"}
          href={value.href}
          target="_blank"
          rel="noopener noreferrer">
          {children}
        </Link>
      ) : (
        <Link
          aria-label={value.href ?? "external link"}
          style={{ color: "blue" }}
          href={value.href}>
          {children}
        </Link>
      ),
  },
};

export { Contact_A };
