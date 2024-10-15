import React from "react";
import { Text } from "@webriq-test/text";
import { Button } from "@webriq-test/button";
import { Heading } from "@webriq-test/heading";
import { Section } from "@webriq-test/section";
import { Container } from "@webriq-test/container";
import { Flex } from "@webriq-test/flex";
import { Images } from "./types";
import { ButtonProps, HeaderProps } from ".";

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
  return (
    <Flex
      align="center"
      gap={2}
      className="flex items-center justify-center lg:justify-start gap-2 flex-col md:flex-row">
      {primaryButton?.label && (
        <Button as="link" link={primaryButton} ariaLabel={primaryButton?.label}>
          {primaryButton?.label}
        </Button>
      )}
      {secondaryButton?.label && (
        <Button
          as="link"
          link={secondaryButton}
          className="text-black bg-white hover:bg-gray-50 inline-block rounded-l-xl rounded-t-xl font-bold transition duration-200 px-6 py-3"
          ariaLabel={secondaryButton?.label}>
          {secondaryButton?.label}
        </Button>
      )}
    </Flex>
  );
}

function ImageGallery({ images }: { images: Images[] }) {
  if (!images) return null;

  return (
    <div className="w-full px-4 lg:w-1/2">
      <div className="mb-3 sm:flex lg:mb-4 lg:ml-6">
        {images?.[0]?.image && (
          <img
            className="relative object-cover mb-3 mr-2 overflow-hidden rounded-xl sm:mb-0 sm:w-1/3 md:rounded-3xl lg:rounded-br-none"
            sizes="100vw"
            src={`${images?.[0]?.image}`}
            width={941}
            height={734}
            alt={images?.[0]?.alt ?? "header-image-1"}
          />
        )}
        {images?.[1]?.image && (
          <img
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
          <img
            className="object-cover mb-3 mr-2 overflow-hidden rounded-xl sm:w-2/3 md:mb-0 md:rounded-3xl lg:rounded-br-none"
            sizes="100vw"
            src={`${images?.[2]?.image}`}
            width={1050}
            height={701}
            alt={images?.[2]?.alt ?? "header-image-3"}
          />
        )}
        {images?.[3]?.image && (
          <img
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
