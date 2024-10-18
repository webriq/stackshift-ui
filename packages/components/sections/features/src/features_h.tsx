import React from "react";
import { Heading } from "@stackshift-ui/heading";
import { Text } from "@stackshift-ui/text";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { ArrayOfImageTitleAndText } from "./types";
import { FeaturesProps } from ".";

export default function Features_H({ caption, title, features, images }: FeaturesProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Flex wrap align="center">
          <div className="w-full mb-12 lg:mb-0 lg:w-1/2">
            <Container maxWidth={448}>
              <CaptionAndTitleSection caption={caption} title={title} />
              <FeaturesList features={features} />
            </Container>
          </div>
          <ImageGallery images={images} />
        </Flex>
      </Container>
    </Section>
  );
}

function CaptionAndTitleSection({ caption, title }: { caption?: string; title?: string }) {
  return (
    <React.Fragment>
      {caption && (
        <Text weight="bold" className="text-secondary">
          {caption}
        </Text>
      )}
      {title && (
        <Heading fontSize="3xl" className="mb-6">
          {title}
        </Heading>
      )}
    </React.Fragment>
  );
}

function FeaturesList({ features }: { features?: ArrayOfImageTitleAndText[] }) {
  if (!features || features?.length <= 0) return null;

  return (
    <ul>
      {features.map(feature => {
        return <FeatureItem feature={feature} key={feature._key} />;
      })}
    </ul>
  );
}

function FeatureItem({ feature }: { feature?: ArrayOfImageTitleAndText }) {
  if (!feature) return null;

  return (
    <Flex as="li">
      <FeatureIcon />
      <div className="max-w-xs">
        <Text weight="bold">{feature?.title}</Text>
        <Text muted className="leading-loose ">
          {feature?.plainText}
        </Text>
      </div>
    </Flex>
  );
}

function FeatureIcon() {
  return (
    <svg
      className="w-8 h-8 mr-3 text-primary"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
      />
    </svg>
  );
}

function ImageGallery({ images }: { images?: any[] }) {
  if (!images || images?.length === 0) return null;

  return (
    <div className="items-center w-full px-4 sm:flex md:px-0 lg:w-1/2">
      <div className="mb-5 sm:mb-0 sm:w-1/2">
        {images?.[0]?.image && (
          <Image
            className="object-cover overflow-hidden rounded-xl"
            src={`${images?.[0]?.image}`}
            width={640}
            height={800}
            sizes="(max-width: 639px) 100vw, (min-width: 640px) 30vw"
            alt={images?.[0]?.alt ?? "features-image-1"}
          />
        )}
        {images?.[1]?.image && (
          <Image
            className="object-cover mt-6 overflow-hidden rounded-xl"
            src={`${images?.[1]?.image}`}
            width={640}
            height={800}
            sizes="(max-width: 639px) 100vw, (min-width: 640px) 30vw"
            alt={images?.[1]?.alt ?? "features-image-2"}
          />
        )}
      </div>
      {images?.[2]?.image && (
        <Image
          className="object-cover overflow-hidden rounded-xl sm:ml-6 sm:w-1/2"
          src={`${images?.[2]?.image}`}
          width={640}
          height={800}
          sizes="(max-width: 639px) 100vw, (min-width: 640px) 30vw"
          alt={images?.[2]?.alt ?? "features-image-3"}
        />
      )}
    </div>
  );
}

export { Features_H };
