import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useContractRead, useAccount } from "wagmi";
import { CONTRACTS, CHAINS, BURN_ADDRESS } from "../../utils/constants";
import { formatNumber } from "../../utils/helpers";

import NftContractAbi from "../../contracts/NftContract.json";
const nftContractArguments = { addressOrName: CONTRACTS.NFT, contractInterface: NftContractAbi };

const Stats = () => {
  const account = useAccount();
  const [address, setAddress] = useState(BURN_ADDRESS);

  // SET ACCOUNT ADDRESS
  useEffect(() => {
    if (account && account.data && account.data.address) {
      setAddress(account.data.address);
    }
    else {
      setAddress(BURN_ADDRESS);
    }
  }, [account]);

  // GET SUPPLY NUMBERS FROM CONTRACT 
  const minted = useContractRead(nftContractArguments, "totalSupply", {
    watch: true,
    chainId: CHAINS.ERC.id,
  }).data;

  const supply = useContractRead(nftContractArguments, "MAX_Supply", {
    chainId: CHAINS.ERC.id,
  }).data;

  const owned = useContractRead(nftContractArguments, "balanceOf", {
    args: [address],
    chainId: CHAINS.ERC.id,
    watch: true,
  }).data;

  const remaining = useContractRead(nftContractArguments, "remainingSupply", {
    chainId: CHAINS.ERC.id,
    watch: true,
  }).data;

  return (
    <StyledStatsBar>
      <thead>
        <tr>
          <th>Owned</th>
          <th>Minted</th>
          <th>Remaining</th>
          <th>Total Supply</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <div style={{ background: 'rgba(0, 127, 255, 0.1)', padding: '6px', borderRadius: '50px', border: '1px solid rgb(0, 127, 255)' }}>
              {formatNumber(owned)}
            </div>
          </td>
          <td>
            <div style={{ background: 'rgba(255, 80, 95, 0.1)', padding: '6px', borderRadius: '50px', border: '1px solid rgb(255, 80, 95)' }}>
              {formatNumber(minted)}
            </div>
          </td>
          <td>
            <div style={{ background: 'rgba(222, 165, 0, 0.1)', padding: '6px', borderRadius: '50px', border: '1px solid rgb(209, 142, 0)' }}>
              {formatNumber(remaining)}
            </div>
          </td>
          <td>
            <div style={{ background: 'rgba(33, 204, 102, 0.1)', padding: '6px', borderRadius: '50px', border: '1px solid rgb(33, 204, 102)' }}>
              {formatNumber(supply)}
            </div>
          </td>
        </tr>
      </tbody>
    </StyledStatsBar>
  );
}

const StyledStatsBar = styled.table`
  border-bottom: 1px solid ${props => props.theme.border};
  border: 1px solid ${props => props.theme.border};
  box-sizing: border-box;
  text-align: center;
  width: 100%; 

  th {
    background: ${props => props.theme.backgroundSecondary};
    color: ${props => props.theme.colorLight};
    font-size: 11px;
    font-weight: bold;
    padding: 20px 32px;
    text-transform: uppercase;

    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      font-size: 11px;
      padding: 10px;
    }
  }
  td {
    color: ${props => props.theme.color};
    padding: 24px 32px;
    font-size: 18px;
    font-weight: bold;

    em {
      background-color: ${props => props.theme.swatch.greenLight};
      border: 1px solid ${props => props.theme.swatch.green};
      border-radius: 4px;
      color: ${props => props.theme.swatch.green};
      display: inline-block;
      padding: 8px 16px;
    }

    @media only screen and (max-width: ${props => props.theme.mobile.phone}) {
      font-size: 14px;
      padding: 24px 8px;
    }
  }
`

export default Stats; 
