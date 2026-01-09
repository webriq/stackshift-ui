import { Button } from "@stackshift-ui/button";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import React from "react";
import { ButtonProps, HeaderProps } from ".";

export default function Header_D({
  title,
  description,
  primaryButton,
  secondaryButton,
  mainImage,
}: HeaderProps): React.JSX.Element {
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
  return (
    <Flex
      align="center"
      justify="center"
      gap={2}
      direction="col"
      className="lg:justify-start md:flex-row">
      {primaryButton?.label && (
        <Button as="link" link={primaryButton}>
          {primaryButton?.label}
        </Button>
      )}
      {secondaryButton?.label && (
        <Button
          as="link"
          link={secondaryButton}
          variant="secondary"
          className="bg-transparent border hover:bg-gray-300 inline-block font-default text-default transition duration-200 rounded-global">
          {secondaryButton?.label}
        </Button>
      )}
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
