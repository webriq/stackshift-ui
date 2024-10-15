import React from "react";
import { Heading } from "@webriq-test/heading";
import { Text } from "@webriq-test/text";
import { Card } from "@webriq-test/card";
import { Section } from "@webriq-test/section";
import { Container } from "@webriq-test/container";
import { Flex } from "@webriq-test/flex";
import { HowItWorksProps } from ".";
import { ArrayOfTitleAndText } from "./types";

export default function HowItWorks_C({ subtitle, title, steps }: HowItWorksProps) {
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
        <Text weight="bold" className="text-primary">
          {subtitle}
        </Text>
      )}
      {title && <Heading>{title}</Heading>}
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
  if (!step) return null;

  return (
    <div className="w-full px-4 mt-8 md:w-1/2 lg:mb-0 lg:w-1/3" key={index}>
      <Card className="px-6 py-10 text-center ">
        <span className="inline-flex items-center justify-center w-16 h-16 mb-6 text-2xl font-bold rounded bg-secondary-foreground text-primary">
          {index + 1}
        </span>
        <Text weight="bold" fontSize="2xl" className="mb-4">
          {step?.title}
        </Text>
        <Text muted className="leading-loose">
          {step?.plainText}
        </Text>
      </Card>
    </div>
  );
}

export { HowItWorks_C };
