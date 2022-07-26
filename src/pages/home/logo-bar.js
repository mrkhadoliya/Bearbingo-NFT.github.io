import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

// LOGOS
import LogoBitmart from '../../assets/images/exchanges/greyscale/bitmart.svg';
import LogoBkex from '../../assets/images/exchanges/greyscale/bkex.svg';
import LogoGate from '../../assets/images/exchanges/greyscale/gate-io.svg';
import LogoLbank from '../../assets/images/exchanges/greyscale/lbank.svg';
import LogoMexc from '../../assets/images/exchanges/greyscale/mexc.svg';
import LogoWhitebit from '../../assets/images/exchanges/greyscale/whitebit.svg';
import LogoXt from '../../assets/images/exchanges/greyscale/xt.svg';
import LogoUniswap from '../../assets/images/exchanges/greyscale/uniswap.svg';
import LogoPancake from '../../assets/images/exchanges/greyscale/pancake.svg';
import LogoCoinstore from '../../assets/images/exchanges/greyscale/coinstore.png';
import LogoHotbit from '../../assets/images/exchanges/greyscale/hotbit.png';
import LogoBibox from '../../assets/images/exchanges/greyscale/bibox.svg';


const LogoBar = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const numSlides = 2; 

  // FADE CAROUSEL ITEMS IN/OUT
  useEffect(() => {
    let slideNum = currentSlide; 

    setInterval(() => {
      // GET NEXT SLIDE
      if(slideNum < numSlides) {
        let newSlide = slideNum + 1; 
        setCurrentSlide(newSlide); 
        slideNum = slideNum + 1; 
      }
      // RESET
      else if(slideNum === numSlides) {
        setCurrentSlide(1);
        slideNum = 1; 
      }

    }, 5000);
  }, [currentSlide]); 

  return (
    <StyledLogoBar>
      <div className='logobar-inner'>
        <StyledSlide className='grid slide' id={1} currentSlide={currentSlide}>
          <div className='col-2_sm-4'><img src={LogoUniswap} alt="Uniswap" /></div>
          <div className='col-2_sm-4'><img src={LogoPancake} alt="Pancake Swap" /></div>
          <div className='col-2_sm-4'><img src={LogoGate} alt="Gate.io" /></div>
          <div className='col-2_sm-4'><img src={LogoLbank} alt="Lbank" /></div>
          <div className='col-2_sm-4'><img src={LogoWhitebit} alt="WhiteBit" /></div>
          <div className='col-2_sm-4'><img src={LogoBitmart} alt="Bitmart" /></div>
        </StyledSlide>

        <StyledSlide className='grid slide' id={2} currentSlide={currentSlide}>
          <div className='col-2_sm-4'><img src={LogoBkex} alt="Bkex" /></div>
          <div className='col-2_sm-4'><img src={LogoMexc} alt="Mexc" /></div>
          <div className='col-2_sm-4'><img src={LogoXt} alt="XT" /></div>
          <div className='col-2_sm-4'><img src={LogoCoinstore} alt="Coinstore" /></div>
          <div className='col-2_sm-4'><img src={LogoHotbit} alt="Hotbit" /></div>
          <div className='col-2_sm-4'><img src={LogoBibox} alt="Bibox" /></div>
        </StyledSlide>
      </div>
    </StyledLogoBar>
  )
}

const selectSlide = (props) => {
  const {id, currentSlide} = props; 

  if(id === currentSlide) {
    return {
      opacity: 1, 
      transform: 'translateY(10px)'
    }
  }
}

const StyledSlide = styled.div`
  opacity: 0;
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  transform: translateY(0);
  transition: all 1s;

  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    top: 8px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${selectSlide}; 
`

const StyledLogoBar = styled.div`
  background: ${props => props.theme.background};
  border-bottom: 1px solid ${props => props.theme.border};
  color: ${props => props.theme.color};
  text-align: center;
  padding: 0 80px;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    padding: 0;
    height: 96px;
  }

  .logobar-inner {
    max-width: 1260px;
    margin: 0 auto;
    position: relative;
    height: 40px;
    text-align: center;
    padding: 40px 0;
  }

  img {
    max-height: 24px;
    opacity: .56;
    max-width: 100%;

    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      max-width: 70%;
    }
  }
`

export default LogoBar; 