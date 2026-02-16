import { CodeBlock, DocsLayout, LivePreview, PreviewCodeTabs, PropsTable } from "@/components/docs";
import {
  formatComponentName,
  formatDisplayName,
  getAllComponentSlugs,
  getComponentDoc,
  type ComponentDoc,
} from "@/data/components";
import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import * as React from "react";
// Initialize registry
import "@/data/components/registry";

interface NavLink {
  slug: string;
  name: string;
}

interface ComponentPageProps {
  doc: ComponentDoc;
  prevComponent: NavLink | null;
  nextComponent: NavLink | null;
}

// Installation Tabs Component with dual installation mode support
interface InstallationTabsProps {
  slug: string;
}

function InstallationTabs({ slug }: InstallationTabsProps) {
  const [installMode, setInstallMode] = React.useState<"full" | "individual">("full");
  const [activeTab, setActiveTab] = React.useState<"pnpm" | "npm" | "yarn">("pnpm");

  const packageName = installMode === "full" ? "@stackshift-ui/react" : `@stackshift-ui/${slug}`;

  const commands = {
    pnpm: `pnpm add ${packageName}`,
    npm: `npm install ${packageName}`,
    yarn: `yarn add ${packageName}`,
  };

  return (
    <div className="space-y-4">
      {/* Explanatory note */}
      <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
        <p className="font-medium mb-2">Installation Options</p>
        <ul className="list-disc list-inside space-y-1 text-gray-500">
          <li>
            <strong>Full Library:</strong> Installation + Import from full library Individual
            Component tab - installation + import from individual pkg
          </li>
          <li>
            <strong>Individual:</strong> Install only this component
          </li>
        </ul>
      </div>

      {/* Install mode toggle */}
      <div className="flex gap-2">
        <button
          onClick={() => setInstallMode("full")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            installMode === "full"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}>
          Full Library
        </button>
        <button
          onClick={() => setInstallMode("individual")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            installMode === "individual"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}>
          Individual Component
        </button>
      </div>

      {/* Package manager tabs */}
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
    </div>
  );
}

export default function ComponentPage({ doc, prevComponent, nextComponent }: ComponentPageProps) {
  const componentName = formatComponentName(doc.slug);

  return (
    <>
      <Head>
        <title>{doc.name} - StackShift UI</title>
        <meta name="description" content={doc.description} />
      </Head>

      <DocsLayout>
        <div className="space-y-10">
          {/* 1. Component Name */}
          <header>
            <h1 className="text-3xl font-bold text-gray-900">{doc.name}</h1>
          </header>

          {/* 2. Description */}
          <section>
            <p className="text-lg text-gray-600">{doc.description}</p>
          </section>

          {/* 3. When to Use */}
          {doc.useCases && doc.useCases.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">When to use</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {doc.useCases.map((useCase, i) => (
                  <li key={i}>{useCase}</li>
                ))}
              </ul>
            </section>
          )}

          {/* 4. Installation */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Installation</h2>
            <InstallationTabs slug={doc.slug} />

            {/* Import statements - showing both options */}
            <div className="mt-6 space-y-4">
              <h3 className="text-sm font-semibold text-gray-700">Import</h3>

              {/* Full library import */}
              <div>
                <p className="text-xs text-gray-500 mb-2">From full library:</p>
                {doc.importCode ? (
                  <CodeBlock code={doc.importCode} language="tsx" />
                ) : (
                  <CodeBlock
                    code={`import { ${componentName} } from "@stackshift-ui/react";`}
                    language="tsx"
                  />
                )}
              </div>

              {/* Individual package import */}
              <div>
                <p className="text-xs text-gray-500 mb-2">From individual package:</p>
                {doc.individualImportCode ? (
                  <CodeBlock code={doc.individualImportCode} language="tsx" />
                ) : (
                  <CodeBlock
                    code={`import { ${componentName} } from "@stackshift-ui/${doc.slug}";`}
                    language="tsx"
                  />
                )}
              </div>
            </div>
          </section>

          {/* 5. Examples */}
          {doc.examples.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Examples</h2>
              <div className="space-y-8">
                {doc.examples.map((example, i) => (
                  <div key={i} className="space-y-3">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">{example.title}</h3>
                      {example.description && (
                        <p className="text-sm text-gray-600 mt-1">{example.description}</p>
                      )}
                    </div>
                    <PreviewCodeTabs
                      preview={<LivePreview code={example.code} />}
                      code={example.code}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 6. API Reference */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">API Reference</h2>

            {/* Main component props */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  {doc.slug === "toast" ? "Toast Props" : `${doc.name} Props`}
                </h3>
                <PropsTable props={doc.props} />
              </div>

              {/* Toaster props (for toast component) */}
              {doc.toasterProps && doc.toasterProps.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Toaster Props</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Props for the Toaster container component that controls global toast behavior
                    and positioning.
                  </p>
                  <PropsTable props={doc.toasterProps} />
                </div>
              )}
            </div>
          </section>

          {/* Previous / Next Navigation */}
          <nav className="flex items-center justify-between pt-8 border-t border-gray-200">
            {prevComponent ? (
              <Link
                href={`/components/${prevComponent.slug}`}
                className="group flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                <svg
                  className="w-4 h-4 text-gray-600 group-hover:text-gray-900 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="text-gray-900 font-medium">{prevComponent.name}</span>
              </Link>
            ) : (
              <div />
            )}

            {nextComponent ? (
              <Link
                href={`/components/${nextComponent.slug}`}
                className="group flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                <span className="text-gray-900 font-medium">{nextComponent.name}</span>
                <svg
                  className="w-4 h-4 text-gray-600 group-hover:text-gray-900 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </div>
      </DocsLayout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Initialize registry for static generation
  await import("@/data/components/registry");

  const slugs = getAllComponentSlugs();

  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ComponentPageProps> = async ({ params }) => {
  // Initialize registry
  await import("@/data/components/registry");

  const slug = params?.slug as string;
  const doc = getComponentDoc(slug);

  if (!doc) {
    return { notFound: true };
  }

  // Get all slugs and find prev/next
  const allSlugs = getAllComponentSlugs();
  const currentIndex = allSlugs.indexOf(slug);

  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  const prevComponent = prevSlug ? { slug: prevSlug, name: formatDisplayName(prevSlug) } : null;
  const nextComponent = nextSlug ? { slug: nextSlug, name: formatDisplayName(nextSlug) } : null;

  return {
    props: { doc, prevComponent, nextComponent },
  };
};
