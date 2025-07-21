import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@stackshift-ui/accordion";
import { Button } from "@stackshift-ui/button";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import React, { useState } from "react";
import { FAQProps } from ".";
import { AskedQuestion, FaqsWithCategory } from "./types";

export default function Faqs_B({ subtitle, title, faqsWithCategories }: FAQProps) {
  const [activeCategory, setActiveCategory] = useState(faqsWithCategories?.[0]?.category || "");

  const updatedFAQArray = (faqsWithCategories || [])?.map(items => ({
    ...items,
    askedQuestions: items?.askedQuestions?.map(item => ({
      ...item,
      hidden: true,
    })),
  }));

  return (
    <Section className="py-20 bg-background">
      <div className="border-b">
        <Container maxWidth={576} className="mb-16 text-center ">
          <SubtitleAndTitle subtitle={subtitle} title={title} />
        </Container>
        <FAQCategoryTabs
          categories={updatedFAQArray}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
      <FAQList updatedFAQArray={updatedFAQArray} activeCategory={activeCategory} />
    </Section>
  );
}

function SubtitleAndTitle({ subtitle, title }: { subtitle?: string; title?: string }) {
  return (
    <React.Fragment>
      {subtitle ? (
        <Text weight="bold" className="text-secondary">
          {subtitle}
        </Text>
      ) : null}
      {title ? <Heading fontSize="3xl">{title}</Heading> : null}
    </React.Fragment>
  );
}

function FAQCategoryTabs({
  categories,
  activeCategory,
  setActiveCategory,
}: {
  categories: FaqsWithCategory[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}) {
  if (!categories) return null;

  return (
    <Container maxWidth={768}>
      <Flex wrap className="text-base text-center sm:text-md lg:text-xl">
        {categories?.map((tab, index) => (
          <Button
            key={index}
            variant="unstyled"
            aria-label={tab?.category || ""}
            onClick={() => setActiveCategory(tab?.category ?? "")}
            className={`w-full px-4 py-4 font-bold md:w-1/2 lg:w-auto ${
              activeCategory === tab?.category
                ? "text-primary border-b-2 border-primary-foreground"
                : "text-gray-500 transition duration-150 hover:border-primary-foreground hover:text-primary"
            }`}>
            {tab?.category}
          </Button>
        ))}
      </Flex>
    </Container>
  );
}

function FAQList({
  updatedFAQArray,
  activeCategory,
}: {
  updatedFAQArray: FaqsWithCategory[];
  activeCategory: string;
}) {
  if (!updatedFAQArray) return null;

  return (
    <Container maxWidth={768}>
      <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
        {updatedFAQArray
          ?.find(item => item?.category === activeCategory)
          ?.askedQuestions?.map((content, index) => <FAQItem index={index} content={content} />)}
      </Accordion>
    </Container>
  );
}

function FAQItem({ content, index }: { content?: AskedQuestion; index: number }) {
  if (!content) return null;

  return (
    <AccordionItem value={`item-${index}`} className="px-4 py-6" key={index}>
      <AccordionTrigger
        aria-label={content?.question || ""}
        className="flex items-center justify-between w-full font-bold text-left font-heading hover:text-gray-600 focus:outline-none hover:no-underline">
        <Text
          fontSize="xs"
          weight="semibold"
          className="text-gray-500 lg:text-xl whitespace-normal">
          {content?.question}
        </Text>
      </AccordionTrigger>
      <AccordionContent className="mt-4 lg:text-xl px-4 text-gray-500">
        {content?.answer}
      </AccordionContent>
    </AccordionItem>
  );
}

export { Faqs_B };
