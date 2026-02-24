import { Button } from "@stackshift-ui/button";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import { format } from "date-fns";

import { Badge } from "@stackshift-ui/badge";
import { Card, CardContent, CardTitle } from "@stackshift-ui/card";
import { buildSanityLink } from "@stackshift-ui/system";
import { BlogProps } from ".";
import { BlogPost, Category, LabeledRoute } from "./types";

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
        {posts?.slice(count, count + 1)?.map((post, key) => (
          <BlogItem post={post} key={key} />
        ))}
        <Flex gap={4} className="flex-col lg:flex-row">
          {posts?.slice(count + 1, count + 3)?.map((post, key) => (
            <BlogItem post={post} key={key} />
          ))}
        </Flex>
      </div>

      <div className="w-full space-y-5 lg:w-1/2">
        <Flex gap={4} className="flex-col lg:flex-row">
          {posts?.slice(count + 3, count + 5)?.map((post, key) => (
            <BlogItem post={post} key={key} />
          ))}
        </Flex>
        {posts?.slice(count + 5, blogsPerPage)?.map((post, key) => (
          <BlogItem post={post} key={key} />
        ))}
      </div>
    </Flex>
  );
}

function BlogItem({ post, key }: { post?: BlogPost; key: number }) {
  return (
    <Card className="relative w-full h-64 rounded">
      {post?.mainImage ? (
        <Image
          className="relative object-cover w-full h-full overflow-hidden rounded-md"
          src={`${post?.mainImage}`}
          alt={post?.alt ?? `blog-variantA-image-${key}`}
          sizes="(min-width: 1540px) 740px, (min-width: 1280px) 612px, (min-width: 1040px) 484px, (min-width: 780px) 736px, (min-width: 680px) 608px, calc(94.44vw - 15px)"
        />
      ) : null}

      <div className="absolute inset-0 bg-gray-900 rounded-md opacity-75" />

      <CardContent className="absolute inset-0 flex flex-col items-start p-6">
        {post?.categories ? (
          <Flex gap={2} className="absolute left-5 top-5">
            {post?.categories?.map((category: Category, index: number) => (
              <Badge key={index}>{category?.title}</Badge>
            ))}
          </Flex>
        ) : null}

        <Flex align="center" className="mt-auto">
          <span className="mt-auto text-sm text-gray-300">
            {post?.publishedAt ? format(new Date(post?.publishedAt), "dd MMM, yyyy") : ""}
          </span>

          {post?.authors && (
            <>
              <span className="mx-2 w-1 h-1 bg-gray-300 rounded-full" />
              <Flex className="mt-auto text-sm text-gray-300">
                {post?.authors?.map((author, index, { length }) => (
                  <>
                    <Text className="italic" fontSize="sm">
                      {author?.name}
                    </Text>
                    {index + 1 !== length ? <span>&nbsp;,&nbsp;</span> : null}
                  </>
                ))}
              </Flex>
            </>
          )}
        </Flex>

        {post?.title ? (
          <CardTitle className="text-lg font-bold text-white transform hover:text-secondary motion-reduce:transform-none">
            <Link href={`/${post?.link}`} className="line-clamp-2">
              {post?.title}
            </Link>
          </CardTitle>
        ) : null}
        {post?.excerpt && (
          <Text className="text-white/70 line-clamp-2" fontSize="sm">
            {post?.excerpt}
          </Text>
        )}
      </CardContent>
    </Card>
  );
}

function PrimaryButton({ primaryButton }: { primaryButton?: LabeledRoute }) {
  if (!primaryButton?.label) return null;

  const link = buildSanityLink(primaryButton);

  return (
    <div className="text-center mt-10">
      <Button aria-label={primaryButton?.label} asChild>
        <Link
          href={link.href}
          target={link.target}
          rel={link.rel}
          aria-label={primaryButton?.label}>
          {primaryButton?.label}
        </Link>
      </Button>
    </div>
  );
}

export { Blog_A };
