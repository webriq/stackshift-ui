import { Heading } from "@webriq-test/heading";
import { Section } from "@webriq-test/section";
import { Container } from "@webriq-test/container";
import { Flex } from "@webriq-test/flex";
import { TextComponentProps } from ".";
import { PortableText } from "@portabletext/react";
import { textComponentBlockStyling } from "./helper";

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
