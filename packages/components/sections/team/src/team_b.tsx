import { Button } from "@stackshift-ui/button";
import { Card } from "@stackshift-ui/card";
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
        className="space-x-6 lg:flex-col lg:justify-start lg:space-x-0">
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
        as="button"
        variant="unstyled"
        ariaLabel={data.name}
        className={`mb-4 text-xl lg:text-2xl ${
          data.name === activeTab ? "text-gray-900" : "text-gray-500"
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
    <div className="w-full px-3 lg:w-2/3">
      {members.map((member, index) => (
        <TeamMemberCard key={index} member={member} />
      ))}
    </div>
  );
}

function TeamMemberCard({ member }: { member?: iTeam }) {
  if (!member) return null;

  return (
    <Card className="flex p-6 bg-white">
      {member.mainImage?.image && (
        <Image
          className="object-cover overflow-hidden rounded-global"
          src={`${member.mainImage.image}`}
          sizes="100vw"
          width={329}
          height={494}
          alt={member.mainImage.alt ?? `team-member-${member.name}-profile-image`}
        />
      )}
      <TeamMmeberText member={member} />
    </Card>
  );
}

function TeamMmeberText({ member }: MemberTextProps) {
  return (
    <div className="order-last w-1/2 pt-6 pl-6 mt-6">
      <Text weight="bold" fontSize="2xl">
        {member.name}
      </Text>
      <Text className="mb-6" muted>
        {member.jobTitle}
      </Text>
      <Text className="mb-6 text-justify" muted>
        {member.plainText}
      </Text>
    </div>
  );
}

export { Team_B };
