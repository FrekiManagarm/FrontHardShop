import React from 'react';
import { Link } from "react-router-dom";

import { useMenuContext } from "../../../state/Menu";
import { useScroll } from "../../../hooks/useScroll";
import { DesktopNav } from './DesktopNav.style';
import { NavLinks } from './NavLinks';
import Hamburger from 'hamburger-react';

const DesktopNavbar = () => {

    const { isMenuOpen, toggleMenu } = useMenuContext();
    const { isScrolled } = useScroll();

    return (
        <DesktopNav isScrolled={isScrolled}>
            <Link to='/' className="logo">
                HardShop
            </Link>
            <NavLinks />
            <Hamburger toggled={isMenuOpen} toggle={toggleMenu} duration={1} />
        </DesktopNav>
    );
};

export default DesktopNavbar;
