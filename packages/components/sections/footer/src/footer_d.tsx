import { Button } from "@stackshift-ui/button";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Image } from "@stackshift-ui/image";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import { SocialIcons } from "@stackshift-ui/social-icons";
import { Text } from "@stackshift-ui/text";

import { FooterProps } from ".";
import { ConditionalLink, logoLink } from "./helper";
import { Logo, SocialLink, Socials } from "./types";

export default function Footer_D({
  logo,
  multipleMenus,
  copyright,
  socialMedia,
  text,
}: FooterProps) {
  return (
    <Section className="py-20 overflow-hidden bg-background">
      <Container maxWidth={1280}>
        <Flex className="flex-col lg:flex-row w-full gap-5 lg:items-center lg:justify-between xl:items-start">
          <div className="w-full lg:max-w-sm xl:max-w-xs space-y-4">
            <LogoSection logo={logo} />
            <TextSection text={text} />
          </div>

          <Flex className="flex-col space-y-8 lg:space-y-0">
            <Flex className=" flex-col lg:flex-row w-full justify-between items-start lg:items-center">
              <MenuSection multipleMenus={multipleMenus} />
            </Flex>
          </Flex>

          <div className="hidden [@media(min-width:1444px)]:block">
            <SocialMediaContainer socialMedia={socialMedia} />
          </div>
        </Flex>
        <div className="hidden [@media(min-width:1444px)]:block items-center">
          <CopyrightSection copyright={copyright} />
        </div>
        <Flex className="flex-col sm:flex-row w-full sm:items-center sm:justify-between pt-10 gap-5 [@media(min-width:1444px)]:hidden">
          <CopyrightSection copyright={copyright} />
          <SocialMediaContainer socialMedia={socialMedia} />
        </Flex>
      </Container>
    </Section>
  );
}

function LogoSection({ logo }: { logo?: Logo }) {
  if (!logo?.image) return null;

  return (
    <Link
      className="w-40 h-14 flex items-center"
      aria-label={logoLink(logo) === "/" ? "Go to home page" : `Go to ${logoLink(logo)}`}
      href={logoLink(logo)}
      target={logo?.linkTarget}
      rel={logo?.linkTarget === "_blank" ? "noopener noreferrer" : ""}>
      <Image
        className="w-fit h-full object-contain"
        src={`${logo?.image}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={logo?.alt ?? "footer-logo"}
      />
    </Link>
  );
}

function TextSection({ text }: { text?: string }) {
  if (!text) return null;

  return (
    <Text muted className="leading-normal">
      {text}
    </Text>
  );
}

function CopyrightSection({ copyright }: { copyright?: string }) {
  if (!copyright) return null;

  return <Text className="lg:pt-10 text-sm">{copyright}</Text>;
}

function MenuSection({ multipleMenus }: { multipleMenus?: any[] }) {
  if (!multipleMenus) return null;

  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-5">
      {multipleMenus?.map(menu => (
        <MenuLinks key={menu?._key} menu={menu} />
      ))}
    </div>
  );
}

function MenuLinks({ menu }: { menu?: any }) {
  if (!menu) return null;

  return (
    <div className="min-w-[140px]">
      {menu?.title && (
        <Text weight="bold" className="mb-3">
          {menu?.title}
        </Text>
      )}
      {menu?.links?.length > 0 && (
        <Flex as="ul" direction="col" className="space-y-2">
          {menu?.links?.map((link: any) => (
            <li key={link?._key}>
              <Button
                as="link"
                link={link}
                variant="unstyled"
                className="text-gray-500 no-underline hover:text-gray-700 px-0 py-0"
                aria-label={link?.label}
                asChild>
                {link?.label}
              </Button>
            </li>
          ))}
        </Flex>
      )}
    </div>
  );
}

function SocialMediaContainer({ socialMedia }: { socialMedia?: SocialLink[] }) {
  if (!socialMedia) return null;

  return (
    <Flex
      className="flex flex-wrap flex-row [@media(min-width:240px)]:items-center sm:space-x-4"
      gap={2}>
      {socialMedia?.map(
        social => social?.socialMediaLink && <SocialMediaLink key={social?._key} social={social} />,
      )}
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

export { Footer_D };
