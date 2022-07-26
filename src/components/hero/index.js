import React, { useEffect } from 'react';
import styled, { useTheme } from 'styled-components';
import { ButtonRoute } from '../../components/button';
import NftPreview from '../nft-preview';
import PublicCard from "../../assets/images/nfts/public-1.png";
import PrivateCard from "../../assets/images/nfts/private-1.png";
import './index.css'
import herosimg from './hero.png'

const Hero = () => {
  const theme = useTheme();

  // HERO BACKGROUND ANIMATION
  // useEffect(() => {
  //   window.VANTA.FOG({
  //     el: "#herow",
  //     mouseControls: true,
  //     touchControls: true,
  //     gyroControls: false,
  //     minHeight: 200.00,
  //     minWidth: 200.00,
  //     // highlightColor: theme.primary,
  //     // midtoneColor: theme.swatch.red,
  //     lowlightColor: "#000000", 
  //     zoom: .5
  //   })
  // }); 

  return ( 
      <StyledHero id='hero' className='main_hero'>
        <div className='hero-inner'>
          <div className='grid-center-middle'>
            <div className='hero-cta col-6_sm-12'>
              <h1>The Bearbingo NFT Mint</h1>
              <p>
                Mint exclusive Bearbingo NFTs. Minting is the process of taking a digital asset and placing it on the blockchain.
                Once the asset is minted to the blockchain, it can then be traded on the best NFT
                marketplaces.
              </p>

              <div className='grid'>
                <div className='col-8_sm-12'>
                  <ButtonRoute to="/mint" block="true" size="large" type="primary">MINT NFTs</ButtonRoute>
                </div>
              </div>
            </div>

            <div className='col-6_sm-12' style={{ position: "relative" }}>
              <div className='grid-center-middle herosbox'>
                {/*<div className='col-12_sm-12'>
                <NftPreview img={PrivateCard} name="Private Collection" price="Free for Whitelist" /> 
                
                </div>*/}
                <div className='Bearbingonft'>
                  <img src={herosimg} alt="Bearbingo Community" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledHero>
      
  );
}

const StyledHero = styled.header`
  // background: ${props => props.theme.backgroundSecondary};
  color: ${props => props.theme.swatch.white};
  text-align: left;
  padding: 80px 80px 0;

  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    padding: 16px;
    text-align: center;
  }

  .hero-inner {
    max-width: 1260px;
    margin: 0 auto; 
  }

  .showcase {
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;

    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      position: relative;
      display: block;
      top: auto;
      left: auto;
      right: auto;
      bottom: auto;
    }
  }

  h1 {
    color: ${props => props.theme.swatch.white};
    font-size: 78px;
    font-weight: 900;
    line-height: 5rem;
    margin: 0 0 16px 0;
    text-shadow: 0 8px 32px rgba(0, 0, 0, .56);

    @media only screen and (max-width: ${props => props.theme.mobile.tablet}) {
      font-size: 32px;
      line-height: 56px;
    }

    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      font-size: 32px;
      line-height: 40px;
    }
  }

  .hero-cta button, .hero-cta a {
    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      width: 90%;
      margin: 0 auto 24px auto;
    }
  }

  p {
    color: ${props => props.theme.swatch.white};
    font-size: 18px;
    line-height: 28px;
    margin: 0 0 40px 0;
    text-shadow: 0 4px 16px rgba(0, 0, 0, .56);

    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      font-size: 16px;
      line-height: 24px;
      margin: 0 0 24px 0;
      padding: 0 16px;
    }
  }
`

export default Hero; 