export interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  default?: string;
  description: string;
}

export interface ComponentExample {
  title: string;
  description?: string;
  code: string;
}

export interface ComponentDoc {
  name: string;
  slug: string;
  description: string;
  /** Detailed explanation of when/why to use this component */
  useCases?: string[];
  category: "layout" | "ui";
  /** Import statement for the component (from @stackshift-ui/react) */
  importCode?: string;
  /** Import statement for individual package installation (from @stackshift-ui/{component}) */
  individualImportCode?: string;
  /** Basic usage code example */
  usageCode?: string;
  props: PropDefinition[];
  /** Additional props for a secondary/container component (e.g., Toaster props for Toast) */
  toasterProps?: PropDefinition[];
  examples: ComponentExample[];
}

export interface ComponentCategory {
  name: string;
  slug: string;
  components: string[];
}

export const componentCategories: ComponentCategory[] = [
  {
    name: "Layout",
    slug: "layout",
    components: ["container", "flex", "grid", "grid-item", "section"],
  },
  {
    name: "UI Components",
    slug: "ui",
    components: [
      "accordion",
      "avatar",
      "badge",
      "button",
      "calendar",
      "card",
      "checkbox",
      "checkbox-group",
      "data-table",
      "date-picker",
      "dialog",
      "dropdown-menu",
      "form",
      "form-field",
      "heading",
      "image",
      "input",
      "input-file",
      "label",
      "link",
      "menu",
      "pagination",
      "popover",
      "radio",
      "radio-group",
      "scroll-area",
      "select",
      "sheet",
      "skeleton",
      "social-icons",
      "stats-card",
      "switch",
      "table",
      "text",
      "textarea",
      "toast",
      "toggle",
      "toggle-group",
      "tooltip",
    ],
  },
];

// Component documentation registry
const componentDocs: Record<string, ComponentDoc> = {};

// Register component docs
export function registerComponentDoc(doc: ComponentDoc) {
  componentDocs[doc.slug] = doc;
}

// Get all component slugs (only registered ones)
export function getAllComponentSlugs(): string[] {
  return Object.keys(componentDocs);
}

// Get registered component slugs for a category
export function getRegisteredComponentsForCategory(categorySlug: string): string[] {
  const category = componentCategories.find((cat) => cat.slug === categorySlug);
  if (!category) return [];
  return category.components.filter((slug) => componentDocs[slug] !== undefined);
}

// Get categories with only registered components
export function getCategoriesWithRegisteredComponents(): ComponentCategory[] {
  return componentCategories
    .map((cat) => ({
      ...cat,
      components: cat.components.filter((slug) => componentDocs[slug] !== undefined),
    }))
    .filter((cat) => cat.components.length > 0);
}

// Get component doc by slug
export function getComponentDoc(slug: string): ComponentDoc | null {
  return componentDocs[slug] || null;
}

// Get all registered component docs
export function getAllComponentDocs(): ComponentDoc[] {
  return Object.values(componentDocs);
}

// Helper to format component name from slug
export function formatComponentName(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

// Helper to format display name (with spaces)
export function formatDisplayName(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
