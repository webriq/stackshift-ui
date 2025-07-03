import { Button } from "@stackshift-ui/button";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import React from "react";

import { buildSanityLink } from "@stackshift-ui/system";
import { PortfolioProps } from ".";
import { Content, LabeledRoute, PortfoliosWithCategories } from "./types";

export default function Portfolio_A({
  caption,
  title,
  portfoliosWithCategory,
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
        <PrimaryButton button={portfoliosPerCategory?.primaryButton} />
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

  const link = buildSanityLink({
    type: button?.type ?? "",
    internalLink: button?.internalLink ?? "",
    externalLink: button?.externalLink ?? "",
  });

  return (
    <div className="text-center">
      <Button asChild aria-label={button?.label}>
        <Link href={link.href} target={link.target} rel={link.rel}>
          {button?.label}
        </Link>
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
    <Flex className="inline-flex px-2 py-1 text-sm bg-white rounded" wrap>
      {categories?.map((content, index) => (
        <Button
          variant="ghost"
          aria-label={content?.category ?? `Category button ${index + 1}`}
          className="my-1 data-[active=true]:text-primary"
          key={content?._key}
          data-active={activeTab === content?.category}
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
      {portfolios?.slice(0, portfolioLength)?.map((content, index: number) => {
        const link = buildSanityLink({
          type: content?.primaryButton?.type ?? "",
          internalLink: content?.primaryButton?.internalLink ?? "",
          externalLink: content?.primaryButton?.externalLink ?? "",
        });

        return (
          <Flex className="w-full space-x-5 px-4 mb-8 sm:w-1/2 lg:w-1/4" key={content?._key}>
            <div className="relative mx-auto h-[256px] w-[332px] overflow-hidden rounded-md">
              {content?.mainImage?.image && (
                <Image
                  className="object-cover w-full h-full"
                  src={content?.mainImage?.image}
                  alt={content?.mainImage?.alt ?? `portfolio-image-${index}`}
                />
              )}
              <div className="absolute inset-0 z-10 flex items-center justify-center duration-300 bg-slate-900 rounded-md opacity-0 hover:opacity-75">
                {content?.primaryButton?.label && (
                  <Button
                    asChild
                    variant="outline"
                    aria-abel={content?.primaryButton?.label}
                    className="bg-transparent border-secondary outline text-white hover:bg-secondary/20 hover:border-secondary/20 inline-block rounded-global font-bold transition duration-200 px-3 py-4">
                    <Link href={link.href} target={link.target} rel={link.rel}>
                      {content?.primaryButton?.label}
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </Flex>
        );
      })}
    </Flex>
  );
}

export { Portfolio_A };
