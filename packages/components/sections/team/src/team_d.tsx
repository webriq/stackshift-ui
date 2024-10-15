import { Card } from "@webriq-test/card";
import { Text } from "@webriq-test/text";
import { Heading } from "@webriq-test/heading";
import { Image } from "@webriq-test/image";
import { Section } from "@webriq-test/section";
import { Container } from "@webriq-test/container";
import { Flex } from "@webriq-test/flex";
import { Team as iTeam } from "./types";
import { MemberTextProps, TeamsProps } from ".";

export default function Team_D({ caption, title, team }: TeamsProps) {
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
          <div className="w-full px-4 mb-6 lg:w-1/2" key={index}>
            <Card className="items-center p-0 overflow-hidden sm:flex sm:flex-wrap lg:block xl:flex">
              {member.mainImage?.image && (
                <div>
                  <Image
                    className="h-[320px] w-full object-cover sm:w-[179px] lg:w-full xl:w-[179px]"
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
    <div className="p-4 sm:w-2/3 lg:w-full lg:pl-6 xl:w-2/3">
      <Text weight="bold" fontSize="2xl" className="mb-2">
        {member?.name}
      </Text>
      <Text className="mb-4 leading-loose" muted>
        {member?.plainText}
      </Text>
    </div>
  );
}

export { Team_D };
