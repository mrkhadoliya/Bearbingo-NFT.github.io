import React from 'react';
import styled from 'styled-components';
import Footer from '../components/footer';
import NavBar from '../components/navbar';

const DefaultLayout = ({children, setTheme}) => {
  return (
    <StyledLayout>
      <NavBar setTheme={setTheme} /> 
      {children}
      <Footer /> 
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  text-align: left;
`

export default DefaultLayout; 