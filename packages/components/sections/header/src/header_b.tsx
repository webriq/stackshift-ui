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
import { Images } from "./types";

export default function Header_B({
  images,
  title,
  description,
  primaryButton,
  secondaryButton,
}: HeaderProps) {
  return (
    <Section className="relative z-10 py-20 bg-background">
      <Container maxWidth={1280}>
        <Flex align="center" direction="col" gap={4} className="lg:flex-row">
          <Flex align="center" direction="col" className="w-full basis-1/2">
            <div className="max-w-md mx-auto text-center lg:text-left">
              <TitleAndDescription title={title} description={description} />
              <Buttons primaryButton={primaryButton} secondaryButton={secondaryButton} />
            </div>
          </Flex>
          {images && <ImageGallery images={images} />}
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
      justify="center"
      gap={2}
      direction="col"
      className="lg:justify-start md:flex-row">
      {primaryButton?.label && (
        <Button variant="default" aria-label={primaryButton?.label} asChild>
          <Link
            href={primaryButtonLink.href}
            target={primaryButtonLink.target}
            rel={primaryButtonLink.rel}>
            {primaryButton?.label}
          </Link>
        </Button>
      )}
      {secondaryButton?.label && (
        <Button
          variant="secondary"
          className="bg-transparent border hover:bg-gray-300 inline-block font-default text-default transition duration-200 rounded-global"
          aria-label={secondaryButton?.label}
          asChild>
          <Link
            href={secondaryButtonLink.href}
            target={secondaryButtonLink.target}
            rel={secondaryButtonLink.rel}>
            {secondaryButton?.label}
          </Link>
        </Button>
      )}
    </Flex>
  );
}

function ImageGallery({ images }: { images: Images[] }) {
  if (!images) return null;

  return (
    <div className="w-full px-4 lg:w-1/2 mt-10 lg:mt-0">
      <div className="mb-3 sm:flex lg:mb-4 lg:ml-6">
        {images?.[0]?.image && (
          <Image
            className="relative object-cover mb-3 mr-2 overflow-hidden rounded-xl sm:mb-0 sm:w-1/3 md:rounded-3xl lg:rounded-br-none"
            sizes="100vw"
            src={`${images?.[0]?.image}`}
            width={941}
            height={734}
            alt={images?.[0]?.alt ?? "header-image-1"}
          />
        )}
        {images?.[1]?.image && (
          <Image
            className="relative object-cover overflow-hidden rounded-xl sm:ml-2 sm:w-2/3 md:rounded-3xl lg:rounded-bl-none"
            sizes="100vw"
            src={`${images?.[1]?.image}`}
            width={1050}
            height={701}
            alt={images?.[1]?.alt ?? "header-image-2"}
          />
        )}
      </div>
      <div className="mb-3 sm:flex lg:mb-4 lg:mr-6">
        {images?.[2]?.image && (
          <Image
            className="object-cover mb-3 mr-2 overflow-hidden rounded-xl sm:w-2/3 md:mb-0 md:rounded-3xl lg:rounded-br-none"
            sizes="100vw"
            src={`${images?.[2]?.image}`}
            width={1050}
            height={701}
            alt={images?.[2]?.alt ?? "header-image-3"}
          />
        )}
        {images?.[3]?.image && (
          <Image
            className="object-cover overflow-hidden rounded-xl sm:ml-2 sm:w-1/3 md:rounded-3xl lg:rounded-bl-none"
            sizes="100vw"
            src={`${images?.[3]?.image}`}
            width={941}
            height={734}
            alt={images?.[3]?.alt ?? "header-image-4"}
          />
        )}
      </div>
    </div>
  );
}

export { Header_B };
