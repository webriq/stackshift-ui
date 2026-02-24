import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import { SwiperButton } from "@stackshift-ui/swiper-button";
import { Text } from "@stackshift-ui/text";
import React, { useState } from "react";
import { AppPromoProps } from ".";
import { logoLink } from "./helper";
import { Images, Logo } from "./types";

export default function AppPromo_A({ logo, subtitle, title, images = [] }: AppPromoProps) {
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
    <Section className="pt-16 overflow-hidden bg-background">
      <Container className="relative text-center" maxWidth={448}>
        <LogoSection logo={logo} />
        <SubtitleAndTitleText subtitle={subtitle} title={title} />
        <PromoImagesGroup images={images} />

        {/* mobile image view less than 640px */}
        <SwiperButtons arrowLeftClick={arrowLeftClick} arrowRightClick={arrowRightClick}>
          <MobileImageView
            image={images[currentPosition].image}
            alt={images[currentPosition].alt ?? `appPromo-variantA-image-${currentPosition}`}
          />
        </SwiperButtons>
      </Container>
    </Section>
  );
}

function LogoSection({ logo }: { logo?: Logo }) {
  if (!logo?.image) return null;

  return (
    <Link
      aria-label={`Go to ${logoLink(logo) === "/" ? "home page" : logoLink(logo)}`}
      className="inline-block p-5 rounded-lg"
      href={logoLink(logo)}
      target={logo?.linkTarget}
      rel={logo?.linkTarget === "_blank" ? "noopener noreferrer" : ""}>
      <Image src={logo?.image} width={50} height={56} alt={logo?.alt ?? "appPromo-logo"} />
    </Link>
  );
}

function SubtitleAndTitleText({ subtitle, title }: { subtitle?: string; title?: string }) {
  return (
    <React.Fragment>
      {subtitle ? <Text className="mb-3 text-secondary">{subtitle}</Text> : null}
      {title ? (
        <Heading type="h1" fontSize="3xl" className="mb-8">
          {title}
        </Heading>
      ) : null}
    </React.Fragment>
  );
}

interface PromoImageProps {
  src: any;
  alt: string;
  positionClass: string;
}

function PromoImage({ src, alt, positionClass }: PromoImageProps) {
  if (!src) return null;

  return (
    <Image
      className={`absolute object-contain h-80 rounded-t-2xl ${positionClass}`}
      src={src}
      sizes="218px"
      width={218}
      height={320}
      alt={alt}
    />
  );
}

function PromoImagesGroup({ images }: { images: Images[] }) {
  return (
    <div className="hidden h-72 sm:block">
      {images?.[0]?.image ? (
        <PromoImage
          src={images?.[0]?.image}
          alt={images?.[0]?.alt ?? "appPromo-variantA-image-1"}
          positionClass="bottom-0 z-20 -mb-10 transform -translate-x-1/2 left-1/2"
        />
      ) : null}
      {images?.[1]?.image ? (
        <PromoImage
          src={images?.[1]?.image}
          alt={images?.[1]?.alt ?? "appPromo-variantA-image-2"}
          positionClass="bottom-0 left-0 -mb-24"
        />
      ) : null}
      {images?.[2]?.image ? (
        <PromoImage
          src={images?.[2]?.image}
          alt={images?.[2]?.alt ?? "appPromo-variantA-image-3"}
          positionClass="bottom-0 right-0 -mb-24"
        />
      ) : null}
    </div>
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
    <Flex justify="between" align="center" className="mb-16 sm:hidden">
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

export { AppPromo_A };
