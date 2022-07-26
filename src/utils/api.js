import Web3 from 'web3';
import UniswapABI from "../contracts/uniswap.json";
import NFTAbi from "../contracts/NftContract.json";
import { CONTRACTS, CHAINS, PINATA, ALCHEMY_API_KEY, ALCHEMY_URL } from './constants';
import BN from 'bignumber.js';
import _ from "lodash"; 

/* GET NFTS (alchemy.io) 
*
*  
*  Description: gets the nfts of the current wallet
*/ 
export const getNfts = async (address) => {
  // address = '0xa679c6154b8d4619Af9F83f0bF9a13A680e01eCf';

  const requestType = "getNFTs";
  const fetchURL = `${ALCHEMY_URL}/${ALCHEMY_API_KEY}/${requestType}/?owner=${address}&filters[]=SPAM`;

  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  return fetch(fetchURL, requestOptions)
    .then(response => response.json())
    .then(response => {
      if(response && response.ownedNfts) {
        return response.ownedNfts; 
      }
      else {
        return []; 
      }
    }); 
}

/* GET NFT META DATA (alchemy.io) 
*
*  
*  Description: gets the nfts of the current wallet
*/ 
export const getNftMetaData = async (tokenId) => {
  const tokenType = "erc721";
  const requestType = "getNFTMetadata";
  const baseURL = `${ALCHEMY_URL}/${ALCHEMY_API_KEY}/${requestType}/`;
  const fetchURL = `${baseURL}?contractAddress=${CONTRACTS.NFT}&tokenId=${tokenId}&tokenType=${tokenType}`;

  const requestOptions = {
    method: 'GET',
    redirect: 'follow', 
  };

  return fetch(fetchURL, requestOptions)
    .then(response => response.json());
}


/* GET GAS PRICE 
*
*  Description: fetches the current gas price in gwei
*/ 
export const getGasPrice = async (setGasPrice) => {
  const web3 = new Web3(CHAINS.ERC.rpc);

  new web3.eth.getGasPrice((e, gasPriceInWei) => {  
    const priceInWei = gasPriceInWei ? gasPriceInWei : "" ;
    const gasPrice = Web3.utils.fromWei(priceInWei, 'gwei'); 
    setGasPrice(gasPrice);
  });
}

/* GET DOLLAR VALUE OF TOKEN 
*
*  Description: fetches the the current gas price in gwei
*/ 
export const getDollarValue = async (amount, setValue) => {
  const web3 = new Web3(CHAINS.ERC.rpc);
  const uniswapContract = new web3.eth.Contract(UniswapABI, CONTRACTS.ROUTER);
  const addressIn = CONTRACTS.LUFFY;
  const Weth = CONTRACTS.WETH;
  const addressOut = CONTRACTS.USDT;
  const swapAmount = new BN((await uniswapContract.methods.getAmountsOut(amount, [addressIn, Weth, addressOut]).call())[2]).dividedBy(new BN(10**6)).toString(10);
  setValue(swapAmount);
}

/* GET OPENSEA NFT DATA 
*
*  Description: fetches NFTs for a wallet form the opensea API
*/ 
export const fetchAssets = async (walletId) => {
  const allNftsURL = `https://testnets-api.opensea.io/api/v1/assets?owner=${walletId}&order_direction=desc&offset=0&limit=50&include_orders=true`; 
  // const luffyNftsURL = `https://testnets-api.opensea.io/api/v1/assets?owner=${walletId}&order_direction=desc&asset_contract_address=${CONTRACTS.NFT}&offset=0&limit=50&include_orders=true`; 
  return fetch(allNftsURL).then((response) => {
    return response.json(); 
  }); 
}


/* FETCH NFT DATA 
*
*  Description: fetches the nfts of the current wallet
*/ 
export const fetchNFTs = async (address) => {
  const web3 = new Web3(CHAINS.ERC.rpc);
  const instance = new web3.eth.Contract(NFTAbi, CONTRACTS.NFT);
  
  if (address) {
    try {
      // GET NFT IDS
      const nfts = await instance.methods.tokensOfOwner(address).call();

      // CREATE PROMISE ARRAY TO FETCH TOKEN URI 
      const promiseArray = nfts.map(nft => instance.methods.tokenURI(nft).call());

      // GET ARRAY OF URIS FOR NFTS
      const result = await Promise.all(promiseArray);

      // CLEAN ARRAY FOR VALID DATA URLS
      const nftURIs = _.remove(result, (uri)=> { 
        let pattern = /ipfs:\/\//;

        return pattern.test(uri);
      });

      // CREATE PROMISE ARRAY FOR META DATA 
      const fetchPromiseArray = nftURIs.map(uri => {
        const longURL = uri.replace("ipfs://", PINATA); 
        return fetch(longURL).then(response => response.json())
      });

      // PULL META DATA 
      const newResult = await Promise.all(fetchPromiseArray);

      // RETURN ARRAY
      return newResult; 
    } catch (err) {
      console.log(err);
      return err; 
    }
  }
}
