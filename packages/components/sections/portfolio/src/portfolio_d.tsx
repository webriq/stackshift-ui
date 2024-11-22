import { Button } from "@stackshift-ui/button";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import React from "react";

import { PortfolioProps } from ".";
import { useMediaQuery } from "./helper";
import { Content, LabeledRoute, PortfoliosWithCategories } from "./types";

export default function Portfolio_D({
  caption,
  title,
  portfoliosWithCategory,
  length = 6,
}: PortfolioProps) {
  const portfoliosPerPage = length;
  const count = 0; // default number of portfolios per category
  const [activeTab, setActiveTab] = React.useState(portfoliosWithCategory?.[0]?.category); // set the first index category as initial value

  // group portfolios per category
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
        <div className="mb-12 sm:flex">
          <Flex wrap className="w-full mb-8 lg:mb-0 lg:w-1/2">
            {portfoliosPerCategory?.content
              ?.slice(count, count + 2)
              ?.map(content => <ProjectItem size={"sm"} content={content} key={content._key} />)}
            {portfoliosPerCategory?.content
              ?.slice(count + 2, count + 3)
              ?.map(content => <ProjectItem size={"lg"} content={content} key={content._key} />)}
          </Flex>
          <div className="w-full lg:w-1/2">
            {portfoliosPerCategory?.content
              ?.slice(count + 3, count + 4)
              ?.map(content => <ProjectItem size={"lg"} content={content} key={content._key} />)}
            <div className="flex flex-wrap">
              {portfoliosPerCategory?.content
                ?.slice(count + 4, portfoliosPerPage)
                ?.map(content => <ProjectItem size={"sm"} content={content} key={content._key} />)}
            </div>
          </div>
        </div>
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

function ProjectItem({ size, content }: { size?: string | null; content?: Content }) {
  const breakpoints = useMediaQuery("639");
  const maxLength = breakpoints ? 40 : 90;

  return (
    <div className={`w-full px-4 mb-8 ${size === "lg" ? "w-full" : "lg:w-1/2"}`}>
      {content?.mainImage?.image && (
        <div className="relative overflow-hidden rounded-md">
          <Image
            className={`object-cover w-full ${size === "lg" ? "h-128" : "h-64"}`}
            src={content?.mainImage?.image}
            //width={352}
            //height={280}
            alt={content?.mainImage?.alt ?? `portfolio-image-${content?._key}`}
          />
          <div className="absolute inset-0 z-10 justify-center p-6 duration-300 bg-slate-900 rounded-md opacity-0 hover:opacity-80">
            <div className="max-w-md my-auto text-xs">
              {content?.subtitle && (
                <Text className="text-sm text-primary" weight="bold">
                  {content?.subtitle?.length > 26
                    ? `${content?.subtitle?.substring(0, 26)}...`
                    : content?.subtitle}
                </Text>
              )}
              {content?.title && (
                <Heading
                  weight="bold"
                  className={`my-5 text-white ${size === "lg" ? "text-sm md:text-xl" : "text-sm"}`}>
                  {content?.title?.length > 38
                    ? `${content?.title?.substring(0, 38)}...`
                    : content?.title}
                </Heading>
              )}
              <div className="max-w-xs my-5">
                {content?.description && (
                  <Text fontSize="xs" muted className="mb-6 text-white">
                    {content?.description?.length > maxLength
                      ? `${content?.description?.substring(0, maxLength)}...`
                      : content?.description}
                  </Text>
                )}
                {content?.primaryButton?.label && (
                  <Button
                    as="link"
                    variant="outline"
                    ariaLabel={content?.primaryButton?.label}
                    link={content?.primaryButton}
                    className="bg-transparent border-secondary outline text-white hover:bg-secondary/20 hover:border-secondary/20 inline-block rounded-global font-bold transition duration-200 px-3 py-4">
                    {content?.primaryButton?.label}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { Portfolio_D };
