import { Card, CardContent } from "@stackshift-ui/card";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import React from "react";
import { StatsProps } from ".";
import { StatItems } from "./types";

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
          <Card className="relative py-10 shadow-md bg-white">
            <CardContent className="pt-6">
              <Text className="mb-1 text-primary overflow-ellipsis overflow-clip">
                {items?.label}
              </Text>
              <p className="text-xl text-gray-500 font-bold lg:text-2xl overflow-ellipsis overflow-clip">
                {items?.value}
              </p>
            </CardContent>
          </Card>
        </div>
      ))}
    </React.Fragment>
  );
}

export { Statistics_A };
