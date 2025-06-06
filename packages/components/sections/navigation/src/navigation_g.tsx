import { Image } from "@stackshift-ui/image";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import { SocialIcons } from "@stackshift-ui/social-icons";
import React, { Fragment, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

import { animated, useSpring } from "@react-spring/web";
import { useWindowScroll } from "@uidotdev/usehooks";

import { NavigationProps } from "./";
import { logoLink } from "./helper";
import { Socials } from "./types";

const navlinkStyle =
  "small-text-style group-hover:text-white hover:text-white relative after:content-[''] after:w-0 hover:after:w-full h-5 !outline-none after:h-[0.5px] after:bg-white after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300";

export default function Navigation_G({ logo, socialMedia, dropdownMenu }: NavigationProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menu, setMenu] = React.useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [isNavHovered, setIsNavHovered] = useState<boolean>(false);

  const showMenu = () => {
    setMenu(prevState => !prevState);

    if (!menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  // animated burger menu button
  const firstLine = useSpring({
    transform: menu
      ? "translate(9px, 32px) rotate(-45deg) scaleX(1.5)"
      : "translate(17px, 17px) rotate(0deg) scaleX(1)",
  });
  const secondLine = useSpring({
    transform: menu ? "translate(12px, 11px) rotate(45deg)" : "translate(7px, 27px) rotate(0deg)",
  });

  const [{ x: _, y }] = useWindowScroll();
  const sticky = y && y > 5 ? "bg-black fixed top-0" : "fixed bg-transparent";
  const isScrolled = y && y > 5;

  const toggleAccordion = (key: string | undefined) => {
    if (!key) return;
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleNavHover = (hovered: boolean) => {
    setIsNavHovered(hovered);
  };

  return (
    <Section className="!px-0 w-full flex flex-col absolute top-0 z-50">
      <nav
        className={`w-full z-50 md:gap-2 gap-0 hover:bg-black/80 transition-colors duration-300 ${
          showDropdown ? "!bg-black border-b-white" : "border-b-transparent"
        } ${sticky}`}
        onMouseEnter={() => handleNavHover(true)}
        onMouseLeave={() => handleNavHover(false)}>
        <div className="w-full z-10 px-4">
          <div
            className={`w-full flex flex-wrap justify-between items-center ${
              isScrolled ? "py-6" : "py-6"
            }`}>
            <div className="flex items-center space-x-[50px]">
              <LogoSection logo={logo} />
              <DropdownMenuSection
                dropdownMenu={dropdownMenu}
                isNavHovered={isNavHovered}
                setShowDropdown={setShowDropdown}
              />
            </div>
            <BurgerMenuButton
              menu={menu}
              showMenu={showMenu}
              firstLine={firstLine}
              secondLine={secondLine}
              isNavHovered={isNavHovered}
            />
          </div>
        </div>
        <MobileNavSidebar
          menu={menu}
          showMenu={showMenu}
          dropdownMenu={dropdownMenu}
          logo={logo}
          openAccordion={openAccordion}
          toggleAccordion={toggleAccordion}
          socialMedia={socialMedia}
        />
      </nav>
    </Section>
  );
}

function LogoSection({ logo }: { logo: NavigationProps["logo"] }) {
  return (
    <div className="w-[200px] relative z-20">
      {logo?.image && (
        <Link
          aria-label={`Go to ${logoLink(logo)}`}
          className="text-3xl font-bold leading-none"
          href={logoLink(logo)}>
          <Image
            className={`md:h-[75px]`}
            src={logo?.image}
            alt={logo?.alt ?? "navigation-logo"}
            width={100}
            height={100}
          />
        </Link>
      )}
    </div>
  );
}

function DropdownMenuSection({
  dropdownMenu,
  isNavHovered,
  setShowDropdown,
}: {
  dropdownMenu: NavigationProps["dropdownMenu"];
  isNavHovered: boolean;
  setShowDropdown: (bool: boolean) => void;
}) {
  if (!dropdownMenu || dropdownMenu?.length === 0) return null;
  return (
    <Fragment>
      {dropdownMenu && dropdownMenu?.length > 0 && (
        <ul className="hidden lg:flex flex-wrap space-x-[50px] xl:min-w-max">
          {dropdownMenu?.map(link => (
            <React.Fragment key={link._key}>
              {link?.label && link?._key && (
                <li className="static z-20 hover:z-10">
                  {link?.routeType === "singleRoute" ? (
                    <LinkComponent
                      link={link}
                      style={`${navlinkStyle} ${isNavHovered ? "text-white" : "text-black"}`}
                    />
                  ) : link?.routeType === "multipleRoute" ? (
                    <HoverMenu
                      link={link}
                      isNavHovered={isNavHovered}
                      onHover={() => setShowDropdown(true)}
                      onLeave={() => setShowDropdown(false)}
                    />
                  ) : (
                    <span
                      className={`${navlinkStyle} ${isNavHovered ? "text-white" : "text-black"}`}>
                      {link?.label}
                    </span>
                  )}
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
      )}
    </Fragment>
  );
}

function LinkComponent({ link, style = navlinkStyle }: { link: any; style?: string }) {
  return (
    <>
      {link.linkType === "linkInternal" ? (
        <Link
          aria-label={`Navigation ${link?.label ?? "Menu"} links which directs to ${
            link?.internalLink === undefined ? "page-not-found" : link?.internalLink
          }`}
          className={style}
          target={link?.linkTarget}
          rel={link?.linkTarget === "_blank" ? "noopener noreferrer" : ""}
          href={`${
            link.internalLink?.toLowerCase() === "home"
              ? "/"
              : `${!link.internalLink ? "page-not-found" : link?.internalLink}`
          }`}>
          {link?.label}
        </Link>
      ) : link?.linkType === "linkText" && link?.linkText?.slice(0, 1) !== "/" ? (
        <a
          href={!link?.linkText ? "link-not-found" : link?.linkText}
          aria-label={`Navigation ${link?.label ?? "Menu"} links which directs to ${
            link?.linkText === undefined ? "link-not-found" : link?.linkText
          }`}
          className={style}
          target={link?.linkTarget}
          rel={link?.linkTarget === "_blank" ? "noopener noreferrer" : ""}>
          {link?.label}
        </a>
      ) : link?.linkType === "linkText" && link?.linkText?.slice(0, 1) === "/" ? (
        <Link
          aria-label={`Navigation ${link?.label ?? "Menu"} links which directs to ${
            link?.linkText === undefined ? "link-not-found" : link?.linkText
          }`}
          className={style}
          target={link?.linkTarget}
          rel={link?.linkTarget === "_blank" ? "noopener noreferrer" : ""}
          href={!link?.linkText ? "link-not-found" : link?.linkText}>
          {link?.label}
        </Link>
      ) : (
        <a
          aria-label={`Navigation ${link?.label ?? "Menu"} links which directs to ${
            link?.externalLink === undefined ? "link-not-found" : link?.externalLink
          }`}
          className={style}
          target={link?.linkTarget}
          href={`${link.externalLink === undefined ? "link-not-found" : link.externalLink}`}
          rel={link?.linkTarget === "_blank" ? "noopener noreferrer" : ""}>
          {link?.label}
        </a>
      )}
    </>
  );
}

function HoverMenu({
  link,
  onHover,
  onLeave,
  isNavHovered,
}: {
  link: any;
  onHover: () => void;
  onLeave: () => void;
  isNavHovered: boolean;
}) {
  return (
    <div className="group relative" onMouseEnter={onHover} onMouseLeave={onLeave}>
      <button
        className={`${navlinkStyle} group-hover:after:!w-full flex items-center space-x-2 ${
          isNavHovered ? "text-white" : "text-black"
        }`}>
        <span>{link?.label}</span>
      </button>

      <div className="fixed left-0 right-0 top-[80px] pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-3/4 mx-auto bg-black">
          <div className="max-w-[1440px] mx-auto px-4">
            <div className="p-[30px]">
              <div className="grid grid-cols-5 gap-[30px]">
                {link?.featuredRoute && (
                  <div className="col-span-2 pr-[20px]">
                    <div className="w-full h-0 pb-[75%] relative bg-obsidian">
                      {link?.featuredRoute?.featuredLink && (
                        <div className="absolute w-full h-full inset-0 p-[15px] flex flex-col justify-end z-10">
                          <span>
                            <LinkComponent
                              link={link?.featuredRoute?.featuredLink}
                              style="small-text-style text-white underline underline-offset-4 decoration-[0.5px] opacity-50 hover:opacity-100 h-5 !outline-none transition-all duration-300 after:absolute after:inset-0"
                            />
                          </span>
                        </div>
                      )}
                      {link?.featuredRoute?.mainImage && (
                        <Image
                          src={link?.featuredRoute?.mainImage?.image}
                          alt={link?.featuredRoute?.mainImage?.alt ?? "image"}
                          width={100}
                          height={100}
                          className="object-cover absolute inset-0 w-full h-full"
                        />
                      )}
                    </div>
                  </div>
                )}
                {link?.multipleRoutes && (
                  <div className="col-span-3 py-[20px]">
                    <div className="flex flex-col space-y-10">
                      {link?.label && <p className="h3 text-white">{link?.label}</p>}
                      <ul
                        className={`grid gap-x-[60px] gap-y-3 ${
                          link?.multipleRoutes?.length > 3 ? "grid-cols-2" : "grid-cols-1"
                        }`}>
                        {link?.multipleRoutes?.map((sublink: any) => (
                          <li key={sublink._key}>
                            {sublink?.label && (
                              <LinkComponent link={sublink} style={navlinkStyle} />
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileNavSidebar({
  menu,
  showMenu,
  logo,
  dropdownMenu,
  openAccordion,
  toggleAccordion,
  socialMedia,
}: {
  menu: boolean;
  showMenu: () => void;
  logo: any;
  dropdownMenu: NavigationProps["dropdownMenu"];
  openAccordion: string | null;
  toggleAccordion: (key: string) => void;
  socialMedia: NavigationProps["socialMedia"];
}) {
  return (
    <div className={`${menu ? "block" : "hidden"} navbar-menu fixed inset-0 z-50`}>
      <div className="fixed inset-0 bg-black/80" onClick={showMenu}></div>
      <div className="fixed top-0 right-0 bottom-0 flex flex-col w-full sm:max-w-sm bg-black/80">
        <nav className="flex flex-col w-full py-6 px-6 overflow-y-auto h-screen">
          <MobileNavImage logo={logo} showMenu={showMenu} />
          <MobileNavDropdown
            dropdownMenu={dropdownMenu}
            openAccordion={openAccordion}
            toggleAccordion={toggleAccordion}
          />
          <MobileNavSocialMedia socialMedia={socialMedia} />
          <div className="mt-auto pt-20 text-gray-400">
            <span className="text-sm text-center block">{`© ${new Date().getFullYear()} All rights reserved.`}</span>
          </div>
        </nav>
      </div>
    </div>
  );
}

function MobileNavImage({
  logo,
  showMenu,
}: {
  logo: NavigationProps["logo"];
  showMenu: () => void;
}) {
  if (!logo?.image) return null;
  return (
    <Link
      aria-label={`Go to ${logoLink(logo)}`}
      className="text-3xl font-bold leading-none h-[40px] w-[100px] flex items-center justify-start mt-0 md:ml-[15px]"
      onClick={showMenu}
      href={logoLink(logo)}>
      <Image
        className="h-[20px] object-contain"
        src={logo?.image}
        alt={logo?.alt ?? "navigation-logo"}
      />
    </Link>
  );
}

function MobileNavDropdown({
  dropdownMenu,
  openAccordion,
  toggleAccordion,
}: {
  dropdownMenu: NavigationProps["dropdownMenu"];
  openAccordion: string | null;
  toggleAccordion: (key: string) => void;
}) {
  return (
    <div className="mt-[70px]">
      <Accordion>
        {dropdownMenu?.map(link => (
          <React.Fragment key={link._key}>
            {link?.label && link?._key && (
              <>
                {link?.routeType === "singleRoute" ? (
                  <span>
                    <LinkComponent
                      link={link}
                      style={`${navlinkStyle} !text-base !h-auto text-white`}
                    />
                  </span>
                ) : link?.routeType === "multipleRoute" ? (
                  <AccordionItem>
                    <AccordionButton
                      isOpen={openAccordion === link._key}
                      onClick={() => link._key && toggleAccordion(link._key)}
                      className={`${navlinkStyle} after:!w-0 !p-0 text-white`}>
                      {link?.label}
                    </AccordionButton>

                    <AccordionPanel isOpen={openAccordion === link._key}>
                      <div className="py-6 flex flex-col space-y-2">
                        {link?.featuredRoute && (
                          <div>
                            <div className="w-full h-0 pb-[75%] relative bg-obsidian">
                              {link?.featuredRoute?.featuredLink && (
                                <div className="absolute w-full h-full inset-0 p-[15px] flex flex-col justify-end z-10">
                                  <span>
                                    <LinkComponent
                                      link={link?.featuredRoute?.featuredLink}
                                      style="small-text-style text-white underline underline-offset-4 decoration-[0.5px] opacity-50 hover:opacity-100 h-5 !outline-none transition-all duration-300"
                                    />
                                  </span>
                                </div>
                              )}
                              {link?.featuredRoute?.mainImage && (
                                <Image
                                  src={link?.featuredRoute?.mainImage?.image}
                                  className="object-cover absolute inset-0 w-full h-full"
                                  alt={link?.featuredRoute?.mainImage?.alt ?? "image"}
                                />
                              )}
                            </div>
                          </div>
                        )}
                        {link?.multipleRoutes && (
                          <ul className="flex flex-col justify-center space-y-1 pl-[15px]">
                            {link?.multipleRoutes?.map(sublink => (
                              <li key={sublink._key}>
                                {sublink?.label && (
                                  <LinkComponent
                                    link={sublink}
                                    style={`${navlinkStyle} text-white`}
                                  />
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </AccordionPanel>
                  </AccordionItem>
                ) : (
                  <span className={`${navlinkStyle} text-white`}>{link?.label}</span>
                )}
              </>
            )}
          </React.Fragment>
        ))}
      </Accordion>
    </div>
  );
}

function MobileNavSocialMedia({ socialMedia }: { socialMedia: NavigationProps["socialMedia"] }) {
  if (!socialMedia) return null;
  return (
    <div className="mt-[70px] flex justify-center space-x-[50px]">
      {socialMedia?.map(
        social =>
          social?.socialMediaLink && (
            <Link
              aria-label={social?.socialMedia || social?.socialMediaPlatform || "social-media-link"}
              className="text-white hover:text-gray-2 leading-none transition"
              style={{ fontSize: "24px" }}
              target="_blank"
              rel="noopener noreferrer"
              href={social?.socialMediaLink}
              key={social?._key}>
              <SocialIcons social={social?.socialMedia as Socials} />
            </Link>
          ),
      )}
    </div>
  );
}

function BurgerMenuButton({
  menu,
  showMenu,
  firstLine,
  secondLine,
  isNavHovered,
}: {
  menu: boolean;
  showMenu: () => void;
  firstLine: any;
  secondLine: any;
  isNavHovered: boolean;
}) {
  return (
    <div
      className={`block pr-4 lg:hidden z-[99] ${
        menu ? "fixed right-[20px] md:right-[50px]" : "relative"
      }`}>
      <svg
        onClick={showMenu}
        width="40"
        height="40"
        viewBox="0 0 44 44"
        fill={isNavHovered ? "#ffffff" : "#000000"}
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer">
        <animated.rect width="20" height="3" style={firstLine} />
        <animated.rect width="30" height="3" style={secondLine} />
      </svg>
    </div>
  );
}

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

function Accordion({ children, className = "" }: AccordionProps) {
  return <div className={`flex flex-col space-y-6 ${className}`}>{children}</div>;
}

interface AccordionItemProps {
  children: React.ReactNode;
  className?: string;
}

function AccordionItem({ children, className = "" }: AccordionItemProps) {
  return <div className={`border-none ${className}`}>{children}</div>;
}

interface AccordionButtonProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionButton({ children, className = "", isOpen, onClick }: AccordionButtonProps) {
  return (
    <button onClick={onClick} className={`${className} flex items-center justify-between w-full`}>
      {children}
      <BsChevronDown
        className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
      />
    </button>
  );
}

interface AccordionPanelProps {
  children: React.ReactNode;
  isOpen: boolean;
}

function AccordionPanel({ children, isOpen }: AccordionPanelProps) {
  return (
    <div
      className={`overflow-hidden transition-all duration-200 ${
        isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
      }`}>
      {children}
    </div>
  );
}

export { Navigation_G };
