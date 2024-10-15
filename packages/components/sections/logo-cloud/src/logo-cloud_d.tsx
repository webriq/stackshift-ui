import { Image } from "@webriq-test/image";
import { Section } from "@webriq-test/section";
import { Container } from "@webriq-test/container";
import { Flex } from "@webriq-test/flex";
import { Images } from "./types";
import { LogoCloudProps } from ".";

export default function LogoCloud_D({ images }: LogoCloudProps) {
  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Flex wrap justify="center" align="center">
          {images && images?.map((image, index) => <LogoItem image={image} />)}
        </Flex>
      </Container>
    </Section>
  );
}

function LogoItem({ image }: { image?: Images }) {
  if (!image) return null;

  return (
    <div className="w-full px-2 mb-4 md:w-1/3 lg:mr-10 lg:w-1/6 xl:mr-0">
      {image?.image && (
        <Flex
          align="center"
          justify="center"
          className="mx-auto h-[192px] w-[192px]  rounded bg-gray-50">
          <Image
            className="object-scale-down w-full h-full"
            src={`${image?.image}`}
            sizes="192px"
            width={192}
            height={192}
            alt={image?.alt ?? `logoCloud-image`}
          />
        </Flex>
      )}
    </div>
  );
}

export { LogoCloud_D };
