import React from "react";
import { Heading } from "@webriq-test/heading";
import { Text } from "@webriq-test/text";
import { Section } from "@webriq-test/section";
import { Container } from "@webriq-test/container";
import { Flex } from "@webriq-test/flex";
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
        <Text weight="bold" className="font-bold text-secondary">
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
    <Flex wrap justify="center">
      {steps?.map((step, index) => <StepItem step={step} index={index} key={step._key} />)}
    </Flex>
  );
}

function StepItem({ index, step }: { index: number; step?: ArrayOfTitleAndText }) {
  return (
    <div className="relative w-full mt-20 md:w-1/2 lg:mb-0 lg:w-1/3" key={index}>
      <Text
        className="absolute top-0 left-0 ml-10 font-semibold -mt-14 text-9xl text-primary opacity-20"
        style={{ width: "69px", height: "103px" }}>
        {index + 1}
      </Text>
      <Text weight="bold" className="xl">
        {step?.title}
      </Text>
      <Text muted className="leading-loose">
        {step?.plainText}
      </Text>
    </div>
  );
}

export { HowItWorks_D };
