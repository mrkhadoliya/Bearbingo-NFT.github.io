import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ConnectButton } from "@rainbow-me/rainbowkit";

// UTILS
import NftContractAbi from "../../contracts/NftContract.json";
import { useContractRead, useContractWrite } from "wagmi";
import { CONTRACTS } from "../../utils/constants";
import { formatNumber } from "../../utils/helpers";
import { useAccount } from "wagmi";

// COMPONENTS
import Button from "../button";
import PrivateBanner from "../../assets/images/nfts/nft-5.jpg";

const PrivateMintCard = ({
  setAlert,
  mintType = "freeMint",
}) => {
  let options = [];
  const burnAddress = '0x000000000000000000000000000000000000dEaD';
  const account = useAccount();
  const [address, setAddress] = useState(burnAddress);
  const nftContractArguments = { addressOrName: CONTRACTS.NFT, contractInterface: NftContractAbi };


  // GRABS WHITELIST AMOUNT FROM ACCOUNT, ACCOUNT MUST BE PRESENT
  const freeMintAllowed = useContractRead(nftContractArguments, "freeMintAllowed", { args: [address], watch: true }).data;

  // EXTRACT METHODS FROM CONTRACT
  const { write, error, isError } = useContractWrite(nftContractArguments, mintType);

  // SET STATE
  const [quantity, setQuantity] = useState(1);
  const [whiteListAmount, setWhiteListAmount] = useState(1);

  // CONNECT TO WALLET BUTTON 
  let button = <StyledConnectButton><ConnectButton /></StyledConnectButton>;


  // UPDATE QUANITY OF NFTS ON SELECT
  const onSelectQuantity = (event) => {
    const numNfts = event.target.value;

    if (numNfts >= 1 || numNfts <= 10) {
      setQuantity(numNfts);
    }
  }

  // SET ACCOUNT ADDRESS
  useEffect(() => {
    if (account && account.data && account.data.address) {
      setAddress(account.data.address);
    }
    else {
      setAddress(burnAddress);
    }
  }, [account]);

  // UPDATE FREE AMOUNT ALLOWED
  useEffect(() => {
    if (freeMintAllowed) {
      // FORMAT BIG NUMBER 
      let freeNUM = formatNumber(freeMintAllowed);

      // TURN TO A NUMBER AND UPDATE STATE
      setWhiteListAmount(parseInt(freeNUM, 10));
    }
  }, [freeMintAllowed]);

  // DISPLAY ERROR MESSAGES
  useEffect(() => {
    if (isError) {
      try {
        const message = error.message.split("message")[1].split("data")[0];
        setAlert(message);
      } catch (err) {
        setAlert(error.message);
      }
    }
  }, [isError, error, setAlert]);

  // REQUEST MINTING 
  const handleMint = () => {
    if (quantity >= 1) {
      write({ args: [quantity] });
    }
  }

  // MAKE SURE ACCOUNT IS CONNECTED THEN SHOW MINT BUTTON
  if (address && address !== burnAddress && whiteListAmount > 0) {
    button = <Button size="large" type="primary" block="true" onClick={handleMint}>Mint NFT</Button>;
  }
  else if (address && address !== burnAddress) {
    button = <Button disabled={true} size="large" type="primary" block="true">You are not Whitelisted</Button>;
  }

  // CREATE SELECT OPTIONS BASED ON HOW MANY FREE AVAILABLE 
  if (whiteListAmount > 0) {
    for (let i = 0; i < whiteListAmount; i++) {
      let optionVal = i + 1;
      options.push(<option key={optionVal} value={optionVal}>{optionVal} NFTs</option>);
    }
  }

  return (
    <StyledPrivateMintCard>
      <div className="grid">
        <div className="col-5_sm-12">
        <header style={{ backgroundImage: `url(${PrivateBanner})` }}></header>
      
        </div>
        <div className="col-7_sm-12">
          <section>
            <h4>Private Mint</h4>
            <h3>Bearbingo Whitelist Collection</h3>

            {/* SHOW IF WHITE LISTED */}
            {whiteListAmount > 0 &&
              <form>
                <label>
                  <span>Select Quanity to Purchase</span>
                  <em>Free for Whitelist</em>
                </label>

                <select value={quantity} onChange={onSelectQuantity}>
                  {options}
                </select>
              </form>
            }

            {/* SHOW IF NOT WHITE LISTED */}
            {whiteListAmount === 0 &&
              <StyledMessage>
                This collection is free to mint but your wallet needs to be whitelisted to qualify.
              </StyledMessage>
            }

          </section>
        </div>
      </div>
      

      <footer>{button}</footer>
    </StyledPrivateMintCard>
  );
}

const StyledMessage = styled.p` 
  align-items: center;
  border: 1px solid ${props => props.theme.border};
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  height: 72px;
  line-height: 24px;
  justify-content: center;
  padding: 16px;

  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    height: auto;
  }
`

const StyledPrivateMintCard = styled.div`
  background: ${props => props.theme.name === "light" ? props.theme.background : props.theme.backgroundTertiary};
  box-shadow: ${props => props.theme.shadow.large};
  border-radius: 16px;
  color: ${props => props.theme.color};
  margin: 24px;
  overflow: hidden;

  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    margin: 0 0 24px 0;
  }

  header {
    background: ${props => props.theme.backgroundSecondary};
    background-size: cover;
    height: 100%;

    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      height: 150px;
    }
  }

  section {
    padding: 24px 24px 24px 0;

    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      padding: 16px;
    }
  }

  h4 {
    color: ${props => props.theme.primary}; 
    font-size: 11px;
    font-weight: bold;
    line-height: 16px;
    margin-bottom: 8px;
    text-transform: uppercase;
  }

  h3 {
    color: ${props => props.theme.color}; 
    font-size: 22px;
    font-weight: 900;
    line-height: 32px;
    margin-bottom: 24px;

    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      font-size: 24px;
    }
  }

  form {
    label {
      color: ${props => props.theme.color}; 
      font-size: 11px;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      line-height: 16px;
      margin-bottom: 8px;
      text-transform: uppercase;

      em {
        color: ${props => props.theme.swatch.green}; 
        font-style: normal;
      }
    }

    select {
      background-color: ${props => props.theme.background};
      border: 1px solid ${props => props.theme.border};
      border-radius: 2px;
      box-sizing: border-box;
      color: ${props => props.theme.color}; 
      height: 40px;
      margin-bottom: 8px;
      padding: 0 16px;
      width: 100%;
    }
  }
   

  footer {
    background: ${props => props.theme.backgroundSecondary};
    padding: 16px;
  }
`

const StyledConnectButton = styled.div`
  button {
    height: 48px !important;
    width: 100%;
    text-align: center !important;
  }
`

export default PrivateMintCard;