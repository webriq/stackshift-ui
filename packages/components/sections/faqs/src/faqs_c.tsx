import { Card } from "@stackshift-ui/card";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import { FAQProps } from ".";

export interface AskedQuestion {
  answer?: string | null;
  question?: string | null;
  _key?: string;
  _type?: string;
}

interface FAQItemProps {
  faq: {
    question?: string | null;
    answer?: string | null;
  };
}

export default function Faqs_C({ subtitle, title, faqs }: FAQProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1000}>
        <Container maxWidth={576} className="mb-16 text-center">
          <SubtitleAndTitleText subtitle={subtitle} title={title} />
        </Container>
        <FAQItems faqs={faqs} />
      </Container>
    </Section>
  );
}

function SubtitleAndTitleText({ subtitle, title }: { subtitle?: string; title?: string }) {
  return (
    <div className="flex flex-col gap-3">
      {subtitle ? (
        <Text weight="bold" className="text-secondary">
          {subtitle}
        </Text>
      ) : null}
      {title ? <Heading fontSize="3xl">{title}</Heading> : null}
    </div>
  );
}

function FAQItems({ faqs }: { faqs?: AskedQuestion[] }) {
  if (!faqs) return null;

  return (
    <Flex wrap align="stretch">
      {faqs?.map(faq => <FAQItem key={faq?._key} faq={faq} />)}
    </Flex>
  );
}

function FAQItem({ faq }: FAQItemProps) {
  return (
    <Container className="w-full px-0 lg:px-4 mb-8 lg:w-1/2" maxWidth={1000}>
      <Card className="h-full p-4 lg:p-8 bg-white rounded-md">
        <Flex align="start" className="mb-3 lg:mb-6" gap={3}>
          <span className="inline-block p-3 rounded-full bg-primary">
            <QuoteIcon />
          </span>
          {faq.question ? (
            <Text weight="bold" className="text-xl">
              {faq?.question}
            </Text>
          ) : null}
        </Flex>
        {faq?.answer ? (
          <Text className="leading-loose px-2" muted>
            {faq?.answer}
          </Text>
        ) : null}
      </Card>
    </Container>
  );
}

function QuoteIcon() {
  return (
    <svg
      className="w-6 h-6 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
      />
    </svg>
  );
}

export { Faqs_C };
