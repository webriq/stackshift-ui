import { Button } from "@stackshift-ui/button";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import { SwiperPagination } from "@stackshift-ui/swiper-pagination";
import { buildSanityLink } from "@stackshift-ui/system";
import { Text } from "@stackshift-ui/text";
import { useEffect, useState } from "react";
import { HeaderProps } from ".";

export default function Header_G({
  mediaItems,
  title,
  description,
  primaryButton,
  secondaryButton,
  position = "center",
}: HeaderProps) {
  if (!mediaItems?.length) return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = mediaItems[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % mediaItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [mediaItems.length]);

  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };

  const getAlignmentClasses = () => {
    switch (position) {
      case "left":
        return "items-start text-left";
      case "right":
        return "items-end text-right";
      default:
        return "items-center text-center";
    }
  };

  const primaryButtonLink = buildSanityLink({
    type: "linkInternal",
    internalLink: primaryButton?.link?.target === "_self" ? primaryButton?.link?.route : "",
    externalLink: primaryButton?.link?.target != "_self" ? primaryButton?.link?.route : "",
  });

  const secondaryButtonLink = buildSanityLink({
    type: "linkInternal",
    internalLink: secondaryButton?.link?.target === "_self" ? secondaryButton?.link?.route : "",
    externalLink: secondaryButton?.link?.target != "_self" ? secondaryButton?.link?.route : "",
  });

  return (
    <Section>
      <div className="relative w-full h-[80vh] overflow-hidden">
        {currentItem.video ? (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={currentItem.video}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${currentItem.image})` }}
          />
        )}

        <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

        <div
          className={`relative z-10 flex p-8 justify-${position === "right" ? "end" : position} items-center h-full`}>
          <div
            className={`max-w-[600px] flex flex-col justify-center ${getAlignmentClasses()} px-4`}>
            <Heading className="text-white uppercase mb-10">
              {title?.includes("Introducing") ? (
                <>
                  <span className="md:text-3xl text-2xl">
                    {title.split(" ").slice(0, 1).join(" ")}
                  </span>
                  <br />
                  <span>{title.split(" ").slice(1).join(" ")}</span>
                </>
              ) : (
                title
              )}
            </Heading>
            {description && <Text className="text-white mb-10">{description}</Text>}
            <Flex
              align="center"
              justify="center"
              gap={2}
              direction="col"
              className="lg:justify-start md:flex-row">
              {primaryButton?.label && (
                <Button variant="default" aria-label={primaryButton?.label} asChild>
                  <Link
                    href={primaryButtonLink.href}
                    target={primaryButtonLink.target}
                    rel={primaryButtonLink.rel}>
                    {primaryButton?.label}
                  </Link>
                </Button>
              )}
              {secondaryButton?.label && (
                <Button
                  variant="secondary"
                  className="bg-white border hover:bg-gray-300 inline-block font-default text-default transition duration-200 rounded-global"
                  aria-label={secondaryButton?.label}
                  asChild>
                  <Link
                    href={secondaryButtonLink.href}
                    target={secondaryButtonLink.target}
                    rel={secondaryButtonLink.rel}>
                    {secondaryButton?.label}
                  </Link>
                </Button>
              )}
            </Flex>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {mediaItems.map((_, index) => (
            <SwiperPagination
              key={index}
              colorScheme="white"
              isActive={index === currentIndex}
              onClick={() => handleSlideChange(index)}
              ariaLabel={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export { Header_G };
