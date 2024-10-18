import React from "react";
import { Heading } from "@stackshift-ui/heading";
import { Text } from "@stackshift-ui/text";
import { Card } from "@stackshift-ui/card";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { ArrayOfImageTitleAndText } from "./types";
import { FeaturesProps } from ".";

export default function Features_D({ caption, title, features }: FeaturesProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Container maxWidth={448} className="mb-8 text-center">
          <CaptionAndTitleSection caption={caption} title={title} />
        </Container>
        <FeatureItems features={features} />
      </Container>
    </Section>
  );
}

function CaptionAndTitleSection({ caption, title }: { caption?: string; title?: string }) {
  return (
    <React.Fragment>
      {caption ? (
        <Text weight="bold" className="text-primary">
          {caption}
        </Text>
      ) : null}
      {title ? <Heading fontSize="3xl">{title}</Heading> : null}
    </React.Fragment>
  );
}

function FeatureItems({ features }: { features?: ArrayOfImageTitleAndText[] }) {
  if (!features) return null;

  return (
    <Flex wrap justify="center">
      {features.map(feature => (
        <FeatureItem feature={feature} key={feature._key} />
      ))}
    </Flex>
  );
}

function FeatureItem({ feature }: { feature: ArrayOfImageTitleAndText }) {
  return (
    <div className="w-full px-4 mt-8 lg:mb-0 lg:w-1/3">
      <Card className="h-full px-6 py-12 text-center">
        <div className="self-start inline-block p-3 mb-6 rounded-lg bg-secondary-foreground md:p-5">
          {feature?.mainImage?.image && (
            <Image
              className="object-scale-down"
              src={`${feature?.mainImage?.image}`}
              width={40}
              height={40}
              alt={feature?.mainImage?.alt ?? `features-image-`}
            />
          )}
        </div>
        <Text fontSize="xl" weight="bold" className="px-8 mb-4">
          {feature?.title}
        </Text>
        <Text muted>{feature?.plainText}</Text>
      </Card>
    </div>
  );
}

export { Features_D };
