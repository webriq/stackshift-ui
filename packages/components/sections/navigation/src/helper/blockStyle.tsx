import { MyPortableTextComponents } from "../types";
import { Text } from "@stackshift-ui/text";

// block styling as props to `serializers` of the PortableText component
export const blockStyle: MyPortableTextComponents = {
  block: {
    normal: ({ children }) => {
      return (
        <Text fontSize="xs" weight="bold" className="text-white ">
          {children}
        </Text>
      );
    },
  },
  code: ({ value }) => {
    return (
      <pre data-language={value.language}>
        <code>{value.code}</code>
      </pre>
    );
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => <code>{children}</code>,
    link: ({ children, value }) => (
      <a
        aria-label={value?.href ?? "external link"}
        className="text-primary-foreground hover:text-secondary-foreground"
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};
