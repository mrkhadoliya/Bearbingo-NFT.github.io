import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <StyledFooter>
      <strong>Copyright &copy; 2022 Bearbingo.io </strong>

      <Link to="/terms">Terms of Service</Link>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  align-items: center;
  background: ${props => props.theme.background};
  box-sizing: border-box;
  color: ${props => props.theme.colorLight};
  display: flex;
  font-size: 11px;
  justify-content: space-between;
  padding: 32px 80px;
  position: relative;
  text-transform: uppercase;

  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    padding: 24px 16px;
  }

  strong {
    font-weight: normal;
  }

  a {
    color: ${props => props.theme.colorLight};

    &:hover {
      color: ${props => props.theme.primary};
      text-decoration: underline;
    }
  }
`

export default Footer; 