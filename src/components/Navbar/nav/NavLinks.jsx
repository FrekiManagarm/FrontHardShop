import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { useMenuContext } from '../../../state/Menu';
import { useTheme } from "../../../hooks/useTheme";
import Icon from '../Icon';
import { NavLink, NavLinksWrapper } from './NavLinks.style';


const DesktopNavLinks = () => {

  const history = useHistory();
  const state = useSelector(state => state.auth);
  const { closeMenu } = useMenuContext();
  const [theme, toggleTheme] = useTheme();
  console.log(state.user.is_Admin);

  const removeToken = () => {
    localStorage.removeItem("token");
  }

  const renderWithLogIn = () => {
    return (
      <NavLinksWrapper className="nav-links">
          <li key={"Configurator"}>
            <NavLink to="/StartConfig" className="link" onClick={closeMenu}>
              Configurator
            </NavLink>
          </li>
          <li key={"Composants"}>
            <NavLink to="/Components" className="link" onClick={closeMenu}>
              Composants
            </NavLink>
          </li>
          <li key={"Profile"}>
            <NavLink to="/Profile" className="link" onClick={closeMenu}>
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink key={"LogOut"} to="/" className="link" onClick={removeToken}>
              Déconnexion
            </NavLink>
          </li>
          <li>
            <button onClick={toggleTheme}>
              <Icon name={theme === "dark" ? "day" : "night"} />
            </button>
          </li>
      </NavLinksWrapper>
    )
  }

  const renderForAdmin = () => {
    return (
      <NavLinksWrapper className="nav-links">
          <li key={"Configurator"}>
            <NavLink to="/StartConfig" className="link" onClick={closeMenu}>
              Configurator
            </NavLink>
          </li>
          <li key={"Composants"}>
            <NavLink to="/Components" className="link" onClick={closeMenu}>
              Composants
            </NavLink>
          </li>
          <li key={"admin"}>
              <NavLink to="/admin" className="link" onClick={closeMenu}>
                  Admin
              </NavLink>
          </li>
          <li key={"Déconnexion"}>
            <NavLink key={"LogOut"} to="/" className="link" onClick={removeToken}>
              Déconnexion
            </NavLink>
          </li>
          <li>
            <button onClick={toggleTheme}>
              <Icon name={theme === "dark" ? "day" : "night"} />
            </button>
          </li>
      </NavLinksWrapper>
    )
  }

  const renderWithoutLogIn = () => {
    return (
      <NavLinksWrapper className="nav-links">
        <li key={"Components"}>
            <NavLink to="/Components" className="link" onClick={closeMenu}>
              Composants
            </NavLink>
          </li>
          <li key={"S'incrire"}>
            <NavLink to="/register" className="link" onClick={closeMenu}>
              Inscription
            </NavLink>
          </li>
          <li key={"Se connecter"}>
            <NavLink to="/login" className="link" onClick={closeMenu}>
              Connexion
            </NavLink>
          </li>
          <li>
        <button onClick={toggleTheme}>
          <Icon name={theme === "dark" ? "day" : "night"} />
        </button>
      </li>
      </NavLinksWrapper>
    )
  }

  return ( state.user.is_Admin === 1 ? 
    renderForAdmin()
   : state.loggedIn ? 
    renderWithLogIn()
  : 
    renderWithoutLogIn()
  );
};

export default DesktopNavLinks;