import React, {useState} from 'react';
import styled, {useTheme} from 'styled-components';
import Cookies from 'js-cookie';

const ThemeToggle = ({
  setTheme
}) => {
  const [toggleIcon, setToggleIcon] = useState("light_mode"); 
  const themeData = useTheme(); 
  const theme = themeData.name; 

  // TOGGLE APPLICATION THEME
  const toggleTheme = () => {
    if(theme === "light") {
      setTheme("dark"); 
      setToggleIcon("dark_mode")
      Cookies.set('theme', 'dark')
    }
    else {
      setTheme("light"); 
      setToggleIcon("light_mode")
      Cookies.set('theme', 'light')
    }
  } 

  return (
    <StyledToggle onClick={toggleTheme}>
      <button className='toggle-switch'>
        <span className="material-icons toggle-knob">{toggleIcon}</span>
      </button>
    </StyledToggle>
  )
}

// THEME BUTTON STYLES
const StyledToggle = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 0 24px;
  height: 40px;


  @media only screen and (max-width:${props => props.theme.mobile.phone}) {
    bottom: 24px;
    left: 16px;
    right: auto;
  }

  .toggle-switch {
    background: ${props => props.theme.backgroundSecondary};
    border-radius: 8px;
    border: none; 
    cursor: pointer;
    height: 32px;
    outline: none;
    position: relative;
    width: 80px;
  }

  .toggle-knob {
    align-items: center;
    background: ${props => props.theme.background};
    box-shadow: ${props => props.theme.shadow.small};
    border-radius: 4px;
    color: ${props => props.theme.colorLight};
    font-size: 18px;
    display: flex;
    height: 24px;
    justify-content: center;
    width: 32px;
    position: absolute;
    top: 4px; 
    transition: all .3s;
    right: ${props => props.theme.name === "dark" ? "4px" : "auto"}; 
    left: ${props => props.theme.name === "dark" ? "auto" : "4px"};
  }
` 

export default ThemeToggle; 