import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Grid } from "@stackshift-ui/grid";
import { GridItem } from "@stackshift-ui/grid-item";
import { Image } from "@stackshift-ui/image";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import { SocialIcons } from "@stackshift-ui/social-icons";
import { Text } from "@stackshift-ui/text";

import { FooterProps } from ".";
import { logoLink } from "./helper";
import { ContactDetails, Logo, SocialLink, Socials } from "./types";

export default function Footer_A({ logo, text, contacts, copyright, socialMedia }: FooterProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280} className="lg:px-4">
        <Flex wrap className="mb-5 lg:mb-20">
          <LogoSection logo={logo} />
          <TextContainer text={text} />
          <ContactsContainer contacts={contacts} />
        </Flex>
        <Flex justify="between" align="center" wrap className="w-full mx-auto gap-4">
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
    </div>
  );
}

function TextContainer({ text }: { text?: string }) {
  if (!text) return null;

  return (
    <Container className="w-full mb-5 lg:w-1/5 !px-0 lg:px-4" maxWidth={1280}>
      <Text muted className="leading-loose">
        {text}
      </Text>
    </Container>
  );
}

function ContactsContainer({ contacts }: { contacts?: ContactDetails[] }) {
  if (!contacts) return null;

  return (
    <Container className="w-full mt-1 lg:w-1/2 !px-0 lg:px-4" maxWidth={1280}>
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
              <a
                href={`mailto:${contact?.emailInfo}`}
                style={{ color: "inherit", textDecoration: "none" }}>
                {contact?.emailInfo}
              </a>
            </Text>
          </GridItem>
          <GridItem span={1}>
            <Text weight="bold" className="mb-4">
              Number
            </Text>
            <Text muted className="mb-5">
              <a
                href={`tel:${contact?.contactInfo}`}
                style={{ color: "inherit", textDecoration: "none" }}>
                {contact?.contactInfo}
              </a>
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
    <Flex wrap className="gap-5">
      {socialMedia?.map((social, index) => <SocialMediaLink social={social} key={index} />)}
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

export { Footer_A };
