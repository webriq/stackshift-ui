import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import React from "react";
import { FeaturesProps } from ".";
import { ArrayOfImageTitleAndText, Images } from "./types";

interface FeatureItemProps {
  feature: {
    caption?: string | null;
    title?: string | null;
    plainText?: string | null;
    mainImage?: Images;
  };
}

export default function Features_A({ caption, title, description, features }: FeaturesProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Container maxWidth={448} className="mb-16 text-center ">
          <CaptionAndTitleText caption={caption} title={title} description={description} />
        </Container>
        <Flex wrap>
          <FeatureItems features={features} />
        </Flex>
      </Container>
    </Section>
  );
}

function CaptionAndTitleText({
  caption,
  title,
  description,
}: {
  caption?: string;
  title?: string;
  description?: string;
}) {
  return (
    <React.Fragment>
      {caption ? (
        <Text weight="bold" className="text-secondary">
          {caption}
        </Text>
      ) : null}
      {title ? <Heading fontSize="3xl">{title}</Heading> : null}
      {description ? (
        <Text muted className="mb-6 leading-loose">
          {description}
        </Text>
      ) : null}
    </React.Fragment>
  );
}

function FeatureItems({ features }: { features?: ArrayOfImageTitleAndText[] }) {
  if (!features) return null;

  return (
    <React.Fragment>
      {features?.map(feature => {
        return <FeatureItem feature={feature} key={feature._key} />;
      })}
    </React.Fragment>
  );
}

function FeatureItem({ feature }: FeatureItemProps) {
  return (
    <div className="w-full px-4 mt-16 mb-12 md:w-1/2 lg:mb-0 lg:w-1/4">
      {feature?.mainImage?.image ? <FeatureImage feature={feature} /> : null}

      {feature?.title ? (
        <Text weight="bold" className="mb-4 text-gray-500" fontSize="xl">
          {feature?.title}
        </Text>
      ) : null}
      {feature?.plainText ? (
        <Text muted className="leading-loose">
          {feature?.plainText}
        </Text>
      ) : null}
    </div>
  );
}

function FeatureImage({ feature }: FeatureItemProps) {
  if (!feature?.mainImage?.image) return null;

  return (
    <span className="inline-block p-3 mb-4 rounded bg-secondary/50 text-primary-foreground md:mb-6">
      <Image
        className="object-scale-down"
        src={`${feature?.mainImage?.image}`}
        width={40}
        height={40}
        alt={feature?.mainImage?.alt ?? `features-image-`}
      />
    </span>
  );
}

export { Features_A };
