import { Button } from "@stackshift-ui/button";
import { Heading } from "@stackshift-ui/heading";
import { Text } from "@stackshift-ui/text";
import { Image } from "@stackshift-ui/image";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { format } from "date-fns";

import { BlogPost, Category, LabeledRoute } from "./types";
import { BlogProps } from ".";

export default function Blog_A({ subtitle, title, posts, primaryButton }: BlogProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <SubtitleAndTitleText subtitle={subtitle} title={title} />
        <BlogPosts posts={posts} />
        <PrimaryButton primaryButton={primaryButton} />
      </Container>
    </Section>
  );
}

function SubtitleAndTitleText({ subtitle, title }: { subtitle?: string; title?: string }) {
  return (
    <div className="mb-16 text-center">
      {subtitle ? (
        <Text weight="bold" className="text-secondary">
          {subtitle}
        </Text>
      ) : null}
      {title ? <Heading fontSize="3xl">{title}</Heading> : null}
    </div>
  );
}

function BlogPosts({ posts }: { posts?: BlogPost[] }) {
  if (!posts) return null;

  let blogsPerPage = 6,
    count = 0;

  return (
    <Flex gap={4} className="flex-col lg:flex-row">
      <div className="w-full space-y-5 lg:w-1/2">
        {posts?.slice(count, count + 1)?.map((post, key) => <BlogItem post={post} key={key} />)}
        <Flex gap={4} className="flex-col lg:flex-row">
          {posts
            ?.slice(count + 1, count + 3)
            ?.map((post, key) => <BlogItem post={post} key={key} />)}
        </Flex>
      </div>

      <div className="w-full space-y-5 lg:w-1/2">
        <Flex gap={4} className="flex-col lg:flex-row">
          {posts
            ?.slice(count + 3, count + 5)
            ?.map((post, key) => <BlogItem post={post} key={key} />)}
        </Flex>
        {posts
          ?.slice(count + 5, blogsPerPage)
          ?.map((post, key) => <BlogItem post={post} key={key} />)}
      </div>
    </Flex>
  );
}

function BlogItem({ post }: { post?: BlogPost }) {
  return (
    <div className="relative w-full h-64 rounded">
      {post?.mainImage ? (
        <Image
          className="relative object-cover w-full h-full overflow-hidden rounded"
          src={`${post?.mainImage}`}
          alt={`blog-variantA-image`}
          sizes="(min-width: 1540px) 740px, (min-width: 1280px) 612px, (min-width: 1040px) 484px, (min-width: 780px) 736px, (min-width: 680px) 608px, calc(94.44vw - 15px)"
        />
      ) : null}
      <div className="absolute inset-0 bg-gray-900 rounded opacity-75" />
      <div className="absolute inset-0 flex flex-col items-start p-6">
        {post?.categories ? (
          <div className="absolute flex left-5 top-5">
            {post?.categories?.map((category: Category, index: number) => (
              <span
                className="px-3 py-1 mb-auto mr-3 text-sm font-bold uppercase bg-white rounded-full text-primary"
                key={index}>
                {category?.title}
              </span>
            ))}
          </div>
        ) : null}
        <span className="mt-auto text-sm text-gray-500">
          {post?.publishedAt ? format(new Date(post?.publishedAt), "dd MMM, yyyy") : ""}
        </span>
        {post?.title ? (
          <Link
            className="text-lg font-bold text-white transform hover:scale-110 hover:text-secondary motion-reduce:transform-none"
            href={`/${post?.link}`}>
            {post?.title?.length > 40 ? post?.title.substring(0, 40) + "..." : post?.title}
          </Link>
        ) : null}
      </div>
    </div>
  );
}

function PrimaryButton({ primaryButton }: { primaryButton?: LabeledRoute }) {
  if (!primaryButton?.label) return null;

  return (
    <div className="mt-10 text-center">
      <Button as="link" link={primaryButton} ariaLabel={primaryButton?.label}>
        {primaryButton?.label}
      </Button>
    </div>
  );
}

export { Blog_A };
