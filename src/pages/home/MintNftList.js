import React from 'react'; 
import NftPreview from '../../components/nft-preview';
import PublicCard from '../../assets/images/nfts/public-1.png';
import PrivateCard from '../../assets/images/nfts/private-1.png';

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
                           <NftPreview img={PrivateCard} name="Private Collection" price="Free for Whitelist" />
                        </div>
                        <div className='col-3_sm-12' style={{ position: "relative" }}>
                            <NftPreview img={PublicCard} name="Private Collection" price="Free for Whitelist" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MintNftList