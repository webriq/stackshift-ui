import { Card } from "@stackshift-ui/card";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import { SocialIcons } from "@stackshift-ui/social-icons";
import { Text } from "@stackshift-ui/text";
import React from "react";
import { ContactProps } from ".";
import { SocialLink } from "./types";

export default function Contact_B({
  title,
  contactDescription,
  officeInformation,
  contactNumber,
  contactEmail,
  socialLinks,
}: ContactProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <ContactHeader title={title} description={contactDescription} />
        <Container maxWidth={960}>
          <ContactDetails
            officeInformation={officeInformation}
            contactNumber={contactNumber}
            contactEmail={contactEmail}
            socialLinks={socialLinks}
          />
        </Container>
      </Container>
    </Section>
  );
}

function ContactHeader({ title, description }: { title?: string; description?: string }) {
  return (
    <div className="mb-16 text-center">
      {title ? (
        <Heading type="h1" fontSize="3xl">
          {title}
        </Heading>
      ) : null}
      {description ? <Text muted>{description}</Text> : null}
    </div>
  );
}

function ContactDetails({
  officeInformation,
  contactEmail,
  contactNumber,
  socialLinks,
}: {
  officeInformation?: string;
  contactEmail?: string;
  contactNumber?: string;
  socialLinks?: any;
}) {
  return (
    <Flex className="flex-col lg:flex-row" gap={4} justify="between" align="stretch">
      {officeInformation ? <OfficeInformationCard officeInformation={officeInformation} /> : null}

      {contactEmail || contactNumber ? (
        <ContactsCard contactEmail={contactEmail} contactNumber={contactNumber} />
      ) : null}

      {socialLinks ? <SocialLinksCard socialLinks={socialLinks} /> : null}
    </Flex>
  );
}

function OfficeInformationCard({ officeInformation }: { officeInformation: string }) {
  return (
    <Card className="w-full p-12 text-center bg-white md:p-16 lg:p-20">
      <Heading type="h2" fontSize="2xl" className="mb-16">
        Office
      </Heading>
      <Text muted>{officeInformation}</Text>
    </Card>
  );
}

function ContactsCard({
  contactEmail,
  contactNumber,
}: {
  contactEmail?: string;
  contactNumber?: string;
}) {
  return (
    <Card className="w-full p-12 bg-white md:p-16 lg:p-20 text-center">
      <Heading type="h2" fontSize="2xl" className="mb-16 ">
        Contacts
      </Heading>
      <Text className="mb-2" muted>
        {contactEmail ? <Link href={`mailto:${contactEmail}`}>{contactEmail}</Link> : null}
      </Text>
      <Text muted>
        {contactNumber ? <Link href={`tel:${contactNumber}`}>{contactNumber}</Link> : null}
      </Text>
    </Card>
  );
}

function SocialLinksCard({ socialLinks }: any) {
  return (
    <Card className="w-full p-12 text-center bg-white md:p-16 lg:p-20">
      <Heading className="mb-16" fontSize="2xl" type="h2">
        Socials
      </Heading>
      <Flex justify="center" wrap>
        <SocialLinks socialLinks={socialLinks} />
      </Flex>
    </Card>
  );
}

function SocialLinks({ socialLinks }: { socialLinks?: SocialLink[] }) {
  if (!socialLinks) return null;

  return (
    <React.Fragment>
      {socialLinks?.map(social => (
        <Link
          aria-label={social?.socialMedia || social?.socialMediaPlatform || ""}
          className="inline-block mr-4 mb-4 rounded"
          target="_blank"
          rel="noopener noreferrer"
          href={social?.socialMediaLink ?? "/page-not-found"}
          key={social?._key}>
          {social?.socialMediaIcon?.image ? (
            <Image
              src={social?.socialMediaIcon?.image}
              width={24}
              height={24}
              alt={social?.socialMediaIcon?.alt ?? "contact-socialMedia-icon"}
            />
          ) : (
            <SocialIcons social={social.socialMedia as any} />
          )}
        </Link>
      ))}
    </React.Fragment>
  );
}

export { Contact_B };
