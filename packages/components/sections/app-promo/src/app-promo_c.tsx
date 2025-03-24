import React, { useState } from "react";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import { SwiperButton } from "@stackshift-ui/swiper-button";
import { Text } from "@stackshift-ui/text";
import { AppPromoProps } from ".";
import { Images } from "./types";

export default function AppPromo_C({
  subtitle,
  title,
  description,
  features,
  images,
}: AppPromoProps) {
  //for image carousel
  let [currentPosition, setCurrentPosition] = useState(0); // Initial image index value

  const arrowRightClick = () => {
    if (images?.length) {
      currentPosition !== images.length - 1 // Check index length
        ? setCurrentPosition(currentPosition + 1)
        : setCurrentPosition((currentPosition = 0));
    }
  };

  const arrowLeftClick = () => {
    if (images?.length) {
      currentPosition !== 0 // Check index length
        ? setCurrentPosition(currentPosition - 1)
        : setCurrentPosition((currentPosition = images.length - 1));
    }
  };

  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Flex align="center" className="flex flex-col lg:flex-row items-center justify-start gap-8">
          <TextSection
            subtitle={subtitle}
            title={title}
            description={description}
            features={features}
          />
          <ImageSection images={images} />
        </Flex>
        {/* mobile image view less than 640px */}
        {images && (
          <SwiperButtons arrowLeftClick={arrowLeftClick} arrowRightClick={arrowRightClick}>
            <MobileImageView
              image={images[currentPosition].image}
              alt={images[currentPosition].alt ?? `appPromo-variantC-image-${currentPosition}`}
            />
          </SwiperButtons>
        )}
      </Container>
    </Section>
  );
}

function TextSection({
  subtitle,
  title,
  description,
  features,
}: {
  subtitle?: string;
  title?: string;
  description?: string;
  features?: string[];
}) {
  return (
    <div className="w-full lg:max-w-xl space-y-5">
      {subtitle ? (
        <Text weight="bold" className="text-sm md:text-lg lg:text-xl text-secondary">
          {subtitle}
        </Text>
      ) : null}
      {title ? (
        <Heading type="h1" fontSize="3xl">
          {title}
        </Heading>
      ) : null}
      {description ? (
        <Text muted className="text-sm md:text-lg lg:text-xl">
          {description}
        </Text>
      ) : null}
      <FeatureList features={features} />
    </div>
  );
}

function FeatureList({ features }: { features?: string[] }) {
  if (!features) return null;

  return (
    <ul className="mb-8">
      {features.map((feature, index) => (
        <Flex as="li" align="center" className="mb-3" key={index}>
          <CheckIcon />
          <Text className="text-sm md:text-lg lg:text-xl" weight="bold" muted>
            {feature}
          </Text>
        </Flex>
      ))}
    </ul>
  );
}

function ImageSection({ images }: { images?: Images[] }) {
  if (!images) return null;

  return (
    <div className="hidden sm:flex lg:flex-row items-center justify-start gap-0 w-2/3 transform -rotate-12 lg:w-1/2">
      <ImageDisplay images={images} start={0} end={1} />
      <div className="lg:w-full">
        {images
          ?.slice(1, 3)
          .map((img, index) => <ImageDisplay images={[img]} start={0} end={1} key={index} />)}
      </div>
      <ImageDisplay images={images} start={3} end={4} />
    </div>
  );
}

function ImageDisplay({ images, start, end }: { images?: Images[]; start: number; end: number }) {
  if (!images?.[start]?.image) return null;

  return (
    <div className="w-full">
      {images.slice(start, end).map((image, index) => (
        <Image
          key={index}
          className="object-cover"
          src={`${image.image}`}
          sizes="100vw"
          width={500}
          height={850}
          alt={image.alt ?? `appPromo-variantC-image-${index}`}
        />
      ))}
    </div>
  );
}

// Check Icon Component
function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 mr-2 text-primary"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MobileImageView({ image, alt }: { image: any; alt: string }) {
  if (!image) return null;

  return (
    <div className="object-contain w-1/2 mx-auto sm:hidden">
      <Image
        className="object-contain w-full h-full"
        src={image}
        sizes="(min-width: 520px) 224px, 45vw"
        width={500}
        height={850}
        alt={alt}
      />
    </div>
  );
}

function SwiperButtons({
  arrowLeftClick,
  arrowRightClick,
  children,
}: {
  arrowLeftClick: () => void;
  arrowRightClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Flex justify="between" align="center" className="mt-16 sm:hidden">
      <SwiperButton
        type="left"
        ariaLabel="Left Arrow button"
        className="order-0 md:order-0 bg-white lg:order-0 xl:order-1 2xl:order-1"
        onClick={arrowLeftClick}
      />
      {children}
      <SwiperButton
        type="right"
        ariaLabel="Right Arrow button"
        className="order-2 bg-white"
        onClick={arrowRightClick}
      />
    </Flex>
  );
}

export { AppPromo_C };
