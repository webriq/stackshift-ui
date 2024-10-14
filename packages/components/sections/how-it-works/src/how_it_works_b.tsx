import { Heading } from "@stackshift-ui/heading";
import { Text } from "@stackshift-ui/text";
import { Section } from "@stackshift-ui/section";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { ArrayOfTitleAndText } from "./types";
import { HowItWorksProps } from ".";

export default function HowItWorks_B({ subtitle, title, text, steps }: HowItWorksProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1000}>
        <Flex align="center" justify="between" wrap>
          <SubtitleTitleAndText subtitle={subtitle} title={title} text={text} />
          <StepItems steps={steps} />
        </Flex>
      </Container>
    </Section>
  );
}

function SubtitleTitleAndText({
  subtitle,
  title,
  text,
}: {
  subtitle?: string;
  title?: string;
  text?: string;
}) {
  return (
    <Container maxWidth={448} className="w-full mb-12 lg:mb-0 lg:w-1/2">
      {subtitle ? (
        <Text weight="bold" className="text-secondary">
          {subtitle}
        </Text>
      ) : null}

      {title ? (
        <Heading fontSize="3xl" className="mb-2">
          {title}
        </Heading>
      ) : null}

      {text ? (
        <Text muted className="leading-loose">
          {text}
        </Text>
      ) : null}
    </Container>
  );
}

function StepItems({ steps }: { steps?: ArrayOfTitleAndText[] }) {
  if (!steps) return null;

  return (
    <div className="w-full lg:w-1/2">
      {steps?.map((step, index) => <StepItem step={step} index={index} key={step._key} />)}
    </div>
  );
}

function StepItem({ step, index }: { step: ArrayOfTitleAndText; index: number }) {
  if (!step) return null;

  return (
    <Flex wrap align="start" className="mb-12" key={index}>
      <span className="inline-flex items-center justify-center w-16 h-16 mb-4 text-2xl font-bold rounded bg-secondary-foreground text-primary lg:mb-0 lg:mr-6">
        {index + 1}
      </span>
      <div className="w-full lg:w-3/4">
        <Text weight="bold" className="mb-4" fontSize="xl">
          {step?.title}
        </Text>
        <Text className="leading-loose" muted>
          {step?.plainText}
        </Text>
      </div>
    </Flex>
  );
}

export { HowItWorks_B };
