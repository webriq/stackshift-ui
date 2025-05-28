import { Button } from "@stackshift-ui/button";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Section } from "@stackshift-ui/section";
import { SwiperPagination } from "@stackshift-ui/swiper-pagination";
import { Text } from "@stackshift-ui/text";
import { useEffect, useState } from "react";
import { HeaderProps } from ".";

export default function Header_G({
  images,
  title,
  description,
  primaryButton,
  secondaryButton,
  position = "center",
}: HeaderProps) {
  if (!images?.length) return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = images[currentIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

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
              justify={position === "center" ? "center" : position === "right" ? "end" : "start"}
              direction="row"
              align="center"
              wrap
              gap={4}>
              {primaryButton?.label && (
                <Button
                  as="link"
                  link={primaryButton}
                  ariaLabel={primaryButton?.ariaLabel}
                  variant="solid"
                  className="text-white border text-sm uppercase cursor-pointer px-10 py-4 hover:bg-white hover:text-primary transition-all duration-500 ease-in-out">
                  {primaryButton.label}
                </Button>
              )}
              {secondaryButton?.label && (
                <Button
                  as="link"
                  link={secondaryButton}
                  variant="solid"
                  ariaLabel={secondaryButton?.ariaLabel}
                  className="text-white border text-sm uppercase cursor-pointer px-10 py-4 hover:bg-white hover:text-secondary transition-all duration-500 ease-in-out">
                  {secondaryButton.label}
                </Button>
              )}
            </Flex>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, index) => (
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
