import React from 'react';
import styled from 'styled-components';
import BlankStateImage from "../../assets/images/blankstate/placeholder.png"; 
import { PINATA } from "../../utils/constants";


const NftModal = ({
  data,
  visible, 
  onClose = () => {}, 
  closeButton = true
}) => {
  const {image, name, description, attributes} = data; 
  let imageURL; 
  const pattern = /ipfs:\/\//;

  if(image) {
    let hasPrefix =  pattern.test(image);

    if(hasPrefix) {
      imageURL = image.replace("ipfs://", PINATA); 
    }
    else {
      imageURL = image;
    }
  }

  const img = imageURL || BlankStateImage; 

  return (
    <StyledModal visible={visible}>
      <div className='overlay' onClick={onClose}></div>
      <div className='modal animate__animated animate__fadeIn'>
        {closeButton && 
          <span className="material-icons modal-close" onClick={onClose}>close</span>
        }
        
        <div className='content'>
          <div className="nft-image" style={{backgroundImage: `url(${img}?img-width=650&img-height=650)`}}></div>
          
          <div className='description'>
            <h3>{name}</h3>
            <p>{description}</p>

              {attributes.map(({trait_type, value}, index) => {
                return (
                  <StyledTrait key={index}>
                    <strong>{trait_type}: </strong>
                    <em>{value}</em>
                  </StyledTrait>
                )
              })}
            
          </div>
        </div>
      </div>
    </StyledModal>
  );
}

const StyledTrait = styled.div`
align-items: center;
  background: ${props => props.theme.backgroundSecondary};
  border-radius: 8px;
  border: 1px solid ${props => props.theme.border};
  display: flex;
  height: 32px;
  margin: 0 0 8px 0; 

  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    background: none;
    border: none;
    height: 16px;
  }

  &:last-child {
    margin: 0;
  }

  strong, em {
    font-size: 12px;
  }

  strong {
    font-weight: bold;
    margin-right: 8px;
    padding: 0 16px;
    width: 30%;

    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      padding: 0 16px 0 0;
    }
  }

  em {
    background: ${props => props.theme.background};
    line-height: 32px;
    padding: 0 16px;
    width: 100%;

    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      line-height: 16px;
    }
  }

`

const StyledModal = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  display: ${props => props.visible ? 1 : 0};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${props => props.theme.layer.z10};

  .overlay {
    background: ${props => props.theme.swatch.black};
    opacity: .56;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: ${props => props.theme.layer.z1};
  }

  .modal {
    background: ${props => props.theme.background};
    box-shadow: ${props => props.theme.shadow.large};
    border-radius: 16px;
    box-sizing: border-box;
    color: ${props => props.theme.color};
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    z-index: ${props => props.theme.layer.z2};

    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      padding: 32px 16px 16px 16px;
      margin: 24px;
    }
  }

  .content {
    display: flex;

    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      display: block;
    }
  }

  .description {
    padding: 24px 40px;

    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      padding: 16px;
    }
  }

  h3 {
    font-size: 28px;
    font-weight: 900;
    line-height: 32px;
    margin-bottom: 16px;

    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      font-size: 20px;
      font-weight: 900;
      line-height: 24px;
      margin-bottom: 06px;
    }
  }

  p {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
  }



  .nft-image {
    background-color: ${props => props.theme.backgroundSecondary};
    background-size: cover;
    height: 650px;
    width: 650px;

    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      border-radius: 8px;
      height: 0;
      width: 100%;
      padding-top: 100%;
    }
  }

  .modal-close {
    border-radius: 300px;
    color: ${props => props.theme.colorLight};
    cursor: pointer;
    font-size: 24px;
    padding: 4px;
    position: absolute;
    top: 4px;
    transition: all .3s;
    right: 4px;
    z-index: ${props => props.theme.layer.z3};

    &:hover {
      color: ${props => props.theme.primary};
      background: ${props => props.theme.backgroundSecondary};
    }
  }
`

export default NftModal; 