import { Button } from "@stackshift-ui/button";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import React from "react";

import { PortfolioProps } from ".";
import { Content, LabeledRoute, PortfoliosWithCategories } from "./types";

export default function Portfolio_A({
  caption,
  title,
  portfoliosWithCategory,
  primaryButton,
  length = 8,
}: PortfolioProps): React.JSX.Element {
  const portfolioLength = length; //set initial number of portfolios to display for this variant
  const [activeTab, setActiveTab] = React.useState(portfoliosWithCategory?.[0]?.category); //set the first index category as initial value

  //creates new array of items filtered by active tab
  const portfoliosPerCategory = portfoliosWithCategory?.find(data => data?.category === activeTab);

  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Container maxWidth={512} className="mb-8 text-center md:mb-16">
          <CaptionAndTitleText caption={caption} title={title} />
          <PortfolioCategories
            categories={portfoliosWithCategory}
            activeTab={activeTab}
            onClickFn={setActiveTab}
          />
        </Container>
        <PortfolioContent
          portfolios={portfoliosPerCategory?.content}
          portfolioLength={portfolioLength}
        />
        <PrimaryButton button={primaryButton} />
      </Container>
    </Section>
  );
}

function CaptionAndTitleText({
  caption,
  title,
}: {
  caption?: string | null;
  title?: string | null;
}) {
  if (!caption || !title) return null;

  return (
    <React.Fragment>
      <Text weight="semibold">{caption}</Text>
      <Heading className="mb-6" fontSize="2xl">
        {title}
      </Heading>
    </React.Fragment>
  );
}

function PrimaryButton({ button }: { button?: LabeledRoute | null }) {
  if (!button?.label) return null;

  return (
    <div className="text-center">
      <Button as="link" ariaLabel={button?.label} link={button}>
        {button?.label}
      </Button>
    </div>
  );
}

function PortfolioCategories({
  categories,
  activeTab,
  onClickFn,
}: {
  categories?: PortfoliosWithCategories[] | null;
  activeTab?: string | null;
  onClickFn?: React.Dispatch<React.SetStateAction<string | null | undefined>>;
}) {
  if (!categories || categories?.length === 0) return null;

  return (
    <Flex className="inline-flex py-1 text-sm bg-white rounded" wrap>
      {categories?.map((content, index) => (
        <Button
          variant="tab"
          as="button"
          ariaLabel={content?.category ?? `Category button ${index + 1}`}
          key={content?._key}
          isActive={activeTab === content?.category}
          onClick={() => onClickFn?.(content?.category)}>
          {content?.category}
        </Button>
      ))}
    </Flex>
  );
}

function PortfolioContent({
  portfolios,
  portfolioLength,
}: {
  portfolios?: Content[] | null;
  portfolioLength?: number;
}) {
  if (!portfolios || portfolios?.length === 0) return null;

  return (
    <Flex wrap className="mb-8">
      {portfolios?.slice(0, portfolioLength)?.map((content, index: number) => (
        <Flex className="w-full space-x-5 px-4 mb-8 sm:w-1/2 lg:w-1/4" key={content?._key}>
          <div className="relative mx-auto h-[256px] w-[332px] overflow-hidden rounded-global">
            {content?.mainImage?.image && (
              <Image
                className="object-cover w-full h-full"
                src={content?.mainImage?.image}
                alt={content?.mainImage?.alt ?? `portfolio-image-${index}`}
              />
            )}
            <div className="absolute inset-0 z-10 flex items-center justify-center duration-300 bg-slate-900 rounded-lg opacity-0 hover:opacity-75">
              {content?.primaryButton?.label && (
                <Button
                  as="link"
                  variant="outline"
                  ariaLabel={content?.primaryButton?.label}
                  link={content?.primaryButton}
                  className="bg-transparent border-secondary outline text-white hover:bg-secondary/20 hover:border-secondary/20 inline-block rounded-l-xl rounded-t-xl font-bold transition duration-200 px-3 py-4">
                  {content?.primaryButton?.label}
                </Button>
              )}
            </div>
          </div>
        </Flex>
      ))}
    </Flex>
  );
}

export { Portfolio_A };
