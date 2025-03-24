import { Button } from "@stackshift-ui/button";
import { Card } from "@stackshift-ui/card";
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
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [faqsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  const updatedFAQArray: AskedQuestion[] = (faqs || [])?.map(items => ({
    ...items,
    hidden: true,
  }));

  // toggle view or hide answers on click for each FAQ items
  const toggleView = (position: number) => {
    if (activeTab === position) {
      setShow(!show);
    } else {
      setActiveTab(position);
      setShow(true);
    }
  };

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
          <FAQsList
            searchedFAQs={searchedFAQs}
            toggleView={toggleView}
            indexOfFirstQuestion={indexOfFirstQuestion}
            show={show}
            activeTab={activeTab}
          />
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

function FAQsList({
  searchedFAQs,
  toggleView,
  indexOfFirstQuestion,
  show,
  activeTab,
}: {
  searchedFAQs: AskedQuestion[];
  toggleView: (position: number) => void;
  indexOfFirstQuestion: number;
  show: boolean;
  activeTab: number | null;
}) {
  if (!searchedFAQs) return null;

  return (
    <ul className="space-y-4 lg:space-y-6">
      <FAQs
        items={searchedFAQs}
        toggleView={toggleView}
        indexOfFirstQuestion={indexOfFirstQuestion}
        show={show}
        activeTab={activeTab}
      />
    </ul>
  );
}

function FAQs({
  items,
  toggleView,
  indexOfFirstQuestion,
  show,
  activeTab,
}: {
  items: AskedQuestion[];
  toggleView: (position: number) => void;
  indexOfFirstQuestion: number;
  show: boolean;
  activeTab: number | null;
}) {
  if (!items) return null;

  return (
    <React.Fragment>
      {items?.map((faq, index) => (
        <li key={index}>
          <Card className="p-6 bg-gray-50">
            <Button
              variant="unstyled"
              as="button"
              ariaLabel={faq?.question || `faqs-question-${index}`}
              className="flex items-center justify-between w-full font-bold text-left border-none font-heading hover:text-gray-600 focus:outline-none"
              onClick={() => toggleView(index + indexOfFirstQuestion)}>
              <Text fontSize="xl" weight="semibold">
                {faq?.question}
              </Text>
              <svg
                className="w-4 h-4 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    show && activeTab === index + indexOfFirstQuestion
                      ? "M5 10l7-7m0 0l7 7m-7-7v18"
                      : "M19 14l-7 7m0 0l-7-7m7 7V3"
                  }
                />
              </svg>
            </Button>

            {show && activeTab === index + indexOfFirstQuestion && (
              <Text muted className="mt-4 leading-loose0">
                {faq?.answer}
              </Text>
            )}
          </Card>
        </li>
      ))}
    </React.Fragment>
  );
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
          as="button"
          ariaLabel={`Page ${buttonNumber}`}
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
      as="button"
      variant="unstyled"
      ariaLabel="Search button"
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
