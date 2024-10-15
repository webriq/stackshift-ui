import { Heading } from "@webriq-test/heading";
import { Text } from "@webriq-test/text";
import { Link } from "@webriq-test/link";
import { Image } from "@webriq-test/image";
import { PortableTextComponents } from "@portabletext/react";

export type MyPortableTextComponents = PortableTextComponents & {
  code?: ({ value }: { value: { language?: string; code?: string } }) => JSX.Element;
};

export const defaultBlockStyle: MyPortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <Heading fontSize="3xl" weight="bold" className="mb-8 leading-normal text-black">
        {children}
      </Heading>
    ),
    h2: ({ children }) => (
      <Heading type="h2" weight="bold" fontSize="2xl" className="mb-8 text-black">
        {children}
      </Heading>
    ),
    h3: ({ children }) => (
      <Heading type="h3" fontSize="xl" weight="bold" className="mb-8 leading-normal text-black">
        {children}
      </Heading>
    ),
    h4: ({ children }) => (
      <Heading type="h4" weight="bold" fontSize="lg" className="mb-8 leading-normal text-black">
        {children}
      </Heading>
    ),
    normal: ({ children }) => <Text className="mb-8 leading-relaxed">{children}</Text>,
    blockquote: ({ children }) => (
      <blockquote className="mb-6 italic leading-loose text-gray-500 px-14">
        - {children}
      </blockquote>
    ),
  },
  code: ({ value }) => (
    <pre data-language={value.language}>
      <code>{value.code}</code>
    </pre>
  ),
  list: {
    bullet: ({ children }) => (
      <ul className="flex flex-col pl-10 mb-8 space-y-4 leading-relaxed list-disc">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="flex flex-col pl-10 mb-8 space-y-4 leading-relaxed list-decimal">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => <code>{children}</code>,
    link: ({ children, value }) => (
      <Link
        className="hover:text-primary-foreground text-primary"
        href={value.href}
        target="_blank"
        rel="noopener noreferrer">
        {children}
      </Link>
    ),
  },
  types: {
    addImage: ({ value }) => (
      <Image
        className="w-full h-full mb-5"
        width={500}
        height={500}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={value?.image}
        alt={value?.alt ?? value?.image?.asset?._ref}
      />
    ),
  },
};
