import React from "react";
import { useMenuContext } from "../../../state/Menu";
import { useScrollFreeze } from "../../../hooks/useScrollFreeze";
import { NavLinks } from "./NavLinks";

const MobileNav = () => {
  const { isMenuOpen } = useMenuContext();
  useScrollFreeze(isMenuOpen);
  return (
    <>
      {isMenuOpen && (
        <MobileNav>
          <NavLinks />
        </MobileNav>
      )}
    </>
  );
};

export default MobileNav;