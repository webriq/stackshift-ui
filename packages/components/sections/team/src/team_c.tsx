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

export default function Team_C({ caption, title, team }: TeamsProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <CaptionAndTitle caption={caption} title={title} />
        <TeamMemberCard team={team} />
      </Container>
    </Section>
  );
}

function CaptionAndTitle({ caption, title }: { caption?: string; title?: string }) {
  return (
    <Container maxWidth={576} className="mb-12 text-center ">
      {caption && (
        <Text weight="bold" className="text-primary">
          {caption}
        </Text>
      )}
      {title && <Heading>{title}</Heading>}
    </Container>
  );
}

function TeamMemberCard({ team }: { team?: iTeam[] }) {
  if (!team) return null;

  return (
    <Flex wrap>
      {team.map(member => (
        <div className="w-full px-3 mb-6 md:w-1/2 lg:w-1/3" key={member?.name}>
          <Card className="w-full p-0 pb-8 overflow-hidden text-center">
            {member.mainImage?.image && (
              <div>
                <Image
                  className="mb-8 h-[345px] w-full object-cover rounded-global"
                  sizes="100vw"
                  src={`${member?.mainImage?.image}`}
                  width={345}
                  height={256}
                  alt={member?.mainImage?.alt ?? `team-member-${member?.name}-profile-image`}
                />
              </div>
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
      <Text fontSize="2xl" weight="bold" className="mb-2">
        {member?.name}
      </Text>
      <Text muted>{member?.jobTitle}</Text>
    </React.Fragment>
  );
}

export { Team_C };
