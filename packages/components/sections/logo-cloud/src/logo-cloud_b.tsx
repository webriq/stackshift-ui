import React from "react";
import { Text } from "@stackshift-ui/text";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Images } from "./types";
import { LogoCloudProps } from ".";

export default function LogoCloud_B({ title, text, images }: LogoCloudProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Flex wrap align="center" justify="between">
          <TitleTextSection title={title} text={text} />
          <Flex wrap className="w-full lg:w-1/2">
            <LogoCloudImages images={images} />
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}

function TitleTextSection({ title, text }: { title?: string; text?: string }) {
  return (
    <div className="w-full mb-12 lg:mb-0 lg:w-1/2">
      <Container maxWidth={448}>
        {title && (
          <Heading weight="bold" className="mb-4">
            {title}
          </Heading>
        )}
        {text && (
          <Text muted className="leading-loose">
            {text}
          </Text>
        )}
      </Container>
    </div>
  );
}

function LogoCloudImages({ images }: { images?: Images[] }) {
  if (!images) return null;

  return (
    <React.Fragment>
      {images?.map((image, index) => (
        <div className="w-full px-2 mb-4 sm:w-1/2 md:w-1/3" key={index}>
          {image?.image && (
            <div>
              <Flex
                align="center"
                justify="center"
                className="mx-auto h-[192px] w-[192px] rounded bg-gray-50">
                <Image
                  className="object-scale-down"
                  src={`${image?.image}`}
                  sizes="192px"
                  width={192}
                  height={192}
                  alt={image?.alt ?? `logoCloud-image${index}`}
                />
              </Flex>
            </div>
          )}
        </div>
      ))}
    </React.Fragment>
  );
}

export { LogoCloud_B };
