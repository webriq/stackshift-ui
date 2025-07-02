import { Button } from "@stackshift-ui/button";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import { LogoCloudProps } from ".";
import { ConditionalLink } from "./helper";
import { Images, LabeledRoute } from "./types";

export default function LogoCloud_C({ title, images, button }: LogoCloudProps) {
  return (
    <Section className="relative pt-20 pb-12 overflow-hidden bg-background lg:pb-80">
      <Container maxWidth={1280}>
        <LogoCloudHeader title={title} button={button} />
        {images && images.length > 0 && <Logos images={images} />}
        <LogoCloudMobile images={images} />
      </Container>
    </Section>
  );
}

function LogoCloudHeader({ title, button }: { title?: string; button?: LabeledRoute }) {
  return (
    <Container maxWidth={448} className="text-center">
      {title && (
        <Heading weight="bold" className="mb-8 text-4xl lg:text-5xl">
          {title}
        </Heading>
      )}
      {button?.label && (
        <Button variant="link" aria-label={button.label} asChild>
          <ConditionalLink link={button} ariaLabel={button.label}>
            {button.label}
          </ConditionalLink>
          {button.label}
        </Button>
      )}
    </Container>
  );
}

// Logos Component for desktop view
function Logos({ images }: { images?: Images[] }) {
  if (!images) return null;

  return (
    <div className="relative hidden lg:block">
      {images.map((image, index) => (
        <LogoItem key={index} image={image} alt={image?.alt} index={index} />
      ))}
    </div>
  );
}

// Logo Item for individual images (Desktop view)
function LogoItem({ image, alt, index }: { image?: Images; alt?: string; index: number }) {
  const positions = [
    { top: "-120px", left: "-10px" },
    { top: "0", left: "0", marginTop: "20px" },
    { bottom: "-250px", left: "20%" },
    { top: "20px", right: "20%" },
    { bottom: "-250px", right: "0" },
    { top: "-150px", right: "0" },
  ];

  return (
    <div
      className="absolute flex items-center justify-center w-24 h-24 overflow-hidden rounded-full bg-gray-50"
      style={positions[index] ?? {}}>
      <Image
        className="object-scale-down w-16 h-16"
        src={`${image?.image}`}
        sizes="100vw"
        width={64}
        height={64}
        alt={alt ?? `logoCloud-image-${index + 1}`}
      />
    </div>
  );
}

// LogoCloud Mobile Component (Mobile View)
function LogoCloudMobile({ images }: { images?: Images[] }) {
  if (!images) return null;

  return (
    <Flex wrap justify="center" className="mt-16 lg:hidden">
      {images &&
        images.map((image, index) => (
          <Flex
            align="center"
            justify="center"
            className="w-24 h-24 mx-4 mb-8 rounded-full bg-gray-50"
            key={index}>
            <Image
              className="object-scale-down w-16 h-16"
              src={`${image?.image}`}
              sizes="100vw"
              width={64}
              height={64}
              alt={image?.alt ?? `logoCloud-image-${index}`}
            />
          </Flex>
        ))}
    </Flex>
  );
}

export { LogoCloud_C };
