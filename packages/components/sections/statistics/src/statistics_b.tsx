import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Section } from "@stackshift-ui/section";
import { StatsCard } from "@stackshift-ui/stats-card";
import { StatsProps } from ".";
import { StatItems } from "./types";

export default function Statistics_B({ stats }: StatsProps) {
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
    <Flex wrap align="center" direction="col" className="sm:justify-left sm:flex-row">
      {stats?.map((stat, index) => (
        <StatsCard
          key={index}
          className="my-8 md:w-1/2 lg:w-1/4 lg:justify-center"
          value={stat?.value ?? ""}
          label={stat?.label ?? ""}
          icon={`${stat?.mainImage?.image}`}
          alt={stat?.mainImage?.alt}
        />
      ))}
    </Flex>
  );
}

export { Statistics_B };
