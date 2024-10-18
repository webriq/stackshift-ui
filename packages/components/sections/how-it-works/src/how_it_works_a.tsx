import { Heading } from "@stackshift-ui/heading";
import { Text } from "@stackshift-ui/text";
import { YoutubeVideo } from "@stackshift-ui/youtube-video";
import { Section } from "@stackshift-ui/section";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";

import { HowItWorksProps } from ".";
import { ArrayOfTitleAndText } from "./types";

export default function HowItWorks_A({ subtitle, title, text, video, steps }: HowItWorksProps) {
  // get the video link ID
  let videoLinkId;

  if (video) {
    if (video.includes("embed")) {
      videoLinkId = video.split("/")[4];
    } else {
      videoLinkId = video.split("/watch?v=")[1] || video.split("/")[3];
    }
  }

  return (
    <Section className="py-20 bg-background">
      <Container maxWidth={1280}>
        <Flex wrap className="mb-10" gap={10} justify="between">
          <SubtitleTitleAndText subtitle={subtitle} title={title} text={text} />
          <VideoSection video={video} videoLinkId={videoLinkId} title={title} />
        </Flex>
        <StepItems steps={steps} />
      </Container>
    </Section>
  );
}

function SubtitleTitleAndText({
  subtitle,
  title,
  text,
}: {
  subtitle?: string;
  title?: string;
  text?: string;
}) {
  return (
    <div className="w-full mb-10 lg:mb-0 lg:w-[45%]">
      {subtitle ? (
        <Text weight="bold" className="md:text-lg lg:text-lg text-secondary">
          {subtitle}
        </Text>
      ) : null}
      {title ? (
        <Heading fontSize="3xl" className="my-5">
          {title}
        </Heading>
      ) : null}
      {text ? (
        <Text muted className="text-sm md:text-lg md:leading-loose">
          {text}
        </Text>
      ) : null}
    </div>
  );
}

function VideoSection({
  video,
  videoLinkId = "",
  title = "",
}: {
  video?: string;
  videoLinkId?: string;
  title?: string;
}) {
  if (!video) return null;

  return (
    <div className="h-full w-full lg:w-[40%]">
      <YoutubeVideo videoLinkId={videoLinkId} title={title} />
    </div>
  );
}

function StepItems({ steps }: { steps?: ArrayOfTitleAndText[] }) {
  if (!steps) return null;

  return (
    <Flex wrap>
      {steps?.map((step, index) => <StepItem index={index} step={step} key={step._key} />)}
    </Flex>
  );
}

function StepItem({ index, step }: { index: number; step?: ArrayOfTitleAndText }) {
  if (!step) return null;

  return (
    <div className="w-full px-5 mb-12 md:w-1/2 lg:mb-0 lg:w-1/3">
      <span className="flex items-center justify-center w-12 h-12 mt-6 mb-6 font-bold rounded bg-secondary-foreground text-primary">
        {index + 1}
      </span>
      <Text weight="bold" className="mb-2 text-lg md:text-2xl">
        {step?.title}
      </Text>
      <Text muted className="text-xs md:text-lg md:leading-loose ">
        {step?.plainText}
      </Text>
    </div>
  );
}

export { HowItWorks_A };
