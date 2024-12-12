import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import React from "react";
import { LogoCloudProps } from ".";
import { Images } from "./types";

export default function LogoCloud_A({ title, images }: LogoCloudProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Title title={title} />
        <Flex wrap justify="center" align="center" gap={3}>
          <LogoCloudImages images={images} />
        </Flex>
      </Container>
    </Section>
  );
}

function Title({ title }: { title?: string }) {
  if (!title) return null;

  return (
    <Heading className="mb-12 text-center" fontSize="2xl">
      {title}
    </Heading>
  );
}

function LogoCloudImages({ images }: { images?: Images[] }) {
  if (!images) return null;

  return (
    <React.Fragment>
      {images?.map((image, index) => (
        <div key={index}>
          {image?.image ? (
            <Flex
              align="center"
              justify="center"
              className="h-[192px] w-[192px] rounded-global bg-gray-50">
              <Image
                className="object-scale-down"
                src={`${image?.image}`}
                sizes="192px"
                width={192}
                height={192}
                alt={image?.alt ?? `logoCloud-image${index}`}
              />
            </Flex>
          ) : null}
        </div>
      ))}
    </React.Fragment>
  );
}

export { LogoCloud_A };
