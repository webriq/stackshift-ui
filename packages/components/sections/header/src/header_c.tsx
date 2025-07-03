import { Button } from "@stackshift-ui/button";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import { buildSanityLink } from "@stackshift-ui/system";
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
  const primaryButtonLink = buildSanityLink({
    type: "linkInternal",
    internalLink: primaryButton?.link?.target === "_self" ? primaryButton?.link?.route : "",
    externalLink: primaryButton?.link?.target != "_self" ? primaryButton?.link?.route : "",
  });

  const secondaryButtonLink = buildSanityLink({
    type: "linkInternal",
    internalLink: secondaryButton?.link?.target === "_self" ? secondaryButton?.link?.route : "",
    externalLink: secondaryButton?.link?.target != "_self" ? secondaryButton?.link?.route : "",
  });

  return (
    <Flex align="center" gap={4} justify="center" className="flex-col lg:flex-row">
      {primaryButton?.label && (
        <Button variant="link" aria-label={primaryButton?.label} asChild>
          <Link
            href={primaryButtonLink.href}
            target={primaryButtonLink.target}
            rel={primaryButtonLink.rel}>
            {primaryButton?.label}
          </Link>
        </Button>
      )}
      {secondaryButton?.label && (
        <Button
          variant="link"
          aria-label={secondaryButton?.label}
          asChild
          className="bg-secondary hover:bg-secondary/50 inline-block rounded-global font-bold transition duration-200 px-6 py-3">
          <Link
            href={secondaryButtonLink.href}
            target={secondaryButtonLink.target}
            rel={secondaryButtonLink.rel}>
            {secondaryButton?.label}
          </Link>
        </Button>
      )}
    </Flex>
  );
}

export { Header_C };
