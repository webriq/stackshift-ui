import React from "react";
import { Avatar } from "@stackshift-ui/avatar";
import { Card } from "@stackshift-ui/card";
import { Heading } from "@stackshift-ui/heading";
import { Text } from "@stackshift-ui/text";
import { Section } from "@stackshift-ui/section";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Team as iTeam } from "./types";
import { MemberTextProps, TeamsProps } from ".";

export default function Team_A({ caption, title, team }: TeamsProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1000}>
        <Container maxWidth={576} className="mb-10 text-center">
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
    <Flex wrap>
      {team?.map(member => (
        <div className="w-full px-3 mb-6 md:w-1/2 lg:w-1/3" key={member?.name}>
          <Card className="py-24 text-center">
            {member?.mainImage?.image && (
              <Avatar
                className="mx-auto border-0"
                size={96}
                alt={member?.mainImage?.alt ?? `team-member-${member?.name}-profile-image`}
                src={`${member?.mainImage?.image}`}
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
    <React.Fragment>
      <Heading type="h3" className="mb-2 text-xl lg:text-2xl">
        {member?.name}
      </Heading>
      <Text muted>{member?.jobTitle}</Text>
    </React.Fragment>
  );
}

export { Team_A };
