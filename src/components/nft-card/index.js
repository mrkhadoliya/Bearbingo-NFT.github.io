import React, {memo} from "react";
import styled from "styled-components";
import BlankStateImage from "../../assets/images/blankstate/placeholder.png"; 
import { PINATA } from "../../utils/constants";

const NftCard = ({
  data, 
  onShow, 
  className
}) => {
  const {image, name} = data; 
  let imageURL; 
  const pattern = /ipfs:\/\//;

  // REPLACE IMAGE URL WITH PINATA URL 
  if(image ) {
    let hasPrefix =  pattern.test(image);

    if(hasPrefix) {
      imageURL =image.replace("ipfs://", PINATA); 
    }
    else {
      imageURL = image;
    }
  }

  const img = imageURL || BlankStateImage; 

  const showDetails = () => {
    onShow(data);
  }
  
  return (
    <StyledCard onClick={showDetails} className={className}>
      <div className="nft-image" style={{backgroundImage: `url(${img}?img-width=450&img-height=450)`}}></div>
      <figcaption>
        <strong>{name}</strong>
      </figcaption>
    </StyledCard>
  ); 
}

const StyledCard = styled.figure`
  background: ${props => props.theme.background};
  border-radius: 16px;
  box-shadow: ${props => props.theme.shadow.medium};
  color: ${props => props.theme.color}; 
  cursor: pointer;
  margin: 0 auto 32px auto;
  overflow: hidden;
  z-index: ${props => props.theme.layer.z1};

  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    max-width: 100%;
    margin-bottom: 16px;
  }
  
  .nft-image {
    background-color: ${props => props.theme.backgroundSecondary};
    background-size: cover;
    height: 0;
    width: 100%;
    padding-top: 100%;
  }

  figcaption {
    padding: 16px;
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
      background: ${props => props.theme.backgroundSecondary};
      border-radius: 300px;
      height: 40px;
      overflow: hidden;
      position: absolute;
      top: 16px; 
      right: 16px;
      width: 40px;
      z-index: ${props => props.theme.layer.z1};
    }
  }

  
`

export default memo(NftCard); 