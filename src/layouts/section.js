import React from 'react';
import styled from 'styled-components';
import bgLightPattern from '../assets/images/backgrounds/geometry.webp';
import bgDarkPattern from '../assets/images/backgrounds/papyrus.webp';

const Section = ({children, background}) => {
  return (
    <StyledSection background={background}>
      <div className='section-inner'>
        {children}
      </div>
    </StyledSection>
  )
}

const backgroundStyle = (props) => {
  let style; 
  const {color, background, name} = props.theme; 
  const backgroundImage = name === "light" ? bgLightPattern : bgDarkPattern; 

  switch(props.background) {
    case "inverted": style = {background:  color, color: background}; break; 
    case "pattern": style = {
      backgroundImage:  `url(${backgroundImage})`, 
      backgroundRepeat: "repeat"
    }; 
    break; 
    default: style = {background:  props.theme.background}; 
  }

  return style; 
}

const StyledSection = styled.section`
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  padding: 80px;
  text-align: center;
  ${backgroundStyle}; 

  .section-inner {
    max-width: 1200px;
    text-align: left;
    margin: 0 auto;
  }

  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    padding: 24px 16px;
  }

  h4 {
    color: ${props => props.theme.primary};
    font-weight: 900;
    font-size: 12px;
    line-height: 16px;
    margin-bottom: 16px;
    text-transform: uppercase;
  }

  h3 {
    color: ${props => props.background === "inverted" ? props.theme.background : props.theme.color};
    font-weight: 900;
    font-size: 48px;
    line-height: 56px;
    margin-bottom: 24px;

    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      font-size: 32px;
      line-height: 32px;
    }
  }

  h5 {
    color: ${props => props.theme.swatch.green};
    font-weight: 900;
    font-size: 18px;
    line-height: 40px;
    margin-bottom: 24px;

    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      font-size: 16px;
      line-height: 32px;
    }
  }

  p {
    color: ${props => props.theme.color};
    font-size: 18px;
    line-height: 32px;
    margin-bottom: 24px;

    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      font-size: 16px;
      line-height: 28px;
    }

    a {
      color: ${props => props.theme.primary};

      &:hover {
        text-decoration: underline;
      }
    }
  }

  ul, ol {
    margin-bottom: 16px;
    margin-left: 16px;

    li {
      color: ${props => props.theme.color};
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 16px;
    }
  } 

  ol {
    list-style-type: decimal;
  }

  label {
    color: ${props => props.theme.color};
    font-size: 11px;
    font-weight: bold;
    display: block;
    line-height: 16px;
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  button {
    width: 100%;
  }

`

export default Section; 