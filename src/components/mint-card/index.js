import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import NftContractAbi from "../../contracts/NftContract.json";
import { useContractRead, useContractWrite } from "wagmi";
import { CONTRACTS } from "../../utils/constants";
import { formatNumber } from "../../utils/helpers";
import { useAccount } from "wagmi";

import Button from "../button";
import PublicBanner from "../../assets/images/nfts/nft-6.jpg";

const nftContractArguments = {
  addressOrName: CONTRACTS.NFT,
  contractInterface: NftContractAbi,
};

const getCost = (quantity, fee) => {
  return quantity * formatNumber(fee) / 10 ** 18;
}

const MintCard = ({
  setAlert,
  mintType = "publicMint",
  feeType = "publicMintFee",
}) => {
  const account = useAccount();
  const mintFee = useContractRead(nftContractArguments, feeType, { watch: true, }).data;
  const { write, error, isError } = useContractWrite(nftContractArguments, mintType);
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState();
  const [price, setPrice] = useState(getCost(quantity, mintFee));
  let button = <StyledConnectButton><ConnectButton /></StyledConnectButton>;


  // UPDATE QUANITY OF NFTS ON SELECT
  const onSelectQuantity = (event) => {
    const numNfts = event.target.value;

    if (numNfts >= 1 || numNfts <= 10) {
      setQuantity(numNfts);
      setPrice(getCost(numNfts, mintFee));
    }
  }

  // SET ACCOUNT ADDRESS
  useEffect(() => {
    if (account && account.data && account.data.address) {
      setAddress(account.data.address);
    }
    else {
      setAddress();
    }
  }, [account]);

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
      write({
        args: [quantity],
        overrides: {
          value: window.BigInt(Number(mintFee) * quantity),
        },
      });
    }
  }

  // MAKE SURE ACCOUNT IS CONNECTED THEN SHOW MINT BUTTON
  if (address) {
    button = <Button size="large" type="primary" block="true" onClick={handleMint}>Mint NFT</Button>;
  }

  return (
    <StyledMintCard>
      <div className="grid">
        <div className="col-12_sm-12">
          <section>
            <h4>Public Mint</h4>
            <h3>Bearbingo Strawhat Collection</h3>

            <form>
              <label>
                <span>Select Quanity to Purchase</span>
                <em>Cost: {price} Eth</em>
              </label>

              <select value={quantity} onChange={onSelectQuantity}>
                <option value="1">1 NFTs</option>
                <option value="2">2 NFTs</option>
                <option value="3">3 NFTs</option>
                <option value="4">4 NFTs</option>
                <option value="5">5 NFTs</option>
                <option value="6">6 NFTs</option>
                <option value="7">7 NFTs</option>
                <option value="8">8 NFTs</option>
                <option value="9">9 NFTs</option>
                <option value="10">10 NFTs</option>
              </select>
            </form>
          </section>

        </div>
        {/*<div className="col-5_sm-12">
          <header style={{ backgroundImage: `url(${PublicBanner})` }}></header>
  </div>*/}
      </div>
      
      
      <footer>{button}</footer>
    </StyledMintCard>
  );
}

const StyledMintCard = styled.div`
  background: ${props => props.theme.name === "light" ? props.theme.background : props.theme.backgroundTertiary};
  box-shadow: ${props => props.theme.shadow.large};
  border-radius: 16px;
  color: ${props => props.theme.color};
  margin: 10px;
  overflow: hidden;
  position: relative;

  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    margin: 0 0 8px 0;
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
    padding: 24px 24px 0; 
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
    margin-bottom: 10px;

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

export default MintCard;