import React from "react";
import { Heading } from "@webriq-test/heading";
import { Text } from "@webriq-test/text";
import { Card } from "@webriq-test/card";
import { Image } from "@webriq-test/image";
import { Section } from "@webriq-test/section";
import { Container } from "@webriq-test/container";
import { Flex } from "@webriq-test/flex";
import { ArrayOfImageTitleAndText } from "./types";
import { FeaturesProps } from ".";

export default function Features_B({ caption, title, description, features, tags }: FeaturesProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Flex wrap align="center">
          <div className="w-full mb-12 lg:mb-0 lg:w-1/2">
            <Container maxWidth={448}>
              <FeatureInfo caption={caption} title={title} description={description} />
              <TagList tags={tags} />
            </Container>
          </div>
          <FeaturesLists features={features} />
        </Flex>
      </Container>
    </Section>
  );
}

function FeatureInfo({
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
      {caption && (
        <Text weight="bold" className="text-primary">
          {caption}
        </Text>
      )}
      {title && <Heading fontSize="3xl">{title}</Heading>}
      {description && (
        <Text muted className="mb-6 leading-loose">
          {description}
        </Text>
      )}
    </React.Fragment>
  );
}

function TagList({ tags }: { tags?: string[] }) {
  if (!tags) return null;

  return (
    <ul>
      {tags &&
        tags.map(item => (
          <li className="flex mb-4" key={item}>
            <svg
              className="w-6 h-6 mr-2 text-secondary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <Text muted weight="bold">
              {item}
            </Text>
          </li>
        ))}
    </ul>
  );
}

function FeaturesLists({ features }: { features?: ArrayOfImageTitleAndText[] }) {
  if (!features) return null;

  return (
    <Flex wrap className="w-full lg:w-1/2">
      {features &&
        features?.map((feature, index) => (
          <div
            className={`w-full px-4 mb-8 md:w-1/2 ${index % 2 === 0 ? `lg:mb-0` : "lg:mt-12"}`}
            key={index}>
            <Card className="py-6 pl-6 pr-4 mb-8">
              <span className="inline-block p-3 mb-4 rounded-lg bg-secondary-foreground">
                {feature?.mainImage?.image && (
                  <Image
                    className="object-scale-down"
                    src={`${feature?.mainImage?.image}`}
                    width={40}
                    height={40}
                    alt={feature?.mainImage?.alt ?? `features-image-${index}`}
                  />
                )}
              </span>
              <Text weight="bold" className="mb-2 text-2xl">
                {feature?.title}
              </Text>
              <Text muted className="leading-loose">
                {feature?.plainText}
              </Text>
            </Card>
          </div>
        ))}
    </Flex>
  );
}

export { Features_B };
