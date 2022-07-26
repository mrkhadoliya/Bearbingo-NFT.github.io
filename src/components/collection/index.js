import React, {useState, useEffect, memo} from "react";
import styled from "styled-components";
import { useAccount, useContractRead } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { CONTRACTS, CHAINS, BURN_ADDRESS } from "../../utils/constants";
import { fetchNFTs } from "../../utils/api";
import NftCard from "../nft-card";
import NftModal from "../nft-modal";

import NftContractAbi from "../../contracts/NftContract.json";
const nftContractArguments = {addressOrName: CONTRACTS.NFT,contractInterface: NftContractAbi};

const Collection = () => {
  const account = useAccount();
  const [nfts, setNfts] = useState([]);
  const [address, setAddress] = useState(BURN_ADDRESS);
  const [showModal, setShowModal] = useState(false);
  const [selectedNft, setSelectedNft] = useState();

  const owned = useContractRead(nftContractArguments, "balanceOf", {
    args: [address],
    chainId: CHAINS.ERC.id,
    watch: true,
  }).data;

  const toggleModal = () => {
    setShowModal(!showModal); 
  }

  const showNft = (data) => {
    setSelectedNft(data); 
    toggleModal(); 
  }

  // SET ACCOUNT ADDRESS
  useEffect(() => { 
    let currentAddress = null; 
  
    if (account && account.data && account.data.address && (account.data.address !== currentAddress)) {
      currentAddress = account.data.address; 
      setAddress(account.data.address);
      console.log(currentAddress);
    } 
    else {
      setAddress(BURN_ADDRESS); 
    }
  }, [account]);

  // GET NFTS
  useEffect(() => {
    if(address && address !== BURN_ADDRESS) {
      fetchNFTs(address).then(response => {
        setNfts(response);
      });
    }
  }, [address, owned]); 

  return (
    <StyledCollection>
      <div className="collection-inner">
        <header>
          <h2>MY Bearbingo NFT Collection</h2>
          <ConnectButton />
        </header>
        <div className="grid">
          {nfts && nfts.length > 0 && 
            nfts.map((data, index) => {
              return (
                <div className="col-3_sm-12" key={`nft-${index}`}>
                  <NftCard data={data} onShow={showNft} /> 
                </div>
              )
            })
          }
        </div>
      </div>
      {showModal &&
        <NftModal onClose={toggleModal} data={selectedNft} /> 
      }
    </StyledCollection>
  ); 
}

const StyledCollection = styled.section`
  background: ${props => props.theme.backgroundSecondary};
  padding: 40px;

  @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
    padding: 16px;
  }

  .collection-inner {
    max-width: 1400px;
    text-align: left;
    margin: 0 auto;
  }

  header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;

    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      display: block;
      padding: 16px 0;
    }
  }

  h2 {
    color: ${props => props.background === "inverted" ? props.theme.background : props.theme.color};
    font-weight: 900;
    font-size: 32px;
    line-height: 56px;
    margin: 0; 
    
    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      font-size: 24px;
      line-height: 24px;
      margin-bottom: 16px;
    }
  }
`

export default memo(Collection); 
