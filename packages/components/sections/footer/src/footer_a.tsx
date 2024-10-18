import { Text } from "@stackshift-ui/text";
import { SocialIcons } from "@stackshift-ui/social-icons";
import { Image } from "@stackshift-ui/image";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Grid } from "@stackshift-ui/grid";
import { GridItem } from "@stackshift-ui/grid-item";

import { logoLink } from "./helper";
import { ContactDetails, Logo, SocialLink, Socials } from "./types";
import { FooterProps } from ".";

export default function Footer_A({ logo, text, contacts, copyright, socialMedia }: FooterProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1000}>
        <Flex wrap className="mb-5 lg:mb-20">
          <LogoSection logo={logo} />
          <TextContainer text={text} />
          <ContactsContainer contacts={contacts} />
        </Flex>
        <Flex justify="between" align="center" className="w-full mx-auto lg:flex">
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
    <div className="w-full mb-5 lg:w-1/5">
      <Link
        aria-label={logoLink(logo) === "/" ? "Go to home page" : `Go to ${logoLink(logo)}`}
        className="text-3xl font-bold leading-none"
        href={logoLink(logo)}
        target={logo?.linkTarget}
        rel={logo?.linkTarget === "_blank" ? "noopener noreferrer" : ""}>
        <Image
          className="h-14"
          src={`${logo?.image}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          width={132}
          height={56}
          alt={logo?.alt ?? "footer-logo"}
        />
      </Link>
    </div>
  );
}

function TextContainer({ text }: { text?: string }) {
  if (!text) return null;

  return (
    <Container className="w-full mb-5 lg:w-1/5" maxWidth={1000}>
      <Text muted className="leading-loose">
        {text}
      </Text>
    </Container>
  );
}

function ContactsContainer({ contacts }: { contacts?: ContactDetails[] }) {
  if (!contacts) return null;

  return (
    <Container className="w-full mt-1 ml-auto lg:w-1/2" maxWidth={1000}>
      {contacts?.map((contact, index) => (
        <Grid columns={1} gap={4} className="lg:gap-10 md:grid-cols-3" key={index}>
          <GridItem span={1}>
            <Text weight="bold" className="mb-4">
              Address
            </Text>
            <Text muted className="mb-5">
              {contact?.addressInfo}
            </Text>
          </GridItem>
          <GridItem span={1}>
            <Text weight="bold" className="mb-4">
              Email
            </Text>
            <Text muted className="mb-5">
              {contact?.emailInfo}
            </Text>
          </GridItem>
          <GridItem span={1}>
            <Text weight="bold" className="mb-4">
              Number
            </Text>
            <Text muted className="mb-5">
              {contact?.contactInfo}
            </Text>
          </GridItem>
        </Grid>
      ))}
    </Container>
  );
}

function CopyrightContainer({ copyright }: { copyright?: string }) {
  if (!copyright) return null;

  return (
    <Text muted className="text-sm">
      {copyright}
    </Text>
  );
}

function SocialMediaContainer({ socialMedia }: { socialMedia?: SocialLink[] }) {
  if (!socialMedia) return null;

  return (
    <Flex wrap className="space-x-2 lg:mx-10 lg:space-x-4">
      {socialMedia?.map((social, index) => <SocialMediaLink social={social} index={index} />)}
    </Flex>
  );
}

function SocialMediaLink({ social, index }: { social?: SocialLink; index?: number }) {
  if (!social?.socialMediaLink) return null;

  return (
    <a
      aria-label={social?.socialMedia || social?.socialMediaPlatform || ""}
      className="inline-block p-2 mr-2 rounded bg-gray-50 hover:bg-gray-100"
      target="_blank"
      rel="noopener noreferrer"
      href={social?.socialMediaLink}
      key={index}>
      {social?.socialMediaIcon?.image ? (
        <img
          className="h-6"
          src={`${social?.socialMediaIcon?.image}`}
          width={24}
          height={24}
          alt={social?.socialMediaIcon?.alt ?? "contact-socialMedia-icon"}
        />
      ) : (
        <SocialIcons social={social?.socialMedia as Socials} />
      )}
    </a>
  );
}

export { Footer_A };
