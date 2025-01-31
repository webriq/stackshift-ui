import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import { LogoCloudProps } from ".";
import { Images } from "./types";

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
          className="mx-auto h-[192px] w-[192px] rounded-global bg-gray-50">
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
