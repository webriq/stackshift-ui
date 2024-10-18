import { PortableText } from "@portabletext/react";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Section } from "@stackshift-ui/section";
import { TextComponentProps } from ".";
import { textComponentBlockStyling } from "./helper";

export default function TextComponent_B({
  heading,
  firstColumn,
  secondColumn,
}: TextComponentProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        {heading && (
          <Heading fontSize="xl" className="w-full mb-4 text-center">
            {heading}
          </Heading>
        )}
        <Flex wrap justify="center" className="mx-auto ">
          {firstColumn && (
            <div className="px-5 mb-3 text-xs leading-relaxed text-justify text-gray-500 lg:mb-6 lg:w-1/4 lg:text-base">
              <PortableText value={firstColumn} components={textComponentBlockStyling} />
            </div>
          )}
          {secondColumn && (
            <div className="px-5 mb-6 text-xs leading-relaxed text-justify text-gray-500 md:mb-0 lg:w-1/4 lg:text-base">
              <PortableText
                value={secondColumn}
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

export { TextComponent_B };
