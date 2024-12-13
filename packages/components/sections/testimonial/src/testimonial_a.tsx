import { Card } from "@stackshift-ui/card";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import { SwiperPagination } from "@stackshift-ui/swiper-pagination";
import { Text } from "@stackshift-ui/text";
import React from "react";
import { TestimonialProps } from ".";
import { Testimonial as iTestimonial } from "./types";

export default function Testimonial_A({ testimonials }: TestimonialProps) {
  const [testimony, setTestimony] = React.useState(0);

  const slider = (index: number) => {
    setTestimony(index);
  };

  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Card className="py-10" borderRadius="md">
          <Flex wrap align="center" justify="center" className="max-w-5xl p-4">
            <AvatarSection testimonials={testimonials} testimony={testimony} />
            <TestimonyContent testimonials={testimonials} testimony={testimony} slider={slider} />
          </Flex>
        </Card>
      </Container>
    </Section>
  );
}

function AvatarSection({
  testimonials,
  testimony,
}: {
  testimonials?: iTestimonial[];
  testimony: number;
}) {
  if (!testimonials?.[testimony]) return null;

  return (
    <div className="w-full mb-6 text-center lg:w-1/3">
      {testimonials?.[testimony]?.mainImage?.image ? (
        <Image
          width={128}
          height={128}
          className="mx-auto border-0 w-[128px] h-[128px] object-cover rounded-full"
          src={`${testimonials?.[testimony]?.mainImage?.image}`}
          alt={
            testimonials?.[testimony]?.mainImage?.alt ??
            `testimonial-source-${testimonials?.[testimony]?.name}-profile-image`
          }
        />
      ) : null}
      {testimonials?.[testimony]?.name ? (
        <Text className="text-xl">{testimonials?.[testimony]?.name}</Text>
      ) : null}
      {testimonials?.[testimony]?.jobTitle ? (
        <Text className="text-primary">{testimonials?.[testimony]?.jobTitle}</Text>
      ) : null}
    </div>
  );
}

function TestimonyContent({
  testimonials,
  testimony,
  slider,
}: {
  testimonials?: any;
  testimony: number;
  slider: (index: number) => void;
}) {
  if (!testimonials?.[testimony]) return null;

  return (
    <div className="w-full lg:w-2/3">
      <svg
        className="w-10 h-10 mb-4 text-primary"
        viewBox="0 0 32 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.2418 12.749C9.45369 12.522 8.66554 12.4069 7.89887 12.4069C6.71496 12.4069 5.72709 12.6775 4.96109 13.0088C5.69957 10.3053 7.47358 5.6405 11.0075 5.11517C11.3348 5.0665 11.603 4.82986 11.6923 4.51131L12.4646 1.74875C12.5298 1.51512 12.4912 1.26505 12.3579 1.06231C12.2246 0.859563 12.0105 0.724288 11.7705 0.691393C11.5097 0.655812 11.2438 0.637686 10.9803 0.637686C6.73846 0.637686 2.53756 5.06516 0.764895 11.4046C-0.275679 15.1238 -0.580802 20.7154 1.98237 24.2349C3.41668 26.2043 5.50924 27.2559 8.20198 27.361C8.21305 27.3613 8.2238 27.3616 8.23487 27.3616C11.5573 27.3616 14.5035 25.1241 15.3997 21.9208C15.9351 20.0058 15.6931 17.9975 14.7176 16.2644C13.7526 14.5508 12.1632 13.3018 10.2418 12.749Z"
          fill="currentColor"
        />
        <path
          d="M31.0396 16.2648C30.0746 14.5508 28.4852 13.3018 26.5638 12.749C25.7757 12.522 24.9875 12.4069 24.2212 12.4069C23.0373 12.4069 22.0491 12.6775 21.2831 13.0088C22.0215 10.3053 23.7955 5.6405 27.3298 5.11517C27.6571 5.0665 27.9249 4.82986 28.0146 4.51131L28.7869 1.74875C28.8521 1.51512 28.8135 1.26505 28.6802 1.06231C28.5473 0.859563 28.3331 0.724288 28.0928 0.691393C27.8323 0.655812 27.5664 0.637686 27.3026 0.637686C23.0608 0.637686 18.8599 5.06516 17.0869 11.4046C16.0466 15.1238 15.7415 20.7154 18.305 24.2356C19.739 26.2046 21.8319 27.2566 24.5243 27.3613C24.5354 27.3616 24.5461 27.362 24.5575 27.362C27.8796 27.362 30.8261 25.1244 31.7224 21.9211C32.2571 20.0061 32.0147 17.9975 31.0396 16.2648Z"
          fill="currentColor"
        />
      </svg>
      <Heading>{testimonials?.[testimony]?.testimony}</Heading>
      {testimonials?.length > 1 ? (
        <React.Fragment>
          {testimonials.map((item: iTestimonial, index: number) => (
            <SwiperPagination
              colorScheme="blue"
              isActive={index === testimony}
              ariaLabel={`Show Testimonial ${index}`}
              key={index}
              onClick={() => slider(index)}
            />
          ))}
        </React.Fragment>
      ) : null}
    </div>
  );
}

export { Testimonial_A };
