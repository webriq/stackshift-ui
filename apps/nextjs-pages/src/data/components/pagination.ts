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
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
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
      description: "A simple pagination with numbered pages.",
      code: `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
    },
    {
      title: "With Ellipsis",
      description: "Pagination with ellipsis for large page counts.",
      code: `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>5</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">10</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
    },
    {
      title: "Controlled Pagination",
      description: "Pagination with controlled state.",
      code: `const [currentPage, setCurrentPage] = React.useState(1);
const totalPages = 10;

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious
        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
        disabled={currentPage === 1}
      />
    </PaginationItem>
    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
      <PaginationItem key={page}>
        <PaginationLink
          onClick={() => setCurrentPage(page)}
          isActive={currentPage === page}
        >
          {page}
        </PaginationLink>
      </PaginationItem>
    ))}
    <PaginationItem>
      <PaginationNext
        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
        disabled={currentPage === totalPages}
      />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
    },
  ],
};
