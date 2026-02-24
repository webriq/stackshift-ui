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
import { Input } from "@stackshift-ui/input";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import React, { useState } from "react";
import { FAQProps } from ".";
import { AskedQuestion } from "./types";

export default function Faqs_A({ subtitle, title, faqs }: FAQProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [faqsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  const updatedFAQArray: AskedQuestion[] = (faqs || [])?.map(items => ({
    ...items,
    hidden: true,
  }));

  // get current FAQs
  const indexOfLastQuestion = currentPage * faqsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - faqsPerPage;
  const searchedFAQs = !searchTerm
    ? updatedFAQArray?.slice(indexOfFirstQuestion, indexOfLastQuestion)
    : updatedFAQArray?.filter(items => items?.question?.toLowerCase().includes(searchTerm)); // get search results based on data

  // change page
  const changePage = (buttonNumber: number) => setCurrentPage(buttonNumber);

  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Container maxWidth={576} className="mb-8 lg:mb-16 text-center">
          <SubtitleAndTitle subtitle={subtitle} title={title} />
          <SearchBar updatedFAQArray={updatedFAQArray} setSearchTerm={setSearchTerm} />
        </Container>
        {!searchTerm && updatedFAQArray?.length > 6 ? (
          <Pagination
            faqsPerPage={faqsPerPage}
            totalFaqs={updatedFAQArray?.length}
            changePage={changePage}
          />
        ) : null}
        <Container maxWidth={768}>
          <FAQsList searchedFAQs={searchedFAQs} />
        </Container>
      </Container>
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
      {title ? (
        <Heading fontSize="3xl" className="mb-6 ">
          {title}
        </Heading>
      ) : null}
    </React.Fragment>
  );
}

function SearchBar({
  updatedFAQArray,
  setSearchTerm,
}: {
  updatedFAQArray?: AskedQuestion[];
  setSearchTerm: (term: string) => void;
}) {
  if (!updatedFAQArray || updatedFAQArray.length === 0) return null;

  return (
    <Flex justify="center" className="relative">
      <Input
        aria-label="Search, find any question you want to ask..."
        className="p-4 text-xs bg-white font-heading focus:border-gray-500 focus:outline-none"
        placeholder="Search, find any question you want to ask..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchTerm(e.target.value.toLowerCase())
        }
      />
      <SearchButtonIcon />
    </Flex>
  );
}

function FAQsList({ searchedFAQs }: { searchedFAQs: AskedQuestion[] }) {
  if (!searchedFAQs) return null;

  return (
    <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
      <FAQs items={searchedFAQs} />
    </Accordion>
  );
}

function FAQs({ items }: { items: AskedQuestion[] }) {
  if (!items) return null;

  return items?.map((faq, index) => (
    <AccordionItem
      key={index}
      value={`item-${index + 1}`}
      className="mb-3 border-b-0 p-6 bg-gray-50 border rounded last:border-b-1">
      <AccordionTrigger
        aria-label={faq?.question || `faqs-question-${index}`}
        className="flex items-center justify-between w-full font-bold text-left border-none font-heading hover:text-gray-600 focus:outline-none px-0 py-0 hover:no-underline">
        <Text fontSize="xl" weight="semibold" className="whitespace-normal">
          {faq?.question}
        </Text>
      </AccordionTrigger>
      <AccordionContent className="p-0">
        <Text muted className="mt-4 leading-loose0">
          {faq?.answer}
        </Text>
      </AccordionContent>
    </AccordionItem>
  ));
}

function Pagination({
  faqsPerPage,
  totalFaqs,
  changePage,
}: {
  faqsPerPage: number;
  totalFaqs: number;
  changePage: (buttonNumber: number) => void;
}) {
  const pageButtons = [];

  for (let i = 1; i <= Math.ceil(totalFaqs / faqsPerPage); i++) {
    pageButtons.push(i);
  }

  return (
    <Flex justify="center" className="mb-16 space-x-4">
      {pageButtons?.map(buttonNumber => (
        <Button
          variant="unstyled"
          aria-label={`Page ${buttonNumber}`}
          key={buttonNumber}
          className="inline-block w-2 h-2 rounded-full bg-primary-foreground"
          onClick={() => changePage(buttonNumber)}
        />
      ))}
    </Flex>
  );
}

function SearchButtonIcon() {
  return (
    <Button
      variant="unstyled"
      aria-label="Search button"
      className="hidden sm:flex absolute inset-y-0 right-0 items-center pr-4 text-primary">
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}
        />
      </svg>
    </Button>
  );
}

export { Faqs_A };
