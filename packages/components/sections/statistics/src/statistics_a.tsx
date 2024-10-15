import React from "react";
import { Card } from "@webriq-test/card";
import { Text } from "@webriq-test/text";
import { Section } from "@webriq-test/section";
import { Container } from "@webriq-test/container";
import { Flex } from "@webriq-test/flex";
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
