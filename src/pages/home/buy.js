import React, {useState} from "react";
import styled from 'styled-components'; 
import { UNISWAP } from "../../utils/constants";
import Section from '../../layouts/section';
import { CONTRACTS } from "../../utils/constants";

const Buy = () => {
  const [copyButtonText, setCopyButtonText] = useState(CONTRACTS.LUFFY); 

  const copyContract = () => {
    // WRITE CONTRACT TO CLIPBOARD
    window.navigator.clipboard.writeText(CONTRACTS.LUFFY);

    // SET TEXT TEMPORARILY TO SUCCESS MESSAGE
    setCopyButtonText('Copied to clipboard'); 

    // SET TEXT BACK TO CONTRACT AFTER 1 SEC
    setTimeout(() => {
      setCopyButtonText(CONTRACTS.LUFFY); 
    }, 1000)
  }

  // RENDER CONTENT
  return (
    <Section>
      <div className="grid-middle-center">
        <div className="col-5_sm-12" data-push-right="off-1_sm-0">
          <h4>Ethereum NETWORK</h4>
          <h3>Buy Bearbingo on UniSwap</h3>

          <ol>
            <li>Create a Wallet (e.g Metamask)</li>
            <li>Fund your wallet with ETH</li>
            <li>Connect your wallet to the UniSwap frame</li>
            <li>Swap ETH for Bearbingo</li>
          </ol>

          <p>Set slippage to 0.50% and replace the last two diggits of Bearbingo with 99.</p>


          <label>Bearbingo Contract</label>
          <StyledContractButton onClick={copyContract}>{copyButtonText}</StyledContractButton>
        </div>

        <div className="col-5_sm-12">
          <StyledIframe id="buy" loading="lazy" src={UNISWAP} />
        </div>
      </div>
    </Section>
  )
}

const StyledContractButton = styled.button`
  background: ${props => props.theme.primaryLight};
  border: 1px solid ${props => props.theme.primary};
  border-radius: 4px;
  cursor: pointer;
  color: ${props => props.theme.primary};
  font-weight: bold;
  font-size: 18px;
  height: auto;
  margin-bottom: 24px;
  max-width: 100% !important;
  padding: 8px 16px;
  text-align: left;
  transition: all .3s;
  width: auto !important;
  word-wrap: break-word;

  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    height: 96px;
  }
`

const StyledIframe = styled.iframe`
  height: 520px;
  border: 0; 
  margin: 0 auto; 
  display: block; 
  border-radius: 10px; 
  max-width: 600px; 
  min-width: 300px;
  width: 100%;
`

export default Buy; 