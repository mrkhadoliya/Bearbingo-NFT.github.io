import React, { useState, memo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BearbingoLogo from "../../assets/images/logos/bearbingo.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import GasPrice from "../gas";
import ThemeToggle from "../theme-toggle";

const NavBar = ({ setTheme }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  return (
    <StyledNavBar>
      <h1>
        <Link to="/">
          <img src={BearbingoLogo} alt="Bearbingo" />
        </Link>
      </h1>

  {/*<GasPrice />*/}

      <StyleHamburger onClick={toggleDropdown}>
        <span className="material-icons">menu</span>
      </StyleHamburger>

      {/* TOGGLE HIDE/SHOW FOR MOBILE */}
      <StyledDropdown onClick={toggleDropdown} isVisible={showDropdown}>
        <StyledNavMenu>
          <li><StyledNavButton to="/">Home</StyledNavButton></li>
          <li><StyledNavButton to="/mint">Mint</StyledNavButton></li>
        </StyledNavMenu>

        <StyledConnect>
          <ThemeToggle setTheme={setTheme} />

          <footer>
            <ConnectButton />
          </footer>
        </StyledConnect>
      </StyledDropdown>
    </StyledNavBar>
  );
}

const StyledDropdown = styled.div`
  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    background: ${props => props.theme.background};
    border-top: 1px solid ${props => props.theme.border};
    position: fixed;
    top: 80px;
    left: 0;
    right: 0; 
    bottom: 0;
    z-index: ${props => props.theme.layer.z9};
    display: ${props => props.isVisible ? "block" : "none"};
  }
`

const StyleHamburger = styled.button`
  align-items: center;
  background: ${props => props.theme.backgroundSecondary};
  border: 1px solid ${props => props.theme.border};
  border-radius: 4px;
  cursor: pointer;
  color: ${props => props.theme.color};
  display: none;
  justify-content: center;
  margin-right: 8px;

  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    display: flex;
  }
`

const StyledNavBar = styled.nav`
  align-items: center;
  background: ${props => props.theme.background};
  box-shadow: ${props => props.theme.shadow.small};
  display: flex;
  height: 80px; 
  padding: 0 32px;
  position: relative;

  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    padding: 0 8px;
    justify-content: space-between;
    position: fixed;
    top: 0; 
    left: 0;
    right: 0;
    z-index: ${props => props.theme.layer.z10};
  }

  h1 {
    color: ${props => props.theme.color};
    font-size: 14px;
    font-weight: 900;
    line-height: 48px;
    margin-right: 32px;
    text-transform: uppercase;

    a {
      align-items: center;
      color: ${props => props.theme.color};
      display: flex; 
      justify-content: center;
      line-height: 48px;
      text-decoration: none;
    }

    img {
      // height: 48px;
      margin-right: 16px;
      width: 100px;
      padding-bottom:10px;
    }
  }
`

const StyledNavMenu = styled.ul`
  margin-left: 80px;

  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    margin: 0;
  }

  li {
    display: inline-block;

    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      display: block;
    }
  }
`

const StyledNavButton = styled(Link)`
  display: inline-block;
  color: ${props => props.theme.color};
  font-size: 16px; 
  font-weight: bold;
  line-height: 80px;
  padding: 0 24px;
  text-decoration: none;
  transition: all .3s;

  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    display: block;
    border-bottom: 1px solid ${props => props.theme.border};
    font-size: 18px; 
  }

  &:hover {
    background: ${props => props.theme.backgroundSecondary};
    color: ${props => props.theme.primary};
  }
`
const StyledConnect = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: ${props => props.theme.layer.z1};

  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    display: block;
    position: absolute;
    bottom: 0; 
    left: 0;
    right: 0;
    top: auto;

    footer {
      background: ${props => props.theme.backgroundSecondary};
      display: block;
      padding: 16px;
      margin-top: 24px;

      button {
        width: 100%;
        justify-content: center !important;
        text-align: center !important;
        
      }
    }

    footer > div {
      display: flex;
      justify-content: center;
    }
  }
`

export default memo(NavBar);