import { StatsCard } from "@stackshift-ui/stats-card";
import { Section } from "@stackshift-ui/section";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { StatItems } from "./types";
import { StatsProps } from ".";

export default function Statistics_C({ stats }: StatsProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <StatisticsItems stats={stats} />
      </Container>
    </Section>
  );
}

function StatisticsItems({ stats }: { stats?: StatItems[] }) {
  if (!stats) return null;

  return (
    <Flex wrap align="center" className="text-center ">
      {stats?.map((stat, index) => (
        <StatsCard
          key={index}
          className="my-8 md:w-1/2 lg:w-1/4"
          variant="stacked"
          value={stat?.value ?? ""}
          label={stat?.label ?? ""}
          icon={`${stat?.mainImage?.image}`}
        />
      ))}
    </Flex>
  );
}
