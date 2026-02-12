import type { ComponentDoc } from "./index";

export const statsCardDoc: ComponentDoc = {
  name: "StatsCard",
  slug: "stats-card",
  description:
    "A statistics card component for displaying key metrics with an icon, value, and label. Note: This component is deprecated - use the Card component for new implementations.",
  useCases: [
    "Dashboard statistics displays (deprecated - use Card)",
    "Analytics and metrics panels (deprecated - use Card)",
    "KPI visualizations (deprecated - use Card)",
    "Performance indicators (deprecated - use Card)",
    "Summary statistics cards (deprecated - use Card)",
  ],
  category: "ui",
  importCode: `// Deprecated - Use Card component instead
import { StatsCard } from "@stackshift-ui/react";
// Recommended alternative:
// import { Card, CardContent } from "@stackshift-ui/react";`,
  individualImportCode: `// Deprecated - Use Card component instead
import { StatsCard } from "@stackshift-ui/stats-card";
// Recommended alternative:
// import { Card, CardContent } from "@stackshift-ui/card";`,
  usageCode: `// Deprecated
<StatsCard
  icon="/icon.svg"
  value="1,234"
  label="Total Users"
/>

// Recommended alternative:
// <Card>
//   <CardContent className="flex items-center p-4">
//     <img src="/icon.svg" className="mr-4" />
//     <div>
//       <p className="text-2xl font-bold">1,234</p>
//       <p className="text-muted-foreground">Total Users</p>
//     </div>
//   </CardContent>
// </Card>`,
  props: [
    {
      name: "icon",
      type: "string",
      required: true,
      description: "The URL path to the icon image.",
    },
    {
      name: "value",
      type: "string",
      required: true,
      description: "The statistic value to display.",
    },
    {
      name: "label",
      type: "string",
      required: true,
      description: "The label describing the statistic.",
    },
    {
      name: "variant",
      type: '"inline" | "stacked"',
      required: false,
      default: '"inline"',
      description: "The layout orientation of the card.",
    },
    {
      name: "alt",
      type: "string",
      required: false,
      default: '"statistics-icon"',
      description: "Alt text for the icon image.",
    },
    {
      name: "className",
      type: "string",
      required: false,
      description: "Additional CSS classes to apply.",
    },
  ],
  examples: [
    {
      title: "Deprecation Notice",
      description: "This component is deprecated. Use the Card component instead.",
      code: `// ❌ Deprecated - Don't use this
<StatsCard
  icon="/icon.svg"
  value="1,234"
  label="Total Users"
/>

// ✅ Recommended - Use this instead
<Card>
  <CardContent className="flex items-center p-6">
    <div className="p-4 mr-4 rounded bg-secondary/50">
      <img src="/icon.svg" width={24} height={24} alt="icon" />
    </div>
    <div>
      <p className="text-2xl font-bold text-gray-500">1,234</p>
      <Text variant="muted">Total Users</Text>
    </div>
  </CardContent>
</Card>`,
    },
    {
      title: "Legacy Example - Inline Variant",
      description: "Statistics card with inline layout (deprecated).",
      code: `<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <StatsCard
    variant="inline"
    icon="/users-icon.svg"
    value="12,345"
    label="Total Users"
  />
  <StatsCard
    variant="inline"
    icon="/revenue-icon.svg"
    value="$45,678"
    label="Revenue"
  />
  <StatsCard
    variant="inline"
    icon="/orders-icon.svg"
    value="2,890"
    label="Orders"
  />
</div>`,
    },
    {
      title: "Legacy Example - Stacked Variant",
      description: "Statistics card with stacked layout (deprecated).",
      code: `<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
  <StatsCard
    variant="stacked"
    icon="/metric1.svg"
    value="98%"
    label="Satisfaction"
  />
  <StatsCard
    variant="stacked"
    icon="/metric2.svg"
    value="2.5x"
    label="Growth"
  />
  <StatsCard
    variant="stacked"
    icon="/metric3.svg"
    value="24/7"
    label="Support"
  />
  <StatsCard
    variant="stacked"
    icon="/metric4.svg"
    value="150+"
    label="Countries"
  />
</div>`,
    },
  ],
};
