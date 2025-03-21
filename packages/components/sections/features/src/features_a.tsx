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
        <Container maxWidth={640} className="mb-16 text-center">
          <CaptionAndTitleText caption={caption} title={title} description={description} />
        </Container>
        <FeatureItems features={features} />
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
    <div className="flex flex-col gap-3">
      {caption ? (
        <Text weight="bold" className="text-secondary">
          {caption}
        </Text>
      ) : null}
      {title ? <Heading fontSize="3xl">{title}</Heading> : null}
      {description ? <Text muted>{description}</Text> : null}
    </div>
  );
}

function FeatureItems({ features }: { features?: ArrayOfImageTitleAndText[] }) {
  if (!features) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {features?.map(feature => {
        return <FeatureItem feature={feature} key={feature._key} />;
      })}
    </div>
  );
}

function FeatureItem({ feature }: FeatureItemProps) {
  return (
    <div className="text-center sm:text-start p-3">
      {feature?.mainImage?.image ? <FeatureImage feature={feature} /> : null}

      {feature?.title ? (
        <Text weight="bold" className="mb-4 text-gray-500" fontSize="xl">
          {feature?.title}
        </Text>
      ) : null}
      {feature?.plainText ? <Text muted>{feature?.plainText}</Text> : null}
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
