import React from 'react';
import DesktopNavbar from './DesktopNav';
import { Nav } from './index.style';
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <Nav>
      <DesktopNavbar />
      <MobileNav />
    </Nav>
  );
};

export default Navbar;