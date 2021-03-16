import React from 'react';
import { useMenuContext } from '../../../state/Menu';
import { useTheme } from "../../../hooks/useTheme";
import Icon from '../Icon';
import { NavLink, NavLinksWrapper } from './NavLinks.style';

const DesktopNavLinks = () => {
  const { closeMenu } = useMenuContext();
  const [theme, toggleTheme] = useTheme();

  return (
    <NavLinksWrapper className="nav-links">
        <li key={"Configurator"}>
          <NavLink to="/Configurator" className="link" onClick={closeMenu}>
            Configurator
          </NavLink>
        </li>
        <li key={"Composants"}>
          <NavLink to="/ComposantsList" className="link" onClick={closeMenu}>
              Composants
          </NavLink>
        </li>
        <li key={"News"}>
          <NavLink to="/ComposantsList" className="link" onClick={closeMenu}>
              Composants
          </NavLink>
        </li>
      <li>
        <button onClick={toggleTheme}>
          <Icon name={theme === "dark" ? "day" : "night"} />
        </button>
      </li>
    </NavLinksWrapper>
  );
};

export default DesktopNavLinks;