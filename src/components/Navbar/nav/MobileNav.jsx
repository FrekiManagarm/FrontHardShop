import React from "react";
import { useMenuContext } from "../../../state/Menu";
import { useScrollFreeze } from "../../../hooks/useScrollFreeze";
import DesktopNavLinks from "./NavLinks";
import { MobileNav } from './MobileNav.style';

const MobileNavbar = () => {
  const { isMenuOpen } = useMenuContext();
  useScrollFreeze(isMenuOpen);
  return (
    <>
      {isMenuOpen && (
        <MobileNav>
          <DesktopNavLinks />
        </MobileNav>
      )}
    </>
  );
};

export default MobileNavbar;