import { Card } from "@stackshift-ui/card";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import { MemberTextProps, TeamsProps } from ".";
import { Team as iTeam } from "./types";

export default function Team_D({ caption, title, team }: TeamsProps) {
  return (
    <Section className="!md:px-4 py-20 bg-background">
      <Container maxWidth={1280}>
        <CaptionAndTitle caption={caption} title={title} />
        <TeamMemberCard team={team} />
      </Container>
    </Section>
  );
}

function CaptionAndTitle({ caption, title }: { caption?: string; title?: string }) {
  return (
    <Container maxWidth={576} className="mb-8 text-center lg:mb-16">
      {caption && (
        <Text weight="bold" className="text-secondary">
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
      {team &&
        team.map((member, index) => (
          <div className="w-full px-4 mb-6 md:w-1/2" key={index}>
            <Card
              className="items-center p-0 bg-white overflow-hidden shadow-lg lg:block xl:flex"
              borderRadius="md">
              {member.mainImage?.image && (
                <div>
                  <Image
                    className="h-[320px] w-full object-cover rounded-md xl:w-[179px]"
                    sizes="100vw"
                    src={`${member?.mainImage?.image}`}
                    width={179}
                    height={320}
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
    <div className="w-full lg:p-4 xl:w-2/3">
      <Text
        weight="bold"
        className="my-2 text-lg sm:text-xl md:text-2xl"
      >
        {member?.name}
      </Text>
      <Text
        className="mb-4 leading-loose text-sm md:text-base"
        muted
      >
        {member?.plainText}
      </Text>
    </div>
  );
}

export { Team_D };
