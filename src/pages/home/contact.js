import React from 'react';
import styled from 'styled-components';
import Section from '../../layouts/section';
import logo from '../../assets/images/logos/bearbingo.png';
import './Contact.css'

const ContactUs = () => {
  return (
    <Section background="pattern">
      <div className='grid-center'>
        <div className='col-6_sm-12'>
          <h4>ONE FOR ALL</h4>
          <h3>Explore our Community</h3>
          <p>
            Bearbingo was launched on August 4th 2021 with a single mission, building an entire ecosystem for holders and fans alike. 
          </p>
          <p>
          Bearbingo is a community-driven token built on the most secure and well-established blockchains Ethereum and BNB Chain, allowing investors to stay decentralized.
          </p>
        </div>

        <div className='col-5_sm-12 gooey' style={{textAlign: "center"}}>
          <img height={300} src={logo} alt="Bearbingo Community" />
        </div>
      </div>

      <div className='grid-center'>
        <div className='col-11_sm-12'>
          <div className='grid-center'>
            <div className='col-3_sm-12'>
              <LinkCard href='/'>
                <i className="fa-brands fa-twitter"></i>
                <strong>Twitter</strong>
                <em>Follow us on Twitter</em>
              </LinkCard>
            </div>
            <div className='col-3_sm-12'>
              <LinkCard href='/'>
                <i className="fa-brands fa-discord"></i>
                <strong>Discord</strong>
                <em>Chat with us on Discord</em>
              </LinkCard>
            </div>
            <div className='col-3_sm-12'>
            <LinkCard href='/'>
                <i className="fa-brands fa-telegram"></i>
                <strong>Telegram</strong>
                <em>Chat with us on Telegram</em>
              </LinkCard>
            </div>
            <div className='col-3_sm-12'>
              <LinkCard href='/'>
                <i className="fa-brands fa-facebook"></i>
                <strong>Facebook</strong>
                <em>Join us on Facebook</em>
              </LinkCard>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const LinkCard = styled.a`
  background: ${props => props.theme.background};
  border: 1px solid  ${props => props.theme.background};
  box-shadow: ${props => props.theme.shadow.small};
  border-radius: 8px;
  color: ${props => props.theme.primary};
  display: block;
  margin-top: 32px;
  padding: 32px;
  text-align: center;
  text-decoration: none;
  transition: all .3s;

  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    margin-top: 16px;
    padding: 24px 16px
  }

  &:hover, &:focus {
    border: 1px solid  ${props => props.theme.primary};
    box-shadow: ${props => props.theme.shadow.medium};

    strong, em, i {
      color: ${props => props.theme.primary};
    }
  }

  i {
    font-size: 32px;
    margin-bottom: 16px;
  }
  
  strong, em, i {
    color: ${props => props.theme.colorLight};
    display: block;
    font-style: normal;
    text-align: center;
    transition: all .3s;
  }

  strong {
    font-size: 16px;
    line-height: 24px;
  }

  em {
    font-size: 11px;
    line-height: 16px;
  }
`

export default ContactUs; 