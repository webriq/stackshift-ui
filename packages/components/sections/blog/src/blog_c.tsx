import { Badge } from "@stackshift-ui/badge";
import { Button } from "@stackshift-ui/button";
import { Card, CardContent } from "@stackshift-ui/card";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import { buildSanityLink } from "@stackshift-ui/system";
import { Text } from "@stackshift-ui/text";
import { format } from "date-fns";
import { BlogProps } from ".";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { BlogPost, LabeledRoute } from "./types";

export default function Blog_C({ subtitle, title, posts, primaryButton }: BlogProps) {
  let blogsPerPage = 3;

  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Flex align="center" justify="between" className="flex-col mb-16 md:flex-row" gap={5}>
          <SubtitleAndTitleText subtitle={subtitle} title={title} />
          <PrimaryButton primaryButton={primaryButton} />
        </Flex>
        <BlogPosts posts={posts} blogsPerPage={blogsPerPage} />
      </Container>
    </Section>
  );
}

function SubtitleAndTitleText({ subtitle, title }: { subtitle?: string; title?: string }) {
  return (
    <div className="flex flex-col gap-3 text-center md:text-left">
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
        <div className="flex flex-wrap mb-8 overflow-hidden rounded-md shadow" key={key}>
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

function BlogItem({ post, className, key }: { key: number; post: BlogPost; className?: string }) {
  const breakpoints = useMediaQuery("1100");
  const maxExcerptLength = breakpoints ? 70 : 200;

  return (
    <Card
      className={`flex flex-wrap bg-white overflow-hidden rounded-lg shadow  w-full ${className}`}>
      {post?.mainImage && (
        <Image
          className="object-cover w-full h-auto rounded-l lg:w-1/2"
          src={`${post?.mainImage}`}
          sizes="100vw"
          width={554}
          height={416}
          alt={post?.alt ?? `blog-variantC-image-${key}`}
        />
      )}
      <CardContent className="w-full px-6 py-6 rounded-r lg:w-1/2 lg:pt-10">
        <Flex className="flex-col sm:flex-row sm:items-center gap-3">
          {post?.categories &&
            post?.categories?.map((category, index) => (
              <Badge className="bg-secondary rounded-global w-fit" key={index}>
                {category?.title}
              </Badge>
            ))}
          {post?.publishedAt && (
            <Text muted className="m-1">
              {format(new Date(post?.publishedAt), " dd MMM, yyyy")}
            </Text>
          )}
        </Flex>

        {post?.title && (
          <Heading className="my-4 text-xl lg:text-3xl">
            {post?.title?.length > 40 ? post?.title?.substring(0, 40) + "..." : post?.title}
          </Heading>
        )}
        {post?.authors && (
          <Flex wrap className="mb-10">
            <span className="italic text-primary">By&nbsp;</span>
            {post?.authors?.map((author, index, { length }) => (
              <>
                <Text className="italic text-primary">{author?.name}</Text>
                {index + 1 !== length ? <span>&nbsp;,&nbsp;</span> : null}
              </>
            ))}
          </Flex>
        )}
        {post?.excerpt && (
          <Text muted className="mb-6 leading-loose lg:text-justify">
            {post?.excerpt?.length > maxExcerptLength
              ? post?.excerpt?.substring(0, maxExcerptLength) + "..."
              : post?.excerpt}
          </Text>
        )}
        {post?.link && (
          <Link
            aria-label="View Blog Post"
            className="font-bold text-primary hover:text-secondary"
            href={`/${post?.link}`}>
            View Blog Post
          </Link>
        )}
      </CardContent>
    </Card>
  );
}

function PrimaryButton({ primaryButton }: { primaryButton?: LabeledRoute }) {
  if (!primaryButton?.label) return null;

  const link = buildSanityLink(primaryButton);

  return (
    <div className="text-center">
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

export { Blog_C };
