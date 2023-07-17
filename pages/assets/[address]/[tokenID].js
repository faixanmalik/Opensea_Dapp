import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import TopNavbarLayout from '../../../layouts/TopNavbarLayout'
import NFTDetails from '../../../components/NFTDetails/NFTDetails'
import { useAddress, useMarketplace } from '@thirdweb-dev/react'
import { BigNumber } from 'ethers'


const NFT = () => {

  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [listing, setListing] = useState()
  const marketPlace = useMarketplace('0xfAa50E83bdbb9A9fc13C0200fd9b553b65deF37a')
  const address = useAddress()
  const { tokenID } = router.query;

  useEffect(() => {
    getListing()
  }, [])

  useEffect(() => {
    if(!address) router.replace('/')
  }, [address])
  

  const getListing = async()=>{
    try {
      setLoading(false)
      // setLoading(true)
      const listing = await marketPlace.getListing(BigNumber.from(tokenID));
      setListing(listing)
      // setLoading(false)
      
    } catch (error) {
      console.log(error)
    }
  }
  
  const buyNFT = async()=>{
    try {
      await marketPlace.buyoutListing(tokenID, 1);
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <>
    <TopNavbarLayout>
    <div className=''>
       {loading ? (
        <div>Loading...</div>
        ) : (
         <div className='container'>
            <NFTDetails image={listing?.assets?.image} price={listing?.assets?.buyoutCurrencyValuePerToken.displayValue} buyNFT={buyNFT}/>
         </div>
       )}
    </div>
    </TopNavbarLayout>
    </>
  )
}

export default NFT