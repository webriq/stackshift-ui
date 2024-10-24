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
  const [show, setShow] = useState<boolean>(false);
  const [activeQA, setActiveQA] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState(faqsWithCategories?.[0]?.category || "");

  const updatedFAQArray = (faqsWithCategories || [])?.map(items => ({
    ...items,
    askedQuestions: items?.askedQuestions?.map(item => ({
      ...item,
      hidden: true,
    })),
  }));

  // toggle view or hide answers on click for each FAQ items
  const toggleView = (position: number) => {
    if (activeQA === position) {
      setShow(!show);
    } else {
      setActiveQA(position);
      setShow(true);
    }
  };

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
      <FAQList
        updatedFAQArray={updatedFAQArray}
        activeCategory={activeCategory}
        show={show}
        toggleView={toggleView}
        activeQA={activeQA}
      />
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
            as="button"
            key={index}
            variant="unstyled"
            ariaLabel={tab?.category || ""}
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
  show,
  toggleView,
  activeQA,
}: {
  updatedFAQArray: FaqsWithCategory[];
  activeCategory: string;
  show: boolean;
  toggleView: (positon: number) => void;
  activeQA: number | null;
}) {
  if (!updatedFAQArray) return null;

  return (
    <Container maxWidth={768}>
      <ul>
        {updatedFAQArray
          ?.find(item => item?.category === activeCategory)
          ?.askedQuestions?.map((content, index) => (
            <FAQItem
              index={index}
              show={show}
              toggleView={toggleView}
              content={content}
              activeQA={activeQA}
            />
          ))}
      </ul>
    </Container>
  );
}

function FAQItem({
  content,
  activeQA,
  show,
  index,
  toggleView,
}: {
  content?: AskedQuestion;
  activeQA: number | null;
  show: boolean;
  index: number;
  toggleView: (position: number) => void;
}) {
  if (!content) return null;

  return (
    <li className="py-12 pr-4 border-b" key={index}>
      <Button
        as="button"
        variant="unstyled"
        ariaLabel={content?.question || ""}
        className="flex items-center justify-between w-full font-bold text-left font-heading hover:text-gray-600 focus:outline-none"
        onClick={() => toggleView(index)}>
        <Text fontSize="xs" weight="semibold" className="text-gray-500 lg:text-xl">
          {content?.question}
        </Text>
        <ArrowIcon show={show} activeQA={activeQA} index={index} />
      </Button>
      {show && activeQA === index && (
        <Text fontSize="xs" muted className="mt-4 lg:text-xl">
          {content?.answer}
        </Text>
      )}
    </li>
  );
}

function ArrowIcon({
  show,
  activeQA,
  index,
}: {
  show: boolean;
  activeQA: number | null;
  index: number;
}) {
  return (
    <svg
      className="w-4 h-4 text-primary lg:h-6 lg:w-6 xl:h-6 xl:w-6 2xl:h-6 2xl:w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={show && activeQA === index ? "M5 10l7-7m0 0l7 7m-7-7v18" : "M19 14l-7 7m0 0l-7-7m7 7V3"}
      />
    </svg>
  );
}

export { Faqs_B };
