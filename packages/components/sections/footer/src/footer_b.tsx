import { Button } from "@stackshift-ui/button";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Image } from "@stackshift-ui/image";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import { SocialIcons } from "@stackshift-ui/social-icons";
import { Text } from "@stackshift-ui/text";
import React from "react";
import { FooterProps } from ".";
import { logoLink } from "./helper";
import { LabeledRoute, LabeledRouteWithKey, Logo, SocialLink, Socials } from "./types";

export default function Footer_B({ logo, copyright, socialMedia, menu }: FooterProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Flex wrap align="center" justify="between" className="pb-12 border-b border-gray-100">
          <LogoSection logo={logo} />
          <MenuLists menu={menu} />
        </Flex>
        <Flex wrap className="mt-8 justify-between items-start">
          <CopyrightContainer copyright={copyright} />
          <SocialMediaContainer socialMedia={socialMedia} />
        </Flex>
      </Container>
    </Section>
  );
}

function LogoSection({ logo }: { logo?: Logo }) {
  if (!logo?.image) return null;

  return (
    <div className="w-full lg:w-1/5">
      <Link
        aria-label={logoLink(logo) === "/" ? "Go to home page" : `Go to ${logoLink(logo)}`}
        className="w-40 h-14 flex items-center"
        href={logoLink(logo)}
        target={logo?.linkTarget}
        rel={logo?.linkTarget === "_blank" ? "noopener noreferrer" : ""}>
        <Image className="w-full h-full " src={logo?.image} alt={logo?.alt ?? "footer-logo"} />
      </Link>
    </div>
  );
}

function MenuLists({ menu }: { menu?: LabeledRouteWithKey[] }) {
  if (!menu) return null;

  return (
    <div className="w-full lg:w-auto">
      <Flex wrap align="center" justify="between" as="ul" gap={5}>
        {menu?.map((links, index, { length }) => (
          <React.Fragment key={links?._key || index}>
            <MenuList links={links} />
            {index + 1 !== length ? <MenuSeparatorIcon /> : null}
          </React.Fragment>
        ))}
      </Flex>
    </div>
  );
}

function MenuList({ links, index }: { links?: LabeledRoute; index?: number }) {
  if (!links) return null;

  return (
    <li className="w-full mb-2 md:mb-0 md:w-auto" key={index}>
      <Button
        as="link"
        link={links}
        variant="unstyled"
        className="text-gray-500 no-underline lg:text-sm hover:text-gray-700"
        aria-label={links?.label}
        asChild>
        {links?.label}
      </Button>
    </li>
  );
}

function MenuSeparatorIcon() {
  return (
    <li className="hidden md:block">
      <svg
        className="w-4 h-4 mx-4 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
        />
      </svg>
    </li>
  );
}

function CopyrightContainer({ copyright }: { copyright?: string }) {
  if (!copyright) return null;

  return (
    <Text muted className="order-last text-sm p-2">
      {copyright}
    </Text>
  );
}

function SocialMediaContainer({ socialMedia }: { socialMedia?: SocialLink[] }) {
  if (!socialMedia) return null;

  return (
    <div className="order-first mb-4 lg:order-last lg:mb-0">
      {socialMedia?.map(social => (
        <SocialMediaLink social={social} />
      ))}
    </div>
  );
}

function SocialMediaLink({ social }: { social?: SocialLink }) {
  if (!social?.socialMediaLink) return null;

  return (
    <Link
      aria-label={social?.socialMedia || social?.socialMediaPlatform || ""}
      className="inline-block p-2 rounded"
      target="_blank"
      rel="noopener noreferrer"
      href={social?.socialMediaLink}
      key={social?._key}>
      {social?.socialMediaIcon?.image ? (
        <Image
          className="h-6"
          src={`${social?.socialMediaIcon?.image}`}
          width={24}
          height={24}
          alt={social?.socialMediaIcon?.alt ?? "contact-socialMedia-icon"}
        />
      ) : (
        <SocialIcons social={social?.socialMedia as Socials} />
      )}
    </Link>
  );
}

export { Footer_B };
