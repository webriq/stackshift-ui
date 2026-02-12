import type { ComponentDoc } from "./index";

export const statsCardDoc: ComponentDoc = {
  name: "StatsCard",
  slug: "stats-card",
  description:
    "A statistics card pattern for displaying key metrics. This page shows the recommended approach using the Card component, as the legacy StatsCard is deprecated.",
  useCases: [
    "Dashboard statistics displays",
    "Analytics and metrics panels",
    "KPI visualizations",
    "Performance indicators",
    "Summary statistics cards",
  ],
  category: "ui",
  importCode: `import { Card, CardContent } from "@stackshift-ui/react";`,
  individualImportCode: `import { Card, CardContent } from "@stackshift-ui/card";`,
  usageCode: `<Card>
  <CardContent className="flex items-center p-6">
    <div className="text-4xl mr-4">📊</div>
    <div>
      <p className="text-2xl font-bold">1,234</p>
      <p className="text-muted-foreground">Total Users</p>
    </div>
  </CardContent>
</Card>`,
  props: [
    {
      name: "className",
      type: "string",
      required: false,
      description: "Additional CSS classes to apply to the Card.",
    },
  ],
  examples: [
    {
      title: "Basic Stats Card",
      description: "A simple statistics card with icon, value, and label.",
      code: `<Card>
  <CardContent className="flex items-center p-6">
    <div className="text-4xl mr-4">👥</div>
    <div>
      <p className="text-2xl font-bold">1,234</p>
      <Text className="text-muted-foreground">Total Users</Text>
    </div>
  </CardContent>
</Card>`,
    },
    {
      title: "Stats Card Grid",
      description: "Multiple stats cards in a responsive grid layout.",
      code: `<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <Card>
    <CardContent className="flex items-center p-6">
      <div className="text-3xl mr-4">👥</div>
      <div>
        <p className="text-2xl font-bold">12,345</p>
        <Text className="text-sm text-muted-foreground">Total Users</Text>
      </div>
    </CardContent>
  </Card>
  <Card>
    <CardContent className="flex items-center p-6">
      <div className="text-3xl mr-4">💰</div>
      <div>
        <p className="text-2xl font-bold">$45,678</p>
        <Text className="text-sm text-muted-foreground">Revenue</Text>
      </div>
    </CardContent>
  </Card>
  <Card>
    <CardContent className="flex items-center p-6">
      <div className="text-3xl mr-4">📦</div>
      <div>
        <p className="text-2xl font-bold">2,890</p>
        <Text className="text-sm text-muted-foreground">Orders</Text>
      </div>
    </CardContent>
  </Card>
</div>`,
    },
    {
      title: "Stacked Stats Card",
      description: "Stats card with stacked/centered layout.",
      code: `<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <Card>
    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
      <div className="text-3xl mb-2">✅</div>
      <p className="text-2xl font-bold">98%</p>
      <Text className="text-sm text-muted-foreground">Satisfaction</Text>
    </CardContent>
  </Card>
  <Card>
    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
      <div className="text-3xl mb-2">📈</div>
      <p className="text-2xl font-bold">2.5x</p>
      <Text className="text-sm text-muted-foreground">Growth</Text>
    </CardContent>
  </Card>
  <Card>
    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
      <div className="text-3xl mb-2">🕐</div>
      <p className="text-2xl font-bold">24/7</p>
      <Text className="text-sm text-muted-foreground">Support</Text>
    </CardContent>
  </Card>
  <Card>
    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
      <div className="text-3xl mb-2">🌍</div>
      <p className="text-2xl font-bold">150+</p>
      <Text className="text-sm text-muted-foreground">Countries</Text>
    </CardContent>
  </Card>
</div>`,
    },
  ],
};
