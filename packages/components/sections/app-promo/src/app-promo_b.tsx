import React from "react";
import { Heading } from "@stackshift-ui/heading";
import { SwiperButton } from "@stackshift-ui/swiper-button";
import { Text } from "@stackshift-ui/text";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Images, StatItems } from "./types";
import { AppPromoProps } from ".";

export default function AppPromo_B({
  subtitle,
  title,
  description,
  statistics,
  images,
}: AppPromoProps) {
  //for image carousel
  let [currentPosition, setCurrentPosition] = React.useState(0); // Initial image index value

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
    <Section className="pt-16 overflow-hidden bg-background">
      <Container className="relative text-center" maxWidth={1280}>
        <div className="w-full mt-8 lg:w-1/2">
          <SubtitleTitleDescriptionText
            subtitle={subtitle}
            title={title}
            description={description}
          />
          <StatisticsData statistics={statistics} />
        </div>
        <Flex align="center" justify="center" gap={8} className="w-full 2xl:w-1/2">
          <ImageCarousel
            images={images}
            currentPosition={currentPosition}
            arrowLeftClick={arrowLeftClick}
            arrowRightClick={arrowRightClick}
          />
        </Flex>
      </Container>
    </Section>
  );
}

function SubtitleTitleDescriptionText({
  subtitle,
  title,
  description,
}: {
  subtitle?: string;
  title?: string;
  description?: string;
}) {
  return (
    <React.Fragment>
      {subtitle ? (
        <Text weight="bold" className="text-center md:text-left text-secondary">
          {subtitle}
        </Text>
      ) : null}
      {title ? (
        <Heading type="h1" fontSize="3xl" className="mt-3 text-center md:text-left">
          {title}
        </Heading>
      ) : null}
      {description ? (
        <Text className="mt-3 mb-10 leading-loose text-center break-words md:text-left" muted>
          {description}
        </Text>
      ) : null}
    </React.Fragment>
  );
}

function StatisticsData({ statistics }: { statistics?: StatItems[] }) {
  if (!statistics || statistics?.length <= 0) return null;

  return (
    <React.Fragment>
      <Flex wrap>
        {statistics?.map((items, index) => (
          <div className="w-full mb-8 text-center md:text-left lg:w-1/2" key={index}>
            <Text muted className="mb-3">
              {items?.label}
            </Text>
            <span className="text-xl font-bold">{items?.value}</span>
          </div>
        ))}
      </Flex>
    </React.Fragment>
  );
}

interface ImageCarouselProps {
  images?: Images[];
  currentPosition: number;
  arrowLeftClick: () => void;
  arrowRightClick: () => void;
}

function ImageCarousel({
  images,
  currentPosition,
  arrowLeftClick,
  arrowRightClick,
}: ImageCarouselProps) {
  if (!images) return null;
  return (
    <React.Fragment>
      {images.length > 1 ? (
        <SwiperControls arrowLeftClick={arrowLeftClick} arrowRightClick={arrowRightClick}>
          <ImagesSection images={images} currentPosition={currentPosition} />
        </SwiperControls>
      ) : (
        <ImagesSection images={images} currentPosition={currentPosition} />
      )}
    </React.Fragment>
  );
}

function SwiperControls({
  children,
  arrowLeftClick,
  arrowRightClick,
}: {
  children: React.ReactNode;
  arrowLeftClick: () => void;
  arrowRightClick: () => void;
}) {
  return (
    <React.Fragment>
      <SwiperButton
        variant="variant_a"
        type="left"
        ariaLabel="Left Arrow button"
        onClick={arrowLeftClick}
      />
      {children}
      <SwiperButton
        variant="variant_a"
        type="right"
        ariaLabel="Right Arrow button"
        onClick={arrowRightClick}
      />
    </React.Fragment>
  );
}

function ImagesSection({
  images,
  currentPosition,
}: {
  images?: Images[];
  currentPosition: number;
}) {
  if (!images?.[currentPosition]?.image) return null;

  return (
    <div className="object-contain w-1/2 mr-2">
      <Image
        className="object-cover w-full h-full mx-auto mb-8 xl:mb-0"
        src={`${images[currentPosition].image}`}
        sizes="100vw"
        width={500}
        height={850}
        alt={images[currentPosition]?.alt ?? `appPromo-variantB-image-${currentPosition}`}
      />
    </div>
  );
}

export { AppPromo_B };
