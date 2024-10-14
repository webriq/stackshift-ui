import React from "react";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Images } from "./types";
import { LogoCloudProps } from ".";

export default function LogoCloud_A({ title, images }: LogoCloudProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Title title={title} />
        <Flex wrap justify="center" align="center">
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
        <div className="w-full px-2 mb-4 md:w-1/3 lg:mr-10 lg:w-1/6 xl:mr-0" key={index}>
          {image?.image ? (
            <Flex
              align="center"
              justify="center"
              className="mx-auto  h-[192px] w-[192px] rounded bg-white">
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
