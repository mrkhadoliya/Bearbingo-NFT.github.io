import React from 'react';
import styled from 'styled-components';

const Alert = ({
  children,
  type, 
  icon = null, 
  closable = false, 
  isVisible = () => {}
}) => {
  return (
    <div className='animate__animated animate__fadeIn'>
      <StyledAlert  type={type}>
        {icon}{children}
      
        {closable && 
          <span onClick={() => isVisible(false)} className="material-icons">cancel</span>
        }
      </StyledAlert>
    </div>
  )
}

const alertType = (props) => {
  const {blue, blueLight, red, redLight, green, greenLight, yellow, yellowLight} = props.theme.swatch; 
  let styles;

  switch(props.type) {
    case "success": styles = {background: greenLight, borderColor: green}; break; 
    case "info": styles = {background: blueLight, borderColor: blue}; break; 
    case "warning": styles = {background: yellowLight, borderColor: yellow}; break; 
    case "error": styles = {background: redLight, borderColor: red}; break; 
    default: styles = {background: blueLight, borderColor: blue};  
  }

  return styles; 
}

const StyledAlert = styled.div`
  background: ${props => props.theme.background};
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  box-sizing: border-box;
  color: ${props => props.theme.name === "dark" ? props.theme.background : props.theme.color};
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  padding: 12px 16px;
  position: relative;
  margin: 16px;
  text-align: center;
  ${alertType}

  .material-icons {
    color: ${props => props.theme.colorLight}; 
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 8px;
    transition: all .3s; 
    z-index: ${props => props.theme.layer.z1};

    &:hover {
      color: ${props => props.theme.color}; 
    }
  }

  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    padding: 4px 8px;
  }
`

export default Alert; 