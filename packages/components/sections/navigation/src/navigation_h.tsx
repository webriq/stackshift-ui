import { Button } from "@stackshift-ui/button";
import { Flex } from "@stackshift-ui/flex";
import { Grid } from "@stackshift-ui/grid";
import { Heading } from "@stackshift-ui/heading";
import { Image } from "@stackshift-ui/image";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import { useClickAway, useWindowScroll } from "@uidotdev/usehooks";
import cn from "classnames";
import React, {
  createContext,
  forwardRef,
  Fragment,
  SVGProps,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { GoPerson } from "react-icons/go";
import { LiaSearchSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";
import { NavigationProps } from ".";
import { ConditionalLink, logoLink } from "./helper";
import { LabeledRouteWithKey, Logo, MegaMenu } from "./types";

interface AccordionProps {
  className?: string;
  children: React.ReactNode;
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
}

interface AccordionItemProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

interface AccordionTriggerProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

interface AccordionContentProps {
  className?: string;
  children: React.ReactNode;
}

interface AccordionContextType {
  openItems: string[];
  toggleItem: (value: string) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

const useAccordion = () => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within an Accordion");
  }
  return context;
};

const Accordion = ({ className, children, defaultValue = [], onValueChange }: AccordionProps) => {
  const [openItems, setOpenItems] = useState<string[]>(defaultValue);

  const toggleItem = React.useCallback(
    (value: string) => {
      setOpenItems(prev => {
        const newValue = prev.includes(value)
          ? prev.filter(item => item !== value)
          : [...prev, value];
        onValueChange?.(newValue);
        return newValue;
      });
    },
    [onValueChange],
  );

  const value = React.useMemo(
    () => ({
      openItems,
      toggleItem,
    }),
    [openItems, toggleItem],
  );

  return (
    <AccordionContext.Provider value={value}>
      <div className={cn("w-full", className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ value, className, children }: AccordionItemProps) => {
  const { openItems, toggleItem } = useAccordion();
  const isOpen = openItems.includes(value);

  return (
    <div className={cn("border-b border-gray-200", className)}>
      {React.Children.map(children, child => {
        if (!React.isValidElement(child)) return child;

        return React.cloneElement(child as React.ReactElement<any>, {
          isOpen,
          onClick: () => toggleItem(value),
        });
      })}
    </div>
  );
};

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps & { isOpen?: boolean }
>(({ className, children, isOpen, onClick, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      onClick={onClick}
      className={cn("flex w-full items-center justify-between py-4 text-left", className)}
      {...props}>
      {children}
      <svg
        className={cn(
          "h-5 w-5 transform transition-transform duration-200",
          isOpen ? "rotate-180" : "",
        )}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  );
});

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps & { isOpen?: boolean }
>(({ className, children, isOpen }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden transition-all duration-200 ease-in-out",
        isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0",
        className,
      )}>
      <div className="pb-4">{children}</div>
    </div>
  );
});

interface MobileMenuContentProps {
  data?: MegaMenu[];
  showMobileMenu: boolean;
  setShowMobileMenu: (show: boolean) => void;
}

const MobileMenuContent = ({ data, showMobileMenu, setShowMobileMenu }: MobileMenuContentProps) => {
  const ref = useClickAway<HTMLDivElement>(() => {
    if (showMobileMenu) {
      setShowMobileMenu(false);
    }
  });

  if (!showMobileMenu) return null;

  return (
    <div
      ref={ref}
      className="fixed w-[75%] h-screen top-0 right-0 bg-white md:hidden z-50 py-10 px-5 overflow-y-auto">
      <Accordion>
        {data?.map(item => <MobileMenuContentItem key={item._key} megaMenu={item} />)}
      </Accordion>
    </div>
  );
};

interface MobileMenuContentItemProps {
  megaMenu: MegaMenu;
}

const MobileMenuContentItem = React.memo(({ megaMenu }: MobileMenuContentItemProps) => {
  if (megaMenu._type === "isLinkOnly") {
    return (
      <Link
        href={megaMenu.linkExternal || "#"}
        target={megaMenu.linkTarget}
        className="block py-4 text-base font-medium text-gray-900 hover:text-gray-700 uppercase">
        {megaMenu.label}
      </Link>
    );
  }

  return (
    <AccordionItem value={megaMenu._key}>
      <AccordionTrigger className="text-base font-medium text-gray-900 uppercase w-full py-4">
        {megaMenu.title}
      </AccordionTrigger>
      <AccordionContent>
        {megaMenu.groupOfLinks?.map(group => (
          <div key={group._key} className="mt-4 pl-4">
            <Text className="text-black font-medium leading-[30px]">{group.title}</Text>
            <Flex
              direction="col"
              align="start"
              justify="start"
              gap={1}
              className="relative w-full pl-4">
              {group.links?.map(groupedLinksItem => (
                <div key={groupedLinksItem._key} className="mb-4">
                  <Text className="text-black font-medium leading-[30px] text-sm">
                    {groupedLinksItem.title}
                  </Text>
                  {groupedLinksItem.links?.map(link => (
                    <Button
                      key={`MobileMenuContent-Item-Group-Link-${link._key}`}
                      asChild
                      variant="ghost"
                      className="text-black text-sm font-normal font-heading-kb leading-[30px] hover:underline block ml-4">
                      <ConditionalLink link={link} ariaLabel={link.label ?? "Navigation link"}>
                        <ConditionalLink link={link} ariaLabel={link.label ?? "Navigation link"}>
                          {link.label}
                        </ConditionalLink>
                      </ConditionalLink>
                    </Button>
                  ))}
                </div>
              ))}
            </Flex>
          </div>
        ))}

        {megaMenu.showcaseLink?.map((link, i) => (
          <div key={`MobileMenuContent-Item-Images-${link._key}-${i}`} className="mt-4 pl-4">
            <Button
              asChild
              variant="ghost"
              className="text-black text-sm font-normal font-heading-kb leading-[30px]">
              <ConditionalLink
                link={link.primaryButton}
                ariaLabel={link.primaryButton?.label ?? "Navigation link"}>
                <Flex direction="col" gap={3}>
                  <Image
                    key={i}
                    src={link.mainImage?.image}
                    alt={link.mainImage?.alt ?? ""}
                    width={200}
                    height={150}
                    className="w-[188px] h-[147px] object-cover object-center"
                  />
                  {link.primaryButton?.label}
                </Flex>
              </ConditionalLink>
            </Button>
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
});

MobileMenuContentItem.displayName = "MobileMenuContentItem";

export default function Navigation_H({ logo, iconLinks, megaMenu }: NavigationProps) {
  const [{ y }] = useWindowScroll();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [currentDropdown, setCurrentDropdown] = useState<string>("");
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const sticky =
    y && y > 80
      ? "fixed w-full transition-all duration-300 ease-in-out"
      : "sticky transition-all duration-300 ease-in-out";

  const handleCurrentDropdown = useCallback((dropdown: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }

    if (dropdown === "") {
      closeTimeoutRef.current = setTimeout(() => {
        setCurrentDropdown("");
      }, 200);
    } else {
      setCurrentDropdown(dropdown);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "relative top-0 left-0 border-t md:pb-3 z-50 bg-white transition-all ease-in-out duration-300",
          sticky,
        )}>
        <NavContainer
          logo={logo}
          iconLinks={iconLinks}
          megaMenu={megaMenu}
          setShowMobileMenu={setShowMobileMenu}
          currentDropdown={currentDropdown}
          setCurrentDropdown={handleCurrentDropdown}
        />
      </header>
      <MobileMenuContent
        data={megaMenu}
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
    </>
  );
}

interface NavContainerProps {
  logo?: Logo;
  iconLinks?: LabeledRouteWithKey[];
  megaMenu?: MegaMenu[];
  setShowMobileMenu: (show: boolean) => void;
  currentDropdown: string;
  setCurrentDropdown: (dropdown: string) => void;
}

const NavContainer = ({
  logo,
  iconLinks,
  megaMenu,
  setShowMobileMenu,
  currentDropdown,
  setCurrentDropdown,
}: NavContainerProps) => {
  const [{ x: _, y }] = useWindowScroll();
  const hideLogo = y && y > 80 ? "md:hidden" : "";

  return (
    <div className="px-0 w-full h-full transition-all duration-300 ease-in-out overflow-y-auto">
      <Grid
        columns={2}
        align="center"
        justify="between"
        gap={5}
        className={cn(
          "lg:pt-4 py-2 grid-cols-2 md:grid-cols-3 w-full h-full transition-all ease-in-out duration-300 px-4",
          hideLogo,
        )}>
        {logo?.image && (
          <div className="relative w-20 flex items-center h-20 md:w-fit md:h-full place-self-start md:place-self-center col-start-1 md:col-start-2">
            <Link
              aria-label={`Go to ${logoLink(logo) === "/" ? "home page" : logoLink(logo)}`}
              className="text-3xl font-bold leading-none"
              href={logoLink(logo)}
              target={logo?.linkTarget}
              rel={logo?.linkTarget === "_blank" ? "noopener noreferrer" : ""}>
              <Image
                src={logo?.image}
                width={135}
                height={135}
                className="object-cover transition-all ease-in-out duration-300"
                alt={logo?.alt ?? "navigation-logo"}
              />
            </Link>
          </div>
        )}
        <button
          onClick={() => setShowMobileMenu(true)}
          className="md:hidden h-fit self-center place-self-end">
          <MdiLightMenu className="w-8 h-8" />
        </button>
        {iconLinks && iconLinks.length > 0 && (
          <Flex
            align="center"
            gap={5}
            className="hidden md:flex place-self-center max-w-[144px] h-32 w-full">
            <ul className="flex gap-5">
              {iconLinks?.map(link =>
                link && link.label ? <NavItem key={link._key} link={link} isIcon={true} /> : null,
              )}
            </ul>
          </Flex>
        )}
      </Grid>
      <MegaMenuNavLinks
        data={megaMenu ?? []}
        currentDropdown={currentDropdown}
        setCurrentDropdown={setCurrentDropdown}
      />
      <MegaMenuDropdownContents
        data={megaMenu ?? []}
        currentDropdown={currentDropdown}
        setCurrentDropdown={setCurrentDropdown}
      />
    </div>
  );
};

interface NavItemProps {
  link: LabeledRouteWithKey;
  isIcon: boolean;
}

const NavItem = ({ link, isIcon }: NavItemProps) => {
  const icon = navItemIcons[link?.label as keyof typeof navItemIcons] || null;

  return (
    <li>
      <Button asChild className="text-sm font-label tracking-wide">
        <ConditionalLink link={link} ariaLabel={link?.label ?? "Navigation link"}>
          {!isIcon ? link?.label : icon}
        </ConditionalLink>
      </Button>
    </li>
  );
};

const navItemIcons = {
  search: <LiaSearchSolid className="w-4 h-4" />,
  location: <SlLocationPin className="w-4 h-4" />,
  person: <GoPerson className="w-4 h-4" />,
};

interface MegaMenuNavLinksProps {
  data: MegaMenu[];
  currentDropdown: string;
  setCurrentDropdown: (dropdown: string) => void;
}

const MegaMenuNavLinks = ({ data, currentDropdown, setCurrentDropdown }: MegaMenuNavLinksProps) => {
  const [{ x: _, y }] = useWindowScroll();
  const hide = (y && y < 80) || y === 0 ? "hidden" : "";

  return (
    <Flex
      align="center"
      justify="between"
      gap={5}
      className="relative w-full h-full max-w-7xl mx-auto hidden md:flex pt-4 px-4 transition-all duration-300 ease-in-out">
      {data && data.length > 0
        ? data
            ?.slice(0, 3)
            .map(megaMenuItem => (
              <Fragment key={`MegaMenuNavLink-${megaMenuItem._key}`}>
                {megaMenuItem._type === "dropdown" ? (
                  <MegaMenuDropdownTrigger
                    key={`MegaMenuDropdownTrigger-${megaMenuItem._key}`}
                    dropdown={megaMenuItem}
                    aria-expanded={currentDropdown === megaMenuItem.title}
                    onMouseEnter={() => setCurrentDropdown(megaMenuItem.title ?? "")}
                    onMouseLeave={() => setCurrentDropdown("")}
                  />
                ) : (
                  <MegaMenuNavLink key={`MegaMenuLink-${megaMenuItem._key}`} link={megaMenuItem} />
                )}
              </Fragment>
            ))
        : null}
      {data && data.length > 0
        ? data
            ?.slice(3, 6)
            .map(megaMenuItem => (
              <Fragment key={`MegaMenuNavLink-${megaMenuItem._key}`}>
                {megaMenuItem._type === "dropdown" ? (
                  <MegaMenuDropdownTrigger
                    key={`MegaMenuDropdownTrigger-${megaMenuItem._key}`}
                    dropdown={megaMenuItem}
                    aria-expanded={currentDropdown === megaMenuItem.title}
                    onMouseEnter={() => setCurrentDropdown(megaMenuItem.title ?? "")}
                    onMouseLeave={() => setCurrentDropdown("")}
                  />
                ) : (
                  <MegaMenuNavLink key={`MegaMenuLink-${megaMenuItem._key}`} link={megaMenuItem} />
                )}
              </Fragment>
            ))
        : null}
    </Flex>
  );
};

interface MegaMenuNavLinkProps {
  link: MegaMenu;
  className?: string;
}

const MegaMenuNavLink = ({ link, className }: MegaMenuNavLinkProps) => {
  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "relative text-black text-sm font-normal font-label uppercase tracking-widest group",
        className,
      )}>
      {link.label}
    </Button>
  );
};

interface MegaMenuDropdownTriggerProps {
  dropdown: MegaMenu;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
  "aria-expanded"?: boolean;
}

const MegaMenuDropdownTrigger = forwardRef<HTMLButtonElement, MegaMenuDropdownTriggerProps>(
  (props, ref) => {
    const { dropdown, onClick, onMouseEnter, onMouseLeave, className, ...restProps } = props;

    return (
      <button
        ref={ref}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        aria-label={`Open the ${dropdown.title} menu`}
        className={cn(
          "relative text-black text-sm font-normal font-label uppercase tracking-widest group",
          className,
        )}
        {...restProps}>
        {dropdown.title}
      </button>
    );
  },
);

interface MegaMenuDropdownContentsProps {
  data: MegaMenu[];
  currentDropdown: string;
  setCurrentDropdown: (dropdown: string) => void;
}

const MegaMenuDropdownContents = ({
  data,
  currentDropdown,
  setCurrentDropdown,
}: MegaMenuDropdownContentsProps) => {
  return (
    <>
      {data && data.length > 0
        ? data?.map(megaMenuDropdown => {
            const show =
              currentDropdown === megaMenuDropdown.title && megaMenuDropdown.title !== "";
            return (
              <MegaDropdownContent
                key={`MegaMenuDropdown-${megaMenuDropdown._key}`}
                label={megaMenuDropdown.title ?? ""}
                showcaseLink={megaMenuDropdown.showcaseLink ?? []}
                groupedLinks={megaMenuDropdown.groupOfLinks ?? []}
                currentDropdown={currentDropdown}
                setCurrentDropdown={setCurrentDropdown}
              />
            );
          })
        : null}
    </>
  );
};

interface MegaDropdownContentProps {
  label: string;
  showcaseLink: any[];
  groupedLinks: any[];
  currentDropdown: string;
  setCurrentDropdown: (dropdown: string) => void;
}

function MegaDropdownContent({
  label,
  showcaseLink,
  groupedLinks,
  currentDropdown,
  setCurrentDropdown,
}: MegaDropdownContentProps) {
  const show = currentDropdown === label && label !== "";

  const hasGroupedLinks = groupedLinks.length > 0;
  const hasShowcaseLinks = showcaseLink.length > 0;

  const groupedLinksGridColumns = useMemo(() => {
    if (groupedLinks.length > 0) {
      return groupedLinks
        .map(group => {
          return group.links?.length > 2 ? "3fr" : "1fr";
        })
        .join(" ");
    } else {
      return "1fr";
    }
  }, [groupedLinks]);

  const gridColumns = hasGroupedLinks
    ? `${groupedLinksGridColumns} ${hasShowcaseLinks ? "2fr" : ""}`
    : hasShowcaseLinks
      ? "2fr"
      : "1fr";

  return (
    <Section
      data-show={show}
      onMouseEnter={() => setCurrentDropdown(label)}
      onMouseLeave={() => setCurrentDropdown("")}
      className={`relative top-6 left-0 w-full overflow-hidden z-50 bg-primary/5 !transition-[max-height] !duration-300 !ease-in-out ${
        show ? "max-h-[500px]" : "max-h-0"
      }`}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: gridColumns,
          gridTemplateRows: "1fr",
        }}
        className="relative w-full h-auto max-w-[90rem] mx-auto">
        <MegaDropdownGroupedLinks groupedLinks={groupedLinks} />
        <MegaDropdownShowcaseLinks
          hasShowcaseLinks={hasShowcaseLinks}
          showcaseLink={showcaseLink}
        />
      </div>
    </Section>
  );
}

function MegaDropdownGroupedLinks({ groupedLinks }: { groupedLinks: LabeledRouteWithKey[] }) {
  return (
    <Fragment>
      {groupedLinks &&
        groupedLinks.length > 0 &&
        groupedLinks?.map((groupedLink: any, i: number) => {
          return (
            <div
              key={`MegaDropdownContent-Item-${groupedLink._key}-${i}`}
              className="relative py-10 pl-5 flex flex-col items-end justify-start h-full w-full border-r border-black last:border-r-0">
              <Heading
                fontSize="sm"
                className="text-black font-normal uppercase tracking-widest font-label self-start pb-4">
                {groupedLink.title}
              </Heading>
              <Flex
                direction="row"
                align="start"
                justify="start"
                gap={4}
                className="relative w-full h-full grid-flow-row">
                {groupedLink.links?.map((link: any, i: number) => {
                  return (
                    <Flex
                      key={`MegaDropdownContent-Item-Link-${link._key}-${i}`}
                      direction="col"
                      className="h-fit w-fit">
                      <Text fontSize="base" className="text-black font-medium leading-[30px]">
                        {link.title}
                      </Text>
                      <Flex
                        direction="col"
                        align="start"
                        justify="start"
                        gap={2}
                        className="w-fit h-full">
                        {link.links?.map((link: any, i: number) => {
                          return (
                            <Button
                              key={`MegaDropdownContent-Item-Link-${link._key}-${i}`}
                              aria-label={link.label ?? ""}
                              variant="ghost"
                              asChild
                              className="text-black text-sm font-normal font-heading-kb leading-[30px] hover:underline">
                              <ConditionalLink
                                link={link}
                                ariaLabel={link.label ?? "Navigation link"}>
                                {link?.label}
                              </ConditionalLink>
                            </Button>
                          );
                        })}
                      </Flex>
                    </Flex>
                  );
                })}
              </Flex>
            </div>
          );
        })}
    </Fragment>
  );
}

function MegaDropdownShowcaseLinks({
  hasShowcaseLinks,
  showcaseLink,
}: {
  hasShowcaseLinks: boolean;
  showcaseLink: LabeledRouteWithKey[];
}) {
  if (!hasShowcaseLinks) return null;

  return (
    <Flex direction="row" align="start" justify="start" className="w-full h-full gap-6 pl-5 py-10">
      {showcaseLink?.map((link: any, i: number) => {
        const imageUrl = link.mainImage?.image;

        return (
          <Button
            key={`MegaDropdownContent-Item-Images-${link._key}-${i}`}
            aria-label={link.primaryButton?.label ?? ""}
            variant="ghost"
            asChild
            className="text-center text-black text-sm font-normal font-heading-kb leading-[30px] hover:underline">
            <ConditionalLink
              link={link.primaryButton}
              ariaLabel={link.primaryButton?.label ?? "Navigation link"}>
              <Flex direction="col" align="center" justify="center" gap={3}>
                <Image
                  key={i}
                  src={imageUrl}
                  alt={link.mainImage?.alt ?? ""}
                  width={500}
                  height={500}
                  className="w-[188px] h-[147px] object-cover object-center"></Image>
                {link.primaryButton?.label}
              </Flex>
            </ConditionalLink>
          </Button>
        );
      })}
    </Flex>
  );
}

function MdiLightMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M3 8V7h17v1zm17 4v1H3v-1zM3 17h17v1H3z"></path>
    </svg>
  );
}

export { Navigation_H };
