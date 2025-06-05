import { PortableText } from "@portabletext/react";
import { Button } from "@stackshift-ui/button";
import { Flex } from "@stackshift-ui/flex";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { customBlockStyle } from "./utils/portableText/customBlockStyle";

import { HeaderProps } from ".";
import { HeaderBox, HeaderSections } from "./types";

const IMAGE_HEIGHT_CLASSES = {
  lg: "min-h-[200px] sm:min-h-[400px] md:min-h-[600px] lg:min-h-[800px] xl:min-h-[1150px]",
  md: "min-h-[200px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[700px]",
  sm: "min-h-[200px] sm:min-h-[400px] md:min-h-[500px]",
};

export default function Header_F({
  title,
  subtitle,
  subtitlePosition,
  headerSections,
  isFullWidth,
  spacing,
  isOrdered,
  startingPosition,
}: HeaderProps) {
  return (
    <Section className={`relative pb-14 bg-white ${subtitlePosition === "top" && "mt-[32px]"}`}>
      <div
        style={{ marginBottom: `${spacing}px` }}
        className={`w-full mx-auto ${!isFullWidth ? "max-w-[1548px] px-4" : ""}`}>
        {(title || subtitle) && (
          <HeaderTitle title={title} subtitle={subtitle} subtitlePosition={subtitlePosition} />
        )}
        <Flex className="flex-col" style={{ gap: `${spacing}px` }}>
          {headerSections?.map((header: HeaderBox, index: number) => {
            const isImageLeft = startingPosition === "left" ? index % 2 === 0 : index % 2 !== 0;
            header.isImageLeft = isImageLeft;
            header.isFullWidth = isFullWidth;
            header.index = index + 1;
            header.isOrdered = isOrdered;
            return <HeaderItem header={header} key={header._key} isImageLeft={isImageLeft} />;
          })}
        </Flex>
      </div>
    </Section>
  );
}

const HeaderTitle = ({
  title,
  subtitle,
  subtitlePosition,
}: {
  title?: string;
  subtitle?: string;
  subtitlePosition?: string;
}) => (
  <Flex direction="col" justify="center" align="center" gap={3} className="mb-16">
    {subtitlePosition === "top" && subtitle && (
      <Text className="font-label tracking-[2.1px]">{subtitle}</Text>
    )}
    {title && (
      <Text className="text-2xl text-center sm:text-4xl font-normal font-heading-kb tracking-[6px] uppercase border-b border-black">
        {title}
      </Text>
    )}
    {subtitlePosition === "bottom" && subtitle ? (
      <Text className="font-label tracking-[2.1px]">{subtitle}</Text>
    ) : (
      !subtitlePosition && <Text className="font-label tracking-[2.1px]">{subtitle}</Text>
    )}
  </Flex>
);

const HeaderImage = ({ image, height }: { image: string; height?: "sm" | "md" | "lg" }) => (
  <div
    className={`relative w-full ${height ? IMAGE_HEIGHT_CLASSES[height] : ""}`}
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />
);

const HeaderContent = ({ header }: { header: HeaderBox }) => (
  <div className="px-10 sm:px-20 md:px-30 lg:px-40 py-10">
    <div
      className={`w-full max-w-[665px] h-full flex flex-col justify-center items-${header?.alignment} gap-20`}>
      {(header?.title || header?.subtitle || header?.imageTitle) && (
        <HeaderTitleSection header={header} />
      )}
      {header?.description && (
        <Text
          className={`text-normal lg:text-left sm:text-lg sm:!leading-[32px] font-normal font-body-kb tracking-wide ${
            header?.isFullWidth
              ? "lg:text-[18px] lg:!leading-[30px] xl:text-[28px] xl:!leading-[50px]"
              : "lg:text-[18px] lg:!leading-[30px]"
          }`}>
          {header?.description}
        </Text>
      )}
      {header?.columnContent && (
        <PortableText
          value={header?.columnContent}
          components={customBlockStyle({
            className: `${
              header?.isFullWidth
                ? "lg:text-[18px] lg:!leading-[30px] xl:text-[28px] xl:!leading-[50px]"
                : "lg:text-[18px] lg:!leading-[30px]"
            }`,
          })}
        />
      )}
      {header?.primaryButton?.label && <HeaderButton header={header} />}
    </div>
  </div>
);

const HeaderTitleSection = ({ header }: { header: HeaderBox }) => (
  <div>
    {header?.isOrdered && (
      <div className="border border-black w-fit text-center pb-2 pt-1 px-4 lg:px-6 mb-8">
        <Text className="font-normal font-heading-kb text-6xl min-w-[40px] lg:text-[82px] lg:min-w-[45px]">
          {header?.index}
        </Text>
      </div>
    )}
    <div className={`text-${header?.alignment}`}>
      {header?.subtitle && (
        <Text className="text-sm font-label tracking-[2px] mb-2">{header?.subtitle}</Text>
      )}
      {header?.title && (
        <Heading
          className={`text-2xl sm:text-4xl lg:text-[40px] font-normal font-heading-kb uppercase tracking-[6px] !leading-[60px] ${
            header?.isFullWidth ? "border-b border-black w-fit pb-3" : ""
          }`}>
          {header?.title}
        </Heading>
      )}
      {header?.imageTitle && (
        <div className="relative w-fit">
          <Image
            src={header?.imageTitle}
            alt={""}
            width={497}
            height={32}
            className="object-contain object-left"
          />
          <div className="absolute bottom-[-25px] left-0 right-[0] border-b border-black" />
        </div>
      )}
    </div>
  </div>
);

const HeaderButton = ({ header }: { header: HeaderSections }) => (
  <div className={`flex justify-${header?.alignment} gap-4`}>
    {header?.primaryButton?.label && (
      <Button
        as="link"
        link={header?.primaryButton}
        ariaLabel={header?.primaryButton?.label}
        className="border border-black px-14 py-3.5 text-sm">
        <span className="flex items-center gap-2 font-label text-sm font-normal uppercase tracking-widest">
          {header?.primaryButton?.label} <LiaLongArrowAltRightSolid />
        </span>
      </Button>
    )}
  </div>
);

const HeaderItem = ({ header, isImageLeft }: { header: HeaderSections; isImageLeft: boolean }) => (
  <div
    className={`bg-light-kb w-full h-full flex flex-col items-center justify-center md:flex-row ${
      !isImageLeft ? "md:flex-row-reverse" : ""
    }`}>
    {header?.mainImage?.image && (
      <HeaderImage image={header.mainImage.image} height={header.imageHeight} />
    )}
    <div className="w-full flex justify-center">
      <HeaderContent header={header} />
    </div>
  </div>
);

export { Header_F };
