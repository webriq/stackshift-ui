import React from "react";
import { format } from "date-fns";
import { Badge } from "@webriq-test/badge";
import { Button } from "@webriq-test/button";
import { Heading } from "@webriq-test/heading";
import { Text } from "@webriq-test/text";
import { Image } from "@webriq-test/image";
import { Link } from "@webriq-test/link";
import { Section } from "@webriq-test/section";
import { Container } from "@webriq-test/container";
import { Flex } from "@webriq-test/flex";
import { BlogPost, LabeledRoute } from "./types";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { BlogProps } from ".";

export default function Blog_C({ subtitle, title, posts, primaryButton }: BlogProps) {
  let blogsPerPage = 3;

  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Flex align="center" justify="between" className="flex-col mb-16 md:flex-row" gap={4}>
          <SubtitleAndTitleText subtitle={subtitle} title={title} />
          <PrimaryButton primaryButton={primaryButton} />
        </Flex>
        <BlogPosts posts={posts} blogsPerPage={blogsPerPage} />
        <PrimaryButton primaryButton={primaryButton} />
      </Container>
    </Section>
  );
}

function SubtitleAndTitleText({ subtitle, title }: { subtitle?: string; title?: string }) {
  return (
    <div className="text-center md:text-left">
      {subtitle ? (
        <Text weight="bold" className="text-primary">
          {subtitle}
        </Text>
      ) : null}
      {title ? <Heading fontSize="3xl">{title}</Heading> : null}
    </div>
  );
}

function BlogPosts({ posts, blogsPerPage }: { posts?: BlogPost[]; blogsPerPage?: number }) {
  if (!posts) return null;
  return (
    <div>
      {posts?.slice(0, blogsPerPage)?.map((post, key) => (
        <div className="flex flex-wrap mb-8 overflow-hidden rounded-lg shadow" key={key}>
          <BlogItem
            post={post}
            className={`${key % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            key={key}
          />
        </div>
      ))}
    </div>
  );
}

function BlogItem({ post, className }: { post: BlogPost; className?: string }) {
  const breakpoints = useMediaQuery("1100");
  const maxExcerptLength = breakpoints ? 70 : 200;

  return (
    <Flex wrap className={`bg-white overflow-hidden rounded-lg shadow  w-full ${className}`}>
      {post?.mainImage && (
        <Image
          className="object-cover w-full h-auto rounded-l lg:w-1/2"
          src={`${post?.mainImage}`}
          sizes="100vw"
          width={554}
          height={416}
          alt={`blog-variantC-image-`}
        />
      )}
      <div className="w-full px-6 py-6 rounded-r lg:w-1/2 lg:pt-10">
        <Flex gap={2}>
          {post?.categories &&
            post?.categories?.map((category, index) => (
              <Badge className=" bg-secondary-foreground text-primary" key={index}>
                {category?.title}
              </Badge>
            ))}
        </Flex>

        {post?.publishedAt && (
          <Text muted className="m-1">
            {format(new Date(post?.publishedAt), " dd MMM, yyyy")}
          </Text>
        )}
        {post?.title && (
          <Heading className="my-4" type="h3">
            {post?.title?.length > 40 ? post?.title?.substring(0, 40) + "..." : post?.title}
          </Heading>
        )}
        {post?.authors && (
          <div className="flex mb-10 flex-wrap">
            <span className="italic text-primary">By&nbsp;</span>
            {post?.authors?.map((author, index, { length }) => (
              <>
                <Text className="italic text-primary">{author?.name}</Text>
                {index + 1 !== length ? <span>&nbsp;,&nbsp;</span> : null}
              </>
            ))}
          </div>
        )}
        {post?.excerpt && (
          <Text muted className="mb-6 leading-loose text-justify">
            {post?.excerpt?.length > maxExcerptLength
              ? post?.excerpt?.substring(0, maxExcerptLength) + "..."
              : post?.excerpt}
          </Text>
        )}
        {post?.link && (
          <Link
            aria-label="View Blog Post"
            className="font-bold text-primary hover:text-primary-foreground"
            href={`/${post?.link}`}>
            View Blog Post
          </Link>
        )}
      </div>
    </Flex>
  );
}

function PrimaryButton({ primaryButton }: { primaryButton?: LabeledRoute }) {
  if (!primaryButton?.label) return null;

  return (
    <React.Fragment>
      <Button as="link" link={primaryButton} ariaLabel={primaryButton?.label}>
        {primaryButton?.label}
      </Button>
    </React.Fragment>
  );
}

export { Blog_C };
