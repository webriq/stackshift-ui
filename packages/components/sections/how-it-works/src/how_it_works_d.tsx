import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import React from "react";
import { HowItWorksProps } from ".";
import { ArrayOfTitleAndText } from "./types";

export default function HowItWorks_D({ subtitle, title, steps }: HowItWorksProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Container maxWidth={448} className="mb-8 text-center">
          <SubtitleTitleSection subtitle={subtitle} title={title} />
        </Container>
        <StepItems steps={steps} />
      </Container>
    </Section>
  );
}

function SubtitleTitleSection({ subtitle, title }: { subtitle?: string; title?: string }) {
  return (
    <React.Fragment>
      {subtitle && (
        <Text weight="bold">
          {subtitle}
        </Text>
      )}
      {title && <Heading fontSize="3xl">{title}</Heading>}
    </React.Fragment>
  );
}

function StepItems({ steps }: { steps?: ArrayOfTitleAndText[] }) {
  if (!steps) return null;

  return (
    <Flex wrap className="relative mx-auto gap-8 md:gap-0">
      {steps?.map((step, index) => <StepItem step={step} index={index} key={step._key} />)}
    </Flex>
  );
}

function StepItem({ index, step }: { index: number; step?: ArrayOfTitleAndText }) {
  if (!step) return null;

  return (
    <div className="relative mt-20 w-full px-0 md:mb-8 md:px-10 md:w-1/2 lg:w-1/3">
      <Text
        className="absolute top-0 font-semibold -mt-20 text-primary opacity-20"
        style={{ fontSize: "8rem", width: "auto", height: "auto" }}>
        {index + 1}
      </Text>
      <Heading type="h3" fontSize="xl" className="mt-3 font-heading text-gray-500">
        {step?.title}
      </Heading>
      <Text muted className="leading-loose mt-5">
        {step?.plainText}
      </Text>
    </div>
  );
}

export { HowItWorks_D };
