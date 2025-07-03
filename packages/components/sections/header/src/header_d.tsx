import { Button } from "@stackshift-ui/button";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import { buildSanityLink } from "@stackshift-ui/system";
import { Text } from "@stackshift-ui/text";
import React from "react";
import { ButtonProps, HeaderProps } from ".";

export default function Header_D({
  title,
  description,
  primaryButton,
  secondaryButton,
  mainImage,
}: HeaderProps): JSX.Element {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Flex align="center" className="flex-col lg:flex-row" gap={4}>
          <Flex align="center" className="w-full basis-1/2" direction="col">
            <Container className="mx-auto items-center text-center lg:text-left" maxWidth="md">
              <TitleAndDescription title={title} description={description} />
              <Buttons primaryButton={primaryButton} secondaryButton={secondaryButton} />
            </Container>
          </Flex>
          <MainImage mainImage={mainImage} />
        </Flex>
      </Container>
    </Section>
  );
}

function TitleAndDescription({ title, description }: { title?: string; description?: string }) {
  return (
    <React.Fragment>
      {title ? (
        <Heading fontSize="3xl" className="mb-3" type="h1">
          {title}
        </Heading>
      ) : null}
      {description ? (
        <Text className="my-6" muted>
          {description}
        </Text>
      ) : null}
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
    <Flex
      align="center"
      className="flex items-center justify-center lg:justify-start gap-2 flex-col md:flex-row"
      gap={2}>
      {primaryButton?.label ? (
        <Button
          aria-label={primaryButton?.ariaLabel ?? primaryButton?.label}
          variant="default"
          className="bg-primary hover:bg-primary/50 rounded-global px-6 py-3 text-white"
          asChild>
          <Link
            href={primaryButtonLink.href}
            target={primaryButtonLink.target}
            rel={primaryButtonLink.rel}>
            {primaryButton.label}
          </Link>
        </Button>
      ) : null}
      {secondaryButton?.label ? (
        <Button
          aria-label={secondaryButton.ariaLabel ?? secondaryButton?.label}
          variant="default"
          className="bg-secondary hover:bg-secondary/50 rounded-global px-6 py-3"
          asChild>
          <Link
            href={secondaryButtonLink.href}
            target={secondaryButtonLink.target}
            rel={secondaryButtonLink.rel}>
            {secondaryButton.label}
          </Link>
        </Button>
      ) : null}
    </Flex>
  );
}

interface MainImageProps {
  mainImage?: {
    image?: string | any;
    alt?: string;
  };
}

function MainImage({ mainImage }: MainImageProps) {
  if (!mainImage?.image) return null;

  return (
    <div className="w-full md:w-2/3 h-full mt-10 lg:mt-0">
      <Image
        alt={mainImage.alt ?? "header-main-image"}
        className="rounded-md"
        height={700}
        sizes="100vw"
        src={`${mainImage?.image}`}
        style={{ objectFit: "contain" }}
        width={1050}
      />
    </div>
  );
}

export { Header_D };
