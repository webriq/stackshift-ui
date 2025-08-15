import { Button } from "@stackshift-ui/button";
import { Card } from "@stackshift-ui/card";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Form } from "@stackshift-ui/form";
import { FormField } from "@stackshift-ui/form-field";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Input } from "@stackshift-ui/input";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import { buildSanityLink } from "@stackshift-ui/system";
import { Text } from "@stackshift-ui/text";
import React from "react";
import { SignUpFormProps } from ".";
import { logoLink, thankYouPageLink } from "./helper";
import { LabeledRoute, Logo, Form as iForm } from "./types";

export default function SigninSignup_B({ logo, form, formLinks, signInLink }: SignUpFormProps) {
  return (
    <Section className="py-10 bg-primary lg:py-20">
      <Container maxWidth={1280}>
        <Container maxWidth={576}>
          <LogoSection logo={logo} />
          <Card className="p-6 mb-6 bg-white lg:mb-10 lg:p-12 rounded-md">
            <SubtitleAndHeadingText form={form} />
            <SignupForm form={form} signInLink={signInLink} />
          </Card>
          <FormLinks formLinks={formLinks} />
        </Container>
      </Container>
    </Section>
  );
}

function LogoSection({ logo }: { logo?: Logo }) {
  if (!logo) return null;

  return (
    <div className="mb-10">
      <Link
        aria-label={`Go to ${logoLink(logo) === "/" ? "home page" : logoLink(logo)}`}
        className="flex justify-center mx-auto text-3xl font-bold leading-none"
        href={logoLink(logo)}
        target={logo?.linkTarget}
        rel={logo?.linkTarget === "_blank" ? "noopener noreferrer" : ""}>
        <Image
          src={logo?.image}
          alt={logo?.alt ?? "signup-logo"}
          width={100}
          height={100}
          className="flex justify-center text-3xl font-bold leading-none text-white"
        />
      </Link>
    </div>
  );
}

function SubtitleAndHeadingText({ form }: { form?: iForm }) {
  return (
    <div className="mb-6 text-center sm:text-left">
      <Text muted className="text-sm lg:text-base">
        {form?.subtitle}
      </Text>
      <Heading className="text-xl lg:text-2xl">{form?.name}</Heading>
    </div>
  );
}

function SignupForm({ form, signInLink }: { form?: iForm; signInLink?: LabeledRoute }) {
  if (!form?.fields) return null;
  const [showPasswords, setShowPasswords] = React.useState<{
    [key: string]: boolean;
  }>({});

  const togglePasswordVisibility = (fieldName: string) => {
    setShowPasswords(prev => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  return (
    <Form
      id={form?.id ?? undefined}
      name="SignUp-VariantB-Form"
      className="form-signup"
      thankyouPage={thankYouPageLink(form?.thankYouPage)}>
      <FormFields
        form={form}
        showPassword={showPasswords}
        togglePasswordVisibility={togglePasswordVisibility}
      />
      <div>
        <div className="webriq-recaptcha" />
      </div>
      <div className="text-center">
        <FormButtonLabel form={form} />
        <SigninLink signInLink={signInLink} />
      </div>
    </Form>
  );
}

function FormFields({
  form,
  showPassword,
  togglePasswordVisibility,
}: {
  form?: iForm;
  showPassword: { [key: string]: boolean };
  togglePasswordVisibility: (fieldName: string) => void;
}) {
  return (
    <React.Fragment>
      <Flex className="flex-col lg:flex-row gap-3">
        {form?.fields?.slice(0, 2)?.map((formFields, index) => (
          <div className="w-full" key={index}>
            <FormField
              noLabel
              variant="secondary"
              placeholder={formFields?.placeholder}
              required={formFields?.isRequired}
              name={formFields?.name ?? ""}
              items={formFields?.items}
              type={formFields?.type}
              {...formFields}
            />
          </div>
        ))}
      </Flex>

      {form?.fields?.slice(2)?.map((formFields, index) => (
        <div key={index} className="my-3">
          {formFields?.type === "inputPassword" && formFields.name ? (
            <PasswordField
              formFields={formFields}
              showPassword={showPassword[formFields.name] || false}
              togglePassword={() => togglePasswordVisibility(formFields.name!)}
            />
          ) : (
            <FormField
              noLabel
              variant="secondary"
              name={formFields?.name ?? ""}
              placeholder={formFields?.placeholder}
              required={formFields?.isRequired}
              items={formFields?.items}
              type={formFields?.type}
              {...formFields}
            />
          )}
        </div>
      ))}
    </React.Fragment>
  );
}

function PasswordField({
  formFields,
  showPassword,
  togglePassword,
}: {
  formFields?: any;
  showPassword: boolean;
  togglePassword: () => void;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 items-center relative">
      <Input
        aria-label={formFields?.placeholder ?? formFields?.name}
        type={showPassword ? "text" : "password"}
        placeholder={formFields?.placeholder}
        name={formFields?.name}
        required={formFields?.isRequired}
        className="pr-12"
      />
      {/* SVG icon on the right of the password input field */}
      <Button
        variant="unstyled"
        aria-label={showPassword ? "Show password" : "Hide password"}
        className="focus:outline-none px-0 py-0 absolute right-4"
        type="button"
        onClick={togglePassword}>
        <span className="block sm:hidden text-right">{showPassword ? "Hide" : "Show"}</span>
        <span className="hidden sm:block">
          <PasswordIcon showPassword={showPassword} />
        </span>
      </Button>
    </div>
  );
}

function FormButtonLabel({ form }: { form?: iForm }) {
  if (!form?.buttonLabel) return null;

  return (
    <Button
      className="w-full py-4 mb-3"
      aria-label={form?.buttonLabel ?? "Sign Up form submit button"}
      variant="default"
      type="submit">
      {form?.buttonLabel}
    </Button>
  );
}

function SigninLink({ signInLink }: { signInLink?: LabeledRoute }) {
  if (!signInLink?.label) return null;

  return (
    <span className="text-xs text-gray-900">
      <span>Already have an account?</span>{" "}
      <Button
        as="link"
        link={signInLink}
        variant="link"
        className="text-xs text-primary hover:underline">
        {signInLink?.label}
      </Button>
    </span>
  );
}

function FormLinks({ formLinks }: { formLinks?: LabeledRoute[] }) {
  if (!formLinks) return null;

  return (
    <p className="text-xs text-center text-secondary-foreground">
      {formLinks?.map((link_, index, { length }) => (
        <span key={index}>
          <Button
            as="link"
            link={link_}
            variant="link"
            className="text-xs underline text-secondary-foreground hover:text-gray-50"
            aria-label={link_?.label}
            asChild>
            {link_?.label}
          </Button>
          {index === length - 1 ? null : index === length - 2 ? (
            <span>&nbsp;and&nbsp;</span>
          ) : (
            <span>&nbsp;,&nbsp;</span>
          )}
        </span>
      ))}
    </p>
  );
}

function PasswordIcon({ showPassword }: { showPassword: boolean }) {
  return (
    <React.Fragment>
      {showPassword ? (
        <svg
          className="w-5 h-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 16 16">
          <g fill="currentColor">
            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288c-.335.48-.83 1.12-1.465 1.755c-.165.165-.337.328-.517.486l.708.709z" />
            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12l.708-.708l12 12l-.708.708z" />
          </g>
        </svg>
      ) : (
        <svg
          className="w-5 h-5 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 16 16">
          <g fill="currentColor">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0z" />
          </g>
        </svg>
      )}
    </React.Fragment>
  );
}

export { SigninSignup_B };
