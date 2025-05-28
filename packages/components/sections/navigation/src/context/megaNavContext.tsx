import { Context, createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

export interface MegaNavContextValues {
  currentDropdown: string;
  showDropdown: boolean;
  showMobileMenu: boolean;
  setShowDropdown: (state: boolean) => void;
  setCurrentDropdown: (dropdown: string) => void;
  setShowMobileMenu: (state: boolean) => void;
}

export const MegaNavContext: Context<MegaNavContextValues> = createContext<MegaNavContextValues>({
  currentDropdown: "",
  showDropdown: false,
  showMobileMenu: false,
  setShowDropdown: () => {},
  setCurrentDropdown: () => {},
  setShowMobileMenu: () => {},
});

export function MegaNavContextProvider({ children }: { children: React.ReactNode }) {
  const [currentDropdown, setCurrentDropdown] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleCurrentDropdown = (dropdown: string) => {
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
  };

  const handleMobileMenuClick = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const values = useMemo(
    () => ({
      currentDropdown,
      showDropdown,
      showMobileMenu,
      setShowDropdown: handleDropdownClick,
      setCurrentDropdown: handleCurrentDropdown,
      setShowMobileMenu: handleMobileMenuClick,
    }),
    [currentDropdown, showDropdown, showMobileMenu],
  );

  return <MegaNavContext.Provider value={values}>{children}</MegaNavContext.Provider>;
}

export function useMegaNavContext() {
  const context = useContext(MegaNavContext);
  if (context === undefined) {
    throw new Error("useMegaNavContext must be used within a MegaNavContextProvider");
  }
  return context;
}
