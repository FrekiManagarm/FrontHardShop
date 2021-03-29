import React, { useState } from "react";
import { ReactComponent as LogoIcon } from "../../assets/images/logo.svg";
import { Nav, Container, Hamburger, LinkWrapper, Button, MenuLink, Menu } from './Navbar.style';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Container>
        <LogoIcon />
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <LinkWrapper>
            <MenuLink href="">Rechercher</MenuLink>
            <MenuLink href="">Connexion</MenuLink>
            <Button>Join Now</Button>
          </LinkWrapper>
        </Menu>
      </Container>
    </Nav>
  );
};

export default Navbar
