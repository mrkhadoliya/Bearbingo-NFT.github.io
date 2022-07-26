import { ethers } from "ethers";

export const formatNumber = (n, dec) => {
  let value = 0; 
  const decimals = dec || 0; 

  if(n) {
    value = (+ethers.utils.formatUnits(`${n}`, decimals)).toFixed(0);
  }

  return value; 
};