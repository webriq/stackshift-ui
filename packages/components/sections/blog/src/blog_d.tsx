import { Button } from "@stackshift-ui/button";
import { Card } from "@stackshift-ui/card";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Input } from "@stackshift-ui/input";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import { format } from "date-fns";
import React from "react";
import { BlogProps } from ".";
import { Author, BlogPost, SanityBody } from "./types";

interface BlogPostProps extends SanityBody {
  category?: string;
  title?: string;
  slug?: {
    _type: "slug";
    current: string;
  };
  excerpt?: string;
  publishedAt?: string;
  mainImage?: string;
  authors?: Author[];
}

export default function Blog_D({ subtitle, title, posts }: BlogProps) {
  const [activeTab, setActiveTab] = React.useState<string>("All");
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  let blogsPerPage = 6;

  React.useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const transformedPosts: BlogPostProps[] = (posts ?? []).flatMap(post =>
    (post?.categories ?? []).map(
      category =>
        ({
          category: category?.title,
          title: post?.title,
          slug: post?.slug,
          excerpt: post?.excerpt,
          publishedAt: post?.publishedAt,
          mainImage: post?.mainImage,
          authors: post?.authors,
        }) as BlogPostProps,
    ),
  );

  // get all categories
  const categories: string[] = transformedPosts?.reduce((newArr: any[], items: BlogPostProps) => {
    const titles = items?.category;

    if (newArr.indexOf(titles) === -1) {
      newArr.push(titles);
    }
    return newArr;
  }, []);

  // filtered posts per category
  const filteredPosts =
    activeTab === "All"
      ? posts?.filter(post => post?.title?.toLowerCase().includes(searchQuery.toLowerCase()))
      : transformedPosts.filter(
          item =>
            item?.category === activeTab &&
            item?.title?.toLowerCase().includes(searchQuery.toLowerCase()),
        );

  //Pagination
  const indexOfLastPost = currentPage * blogsPerPage;
  const indexOfFirstPost = indexOfLastPost - blogsPerPage;
  const currentPosts = filteredPosts?.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setActiveTab("All");
    setCurrentPage(1);
  };

  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <SubtitleAndTitleText subtitle={subtitle} title={title} />
        <SearchInput handleSearchChange={handleSearchChange} />
        <Flex wrap>
          <CategoryTab categories={categories} activeTab={activeTab} setActiveTab={setActiveTab} />
          {filteredPosts?.length === 0 ? (
            <NoPostsMessage />
          ) : (
            <PostItems
              currentPosts={currentPosts}
              activeTab={activeTab}
              blogsPerPage={blogsPerPage}
            />
          )}
        </Flex>
        <Pagination
          blogsPerPage={blogsPerPage}
          totalBlogs={filteredPosts?.length as number}
          paginate={paginate}
          currentPage={currentPage}
        />
      </Container>
    </Section>
  );
}

function NoPostsMessage({ message = "No post available." }) {
  return <div className="w-full px-3 lg:w-3/4 font-medium text-lg">{message}</div>;
}

function SubtitleAndTitleText({ subtitle, title }: { subtitle?: string; title?: string }) {
  return (
    <div className="w-full mb-16">
      {subtitle ? (
        <Text weight={"bold"} className="text-secondary">
          {subtitle}
        </Text>
      ) : null}
      {title ? <Heading fontSize="3xl">{title}</Heading> : null}
    </div>
  );
}

function SearchInput({
  handleSearchChange,
}: {
  handleSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="relative mb-5 w-full lg:w-1/4">
      <Input
        type="text"
        aria-label="Search, find any question you want to ask..."
        className="w-full bg-white rounded-global font-heading focus:border-gray-500 focus:outline-none"
        placeholder="Search posts..."
        onChange={handleSearchChange}
      />
      <Button
        as="button"
        variant="unstyled"
        ariaLabel="Search button"
        className="absolute right-0 top-0 h-full px-3 bg-white rounded-global text-primary flex items-center">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </Button>
    </div>
  );
}

function CategoryTab({
  categories,
  activeTab,
  setActiveTab,
}: {
  categories?: string[];
  activeTab: string;
  setActiveTab: (category: string) => void;
}) {
  return (
    <Card className="w-full px-3 mb-8 bg-white lg:mb-0 lg:w-1/4" borderRadius="global">
      {categories && (
        <React.Fragment>
          <Heading
            type="h3"
            muted
            weight={"bold"}
            className="mb-4 text-base uppercase lg:text-base">
            Topics
          </Heading>
          <ul>
            {categories?.length > 1 && (
              <CategoryItem activeTab={activeTab} setActiveTab={setActiveTab} category={"All"} />
            )}
            {categories?.map((category, index) => (
              <CategoryItem
                key={index}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                category={category}
              />
            ))}
          </ul>
        </React.Fragment>
      )}
    </Card>
  );
}

function CategoryItem({
  key,
  activeTab,
  setActiveTab,
  category,
}: {
  key?: number;
  activeTab: string;
  setActiveTab: (category: string) => void;
  category: string;
}) {
  return (
    <li key={key}>
      <Button
        as="button"
        variant="unstyled"
        ariaLabel="Show all blog posts"
        className={`mb-4 block ${
          !category ? "hidden" : "block"
        } px-3 py-2 hover:bg-secondary-foreground focus:outline-none w-full text-left rounded ${
          activeTab === category
            ? "font-bold text-primary focus:outline-none bg-secondary-foreground"
            : null
        }`}
        onClick={() => setActiveTab(category)}>
        {category}
      </Button>
    </li>
  );
}

function PostItems({
  currentPosts,
  activeTab,
  blogsPerPage,
}: {
  currentPosts?: BlogPost[];
  activeTab: string;
  blogsPerPage: number;
}) {
  if (!currentPosts) return null;

  return (
    <div className="w-full px-3 lg:w-3/4">
      {activeTab === "All"
        ? currentPosts?.map((post, index) => <PostItem post={post} key={index} />)
        : currentPosts
            ?.slice(0, blogsPerPage)
            ?.map((post, index) => <PostItem post={post} key={index} />)}
    </div>
  );
}

function PostItem({ post }: { post?: BlogPost }) {
  if (!post) return null;
  return (
    <Flex wrap className="mb-8 lg:mb-6 bg-white shadow rounded-lg">
      <div className="w-full h-full mb-4 lg:mb-0 lg:w-1/4">
        <Image
          className="object-cover w-full h-full overflow-hidden rounded"
          src={`${post?.mainImage}`}
          sizes="100vw"
          width={188}
          height={129}
          alt={`blog-variantD-image-`}
        />
      </div>
      <div className="w-full px-3 py-2 lg:w-3/4">
        {post?.title && (
          <Link
            aria-label={post?.title}
            className="mb-1 text-2xl font-bold hover:text-secondary font-heading"
            href={`/${post?.link ?? "page-not-added"}`}>
            {post?.title.length > 25 ? post?.title?.substring(0, 25) + "..." : post?.title}
          </Link>
        )}
        <Flex wrap align="center" gap={1} className="mb-2 text-sm">
          {post?.authors
            ? post?.authors?.map((author, index, { length }) => (
                <Flex key={index}>
                  <Text className="text-primary">{author?.name}</Text>
                  {index + 1 !== length ? <span>&nbsp;,&nbsp;</span> : null}
                </Flex>
              ))
            : null}
          {post?.publishedAt && post?.authors ? (
            <span className="mx-2 text-gray-500">•</span>
          ) : null}
          {post?.publishedAt ? (
            <Text muted>{format(new Date(post?.publishedAt), " dd MMM, yyyy")}</Text>
          ) : null}
        </Flex>
        {post?.excerpt ? (
          <Text muted>
            {post?.excerpt.length > 60 ? post?.excerpt.substring(0, 60) + "..." : post?.excerpt}
          </Text>
        ) : null}
      </div>
    </Flex>
  );
}

interface PaginationProps {
  blogsPerPage: number;
  totalBlogs: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
}

function Pagination({ blogsPerPage, totalBlogs, paginate, currentPage }: PaginationProps) {
  if (!blogsPerPage) return null;
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav className="mt-4" aria-label="Pagination">
      <ul className="flex space-x-2 justify-end mr-5">
        {pageNumber.map(number => (
          <Button
            variant="unstyled"
            as="button"
            ariaLabel={`Page ${number}`}
            key={number}
            className={`${
              currentPage === number
                ? "bg-secondary-foreground text-gray-500"
                : "bg-white hover:bg-secondary-foreground hover:text-gray-500"
            } text-primary font-medium py-2 px-4 border border-primary rounded focus:outline-none`}
            onClick={() => paginate(number)}>
            {number}
          </Button>
        ))}
      </ul>
    </nav>
  );
}

export { Blog_D };
