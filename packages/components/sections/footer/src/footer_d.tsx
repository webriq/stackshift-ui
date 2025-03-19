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
        <Flex wrap className="space-y-4 lg:space-y-0">
          <div className="w-full max-w-2xl space-y-4 lg:w-1/4">
            <LogoSection logo={logo} />
            <TextSection text={text} />
          </div>

          <MenuSection multipleMenus={multipleMenus} />
          <SocialMediaContainer socialMedia={socialMedia} />
        </Flex>
        <CopyrightSection copyright={copyright} />
      </Container>
    </Section>
  );
}

function LogoSection({ logo }: { logo?: Logo }) {
  if (!logo?.image) return null;

  return (
    <Link
      className="inline-block text-xl font-bold leading-none"
      aria-label={logoLink(logo) === "/" ? "Go to home page" : `Go to ${logoLink(logo)}`}
      href={logoLink(logo)}
      target={logo?.linkTarget}
      rel={logo?.linkTarget === "_blank" ? "noopener noreferrer" : ""}>
      <Image
        src={`${logo?.image}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        width={132}
        height={56}
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

  return <Text className="pt-10 text-sm">{copyright}</Text>;
}

function MenuSection({ multipleMenus }: { multipleMenus?: any[] }) {
  if (!multipleMenus) return null;

  return (
    <Flex wrap className="flex-grow !justify-center" gap={4}>
      {multipleMenus?.map(menu => <MenuLinks key={menu?._key} menu={menu} />)}
    </Flex>
  );
}

// Individual Menu Links Component
function MenuLinks({ menu }: { menu?: any }) {
  if (!menu) return null;

  return (
    <div className="w-[200px] flex-none">
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
                className="text-gray-500 no-underline hover:text-gray-700"
                ariaLabel={link?.label}>
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
    <Flex className="!items-center" wrap={true} gap={2}>
      {socialMedia?.map(social => social?.socialMediaLink && <SocialMediaLink social={social} />)}
    </Flex>
  );
}

function SocialMediaLink({ social }: { social?: SocialLink }) {
  if (!social?.socialMediaLink) return null;

  return (
    <span key={social?._key}>
      <Link
        aria-label={social?.socialMedia || social?.socialMediaPlatform || ""}
        className="inline-block p-2 rounded"
        target="_blank"
        rel="noopener noreferrer"
        href={social?.socialMediaLink}>
        {social?.socialMediaIcon?.image ? (
          <Image
            className="h-6 w-full"
            src={`${social?.socialMediaIcon?.image}`}
            width={24}
            height={24}
            alt={social?.socialMediaIcon?.alt ?? "socialmedia-icon"}
          />
        ) : (
          <SocialIcons social={social?.socialMedia as Socials} />
        )}
      </Link>
    </span>
  );
}

export { Footer_D };
