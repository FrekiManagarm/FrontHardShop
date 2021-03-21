import styled, { css } from 'styled-components';

export const DesktopNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  background: var(--bg);
  color: var(--text);
  transition: all 150ms ease-in-out;
  ${(props) =>
    props.isScrolled &&
    css`
      background: var(--headerBg);
      box-shadow: var(--headerBoxShadow);
    `}
  position: fixed;
  top: 10px;
  left: 0;
  width: 100%;
  height: 64px;
  padding: 0 60px;
  z-index: 2;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 0 30px;
  }
  .logo {
    flex: 2;
    color: var(--text);
    font-weight: bold;
    font-size: 32px;
  }
  .nav-links {
      font-weight: bold;
    @media screen and (max-width: 768px) {
      display: none;
      font-weight: bold;
    }
  }
  .hamburger-react {
    display: none;
    z-index: 99;
    & > div > div {
      background: var(--text) !important;
    }
    @media screen and (max-width: 768px) {
      display: block;
      transition: all 5ms ease-in-out;
    }
  }
`;