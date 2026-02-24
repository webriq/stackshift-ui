import { Card, CardContent } from "@stackshift-ui/card";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
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
        <div key={index} className="my-8 md:w-1/2 lg:w-1/4 w-full px-4">
          <Card className="bg-white">
            <CardContent className="flex items-center p-4">
              {stat?.mainImage?.image && (
                <div className="inline-block p-4 mr-4 rounded bg-secondary/50">
                  <img
                    src={stat?.mainImage?.image}
                    width={24}
                    height={24}
                    alt={stat?.mainImage?.alt ?? "statistics-icon"}
                  />
                </div>
              )}
              <div>
                <p className="text-2xl text-gray-500 font-bold">{stat?.value ?? ""}</p>
                <Text muted>{stat?.label ?? ""}</Text>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </Flex>
  );
}

export { Statistics_B };
