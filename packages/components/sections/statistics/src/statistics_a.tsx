import React from "react";
import { Card } from "@stackshift-ui/card";
import { Text } from "@stackshift-ui/text";
import { Section } from "@stackshift-ui/section";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { StatItems } from "./types";
import { StatsProps } from ".";

export default function Statistics_A({ stats }: StatsProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Flex wrap align="center" justify="start" className="text-center">
          <StatisticsItems stats={stats} />
        </Flex>
      </Container>
    </Section>
  );
}

function StatisticsItems({ stats }: { stats?: StatItems[] }) {
  if (!stats) return null;

  return (
    <React.Fragment>
      {stats.map((items, index) => (
        <div className="w-full px-4 my-8 sm:w-1/4 lg:w-1/4" key={index}>
          <Card className="relative py-10 ">
            <Text className="mb-1 text-primary overflow-ellipsis overflow-clip">
              {items?.label}
            </Text>
            <p className="text-xl font-bold lg:text-2xl overflow-ellipsis overflow-clip">
              {items?.value}
            </p>
          </Card>
        </div>
      ))}
    </React.Fragment>
  );
}

export { Statistics_A };
