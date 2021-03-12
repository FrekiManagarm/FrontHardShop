import React from 'react';
import { Link } from "react-router-dom";

import { useMenuContext } from "../../../state/Menu";
import { useScroll } from "../../../hooks/useScroll";
import { DesktopNav } from './DesktopNav.style';
import DesktopNavLinks from './NavLinks';
import Hamburger from 'hamburger-react';

const DesktopNavbar = () => {
  const { isMenuOpen, toggleMenu } = useMenuContext();
  const { isScrolled } = useScroll();
  return (
    <DesktopNav isScrolled={isScrolled}>
      <Link to="/" className="logo">
        HardShop
      </Link>
      <DesktopNavLinks />
      <Hamburger toggled={isMenuOpen} toggle={toggleMenu} duration={0} />
    </DesktopNav>
  );
};

export default DesktopNavbar;
