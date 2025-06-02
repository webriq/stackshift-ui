import {
  PortableTextBlock,
  PortableTextComponentProps,
  PortableTextMarkComponentProps,
} from "@portabletext/react";
import { MyPortableTextComponents } from "../../types";

export const customBlockStyle = ({ className }: any): MyPortableTextComponents => ({
  block: {
    h1: (props: PortableTextComponentProps<PortableTextBlock>) => {
      return <h1 className={`h1 ${className}`}>{props.children}</h1>;
    },
    h2: (props: PortableTextComponentProps<PortableTextBlock>) => {
      return <h2 className={`h2 ${className}`}>{props.children}</h2>;
    },
    h3: (props: PortableTextComponentProps<PortableTextBlock>) => {
      return <h3 className={`h3 ${className}`}>{props.children}</h3>;
    },
    h4: (props: PortableTextComponentProps<PortableTextBlock>) => {
      return <h4 className={`h4 ${className}`}>{props.children}</h4>;
    },
    normal: (props: PortableTextComponentProps<PortableTextBlock>) => {
      return (
        <p
          className={`text-normal lg:text-left sm:text-lg sm:!leading-[32px] font-normal font-body-kb tracking-wide ${className}`}>
          {props.children}
        </p>
      );
    },
    blockquote: (props: PortableTextComponentProps<PortableTextBlock>) => {
      return (
        <blockquote className={`my-5 px-14 leading-loose italic ${className}`}>
          - {props.children}
        </blockquote>
      );
    },
  },
  code: (props: { value: { language?: string; code?: string } }) => (
    <pre data-language={props.value.language} className={className}>
      <code>{props.value.code}</code>
    </pre>
  ),
  list: {
    bullet: (props: PortableTextComponentProps<PortableTextBlock>) => {
      return <ul className={`pl-4 list-disc font-light ${className}`}>{props.children}</ul>;
    },
    number: (props: PortableTextComponentProps<PortableTextBlock>) => {
      return <ol className={`pl-4 list-decimal font-light ${className}`}>{props.children}</ol>;
    },
  },
  listItem: {
    bullet: (props: PortableTextComponentProps<PortableTextBlock>) => (
      <li className={`font-light ${className}`}>{props.children}</li>
    ),
  },
  marks: {
    strong: (props: PortableTextMarkComponentProps<PortableTextBlock>) => (
      <strong className={`font-bold ${className}`}>{props.children}</strong>
    ),
    em: (props: PortableTextMarkComponentProps<PortableTextBlock>) => (
      <em className={className}>{props.children}</em>
    ),
    code: (props: PortableTextMarkComponentProps<PortableTextBlock>) => (
      <code className={className}>{props.children}</code>
    ),
    link: (props: PortableTextMarkComponentProps<PortableTextBlock & { href: string }>) => (
      <a
        aria-label={props.children?.toString() ?? "external link"}
        className={`underline underline-offset-2 decoration-gray-2 decoration-1 hover:decoration-2 ${className}`}
        href={props.value?.href}
        target="_blank"
        rel="noopener noreferrer">
        {props.children}
      </a>
    ),
  },
  types: {
    image: (props: { value: { alt?: string; caption?: string } }) => (
      <div className={`my-5 ${className}`}>
        <img
          src={props.value.toString()}
          alt={props.value.alt || "Image"}
          className={`w-full h-auto ${className}`}
        />
        {props.value.caption && (
          <p className={`text-center text-sm text-gray-600 ${className}`}>{props.value.caption}</p>
        )}
      </div>
    ),
  },
});
