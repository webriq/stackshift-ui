// @ts-nocheck - story demo file
import {
  Button,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@stackshift-ui/react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

const meta: Meta<typeof Pagination> = {
  title: "Common/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A pagination component for navigating through multiple pages of content with customizable page sizes and navigation controls.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    currentPage: {
      control: { type: "number" },
      description: "Current active page number",
    },
    totalPages: {
      control: { type: "number" },
      description: "Total number of pages",
    },
    showPrevNext: {
      control: { type: "boolean" },
      description: "Whether to show previous/next buttons",
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            1
          </PaginationLink>
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
    </Pagination>
  ),
};

export const WithEllipsis: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
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
    </Pagination>
  ),
};

export const ControlledPagination: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;

    const handlePageChange = (page: number) => {
      setCurrentPage(page);
    };

    const renderPageNumbers = () => {
      const pages = [];
      const showEllipsis = totalPages > 7;

      if (!showEllipsis) {
        // Show all pages if total is 7 or less
        for (let i = 1; i <= totalPages; i++) {
          pages.push(
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={currentPage === i}
                onClick={e => {
                  e.preventDefault();
                  handlePageChange(i);
                }}>
                {i}
              </PaginationLink>
            </PaginationItem>,
          );
        }
      } else {
        // Show ellipsis for large page counts
        pages.push(
          <PaginationItem key={1}>
            <PaginationLink
              href="#"
              isActive={currentPage === 1}
              onClick={e => {
                e.preventDefault();
                handlePageChange(1);
              }}>
              1
            </PaginationLink>
          </PaginationItem>,
        );

        if (currentPage > 3) {
          pages.push(
            <PaginationItem key="ellipsis-start">
              <PaginationEllipsis />
            </PaginationItem>,
          );
        }

        const startPage = Math.max(2, currentPage - 1);
        const endPage = Math.min(totalPages - 1, currentPage + 1);

        for (let i = startPage; i <= endPage; i++) {
          pages.push(
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={currentPage === i}
                onClick={e => {
                  e.preventDefault();
                  handlePageChange(i);
                }}>
                {i}
              </PaginationLink>
            </PaginationItem>,
          );
        }

        if (currentPage < totalPages - 2) {
          pages.push(
            <PaginationItem key="ellipsis-end">
              <PaginationEllipsis />
            </PaginationItem>,
          );
        }

        pages.push(
          <PaginationItem key={totalPages}>
            <PaginationLink
              href="#"
              isActive={currentPage === totalPages}
              onClick={e => {
                e.preventDefault();
                handlePageChange(totalPages);
              }}>
              {totalPages}
            </PaginationLink>
          </PaginationItem>,
        );
      }

      return pages;
    };

    return (
      <div className="space-y-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={e => {
                  e.preventDefault();
                  if (currentPage > 1) handlePageChange(currentPage - 1);
                }}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>

            {renderPageNumbers()}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={e => {
                  e.preventDefault();
                  if (currentPage < totalPages) handlePageChange(currentPage + 1);
                }}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        <div className="text-center text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </div>
      </div>
    );
  },
};

export const DataTablePagination: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    // Mock data
    const totalItems = 247;
    const totalPages = Math.ceil(totalItems / pageSize);
    const startItem = (currentPage - 1) * pageSize + 1;
    const endItem = Math.min(currentPage * pageSize, totalItems);

    const data = Array.from({ length: pageSize }, (_, i) => ({
      id: startItem + i,
      name: `User ${startItem + i}`,
      email: `user${startItem + i}@example.com`,
      role: i % 3 === 0 ? "Admin" : i % 3 === 1 ? "Editor" : "User",
    }));

    return (
      <div className="space-y-4">
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">ID</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Email</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Role</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.map(item => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-sm text-gray-900">{item.id}</td>
                  <td className="px-4 py-2 text-sm text-gray-900">{item.name}</td>
                  <td className="px-4 py-2 text-sm text-gray-500">{item.email}</td>
                  <td className="px-4 py-2 text-sm text-gray-500">{item.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-700">Show</span>
            <select
              value={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border border-gray-300 rounded px-2 py-1 text-sm">
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
            <span className="text-sm text-gray-700">entries</span>
          </div>

          <div className="text-sm text-gray-700">
            Showing {startItem} to {endItem} of {totalItems} entries
          </div>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = currentPage <= 3 ? i + 1 : currentPage - 2 + i;
                if (pageNum > totalPages) return null;

                return (
                  <PaginationItem key={pageNum}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === pageNum}
                      onClick={e => {
                        e.preventDefault();
                        setCurrentPage(pageNum);
                      }}>
                      {pageNum}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                  }}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    );
  },
};

export const SimplePagination: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    return (
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Article {currentPage}</h3>
          <div className="p-8 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              This is the content for article {currentPage}. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i + 1}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === i + 1}
                    onClick={e => {
                      e.preventDefault();
                      setCurrentPage(i + 1);
                    }}>
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                  }}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    );
  },
};

export const BlogPagination: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3;
    const totalPosts = 25;
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    const posts = Array.from({ length: postsPerPage }, (_, i) => {
      const postNumber = (currentPage - 1) * postsPerPage + i + 1;
      return {
        id: postNumber,
        title: `Blog Post ${postNumber}`,
        excerpt: `This is the excerpt for blog post ${postNumber}. It gives a brief overview of what the post is about...`,
        author: `Author ${postNumber}`,
        date: new Date(2024, 0, postNumber).toLocaleDateString(),
      };
    });

    return (
      <div className="space-y-6 max-w-2xl">
        <div className="space-y-6">
          {posts.map(post => (
            <article key={post.id} className="p-6 border rounded-lg">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>By {post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>

              {currentPage > 2 && (
                <>
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={e => {
                        e.preventDefault();
                        setCurrentPage(1);
                      }}>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  {currentPage > 3 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                </>
              )}

              {[currentPage - 1, currentPage, currentPage + 1]
                .filter(page => page >= 1 && page <= totalPages)
                .map(page => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === page}
                      onClick={e => {
                        e.preventDefault();
                        setCurrentPage(page);
                      }}>
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}

              {currentPage < totalPages - 1 && (
                <>
                  {currentPage < totalPages - 2 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                  <PaginationItem>
                    <PaginationLink
                      href="#"
                      onClick={e => {
                        e.preventDefault();
                        setCurrentPage(totalPages);
                      }}>
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                </>
              )}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={e => {
                    e.preventDefault();
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                  }}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        <div className="text-center text-sm text-gray-600">
          Showing page {currentPage} of {totalPages} ({totalPosts} total posts)
        </div>
      </div>
    );
  },
};

export const CompactPagination: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 20;

    return (
      <div className="space-y-4">
        <div className="text-center p-8 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold">Page {currentPage} Content</h3>
          <p className="text-gray-600 mt-2">
            This is a compact pagination example with minimal page numbers shown.
          </p>
        </div>

        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}>
            Previous
          </Button>

          <span className="text-sm text-gray-600">
            {currentPage} / {totalPages}
          </span>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}>
            Next
          </Button>
        </div>
      </div>
    );
  },
};
