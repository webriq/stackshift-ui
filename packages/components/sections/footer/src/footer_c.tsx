import { Button } from "@stackshift-ui/button";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Image } from "@stackshift-ui/image";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import { SocialIcons } from "@stackshift-ui/social-icons";
import { Text } from "@stackshift-ui/text";
import { FooterProps } from ".";
import { logoLink } from "./helper";
import { LabeledRoute, LabeledRouteWithKey, Logo, SocialLink, Socials } from "./types";

export default function Footer_C({ logo, menu, copyright, socialMedia }: FooterProps) {
  return (
    <Section className="bg-background">
      <BorderStyle />
      <Container maxWidth={1000}>
        <div className="pt-10 pb-12">
          <Flex
            justify="between"
            align="center"
            className="relative flex-col gap-8 mb-8 md:flex-row lg:border-b lg:border-gray-300 lg:pb-8">
            <CopyrightSection copyright={copyright} />
            <MenuLists menu={menu} />
            <LogoSection logo={logo} />
          </Flex>
          <SocialMediaContainer socialMedia={socialMedia} />
        </div>
      </Container>
    </Section>
  );
}

function CopyrightSection({ copyright }: { copyright?: string }) {
  if (!copyright) return null;

  return <Text className="w-full text-sm text-center">{copyright}</Text>;
}

function LogoSection({ logo }: { logo?: Logo }) {
  if (!logo?.image) return null;

  return (
    <div className="w-full text-center">
      <Link
        className="inline-block text-xl font-bold leading-none"
        aria-label={logoLink(logo) === "/" ? "Go to home page" : `Go to ${logoLink(logo)}`}
        href={logoLink(logo)}
        target={logo?.linkTarget}
        rel={logo?.linkTarget === "_blank" ? "noopener noreferrer" : ""}>
        <Image
          src={logo?.image}
          alt={logo?.alt ?? "footer-logo"}
          className="inline-block text-xl font-bold leading-none"
          width={64}
          height={64}
        />
      </Link>
    </div>
  );
}

function MenuLists({ menu }: { menu?: LabeledRouteWithKey[] }) {
  if (!menu) return null;

  return (
    <div className="mx-auto">
      <Flex
        className="flex-col gap-4 lg:flex-row lg:gap-10"
        as="ul"
        align="center"
        justify="center">
        {menu?.map((links, index) => (
          <MenuList links={links} index={index} />
        ))}
      </Flex>
    </div>
  );
}

function MenuList({ links, index }: { links?: LabeledRoute; index?: number }) {
  if (!links) return null;

  return (
    <li className="w-full text-center" key={index}>
      <Button
        as="link"
        link={links}
        variant="unstyled"
        asChild
        className="text-sm text-center text-black no-underline hover:text-gray-500 whitespace-nowrap"
        aria-label={links?.label}>
        {links?.label}
      </Button>
    </li>
  );
}

function SocialMediaContainer({ socialMedia }: { socialMedia?: SocialLink[] }) {
  if (!socialMedia) return null;

  return (
    <Flex wrap justify="center" align="center" className="gap-5">
      {socialMedia?.map((social, index) => (
        <SocialMediaLink social={social} key={index} />
      ))}
    </Flex>
  );
}

function SocialMediaLink({ social }: { social?: SocialLink }) {
  if (!social?.socialMediaLink) return null;

  return (
    <Link
      aria-label={social?.socialMedia || social?.socialMediaPlatform || ""}
      className="rounded w-6 h-6 flex items-center"
      target="_blank"
      rel="noopener noreferrer"
      href={social?.socialMediaLink}>
      {social?.socialMediaIcon?.image ? (
        <Image
          className="w-full h-full object-contain"
          src={`${social?.socialMediaIcon?.image}`}
          width={56}
          height={56}
          alt={social?.socialMediaIcon?.alt ?? "contact-socialMedia-icon"}
        />
      ) : (
        <SocialIcons social={social?.socialMedia as Socials} />
      )}
    </Link>
  );
}

function BorderStyle() {
  return (
    <Flex className="w-full">
      <Flex className="w-1/3">
        <div className="w-1/3 py-1 bg-secondary" />
        <div className="w-1/3 py-1 bg-primary" />
        <div className="w-1/3 py-1 bg-primary" />
      </Flex>
      <Flex className="w-1/3">
        <div className="w-1/3 py-1 bg-secondary" />
        <div className="w-1/3 py-1 bg-primary" />
        <div className="w-1/3 py-1 bg-primary" />
      </Flex>
      <Flex className="w-1/3">
        <div className="w-1/3 py-1 bg-secondary" />
        <div className="w-1/3 py-1 bg-primary" />
        <div className="w-1/3 py-1 bg-primary" />
      </Flex>
    </Flex>
  );
}

export { Footer_C };
