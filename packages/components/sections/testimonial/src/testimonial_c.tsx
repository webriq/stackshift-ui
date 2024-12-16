import { Card } from "@stackshift-ui/card";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import { SwiperButton } from "@stackshift-ui/swiper-button";
import { Text } from "@stackshift-ui/text";
import React from "react";
import { TestimonialProps } from ".";
import { Testimonial as iTestimonial } from "./types";

export default function Testimonial_C({ caption, title, testimonials }: TestimonialProps) {
  const [testimony, setTestimony] = React.useState(testimonials);

  const slider = (action: "next" | "prev") => {
    setTestimony(prevState => {
      if (!prevState || prevState.length === 0) return prevState;

      // Create a new array to avoid mutating the original state
      const updatedTestimony = [...prevState];

      if (action === "next") {
        // Remove the first element and push it to the end
        const firstItem = updatedTestimony.shift();
        if (firstItem) updatedTestimony.push(firstItem);
      } else if (action === "prev") {
        // Remove the last element and push it to the front
        const lastItem = updatedTestimony.pop();
        if (lastItem) updatedTestimony.unshift(lastItem);
      }

      return updatedTestimony;
    });
  };

  return (
    <Section className="py-10 overflow-hidden bg-background lg:py-20">
      <Container className="pb-6 lg:pb-16" maxWidth={1280}>
        <Flex
          wrap
          align="center"
          justify="center"
          className="text-center lg:justify-between lg:text-left">
          <TestimonialHeader caption={caption} title={title} />
          <TestimonialSwiper testimony={testimony} slider={slider} />
        </Flex>
      </Container>
      <TestimonialList testimony={testimony} />
    </Section>
  );
}

function TestimonialHeader({ caption, title }: { caption?: string; title?: string }) {
  return (
    <div className="w-full mb-4 lg:mb-0 lg:w-4/5">
      <Text weight="bold" className="text-secondary">
        {caption}
      </Text>
      <Heading fontSize="3xl">{title}</Heading>
    </div>
  );
}

function TestimonialSwiper({
  testimony,
  slider,
}: {
  testimony?: iTestimonial[];
  slider: (action: "next" | "prev") => void;
}) {
  if (!testimony) return null;

  return (
    <div className="w-full lg:w-1/5">
      {testimony && testimony?.length >= 4 && (
        <SwiperButton
          type="left"
          className="order-last p-5 mr-4 bg-white lg:order-first"
          onClick={() => slider("prev")}
          ariaLabel="Show previous testimonial"
        />
      )}
      {testimony && testimony?.length >= 4 && (
        <SwiperButton
          type="right"
          className="order-last p-5 bg-white"
          onClick={() => slider("next")}
          ariaLabel="Show next testimonial"
        />
      )}
    </div>
  );
}

function TestimonialList({ testimony }: { testimony?: iTestimonial[] }) {
  if (!testimony) return null;

  return (
    <Flex className="relative">
      {testimony && (
        <Flex wrap className="!items-stretch max-w-6xl px-2 mx-auto">
          {testimony
            ?.slice(0, 3)
            ?.map((item, index) => <TestimonialItem item={item} index={index} key={item?._key} />)}
        </Flex>
      )}
    </Flex>
  );
}

function TestimonialItem({ item, index }: { item?: iTestimonial; index: number }) {
  if (!item) return null;

  return (
    <div className="flex-1 w-full px-3 mb-4 lg:w-1/3" key={index}>
      <Card className="p-8 text-center h-full items-center" borderRadius="md">
        <Text className="mb-8 leading-loose" muted>
          {item?.testimony}
        </Text>
        {item?.mainImage?.image && (
          <div className="w-[48px] h-[48px] mx-auto border-0">
            <Image
              className="w-full h-full object-cover rounded-full"
              width={48}
              height={48}
              src={`${item?.mainImage?.image}`}
              alt={item?.mainImage?.alt ?? `testimonial-source-${item?.name}-profile-image`}
            />
          </div>
        )}
        <Text className="mb-1" fontSize="2xl" weight="bold">
          {item?.name}
        </Text>
        <Text muted>{item?.jobTitle}</Text>
      </Card>
    </div>
  );
}

export { Testimonial_C };
