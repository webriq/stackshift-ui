import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Image } from "@stackshift-ui/image";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import React, { useEffect, useRef, useState } from "react";
import { BiArrowBack, BiChevronDown, BiMenu } from "react-icons/bi";
import { BsFillTelephoneFill, BsTelephone } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { NavigationProps } from ".";
import { ConditionalLink, logoLink } from "./helper/index";
import { LabeledRouteWithKey } from "./types";

// Types
type DropdownRef = React.RefObject<HTMLDivElement>;

interface DropdownState {
  previous: number | null;
  index: number | null;
}

// Components
const NavigationLogo = ({ logo, hasScrolled }: { logo: any; hasScrolled: boolean }) => {
  if (!logo?.image) return null;

  return (
    <Link
      aria-label={`Go to ${logoLink(logo) === "/" ? "home page" : logoLink(logo)}`}
      className="text-3xl"
      href={logoLink(logo)}
      target={logo?.linkTarget}
      rel={logo?.linkTarget === "_blank" ? "noopener noreferrer" : ""}>
      <Image
        src={
          hasScrolled
            ? logo?.image
            : "https://cdn.sanity.io/images/9itgab5x/staging/7f9353c628ae4dd0bdd479d3b1407a3c242755e8-1963x833.png?fm=webp&w=96&q=75"
        }
        width={500}
        height={500}
        alt={logo?.alt ?? "navigation-logo"}
        className={`transition-all duration-500 w-28 ${hasScrolled ? "md:w-40" : "md:w-44"}`}
      />
    </Link>
  );
};

const NavigationButton = ({ button, hasScrolled }: { button: any; hasScrolled: boolean }) => {
  if (!button?.label) return null;

  return (
    <ConditionalLink
      ariaLabel={button?.label}
      link={button}
      target={button?.linkTarget}
      className={`font-body ml-auto p-2.5 md:p-3 transition duration-200 font-medium flex items-center space-x-2 text-left ${
        hasScrolled
          ? "text-white border border-white bg-transparent hover:bg-white hover:text-black"
          : "text-white bg-secondary hover:text-secondary hover:border hover:border-black/40 hover:bg-white"
      }`}>
      <span className="flex-none text-3xl sm:text-xl">
        {hasScrolled ? (
          <BsTelephone className="text-lg md:text-xl" />
        ) : (
          <BsFillTelephoneFill className="text-lg md:text-xl" />
        )}
      </span>
      <span className="text-sm md:text-base sm:block hidden whitespace-nowrap">
        {button?.label}
      </span>
    </ConditionalLink>
  );
};

const MobileMenuButton = ({
  hasScrolled,
  menu,
  showMenu,
}: {
  hasScrolled: boolean;
  menu: boolean;
  showMenu: (e: React.MouseEvent) => void;
}) => (
  <div>
    <BiMenu
      color={hasScrolled ? "white" : "black"}
      size={40}
      onClick={showMenu}
      className={`cursor-pointer hover:scale-105 transition lg:hidden block ${
        menu ? "hidden" : "block"
      }`}
    />
    <MdClose
      color={hasScrolled ? "white" : "black"}
      size={40}
      onClick={showMenu}
      className={`cursor-pointer hover:scale-105 transition lg:hidden block ${
        menu ? "block" : "hidden"
      }`}
    />
  </div>
);

export default function Navigation_F({
  primaryButton,
  secondaryButton,
  logo,
  multipleLinks,
  title,
}: NavigationProps) {
  const [dropdown, setDropdown] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [menu, setMenu] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdown(null);
    }
  };

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      handleClickOutside(event);
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const showMenu = (e: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setMenu(prevState => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Section
        className={`fixed !z-[999999] w-full left-0 transition-all top-0 ${
          hasScrolled ? "bg-black/80" : "bg-background"
        }`}>
        <Container>
          <div className="flex justify-between space-x-5 py-2 items-center">
            <NavigationLogo logo={logo} hasScrolled={hasScrolled} />

            <Flex direction="row" align="center" className="hidden lg:flex gap-x-8">
              {multipleLinks?.map((link: LabeledRouteWithKey, index: number) => (
                <NavigationLink
                  key={index}
                  link={link}
                  index={index}
                  dropdown={dropdown}
                  setDropdown={setDropdown}
                  hasScrolled={hasScrolled}
                  dropdownRef={dropdownRef}
                />
              ))}
            </Flex>

            <Flex direction="row" align="center" gap={2}>
              {(primaryButton?.label || secondaryButton?.label) && (
                <div className="flex space-x-4 sm:space-x-6 items-center">
                  <NavigationButton button={primaryButton} hasScrolled={hasScrolled} />
                </div>
              )}
              <MobileMenuButton hasScrolled={hasScrolled} menu={menu} showMenu={showMenu} />
            </Flex>
          </div>
        </Container>
        <Drawer links={multipleLinks} open={menu} showMenu={showMenu} />
      </Section>
    </>
  );
}

const NavigationLink = ({
  link,
  index,
  dropdown,
  setDropdown,
  hasScrolled,
  dropdownRef,
}: {
  link: LabeledRouteWithKey;
  index: number;
  dropdown: number | null;
  setDropdown: (value: number | null) => void;
  hasScrolled: boolean;
  dropdownRef: DropdownRef;
}) => {
  if (!link?.multipleRoutes) {
    return (
      <ConditionalLink
        ariaLabel={link?.label || ""}
        link={link}
        target={link?.linkTarget}
        className={`hover:text-secondary font-body text-lg whitespace-nowrap ${
          hasScrolled ? "text-white" : "text-black"
        }`}>
        {link?.label}
      </ConditionalLink>
    );
  }

  const handleDropdownChange = (newIndex: number | null) => {
    setDropdown(newIndex);
  };

  return (
    <div className="relative">
      {link?.internalLink || link?.externalLink ? (
        <Flex
          onMouseEnter={(e: React.MouseEvent) => {
            e.stopPropagation();
            handleDropdownChange(dropdown === index ? null : index);
          }}>
          <ConditionalLink
            ariaLabel={link?.label || ""}
            link={link}
            target={link?.linkTarget}
            className={`hover:text-secondary font-body text-lg cursor-pointer ${
              hasScrolled ? "text-white" : "text-black"
            }`}>
            {link?.label}
          </ConditionalLink>

          <BiChevronDown
            size={24}
            className={`font-bold mt-0.5 font-body cursor-pointer hover:text-secondary hover:translate-y-0.5 transition ${
              hasScrolled ? "text-white" : "text-black"
            } ${dropdown === index && "translate-y-0.5 !text-secondary"}`}
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              handleDropdownChange(index);
            }}
          />
        </Flex>
      ) : (
        <p
          className={`hover:text-secondary font-body text-lg cursor-pointer flex items-center group ${
            hasScrolled ? "text-white" : "text-black"
          }`}
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            handleDropdownChange(dropdown === index ? null : index);
          }}
          onMouseEnter={(e: React.MouseEvent) => {
            e.stopPropagation();
            handleDropdownChange(dropdown === index ? null : index);
          }}>
          {link?.label}
          <BiChevronDown
            size={24}
            className={`font-bold mt-0.5 group-hover:translate-y-0.5 transition ${
              dropdown === index && "translate-y-0.5 text-secondary"
            }`}
          />
        </p>
      )}

      {dropdown === index && (
        <DropdownMenu
          link={link}
          dropdownRef={dropdownRef}
          setDropdown={setDropdown}
          hasScrolled={hasScrolled}
        />
      )}
    </div>
  );
};

const DropdownMenu = ({
  link,
  dropdownRef,
  setDropdown,
  hasScrolled,
}: {
  link: LabeledRouteWithKey;
  dropdownRef: DropdownRef;
  setDropdown: (value: number | null) => void;
  hasScrolled: boolean;
}) => (
  <div
    ref={dropdownRef}
    className="absolute flex flex-col top-8 bg-primary rounded rounded-tl-none"
    onMouseLeave={() => setDropdown(null)}>
    <span className="absolute top-0 w-0 h-0 border-x-transparent border-t-transparent border-b-primary border-[6px] transform -translate-y-3" />
    {link?.multipleRoutes?.map((mLink, idx) => (
      <DropdownMenuItem key={idx} mLink={mLink} hasScrolled={hasScrolled} />
    ))}
  </div>
);

const DropdownMenuItem = ({
  mLink,
  hasScrolled,
}: {
  mLink: LabeledRouteWithKey;
  hasScrolled: boolean;
}) => {
  if (mLink?.multipleInnerRoutes) {
    return (
      <div className="relative group">
        {mLink?.internalLink || mLink?.externalLink ? (
          <Flex align="center">
            <ConditionalLink
              ariaLabel={mLink?.label || ""}
              link={mLink}
              target={mLink?.linkTarget}
              className="font-body hover:text-secondary text-lg cursor-pointer py-2 pl-4 text-white">
              {mLink?.label}
            </ConditionalLink>
            <BiChevronDown
              size={24}
              className="font-bold mt-0.5 cursor-pointer group-hover:translate-y-0.5 transition group-hover:text-secondary text-white"
            />
          </Flex>
        ) : (
          <p className="hover:text-secondary text-lg cursor-pointer flex items-center group py-2 px-4 text-white">
            {mLink?.label}
            <BiChevronDown
              size={24}
              className="font-bold mt-0.5 group-hover:translate-y-0.5 transition"
            />
          </p>
        )}
        <div className="absolute hidden flex-col top-0 left-full bg-primary rounded-r rounded-r-b group-hover:flex hover:flex">
          {mLink?.multipleInnerRoutes?.map((innerLink: LabeledRouteWithKey, idx: number) => (
            <ConditionalLink
              key={idx}
              ariaLabel={innerLink?.label || ""}
              link={innerLink}
              target={innerLink?.linkTarget}
              className="hover:text-secondary font-body text-lg py-2 px-4 whitespace-nowrap text-white">
              {innerLink?.label}
            </ConditionalLink>
          ))}
        </div>
      </div>
    );
  }

  return (
    <ConditionalLink
      ariaLabel={mLink?.label || ""}
      link={mLink}
      target={mLink?.linkTarget}
      className="hover:text-secondary font-body text-lg py-2 px-4 whitespace-nowrap text-white">
      {mLink?.label}
    </ConditionalLink>
  );
};

const Drawer = ({
  links,
  open,
  showMenu,
}: {
  links: LabeledRouteWithKey[];
  open: boolean;
  showMenu: (e: React.MouseEvent) => void;
}) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest(".BiMenu")
      ) {
        if (open) {
          showMenu(event as unknown as React.MouseEvent);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open, showMenu]);

  const [showInnerRoutes, setShowInnerRoutes] = useState<DropdownState>({
    previous: null,
    index: null,
  });

  const handleRouteClick = (previous: number | null, index: number | null) => {
    setShowInnerRoutes({ previous, index });
  };

  const renderLink = (
    link: LabeledRouteWithKey,
    idx: number,
    hasChevron = false,
    onClick?: () => void,
  ) => {
    const isNewConstruction = link?.label === "New Construction";
    const isRenovation = link?.label === "Renovations" || link?.label === "Renovation";

    return (
      <div className="flex items-center py-2 px-4" key={idx}>
        {link?.internalLink || link?.externalLink ? (
          isNewConstruction || isRenovation ? (
            <p
              className={`text-xl font-body ${
                hasScrolled ? "text-white" : "text-black"
              } hover:text-secondary cursor-pointer`}
              onClick={() =>
                (window.location.href = `/projects/residential?filter=${
                  isNewConstruction ? "new_construction" : "renovations"
                }`)
              }>
              {link?.label}
            </p>
          ) : (
            <ConditionalLink
              ariaLabel={link?.label || ""}
              link={link}
              target={link?.linkTarget}
              className={`text-xl font-body ${
                hasScrolled ? "text-white" : "text-black"
              } hover:text-secondary`}>
              <p className="w-full h-full" onClick={showMenu}>
                {link?.label}
              </p>
            </ConditionalLink>
          )
        ) : (
          <p
            className={`text-xl font-body peer cursor-pointer ${
              hasScrolled ? "text-white" : "text-black"
            } hover:text-secondary`}
            onClick={onClick}>
            {link?.label}
          </p>
        )}
        {hasChevron && (
          <BiChevronDown
            fontSize={24}
            className={`hover:-rotate-90 hover:text-secondary peer-hover:-rotate-90 peer-hover:text-secondary transition duration-200 cursor-pointer ${
              hasScrolled ? "text-white" : "text-black"
            }`}
            onClick={onClick}
          />
        )}
      </div>
    );
  };

  const renderLinks = (linksArray: LabeledRouteWithKey[], isInnerRoute = false) =>
    linksArray.map((link, idx) => {
      const isDropdown = Boolean(link?.multipleRoutes || link?.multipleInnerRoutes);
      const onClick = isDropdown
        ? () => handleRouteClick(isInnerRoute ? showInnerRoutes.index : null, idx)
        : undefined;

      return renderLink(link, idx, isDropdown, onClick);
    });

  const renderBackButton = (onClick: () => void) => (
    <p
      className={`hover:text-secondary text-xl font-body py-2 px-4 flex items-center gap-2 cursor-pointer group ${
        hasScrolled ? "text-white" : "text-black"
      }`}
      onClick={onClick}>
      <BiArrowBack />
      Back
    </p>
  );

  return (
    <Flex
      className={`flex sm:block text-white overflow-hidden transition lg:hidden columns-2 ${
        open ? "animate-curtain-down mt-5" : "animate-curtain-up h-0"
      }`}>
      <div ref={drawerRef} onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        {open && (
          <>
            {links && showInnerRoutes.index === null && renderLinks(links)}
            {showInnerRoutes.previous === null && showInnerRoutes.index !== null && (
              <div className="flex flex-col">
                {renderBackButton(() => handleRouteClick(null, null))}
                {renderLinks(links[showInnerRoutes.index]?.multipleRoutes || [], true)}
              </div>
            )}
            {showInnerRoutes.previous !== null && showInnerRoutes.index !== null && (
              <div className="flex flex-col">
                {renderBackButton(() =>
                  setShowInnerRoutes({
                    previous: null,
                    index: showInnerRoutes.previous,
                  }),
                )}
                {renderLinks(
                  links[showInnerRoutes.previous]?.multipleRoutes?.[showInnerRoutes.index]
                    ?.multipleInnerRoutes || [],
                )}
              </div>
            )}
          </>
        )}
      </div>
    </Flex>
  );
};

export { Navigation_F };
