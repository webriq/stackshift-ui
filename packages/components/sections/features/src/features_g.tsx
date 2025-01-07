import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import React from "react";
import { FeaturesProps } from ".";

export default function Features_G({ caption, title, description, images, tags }: FeaturesProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Flex wrap align="center">
          <div className="w-full px-4 mb-12 lg:mb-0 lg:w-1/2">
            <Container maxWidth={448}>
              <FeaturesInfo caption={caption} title={title} description={description} />
              <TagList tags={tags} />
            </Container>
          </div>
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
    <React.Fragment>
      {caption && (
        <Text weight="bold" className="text-secondary">
          {caption}
        </Text>
      )}
      {title && (
        <Heading fontSize="3xl" className="mb-3">
          {title}
        </Heading>
      )}
      {description && (
        <Text muted className="mb-6 leading-loose ">
          {description}
        </Text>
      )}
    </React.Fragment>
  );
}

function TagList({ tags }: { tags?: string[] }) {
  if (!tags) return null;

  return (
    <ul className="font-bold text-gray-500">
      {tags.map(item => (
        <FeatureItem item={item} />
      ))}
    </ul>
  );
}

function FeatureItem({ item }: { item?: string }) {
  if (!item) return null;

  return (
    <Flex as="li" align="center" className="mb-2 ">
      <svg
        className="w-5 h-5 mr-2 text-primary-foreground"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      <span>{item}</span>
    </Flex>
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
      <div className={`overflow-hidden ${className}`}>
        <Image
          className="object-cover w-full h-auto rounded-md"
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
          {images[0]?.image && renderImage(images[0].image, images[0].alt, 356, 192, "h-full")}
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

export { Features_G };
