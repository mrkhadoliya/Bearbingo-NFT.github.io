import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// ON CLICK BUTTON
const Button = ({ onClick, children, disabled, block, type, size }) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      size={size}
      type={type}
      block={block}
    >
      {children}
    </StyledButton>
  )
}

// REACT ROUTER BUTTON 
export const ButtonRoute = ({ to, children, block, type, size }) => {
  return (
    <StyledRoute
      to={to}
      size={size}
      type={type}
      block={block}
    >
      {children}
    </StyledRoute>
  )
}

// HYPERLINK BUTTON
export const ButtonLink = ({ href, children, block, type, size }) => {
  return (
    <StyledLink
      href={href}
      size={size}
      type={type}
      block={block}
    >
      {children}
    </StyledLink>
  )
}

const size = (props) => {
  let styles;

  switch (props.size) {
    case "large": styles = { height: "48px", fontSize: "14px", padding: "0 48px" }; break;
    case "small": styles = { height: "32px", fontSize: "10px", padding: "0 8px" }; break;
    default: styles = { height: "40px", fontSize: "12px" };
  }

  return styles;
}

const buttonType = (props) => {
  let styles;
  const { primary, swatch, background, backgroundTertiary, border, colorLight, color } = props.theme;

  switch (props.type) {
    case "primary": styles = { background: primary, color: swatch.white }; break;
    case "secondary": styles = { background: backgroundTertiary, color: color }; break;
    case "outline": styles = { background: background, color: primary, border: `1px solid ${primary}` }; break;
    case "subtle": styles = { background: background, color: colorLight, border: `1px solid ${border}` }; break;
    case "border": styles = { background: 'none', color: `${swatch.white} !important`, border: `2px solid ${swatch.white}` }; break;
    case "light": styles = { background: swatch.white, color: primary }; break;
    default: styles = { background: primary, color: swatch.white };
  }

  return styles;
}

// CREATE STYLES TO SHARE ACROSS BUTTON TYPES
const coreStyles = css`
  align-items: center;
  background: ${props => props.theme.primary};
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  color: ${props => props.theme.swatch.white};
  cursor: pointer;
  display: flex;
  font-weight: bold;
  justify-content: center;
  padding: 0 24px;
  text-decoration: none;
  text-transform: uppercase;
  transition: all .3s;
  ${buttonType};
  ${size};
  width: ${props => props.block ? "100%" : "auto"};

  &:hover {
    box-shadow: ${props => props.theme.shadow.small};
    transform: translateY(-2px);
  }

  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    padding: 0 8px;
  }

  &:disabled {
    background: ${props => props.theme.border};
    color: ${props => props.theme.colorLight};
    opacity: .56;
  }
`

// STANDARD ON CLICK BUTTON
const StyledButton = styled.button`
  ${coreStyles}
`

// STANDARD HYPERLINK BUTTON
const StyledLink = styled.a`
  ${coreStyles}
`

// REACT ROUTER BUTTON
const StyledRoute = styled(Link)`
  ${coreStyles}
`

export default Button; 