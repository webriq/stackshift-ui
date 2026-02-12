import Head from "next/head";
import Link from "next/link";
import { DocsLayout, CodeBlock } from "@/components/docs";
import {
  componentCategories,
  getComponentDoc,
  formatDisplayName,
} from "@/data/components";
import "@/data/components/registry";

export default function DocsHome() {
  const totalComponentCount = componentCategories.reduce(
    (sum, cat) => sum + cat.components.length,
    0
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
            <h1 className="text-4xl font-bold text-gray-900">StackShift UI</h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              A comprehensive React component library for building modern web applications.
              Built with Tailwind CSS and designed for flexibility.
            </p>
          </header>

          {/* Getting Started */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900">Getting Started</h2>
            <p className="text-gray-600">
              Install the package using your preferred package manager:
            </p>
            <CodeBlock code={`npm install @stackshift-ui/react`} language="bash" />
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

            {componentCategories.map((category) => (
              <div key={category.slug} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  {category.name}
                  <span className="text-sm font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                    {category.components.length}
                  </span>
                </h3>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {category.components.map((slug) => {
                    const doc = getComponentDoc(slug);
                    return (
                      <Link
                        key={slug}
                        href={`/components/${slug}`}
                        className="block p-4 border rounded-lg hover:border-blue-300 hover:bg-blue-50/50 transition-colors group"
                      >
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
