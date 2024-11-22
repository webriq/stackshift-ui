import { Button } from "@stackshift-ui/button";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import React from "react";
import { ButtonProps, HeaderProps } from ".";

export default function Header_A({
  mainImage,
  title,
  description,
  primaryButton,
  secondaryButton,
}: HeaderProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Flex align="center" gap={4} className="flex-col lg:flex-row">
          <Flex align="center" direction="col" className="w-full basis-1/2">
            <div className="max-w-md mx-auto text-center lg:text-left">
              <TitleAndDescription title={title} description={description} />
              <Buttons primaryButton={primaryButton} secondaryButton={secondaryButton} />
            </div>
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
      justify="center"
      gap={2}
      direction="col"
      className="lg:justify-start md:flex-row">
      {primaryButton?.label && (
        <Button as="link" link={primaryButton} ariaLabel={primaryButton?.label}>
          {primaryButton?.label}
        </Button>
      )}
      {secondaryButton?.label && (
        <Button
          as="link"
          link={secondaryButton}
          className="bg-secondary hover:bg-secondary/50 inline-block rounded-global font-bold transition duration-200 px-3 py-4"
          ariaLabel={secondaryButton?.label}>
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
    <div className="relative w-full max-w-md">
      <Image
        className="overflow-hidden rounded-md object-cover md:rounded-br-none lg:h-[448px] relative z-10"
        src={`${mainImage.image}`}
        sizes="(min-width: 520px) 448px, 90vw"
        width={448}
        height={448}
        alt={mainImage.alt ?? "header-main-image"}
      />
      <DecorativeImages />
    </div>
  );
}

function DecorativeImages() {
  return (
    <>
      <ImageElement
        src="/assets/elements/webriq-blue-dark-up.png"
        alt="webriq-blue-dark-up-mainImage-element"
        className="absolute hidden md:block"
        style={{ top: "-2rem", right: "3rem", zIndex: 2 }}
        width={112}
        height={112}
      />
      <ImageElement
        src="/assets/elements/wing-webriq-blue-down.png"
        alt="wing-webriq-blue-down-mainImage-element"
        className="absolute hidden md:block"
        style={{ bottom: "-2rem", right: "-2rem", zIndex: 2 }}
        width={144}
        height={144}
      />
      <ImageElement
        src="/assets/elements/bullets-gray-right.svg"
        alt="bullets-gray-right-mainImage-element"
        className="absolute hidden md:block"
        style={{ top: "3rem", right: "-3rem", zIndex: 2 }}
        width={115}
        height={157}
      />
      <ImageElement
        src="/assets/elements/bullets-gray-left.svg"
        alt="bullets-gray-left-mainImage-element"
        className="absolute hidden md:block"
        style={{ bottom: "2.5rem", left: "-4.5rem", zIndex: 2 }}
        width={157}
        height={115}
      />
    </>
  );
}

function ImageElement({
  src,
  alt,
  className,
  style,
  width,
  height,
}: {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  width: number;
  height: number;
}) {
  return (
    <Image src={src} alt={alt} className={className} style={style} width={width} height={height} />
  );
}

export { Header_A };
