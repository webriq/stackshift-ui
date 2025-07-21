import { Button } from "@stackshift-ui/button";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import React from "react";

import { Link } from "@stackshift-ui/link";
import { buildSanityLink } from "@stackshift-ui/system";
import { PortfolioProps } from ".";
import { Content, LabeledRoute } from "./types";

export default function Portfolio_B({
  caption,
  title,
  portfolios,
  primaryButton,
  length = 6,
}: PortfolioProps): React.JSX.Element {
  const portfolioLength = length; //set initial number of portfolios to display for this variant

  const link = buildSanityLink(primaryButton as LabeledRoute);

  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Flex wrap align="center" justify="center" className="mb-16 md:justify-between">
          <CaptionAndTitleText caption={caption} title={title} />
          <div className="hidden mt-5 text-right md:mt-0 lg:mt-0 lg:block xl:mt-0">
            {primaryButton?.label && (
              <Button asChild aria-label={primaryButton?.label} variant="link">
                <Link href={link.href} target={link.target} rel={link.rel}>
                  {primaryButton?.label}
                </Link>
              </Button>
            )}
          </div>
        </Flex>
        <PortfolioContent portfolios={portfolios} portfolioLength={portfolioLength} />
        <div className="block mt-5 text-center md:mt-0 lg:mt-0 lg:hidden xl:mt-0">
          {primaryButton?.label && (
            <Button asChild aria-label={primaryButton?.label} variant="link">
              <Link href={link.href} target={link.target} rel={link.rel}>
                {primaryButton?.label}
              </Link>
            </Button>
          )}
        </div>
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
    <div className="text-center lg:text-left">
      <Text weight="semibold">{caption}</Text>
      <Heading className="mb-6" fontSize="2xl">
        {title}
      </Heading>
    </div>
  );
}

function ProjectItem({ content }: { content: Content }) {
  const link = buildSanityLink(content.primaryButton as LabeledRoute);

  return (
    <div className="w-full px-4 mb-4 md:w-1/2 lg:w-1/3">
      <div className="relative mx-auto overflow-hidden rounded-md md:mb-5">
        {content?.mainImage?.image && (
          <Image
            className="object-cover w-full h-80"
            src={content?.mainImage?.image}
            width={480}
            height={320}
            alt={content?.mainImage?.alt ?? `portfolio-image`}
          />
        )}

        <Flex
          direction="col"
          align="start"
          className="absolute inset-0 z-10 items-start p-6 duration-300 bg-slate-900 rounded opacity-0 hover:opacity-75">
          <Text className="text-secondary">{content?.dateAdded}</Text>
          {content?.title && (
            <Text weight="bold" className="mb-auto text-white md:text-xl lg:text-2xl">
              {content?.title?.length > 80
                ? `${content?.title?.substring(0, 80)}...`
                : content?.title}
            </Text>
          )}
          {content?.primaryButton?.label && (
            <Button
              asChild
              variant="outline"
              aria-label={content?.primaryButton?.label}
              className="w-fit h-fit flex items-center justify-center bg-transparent border-secondary outline text-white hover:bg-secondary/20 hover:border-secondary/20 rounded-global hover:text-secondary-foreground font-bold transition duration-200 px-3 py-4">
              <Link href={link.href} target={link.target} rel={link.rel}>
                {content?.primaryButton?.label}
              </Link>
            </Button>
          )}
        </Flex>
      </div>
    </div>
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
    <Flex wrap className="mb-4 ">
      {portfolios
        ?.slice(0, portfolioLength)
        .map(content => <ProjectItem content={content} key={content._key} />)}
    </Flex>
  );
}

export { Portfolio_B };
