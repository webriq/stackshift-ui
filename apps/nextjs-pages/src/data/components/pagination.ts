import type { ComponentDoc } from "./index";

export const paginationDoc: ComponentDoc = {
  name: "Pagination",
  slug: "pagination",
  description:
    "A pagination component for navigating through pages of content. Includes sub-components: PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, and PaginationEllipsis for building custom pagination layouts.",
  useCases: [
    "Blog post listings and archives",
    "Product catalog pagination",
    "Search results navigation",
    "Data table page controls",
    "Gallery and media browsing",
  ],
  category: "ui",
  importCode: `import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis
} from "@stackshift-ui/react";`,
  individualImportCode: `import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis
} from "@stackshift-ui/pagination";`,
  usageCode: `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious onClick={() => {}} />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext onClick={() => {}} />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
  props: [
    {
      name: "className",
      type: "string",
      required: false,
      description: "Additional CSS classes to apply to the pagination container.",
    },
  ],
  examples: [
    {
      title: "Basic Pagination",
      description: "A simple pagination with numbered pages and state management.",
      code: `const [currentPage, setCurrentPage] = React.useState(1);

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious
        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
      />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink
        onClick={() => setCurrentPage(1)}
        isActive={currentPage === 1}
        className="cursor-pointer"
      >
        1
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink
        onClick={() => setCurrentPage(2)}
        isActive={currentPage === 2}
        className="cursor-pointer"
      >
        2
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink
        onClick={() => setCurrentPage(3)}
        isActive={currentPage === 3}
        className="cursor-pointer"
      >
        3
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext
        onClick={() => setCurrentPage(p => Math.min(3, p + 1))}
        className={currentPage === 3 ? "pointer-events-none opacity-50" : "cursor-pointer"}
      />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
    },
    {
      title: "With Ellipsis",
      description: "Pagination with ellipsis for large page counts.",
      code: `const [currentPage, setCurrentPage] = React.useState(5);

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious
        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
        className="cursor-pointer"
      />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink
        onClick={() => setCurrentPage(1)}
        isActive={currentPage === 1}
        className="cursor-pointer"
      >
        1
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink
        onClick={() => setCurrentPage(5)}
        isActive={currentPage === 5}
        className="cursor-pointer"
      >
        5
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink
        onClick={() => setCurrentPage(10)}
        isActive={currentPage === 10}
        className="cursor-pointer"
      >
        10
      </PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext
        onClick={() => setCurrentPage(p => Math.min(10, p + 1))}
        className="cursor-pointer"
      />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
    },
    {
      title: "Dynamic Pagination",
      description: "Pagination that dynamically renders page numbers.",
      code: `const [currentPage, setCurrentPage] = React.useState(1);
const totalPages = 5;

<div className="space-y-2">
  <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious
          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
        />
      </PaginationItem>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <PaginationItem key={page}>
          <PaginationLink
            onClick={() => setCurrentPage(page)}
            isActive={currentPage === page}
            className="cursor-pointer"
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem>
        <PaginationNext
          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
        />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
  <Text className="text-sm text-center">Page {currentPage} of {totalPages}</Text>
</div>`,
    },
  ],
};
