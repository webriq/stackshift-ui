import { Heading } from "@webriq-test/heading";
import { Text } from "@webriq-test/text";
import { Button } from "@webriq-test/button";
import { Image } from "@webriq-test/image";
import { Section } from "@webriq-test/section";
import { Container } from "@webriq-test/container";
import { Flex } from "@webriq-test/flex";
import { LabeledRoute } from "./types";
import { FeaturesProps } from ".";

export default function Features_F({
  caption,
  title,
  description,
  images,
  primaryButton,
}: FeaturesProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Flex wrap align="center">
          <Flex direction="col" className="w-full mb-12 lg:mb-0 lg:w-1/2">
            <FeaturesInfo caption={caption} title={title} description={description} />
            <CTAButton primaryButton={primaryButton} />
          </Flex>
          <ImageGallery images={images} />
        </Flex>
      </Container>
    </Section>
  );
}

function FeaturesInfo({
  caption,
  title,
  description,
}: {
  caption?: string;
  title?: string;
  description?: string;
}) {
  return (
    <Container maxWidth={448} className="ml-0">
      {caption && (
        <Text weight="bold" className="font-bold text-secondary">
          {caption}
        </Text>
      )}
      {title && (
        <Heading fontSize="3xl" className="mb-6">
          {title}
        </Heading>
      )}
      {description && (
        <Text muted className="mb-6 leading-loose">
          {description}
        </Text>
      )}
    </Container>
  );
}

function CTAButton({ primaryButton }: { primaryButton?: LabeledRoute }) {
  if (!primaryButton?.label) return null;

  return (
    <Button as="link" link={primaryButton} ariaLabel={primaryButton?.label}>
      {primaryButton?.label}
    </Button>
  );
}

function ImageGallery({ images }: { images?: any[] }) {
  if (!images || images?.length === 0) return null;

  function renderImage(
    image?: string,
    alt?: string,
    width?: number,
    height?: number,
    className?: string,
  ) {
    return (
      <div className={`overflow-hidden rounded ${className}`}>
        <Image
          className="object-cover w-full h-auto"
          src={image}
          sizes="100vw"
          width={width}
          height={height}
          alt={alt ?? "feature-image"}
        />
      </div>
    );
  }

  return (
    <div className="w-full lg:w-1/2">
      <div className="items-end mb-4 lg:flex lg:flex-wrap">
        <div className="h-full px-3 mb-4 lg:mb-0 lg:w-2/3">
          {images[0]?.image && renderImage(images[0].image, images[0].alt, 356, 192, "h-[269px]")}
        </div>
        <div className="h-full px-3 lg:w-1/3">
          {images[1]?.image && renderImage(images[1].image, images[1].alt, 166, 128, "")}
        </div>
      </div>
      <div className="items-start mb-4 lg:flex lg:flex-wrap">
        <div className="h-full px-3 mb-4 lg:mb-0 lg:w-1/3">
          {images[2]?.image &&
            renderImage(images[2].image, images[2].alt, 166, 128, "h-[269px] lg:h-[126px]")}
        </div>
        <div className="h-full px-3 lg:w-2/3">
          {images[3]?.image && renderImage(images[3].image, images[3].alt, 356, 192, "")}
        </div>
      </div>
    </div>
  );
}

export { Features_F };
