import { Card } from "@stackshift-ui/card";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import React from "react";
import { MemberTextProps, TeamsProps } from ".";
import { Team as iTeam } from "./types";

export default function Team_A({ caption, title, team }: TeamsProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Container className="mb-10 text-center">
          <CaptionAndTitle caption={caption} title={title} />
        </Container>
        <Teams team={team} />
      </Container>
    </Section>
  );
}

function CaptionAndTitle({ caption, title }: { caption?: string; title?: string }) {
  return (
    <React.Fragment>
      {caption ? (
        <Text weight="bold" className="text-secondary">
          {caption}
        </Text>
      ) : null}
      {title ? (
        <Heading type="h2" fontSize="2xl">
          {title}
        </Heading>
      ) : null}
    </React.Fragment>
  );
}

function Teams({ team }: { team?: iTeam[] }) {
  if (!team) return null;

  return (
    <Flex wrap align="center" justify="center" gap={6}>
      {team?.map(member => (
        <div className="w-full [@media(min-width:421px)]:w-96 sm:w-1/2 lg:w-1/3" key={member?.name}>
          <Card className="py-10 [@media(min-width:320px)]:py-20 items-center text-center shadow-lg bg-white flex flex-col gap-4 rounded-md">
            {member?.mainImage?.image && (
              <Image
                width={96}
                height={96}
                className="border-0 w-28 h-28 object-cover rounded-full"
                src={`${member?.mainImage?.image}`}
                alt={member?.mainImage?.alt ?? `team-member-${member?.name}-profile-image`}
              />
            )}
            <TeamMemberText member={member} />
          </Card>
        </div>
      ))}
    </Flex>
  );
}

function TeamMemberText({ member }: MemberTextProps) {
  return (
    <div className="flex flex-col gap-2">
      <Heading type="h3" className="text-xl lg:text-2xl">
        {member?.name}
      </Heading>
      <Text muted>{member?.jobTitle}</Text>
    </div>
  );
}

export { Team_A };
