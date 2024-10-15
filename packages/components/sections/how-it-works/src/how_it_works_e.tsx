import React from "react";
import { Heading } from "@webriq-test/heading";
import { Text } from "@webriq-test/text";
import { Section } from "@webriq-test/section";
import { Container } from "@webriq-test/container";
import { Flex } from "@webriq-test/flex";
import { HowItWorksProps } from ".";
import { ArrayOfTitleAndText } from "./types";

export default function HowItWorks_E({ subtitle, title, steps }: HowItWorksProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Container maxWidth={448} className="mb-16 text-center ">
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
        <Text weight="bold" className="text-secondary">
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
    <Flex wrap className="relative mx-auto">
      {steps?.map((step, index) => <StepItem step={step} index={index} key={step._key} />)}
    </Flex>
  );
}

function StepItem({ step, index }: { step?: ArrayOfTitleAndText; index: number }) {
  if (!step) return null;

  return (
    <div className="w-full px-0 mb-8 text-center md:px-10 lg:w-1/3">
      <span className="relative z-10 flex items-center justify-center w-16 h-16 mx-auto mb-6 text-2xl text-white rounded-full bg-primary lg:mb-10">
        {index + 1}
      </span>
      <Heading type="h3" fontSize="2xl" className="mb-4 font-heading">
        {step?.title}
      </Heading>
      <Text muted className="leading-loose">
        {step?.plainText}
      </Text>
    </div>
  );
}

export { HowItWorks_E };
