import { useState } from "react";

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  children: (activeTab: string) => React.ReactNode;
}

export function Tabs({ tabs, defaultTab, children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-4 py-2 text-sm font-medium transition-colors
              ${
                activeTab === tab.id
                  ? "border-b-2 border-gray-900 text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-4">{children(activeTab)}</div>
    </div>
  );
}

interface PreviewCodeTabsProps {
  preview: React.ReactNode;
  code: string;
}

export function PreviewCodeTabs({ preview, code }: PreviewCodeTabsProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <div className="border rounded-lg overflow-hidden">
      {/* Tab buttons */}
      <div className="flex border-b bg-gray-50">
        <button
          onClick={() => setActiveTab("preview")}
          className={`
            px-4 py-2 text-sm font-medium transition-colors
            ${
              activeTab === "preview"
                ? "bg-white border-b-2 border-gray-900 text-gray-900 -mb-px"
                : "text-gray-500 hover:text-gray-700"
            }
          `}
        >
          Preview
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={`
            px-4 py-2 text-sm font-medium transition-colors
            ${
              activeTab === "code"
                ? "bg-white border-b-2 border-gray-900 text-gray-900 -mb-px"
                : "text-gray-500 hover:text-gray-700"
            }
          `}
        >
          Code
        </button>
      </div>

      {/* Tab content */}
      {activeTab === "preview" ? (
        <div className="p-6 bg-white min-h-[120px] flex items-center justify-center">
          {preview}
        </div>
      ) : (
        <CodeContent code={code} />
      )}
    </div>
  );
}

function CodeContent({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative bg-gray-900 text-gray-100">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 px-3 py-1.5 text-xs bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-md transition-colors"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className="p-4 overflow-x-auto text-sm leading-relaxed max-h-[400px]">
        <code>{code}</code>
      </pre>
    </div>
  );
}
