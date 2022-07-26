import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { getGasPrice } from '../../utils/api';

const GasPrice = ({
  isPinned
}) => {
  const [gasPrice, setGasPrice] = useState(0);

  // GET GAS PRICE
  useEffect(() => {
    getGasPrice(setGasPrice); 

    setInterval(() => {
      getGasPrice(setGasPrice); 
    }, 60000);
  }, []); 

  return(
    <StyledGas isPinned={isPinned}>
      <span className="material-icons">local_gas_station</span>
      <em>{Math.trunc(gasPrice)} gwei</em>
    </StyledGas>
  );
}

const pinned = (props) => {
  if(props.isPinned) {
    return {
      position: "absolute", 
      top: 0, 
      right: 0
    }
  }
}

const StyledGas = styled.div`
  align-items: center;
  background: ${props => props.theme.backgroundSecondary};
  border-radius: 4px;
  color: ${props => props.theme.colorLight};
  display: flex;
  height: 24px;
  padding: 0 8px 0 4px;
  ${pinned}

  em {
    font-size: 11px;
    font-style: normal;
    font-weight: bold;
    line-height: 16px;
  }

  .material-icons {
    font-size: 16px; 
    margin-right: 4px;
  }
`

export default GasPrice; 