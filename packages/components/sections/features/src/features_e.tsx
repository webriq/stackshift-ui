import React from "react";
import { Heading } from "@stackshift-ui/heading";
import { Text } from "@stackshift-ui/text";
import { Card } from "@stackshift-ui/card";
import { Button } from "@stackshift-ui/button";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { FeaturedItem } from "./types";
import { FeaturesProps } from ".";

export default function Features_E({ featuredItems }: FeaturesProps) {
  //for image carousel
  let [item, setItem] = React.useState<number>(0);

  const slider = (action: string) => {
    if (featuredItems) {
      action === "next"
        ? item !== featuredItems.length - 1
          ? setItem(prevState => prevState + 1)
          : setItem(0)
        : item >= 1
          ? setItem(prevState => prevState - 1)
          : setItem(featuredItems.length - 1);
    }
  };

  return (
    <Section className="py-20 overflow-x-auto bg-background">
      <Container maxWidth={1280}>
        <Flex className="relative">
          <SliderControls featuredItems={featuredItems} slider={slider}>
            <div className="order-1 w-full ml-auto xl:w-4/5">
              <ImageSection featuredItems={featuredItems} item={item} />
              <FeaturesInfo featuredItems={featuredItems} item={item} />
            </div>
          </SliderControls>
        </Flex>
      </Container>
    </Section>
  );
}

function ImageSection({ featuredItems, item }: { featuredItems?: FeaturedItem[]; item: number }) {
  if (!featuredItems?.[item]?.mainImage?.image) return null;
  return (
    <div className="mx-auto overflow-hidden rounded-md md:max-w-xl xl:max-w-4xl">
      <Image
        className="relative object-cover"
        src={`${featuredItems?.[item]?.mainImage?.image}`}
        sizes="100vw"
        width={896}
        height={575}
        alt={featuredItems?.[item]?.mainImage?.alt ?? `features-image-${item}`}
      />
    </div>
  );
}

function FeaturesInfo({ featuredItems, item }: { featuredItems?: FeaturedItem[]; item: number }) {
  if (!featuredItems) return null;

  return (
    <Card className="top-0 left-0 max-w-xl p-6 mx-auto text-center bg-white md:mt-12 md:p-10 lg:mt-12 lg:p-10 xl:absolute xl:mx-0 xl:mt-20 xl:py-24">
      <Text weight="bold" className="text-xs lg:text-md md:text-sm xl:text-lg text-secondary">
        {featuredItems?.[item]?.subtitle && featuredItems?.[item]?.subtitle}
      </Text>
      <Heading fontSize="3xl">
        {featuredItems?.[item]?.title && featuredItems?.[item]?.title}
      </Heading>
      <Text
        muted
        className="text-xs leading-loose text-center md:mt-5 md:text-sm lg:mt-5 lg:text-sm">
        {featuredItems?.[item]?.description && featuredItems?.[item]?.description}
      </Text>
    </Card>
  );
}

function SliderControls({
  featuredItems,
  children,
  slider,
}: {
  featuredItems?: FeaturedItem[];
  children: React.ReactNode;
  slider: (action: string) => void;
}) {
  if (!featuredItems) return null;

  return (
    <React.Fragment>
      <div className="absolute left-0 z-40 items-center mt-20 -mx-3 order-0 md:mt-40 lg:mt-60 xl:-mx-6 xl:flex">
        {featuredItems?.length >= 2 && (
          <Button
            as="button"
            ariaLabel="Show Previous Feature"
            className="z-10 p-4 text-white "
            onClick={() => slider("prev")}>
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
          </Button>
        )}
      </div>
      {children}
      <div className="absolute right-0 z-40 items-center order-2 mt-20 -mx-3 md:mt-40 lg:mt-60 xl:-mx-6 xl:flex">
        {featuredItems?.length >= 2 && (
          <Button
            as="button"
            ariaLabel="Show Next Feature"
            className="p-4 text-white "
            onClick={() => slider("next")}>
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Button>
        )}
      </div>
    </React.Fragment>
  );
}

export { Features_E };
