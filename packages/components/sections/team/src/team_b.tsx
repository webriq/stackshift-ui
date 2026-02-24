import { Button } from "@stackshift-ui/button";
import { Card, CardContent } from "@stackshift-ui/card";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import React from "react";
import { MemberTextProps, TeamsProps } from ".";
import { Team as iTeam } from "./types";

export default function Team_B({ team }: TeamsProps) {
  const [activeTab, setActiveTab] = React.useState<string | undefined>(team?.[0]?.name);

  const filteredMembers = React.useMemo(
    () => team?.filter(member => member?.name === activeTab) || [],
    [team, activeTab],
  );

  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Flex wrap align="center">
          <TeamTabs team={team} activeTab={activeTab} setActiveTab={setActiveTab} />
          <TeamMembersList members={filteredMembers} />
        </Flex>
      </Container>
    </Section>
  );
}

interface TeamTabsProps {
  team?: iTeam[];
  activeTab?: string;
  setActiveTab: (name: string) => void;
}

function TeamTabs({ team, activeTab, setActiveTab }: TeamTabsProps) {
  return (
    <div className="w-full px-3 mb-8 lg:mb-0 lg:w-1/3">
      <Flex
        as="ul"
        wrap
        justify="center"
        direction="row"
        className="lg:flex-col lg:justify-start gap-3">
        {team?.map(item => (
          <TeamTab key={item.name} data={item} activeTab={activeTab} setActiveTab={setActiveTab} />
        ))}
      </Flex>
    </div>
  );
}

interface TeamTabProps {
  data?: iTeam;
  activeTab?: string;
  setActiveTab: (name: string) => void;
}

function TeamTab({ data, activeTab, setActiveTab }: TeamTabProps) {
  if (!data || !data.name) return null;

  return (
    <li>
      <Button
        variant="unstyled"
        aria-label={data.name}
        className={`text-xl lg:text-2xl ${
          data.name === activeTab ? "text-black" : "text-gray-400"
        } font-bold hover:text-gray-500 focus:outline-none`}
        onClick={() => setActiveTab(data.name ?? "")}>
        {data.name}
      </Button>
    </li>
  );
}

function TeamMembersList({ members }: { members?: iTeam[] }) {
  if (!members) return null;

  return (
    <div className="w-full lg:w-2/3 sm:p-6">
      {members.map((member, index) => (
        <TeamMemberCard key={index} member={member} />
      ))}
    </div>
  );
}

function TeamMemberCard({ member }: { member?: iTeam }) {
  if (!member) return null;

  return (
    <Card className="flex flex-col gap-3 md:gap-0 md:flex-row shadow-lg bg-white md:h-96 rounded-md">
      <CardContent className="flex flex-col gap-3 md:gap-0 md:flex-row p-0">
        {member.mainImage?.image && (
          <div className="w-full md:w-1/2 h-48 md:h-full relative overflow-hidden rounded-l-md">
            <Image
              className="object-cover absolute inset-0 w-full h-full"
              src={`${member.mainImage.image}`}
              sizes="100vw"
              width={329}
              height={500}
              alt={member.mainImage.alt ?? `team-member-${member.name}-profile-image`}
            />
          </div>
        )}
        <TeamMemberText member={member} />
      </CardContent>
    </Card>
  );
}

function TeamMemberText({ member }: MemberTextProps) {
  return (
    <div className="w-full md:w-1/2 md:p-6 max-h-[300px] md:max-h-96 overflow-y-auto">
      <Text weight="bold" fontSize="2xl">
        {member.name}
      </Text>
      <Text muted>{member.jobTitle}</Text>
      <Text className="text-justify mt-4" muted>
        {member.plainText}
      </Text>
    </div>
  );
}

export { Team_B };
