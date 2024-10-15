import { Button } from "@webriq-test/button";
import { Heading } from "@webriq-test/heading";
import { Section } from "@webriq-test/section";
import { Container } from "@webriq-test/container";
import { Flex } from "@webriq-test/flex";
import { ButtonProps, HeaderProps } from ".";

export default function Header_C({
  videoLink,
  title,
  primaryButton,
  secondaryButton,
}: HeaderProps) {
  // get the video link ID
  let videoLinkId;

  if (videoLink) {
    if (videoLink.includes("embed")) {
      videoLinkId = videoLink.split("/")[4];
    } else {
      videoLinkId = videoLink.split("/watch?v=")[1] || videoLink.split("/")[3];
    }
  }

  return (
    <Section className="py-20 md:py-52 bg-background">
      <Container maxWidth={1280}>
        <div className="max-w-2xl mx-auto mb-12 text-center md:mb-20">
          {title && (
            <Heading fontSize="3xl" className="mb-10">
              {title}
            </Heading>
          )}
          <Buttons primaryButton={primaryButton} secondaryButton={secondaryButton} />
        </div>
        <div className="md:mx-20 lg:mx-60 xl:mx-60">
          {videoLinkId && <VideoPlayer videoLinkId={videoLinkId} title={title} />}
        </div>
      </Container>
    </Section>
  );
}

function VideoPlayer({ videoLinkId, title }: { videoLinkId?: string; title?: string }) {
  return (
    <div className="aspect-video">
      <iframe
        aria-label="Show Video Frame"
        className="w-full h-full border-4 rounded-3xl border-primary"
        src={`https://www.youtube.com/embed/${videoLinkId}`}
        srcDoc={`<style>*{padding:0;margin:0;overflow:hidden;border-radius:24px}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=${`https://www.youtube.com/embed/${videoLinkId}`}><img src=${`https://i.ytimg.com/vi_webp/${videoLinkId}/maxresdefault.webp`} alt=${title} loading="lazy" /><span>▶</span></a>`}
        loading="lazy"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

function Buttons({
  primaryButton,
  secondaryButton,
}: {
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
}) {
  return (
    <Flex align="center" gap={4} justify="center" className="flex-col lg:flex-row">
      {primaryButton?.label && (
        <Button as="link" ariaLabel={primaryButton?.label} link={primaryButton}>
          {primaryButton?.label}
        </Button>
      )}
      {secondaryButton?.label && (
        <Button
          as="link"
          ariaLabel={secondaryButton?.label}
          link={secondaryButton}
          className="text-black bg-white hover:bg-gray-50 inline-block rounded-l-xl rounded-t-xl font-bold transition duration-200 px-3 py-4">
          {secondaryButton?.label}
        </Button>
      )}
    </Flex>
  );
}

export { Header_C };
