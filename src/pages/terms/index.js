import React from 'react';
import styled from 'styled-components';
import DefaultLayout from '../../layouts/default';
import { Link } from 'react-router-dom';

const TermsPage = ({setTheme}) => {
  return (
    <DefaultLayout setTheme={setTheme}>
      <StyledPage>
        <h1>Terms of Service</h1>

        <em>Last Updated: June 1st, 2022</em>

        <ol>
            <li>
              <strong>Introduction</strong> Bearbingo Staking is a Staking Platform interface maintained by a decentralized team of developers. It facilitates interaction with the Bearbingo Contract, a token deployed on the Ethereum blockchain.
            </li>

            <li>
              <strong>Modification of this Agreement</strong> We reserve the right, in our sole discretion, to modify this Agreement. All modifications become effective when they are posted, and we will notify you by updating the date at the top of the Agreement.
              <br/>
              You can find the latest version in effect at: <Link to="/terms">https://mint.Bearbingotoken.com/terms</Link>
            </li>

            <li>
              <strong>Assumption of Risk</strong> By accessing Bearbingo Token's software, you accept and acknowledge: The prices of blockchain assets are extremely volatile and we cannot guarantee purchasers will not lose money. Assets available to trade on Bearbingo should not be viewed as investments: their prices are determined by the market and fluctuate considerably. You are solely responsible for determining any taxes that apply to your transactions. Bearbingo's services are non-custodial, such that we do not at any time have custody of the Tokens owned by our users. We do not store, send, or receive Digital Assets, as they respectively exist on the blockchain. As such, and due to the decentralized nature of the services provided, you are fully responsible for protecting your wallets and assets from any and all potential risks. Our token is on the Ethereum blockchain, and we are not responsible for any assets that users may mistakenly or willingly access or loses through the software. You accept responsibility for any risks associated with using such user-generated content.
            </li>

            <li>
              <strong>Disclaimers</strong> We do not represent or warrant that access to the front-end interface will be continuous, uninterrupted, timely, or secure; that the information contained in the interface will be accurate, reliable, complete, or current; or that the Interface will be free from errors, defects, viruses, or other harmful elements.
            </li>

            <li>
              <strong>Proprietary Rights</strong> We own the intellectual property generated by core contributors to Bearbingo for the use of Bearbingo, including (but not limited to) software, text, designs, images, and copyrights. Unless otherwise stated, Bearbingo reserves exclusive rights to its intellectual property.  
            </li>

            <li>
              <strong>Eligibility</strong> To access or use the front-end interface, you represent that you are at least the age of majority in your jurisdiction. You further represent that your access and use of the front-end interface will fully comply with all applicable laws and regulations and that you will not access or use the front-end interface to conduct, promote, or otherwise facilitate any illegal activity. Furthermore, you represent that neither you nor any entity you represent are included in any trade embargoes or sanctions list (“Subject to Restrictions”), nor resident, citizen, national or agent of, or an entity organized, incorporated or doing business in such territories (“Restricted Territories”).
            </li>

            <li> 
              <strong>Privacy</strong> When you use the front-end interface, the only information we collect from you is your blockchain wallet address, completed transaction hashes, and token identifiers. We do not collect any personal information from you. We may, however, use third-party services like Google Analytics, which may receive your publicly available personal information. We do not take responsibility for any information you make public on the Ethereum blockchain by taking actions through the front-end interface.
            </li>

            <li>
              <strong>Prohibited Activity</strong> You agree not to engage in any of the following categories of prohibited activity in relation to your access and use of the front-end interface: Intellectual property infringement, such as violations to copyright, trademark, service mark or patent. Interaction with assets, listings, smart contracts, and collections that include metadata that may be deemed harmful or illegal, including (but not limited to): metadata that promotes suicide or self-harm, incites hate or violence against others, degrades or doxxes another individual, depicts minors in sexually suggestive situations, or raises funds for terrorist organizations. Transacting in any Restricted Territory or interacting with any blockchain addresses controlled indirectly or directly by persons or entities Subject to Restrictions, that is, included in any trade embargoes or sanctions list.
            </li>

            <li>
              <strong>Limitation of Liability</strong>Bearbingo is in no way liable for any damages of any form resulting from your access or use of Bearbingo software, including (but not limited to) any loss of profit, digital assets, or intangible property, and assumes no liability or responsibility for any errors, omissions, mistakes, or inaccuracies in the content provided on Bearbingo-controlled software or media; unauthorized access or use of any server or database controlled by Bearbingo; bugs, viruses etc. in the software; suspension of service; or any conduct of any third party whatsoever. Furthermore, any hyperlink or reference to a third party website, product, or person that is shared or published in any software or other channel by Bearbingo is for your convenience only, and does not constitute an endorsement. We accept no legal responsibility for content or information of such third party sites.
            </li>
        </ol>
      </StyledPage>
    </DefaultLayout>    
  );
}

const StyledPage = styled.div`
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  text-align: left;
  padding: 40px 80px;

  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    padding: 24px 16px;
  }

  a {
    color: ${props => props.theme.primary};
  }

  em {
    color: ${props => props.theme.color};
    font-style: italic;
    display: block;
    text-transform: uppercase;
  }

  h1 {
    color: ${props => props.theme.color};
    font-size: 48px;
    font-weight: 900;
    margin-bottom: 32px;

    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      font-size: 24px;
    }
  }

  ul, ol {
    color: ${props => props.theme.color};
    font-size: 16px;
    margin-top: 32px;

    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      font-size: 14px;
    }
    
    li {
      strong {
        text-transform: uppercase;
        margin-right: 8px;
      }

      line-height: 24px;
      margin-bottom: 26px;
    }
  }
`

export default TermsPage; 