import React from "react";
import styled from "styled-components";
import BearbingoLogo from "../../assets/images/logos/bearbingo.png"

const NftPreview = ({
  img, 
  name, 
  price
}) => {
  return (
    <StyledCard>
      <img src={img} alt={name} /> 
      <figcaption>
        <strong>{name}</strong>
        <em>{price}</em>
        <img src={BearbingoLogo} alt="Bearbingo" />
      </figcaption>
    </StyledCard>
  ); 
}

const StyledCard = styled.figure`
  background: ${props => props.theme.background};
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadow.medium};
  color: ${props => props.theme.color}; 
  margin: 0 auto;
  max-width: 288px;
  padding: 8px; 
  z-index: ${props => props.theme.layer.z1};

  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    max-width: 100%;
    margin-bottom: 16px;
  }
  
  > img {
    width: 100%;
    min-height: 288px;
    min-width: 288px;
  }

  figcaption {
    padding: 8px 8px 0px 8px;
    position: relative;
    text-align: left;
    z-index: ${props => props.theme.layer.z1};

    strong {
      color: ${props => props.theme.coloir};
      font-size: 12px;
      font-weight: bold;
      display: block;
      line-height: 24px;
    }

    em {
      color: ${props => props.theme.primary};
      font-size: 11px;
      font-weight: bold;
      display: block;
      line-height: 16px;
    }

    img {
      height: 40px;
      position: absolute;
      top: 8px; 
      right: 0px;
      width: 40px;
      z-index: ${props => props.theme.layer.z1};
    }
  }

  
`

export default NftPreview; 