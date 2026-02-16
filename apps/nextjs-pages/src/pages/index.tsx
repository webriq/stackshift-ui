import { CodeBlock, DocsLayout } from "@/components/docs";
import { componentCategories, formatDisplayName, getComponentDoc } from "@/data/components";
import "@/data/components/registry";
import Head from "next/head";
import Link from "next/link";
import * as React from "react";

// Package Manager Tabs Component
function PackageManagerTabs() {
  const [activeTab, setActiveTab] = React.useState<"pnpm" | "npm" | "yarn">("pnpm");

  const commands = {
    pnpm: "pnpm add @stackshift-ui/react",
    npm: "npm install @stackshift-ui/react",
    yarn: "yarn add @stackshift-ui/react",
  };

  return (
    <div className="rounded-lg border border-gray-200 overflow-hidden">
      <div className="flex border-b border-gray-200 bg-gray-50">
        {(["pnpm", "npm", "yarn"] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-white text-gray-900 border-b-2 border-blue-600 -mb-px"
                : "text-gray-600 hover:text-gray-900"
            }`}>
            {tab}
          </button>
        ))}
      </div>
      <div className="p-0">
        <CodeBlock code={commands[activeTab]} language="bash" />
      </div>
    </div>
  );
}

export default function DocsHome() {
  const totalComponentCount = componentCategories.reduce(
    (sum, cat) => sum + cat.components.length,
    0,
  );

  return (
    <>
      <Head>
        <title>StackShift UI - Component Library</title>
        <meta
          name="description"
          content="A comprehensive React component library for building modern web applications."
        />
      </Head>

      <DocsLayout>
        <div className="space-y-12">
          {/* Hero */}
          <header className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">Components Library</h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              A comprehensive React component library for building modern web applications. Built
              with shadcn/ui and styled with Tailwind CSS.
            </p>
          </header>

          {/* Getting Started */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Getting Started</h2>
            <p className="text-gray-600">
              Install the package using your preferred package manager:
            </p>
            <PackageManagerTabs />
            <p className="text-gray-600 mt-4">
              Then wrap your application with the StackShiftUIProvider:
            </p>
            <CodeBlock
              code={`import { StackShiftUIProvider } from "@stackshift-ui/react";

export default function App({ children }) {
  return (
    <StackShiftUIProvider>
      {children}
    </StackShiftUIProvider>
  );
}`}
              language="tsx"
            />
          </section>

          {/* Components */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Components</h2>
              <p className="text-gray-600 mt-2">
                Explore our collection of {totalComponentCount} components organized by category.
              </p>
            </div>

            {componentCategories.map(category => (
              <div key={category.slug} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  {category.name}
                  <span className="text-sm font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                    {category.components.length}
                  </span>
                </h3>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {category.components.map(slug => {
                    const doc = getComponentDoc(slug);
                    return (
                      <Link
                        key={slug}
                        href={`/components/${slug}`}
                        className="block p-4 border rounded-lg hover:border-blue-300 hover:bg-blue-50/50 transition-colors group">
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600">
                          {formatDisplayName(slug)}
                        </h4>
                        {doc?.description && (
                          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                            {doc.description}
                          </p>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </section>
        </div>
      </DocsLayout>
    </>
  );
}
