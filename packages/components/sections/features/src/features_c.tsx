import { Card } from "@stackshift-ui/card";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import React from "react";
import { FeaturesProps } from ".";
import { ArrayOfImageTitleAndText } from "./types";

export default function Features_C({ caption, title, features }: FeaturesProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Container maxWidth={448} className="mb-16 text-center ">
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
        <Text weight="bold" className="text-secondary">
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
    <Flex wrap justify="start" className="-mx-3">
      {features.map(feature => {
        return <FeatureItem feature={feature} key={feature._key} />;
      })}
    </Flex>
  );
}

function FeatureItem({ feature }: { feature: ArrayOfImageTitleAndText }) {
  return (
    <div className="w-full px-3 mb-6 lg:w-1/2">
      <Card className="flex flex-wrap h-full p-6">
        <div className="self-start inline-block p-3 mb-4 mr-6 rounded-lg bg-secondary-foreground md:p-5 lg:mb-0">
          {feature?.mainImage?.image && (
            <Image
              className="object-scale-down"
              src={`${feature?.mainImage?.image}`}
              width={40}
              height={40}
              alt={feature?.mainImage?.alt ?? "features-main-image"}
            />
          )}
        </div>
        <div className="w-full lg:w-2/3">
          <Text fontSize="2xl" weight="bold" className="mb-2 text-gray-500">
            {feature?.title}
          </Text>
          <Text muted>{feature?.plainText}</Text>
        </div>
      </Card>
    </div>
  );
}

export { Features_C };
