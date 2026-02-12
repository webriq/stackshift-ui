import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  getCategoriesWithRegisteredComponents,
  formatDisplayName,
} from "@/data/components";
// Initialize registry to ensure components are registered
import "@/data/components/registry";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const router = useRouter();
  const [openCategories, setOpenCategories] = useState<string[]>(["layout", "ui"]);
  const componentCategories = getCategoriesWithRegisteredComponents();

  const toggleCategory = (slug: string) => {
    setOpenCategories((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };

  const isActive = (slug: string) => router.asPath === `/components/${slug}`;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-64 bg-white border-r overflow-y-auto
          transform transition-transform duration-300 ease-in-out
          md:sticky md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-4">
          {/* Logo/Title */}
          <Link
            href="/"
            className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity"
            onClick={onClose}
          >
            <Image
              src="/webriq-logo.png"
              alt="WebriQ Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-gray-900">StackShift UI</span>
          </Link>

          {/* Navigation */}
          <nav className="space-y-2">
            {componentCategories.map((category) => (
              <div key={category.slug}>
                {/* Category header */}
                <button
                  onClick={() => toggleCategory(category.slug)}
                  className="flex items-center justify-between w-full py-2 px-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <span>{category.name}</span>
                  <ChevronIcon open={openCategories.includes(category.slug)} />
                </button>

                {/* Category items */}
                {openCategories.includes(category.slug) && (
                  <ul className="mt-1 ml-2 space-y-0.5">
                    {category.components.map((comp) => (
                      <li key={comp}>
                        <Link
                          href={`/components/${comp}`}
                          onClick={onClose}
                          className={`
                            block py-1.5 px-3 text-sm rounded-md transition-colors
                            ${
                              isActive(comp)
                                ? "bg-blue-50 text-blue-700 font-medium"
                                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                            }
                          `}
                        >
                          {formatDisplayName(comp)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
