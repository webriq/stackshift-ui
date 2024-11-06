import { PortableText } from "@portabletext/react";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Section } from "@stackshift-ui/section";
import { TextComponentProps } from ".";
import { textComponentBlockStyling } from "./helper";

export default function TextComponent_A({ heading, firstColumn }: TextComponentProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        {heading && (
          <Heading fontSize="xl" className="mb-5 text-center">
            {heading}
          </Heading>
        )}
        <Flex wrap justify="center" className="mx-auto">
          {firstColumn && (
            <div className="mb-2 text-xs md:mb-0 md:w-1/2 lg:text-base">
              <PortableText
                value={firstColumn}
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

export { TextComponent_A };
