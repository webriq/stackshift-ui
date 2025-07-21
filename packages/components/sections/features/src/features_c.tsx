import { Card, CardTitle } from "@stackshift-ui/card";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import { FeaturesProps } from ".";
import { ArrayOfImageTitleAndText } from "./types";

export default function Features_C({ caption, title, description, features }: FeaturesProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1800}>
        <Container maxWidth={640} className="mb-16 text-center">
          <CaptionAndTitleSection caption={caption} title={title} description={description} />
        </Container>
        <FeatureItems features={features} />
      </Container>
    </Section>
  );
}

function CaptionAndTitleSection({
  caption,
  title,
  description,
}: {
  caption?: string;
  title?: string;
  description?: string;
}) {
  return (
    <Flex direction="col" gap={3} align="center">
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
    </Flex>
  );
}

function FeatureItems({ features }: { features?: ArrayOfImageTitleAndText[] }) {
  if (!features) return null;

  return (
    <div className="lg:grid lg:grid-cols-2 gap-3">
      {features.map(feature => {
        return <FeatureItem feature={feature} key={feature._key} />;
      })}
    </div>
  );
}

function FeatureItem({ feature }: { feature: ArrayOfImageTitleAndText }) {
  return (
    <div className="w-full p-3">
      <Card className="flex h-full p-6 bg-white rounded-md">
        <div className="self-start inline-block p-3 mb-4 mr-6 rounded-lg bg-secondary/50 md:p-5 lg:mb-0">
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
        <Flex direction="col" gap={2} className="w-full">
          <CardTitle className="text-xl md:text-2xl break-normal font-bold">
            {feature?.title}
          </CardTitle>
          <Text muted className="break-all">
            {feature?.plainText}
          </Text>
        </Flex>
      </Card>
    </div>
  );
}

export { Features_C };
