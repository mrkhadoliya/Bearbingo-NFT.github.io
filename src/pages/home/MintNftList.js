import React from 'react'; 
import NftPreview from '../../components/nft-preview';
import PublicCard from '../../assets/images/nfts/nft-1.jpg';
import PrivateCard from '../../assets/images/nfts/nft-2.jpg';
import PrivateCard3 from '../../assets/images/nfts/nft-3.jpg';
import PrivateCard4 from '../../assets/images/nfts/nft-4.jpg';

import './Contact.css'

const MintNftList = () => {
    return (
        <div>
            <div className='recentnft'>
                <div className='grid-center-middle'>
                    <div className='grid'>
                        <div className='col-3_sm-12' style={{ position: "relative" }}>
                            <NftPreview img={PrivateCard} name="Private Collection" price="Free for Whitelist" />
                        </div>
                        <div className='col-3_sm-12' style={{ position: "relative" }}>
                            <NftPreview img={PublicCard} name="Private Collection" price="Free for Whitelist" />
                        </div>
                        <div className='col-3_sm-12' style={{ position: "relative" }}>
                           <NftPreview img={PrivateCard3} name="Private Collection" price="Free for Whitelist" />
                        </div>
                        <div className='col-3_sm-12' style={{ position: "relative" }}>
                            <NftPreview img={PrivateCard4} name="Private Collection" price="Free for Whitelist" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MintNftList