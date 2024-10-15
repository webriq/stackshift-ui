import { Button } from "@webriq-test/button";
import { Heading } from "@webriq-test/heading";
import { Text } from "@webriq-test/text";
import { Image } from "@webriq-test/image";
import { Link } from "@webriq-test/link";
import { Section } from "@webriq-test/section";
import { Container } from "@webriq-test/container";
import { Flex } from "@webriq-test/flex";
import { format } from "date-fns";
import { BlogPost, LabeledRoute } from "./types";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { BlogProps } from ".";

export default function Blog_B({ subtitle, title, posts, primaryButton }: BlogProps) {
  const blogsPerPage = 5;
  const count = 0;

  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <SubtitleAndTitle subtitle={subtitle} title={title} />
        <BlogPosts posts={posts} count={count} blogsPerPage={blogsPerPage} />
        <PrimaryButton primaryButton={primaryButton} />
      </Container>
    </Section>
  );
}

function SubtitleAndTitle({ subtitle, title }: { subtitle?: string; title?: string }) {
  return (
    <div className="w-full mb-16 text-center">
      {subtitle ? (
        <Text weight="bold" className="text-secondary">
          {subtitle}
        </Text>
      ) : null}
      {title ? <Heading fontSize="3xl">{title}</Heading> : null}
    </div>
  );
}

function BlogPosts({
  posts,
  count,
  blogsPerPage,
}: {
  posts?: BlogPost[];
  count: number;
  blogsPerPage: number;
}) {
  return (
    <Flex wrap justify="center" className="mb-16" gap={4}>
      <div className="w-full lg:w-[45%]">
        {posts
          ?.slice(count, count + 1)
          .map((post, key) => <BlogItem size="lg" post={post} key={key} />)}
      </div>
      <Flex wrap className="w-full lg:w-[45%]" gap={4}>
        {posts?.slice(count + 1, blogsPerPage).map((post, key) => (
          <div className="w-full lg:basis-[45%]" key={key}>
            <BlogItem post={post} size="sm" />
          </div>
        ))}
      </Flex>
    </Flex>
  );
}

function BlogItem({ post, size }: { post: BlogPost; size?: string }) {
  const breakpoints = useMediaQuery("1024");

  return (
    <div className="overflow-hidden rounded shadow">
      {post?.mainImage ? (
        <ImageContainer post={post} size={size} breakpoints={breakpoints} />
      ) : null}
      <div className="p-6 bg-white flex flex-col justify-between" style={{ height: "295px" }}>
        <div>
          {post?.publishedAt ? (
            <Text muted className="text-sm">
              {format(new Date(post.publishedAt), " dd MMM, yyyy")}
            </Text>
          ) : null}
          {post?.title ? (
            <Heading type="h4" className="my-2">
              {post.title.length > 25 ? `${post.title.substring(0, 25)}...` : post.title}
            </Heading>
          ) : null}
          {post?.excerpt ? (
            <Text muted className="mb-6 text-justify">
              {post.excerpt.length > 41 ? `${post.excerpt.substring(0, 41)}...` : post.excerpt}
            </Text>
          ) : null}
        </div>
        {post?.link ? (
          <Link
            aria-label="View Blog Post"
            className="font-bold text-primary hover:text-secondary"
            href={`/${post?.link}`}>
            View Blog Post
          </Link>
        ) : null}
      </div>
    </div>
  );
}

function ImageContainer({
  post,
  size,
  breakpoints,
}: {
  post: BlogPost;
  size?: string;
  breakpoints: boolean;
}) {
  return (
    <>
      {breakpoints ? (
        <Image
          className="object-cover w-full overflow-hidden rounded-t"
          src={`${post.mainImage}`}
          sizes="100vw"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          width={271}
          height={248}
          alt={`blog-variantB-image-${post.title}`}
        />
      ) : (
        <div className={`${size === "lg" ? "h-[44.5rem]" : "h-[12.5rem]"}`}>
          <Image
            className="object-cover w-full overflow-hidden rounded-t"
            src={`${post.mainImage}`}
            sizes="100vw"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            width={271}
            height={248}
            alt={`blog-variantB-image-${post.title}`}
          />
        </div>
      )}
    </>
  );
}

function PrimaryButton({ primaryButton }: { primaryButton?: LabeledRoute }) {
  if (!primaryButton?.label) return null;

  return (
    <div className="text-center">
      <Button as="link" link={primaryButton} ariaLabel={primaryButton?.label}>
        {primaryButton?.label}
      </Button>
    </div>
  );
}

export { Blog_B };
