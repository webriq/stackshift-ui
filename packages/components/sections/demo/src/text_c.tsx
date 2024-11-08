import { PortableText } from "@portabletext/react";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Section } from "@stackshift-ui/section";
import { textComponentBlockStyling } from "./helper";
import { TextComponentProps } from "./text-component";

export default function TextComponent_C({
  heading,
  firstColumn,
  secondColumn,
  thirdColumn,
}: TextComponentProps) {
  return (
    <Section className="py-20 bg-background">
      <Container className="container px-4 mx-auto" maxWidth={1280}>
        {heading && (
          <Heading fontSize="xl" className="w-full mb-5 text-center">
            {heading}
          </Heading>
        )}
        <Flex wrap justify="center" className="mx-auto">
          {firstColumn && (
            <div className="px-3 mb-6 text-xs leading-relaxed text-justify text-gray-500 md:mb-0 lg:w-1/4 lg:text-base">
              <PortableText
                value={firstColumn}
                components={textComponentBlockStyling}
                onMissingComponent={false} // Disabling warnings / handling unknown types
              />
            </div>
          )}
          {secondColumn && (
            <div className="px-3 mb-6 text-xs leading-relaxed text-justify text-gray-500 md:mb-0 lg:w-1/4 lg:text-base">
              <PortableText
                value={secondColumn}
                components={textComponentBlockStyling}
                onMissingComponent={false} // Disabling warnings / handling unknown types
              />
            </div>
          )}
          {thirdColumn && (
            <div className="px-3 mb-6 text-xs leading-relaxed text-justify text-gray-500 md:mb-0 lg:w-1/4 lg:text-base">
              <PortableText
                value={thirdColumn}
                components={textComponentBlockStyling}
                onMissingComponent={false} // Disabling warnings / handling unknown types
              />
            </div>
          )}
        </Flex>
      </Container>
    </Section>
  );
}

export { TextComponent_C };
