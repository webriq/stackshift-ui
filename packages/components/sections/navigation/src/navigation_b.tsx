import { Button } from "@stackshift-ui/button";
import { Container } from "@stackshift-ui/container";
import { Flex } from "@stackshift-ui/flex";
import { Image } from "@stackshift-ui/image";
import { Link } from "@stackshift-ui/link";
import { Section } from "@stackshift-ui/section";
import { Text } from "@stackshift-ui/text";
import React from "react";
import { NavigationProps, ResponsiveNavLinksProps } from ".";
import { logoLink, ConditionalLink } from "./helper";
import { LabeledRoute, LabeledRouteWithKey, Logo } from "./types";

export default function Navigation_B({
  links,
  primaryButton,
  secondaryButton,
  logo,
}: NavigationProps) {
  const [menu, setMenu] = React.useState(false);
  const showMenu = () => {
    setMenu(prevState => !prevState);
  };

  return (
    <Section className="bg-background">
      <nav className="relative py-6">
        <Container maxWidth={1280}>
          <Flex align="center" justify="between" gap={4}>
            <LogoSection logo={logo} />
            <MobileMenu showMenu={showMenu} />
            <NavLinks links={links} />
            <Buttons primaryButton={primaryButton} secondaryButton={secondaryButton} />
          </Flex>
        </Container>
      </nav>
      <ResponsiveNavLinks
        menu={menu}
        showMenu={showMenu}
        links={links}
        primaryButton={primaryButton}
        secondaryButton={secondaryButton}
      />
    </Section>
  );
}

function LogoSection({ logo }: { logo?: Logo }) {
  if (!logo) return null;

  return (
    <div className="w-full lg:w-fit">
      <Link
        className="w-20 h-14 flex items-center"
        aria-label={logoLink(logo) === "/" ? "Go to home page" : `Go to ${logoLink(logo)}`}
        href={logoLink(logo)}
        target={logo?.linkTarget}
        rel={logo?.linkTarget === "_blank" ? "noopener noreferrer" : ""}>
        <Image
          className="w-fit h-full object-contain"
          src={`${logo?.image}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={logo?.alt ?? "navigation-logo"}
        />
      </Link>
    </div>
  );
}

function NavLinks({ links }: { links?: LabeledRouteWithKey[] }) {
  if (!links) return null;

  return (
    <Flex>
      <ul className="hidden lg:flex lg:items-center lg:gap-5 xl:gap-10">
        {links?.map((link: any, index: number) => (
          <React.Fragment key={index}>
            <NavItem link={link} key={link._key} />
            {links.length !== index + 1 ? <NavIcon /> : null}
          </React.Fragment>
        ))}
      </ul>
    </Flex>
  );
}

function NavItem({ link }: { link?: LabeledRouteWithKey }) {
  if (!link) return null;

  return (
    <li>
      <Button
        asChild
        aria-label={link?.label}
        className="text-sm text-gray-500 no-underline hover:text-gray-900">
        <ConditionalLink
          link={link}
          ariaLabel={link?.label || "Navigation link"}
          className="text-sm text-gray-500 no-underline hover:text-gray-900">
          {link?.label}
        </ConditionalLink>
      </Button>
    </li>
  );
}

function NavIcon() {
  return (
    <li className="text-gray-500">
      <svg
        className="w-4 h-4 current-fill"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
      </svg>
    </li>
  );
}

function Buttons({
  primaryButton,
  secondaryButton,
}: {
  primaryButton?: LabeledRoute;
  secondaryButton?: LabeledRoute;
}) {
  return (
    <Flex align="center" gap={4}>
      {primaryButton?.label && (
        <Button
          asChild
          aria-label={primaryButton?.label}
          className="hidden lg:flex px-4 py-3 leading-loose text-center font-semibold text-gray-900 rounded-global bg-secondary hover:bg-secondary/50">
          <ConditionalLink
            link={primaryButton}
            ariaLabel={primaryButton?.label}
            className="hidden lg:flex px-4 py-3 leading-loose text-center font-semibold text-gray-900 rounded-global bg-secondary hover:bg-secondary/50">
            {primaryButton?.label}
          </ConditionalLink>
        </Button>
      )}
      {secondaryButton?.label && (
        <Button
          asChild
          aria-label={secondaryButton?.label}
          className="hidden lg:flex px-4 py-3 leading-loose text-center font-semibold text-white bg-primary hover:bg-primary-foreground rounded-global">
          <ConditionalLink
            link={secondaryButton}
            ariaLabel={secondaryButton?.label}
            className="hidden lg:flex px-4 py-3 leading-loose text-center font-semibold text-white bg-primary hover:bg-primary-foreground rounded-global">
            {secondaryButton?.label}
          </ConditionalLink>
        </Button>
      )}
    </Flex>
  );
}

function MobileMenu({ showMenu }: { showMenu: () => void }) {
  return (
    <div className="lg:hidden">
      <Button
        aria-label="Navigation menu"
        className="flex items-center p-3 navbar-burger text-primary"
        onClick={showMenu}>
        <svg
          className="block w-4 h-4 fill-current"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <title>Mobile menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </Button>
    </div>
  );
}

function ResponsiveNavLinks({
  menu,
  showMenu,
  links,
  primaryButton,
  secondaryButton,
}: ResponsiveNavLinksProps) {
  return (
    <React.Fragment>
      <div className={`${menu ? null : "hidden"} mobile-nav relative z-50`}>
        <div className="fixed inset-0 bg-gray-800 opacity-25 navbar-backdrop" onClick={showMenu} />
        <nav className="fixed top-0 bottom-0 left-0 flex flex-col w-5/6 max-w-sm px-6 py-6 overflow-y-auto bg-white border-r">
          <div className="flex items-center mb-8">
            <Button
              aria-label="Close navigation menu"
              className="navbar-close"
              onClick={showMenu}>
              <svg
                className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>
          {links && (
            <ul>
              {links?.map((link, index) => (
                <li className="mb-1" key={index}>
                  <Button
                    asChild
                    aria-label={link?.label}
                    className="block p-4 text-sm font-semibold text-gray-700 no-underline rounded hover:bg-secondary-foreground hover:text-primary">
                    <ConditionalLink
                      link={link}
                      ariaLabel={link?.label || "Navigation link"}
                      className="block p-4 text-sm font-semibold text-gray-700 no-underline rounded hover:bg-secondary-foreground hover:text-primary">
                      {link?.label}
                    </ConditionalLink>
                  </Button>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-auto">
            <div className="pt-6">
              {primaryButton?.label && (
                <Button
                  asChild
                  aria-label={primaryButton?.label}
                  className="block px-4 py-3 mb-2 text-gray-900 text-center lg:ml-auto lg:mr-3 font-semibold rounded-global bg-secondary hover:bg-secondary/50">
                  <ConditionalLink
                    link={primaryButton}
                    ariaLabel={primaryButton?.label}
                    className="block px-4 py-3 mb-2 text-gray-900 text-center lg:ml-auto lg:mr-3 font-semibold rounded-global bg-secondary hover:bg-secondary/50">
                    {primaryButton?.label}
                  </ConditionalLink>
                </Button>
              )}
              {secondaryButton?.label && (
                <Button
                  asChild
                  aria-label={secondaryButton?.label}
                  className="block px-4 py-3 mb-2 leading-loose text-center text-white font-semibold bg-primary hover:bg-primary-foreground rounded-global">
                  <ConditionalLink
                    link={secondaryButton}
                    ariaLabel={secondaryButton?.label}
                    className="block px-4 py-3 mb-2 leading-loose text-center text-white font-semibold bg-primary hover:bg-primary-foreground rounded-global">
                    {secondaryButton?.label}
                  </ConditionalLink>
                </Button>
              )}
            </div>
            <Text fontSize="xs" className="my-4 text-center text-gray-900">
              <span>{`© ${new Date().getFullYear()} All rights reserved.`}</span>
            </Text>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export { Navigation_B };