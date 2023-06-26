import React, { useEffect, useState } from 'react'
import { useMarketplace } from '@thirdweb-dev/react'
import Nftcard from './Nftcard';
import Link from 'next/link';

const Listings = () => {
  const contractAddress = "0xfAa50E83bdbb9A9fc13C0200fd9b553b65deF37a";
  let marketPlace = useMarketplace(contractAddress);

  // const [listings, setListings] = useState([]) 
  
  let listings = [
    {
      id: 1,
      name: "Smoke and Mirrors #11. Four of Cups",
      desc: 'Title: Four of Cups Artist: Justin Aversano Medium: Darkroom Print Original Dimensions: 16" x 20" Edition: 1/1 Talent: Psychic Crystal: Cobaltoan Calcite',
      owner: '0x213796555b6307Ca224f767c1Bb3A17C2e0EF3b5',
      assetsContractAddress: '0x40a8A6612edaea651FD5bFeD461a75c606bD05c8',
    },

  ]

  useEffect(() => {
    activeListing();
  }, [])
  
  const activeListing = async()=>{
    try {
      let list = await marketPlace.getActiveListings()
      // setListings(list);
    } catch (error) {
      console.log('error: ', error);
    }
  }

    
  return (
    <>
    <div className=''>

      {listings.length > 0 ? 
      <>
        {listings.map((item, index)=>{
          console.log(item)
          return <Link key={index} href={`/assets/${item.assetsContractAddress}/${item.id}`} >
            <a><Nftcard /></a> 
          </Link>
        })}
      </>
      : <h1>Loading.....</h1>
      }
    </div>
    </>
  )
}

export default Listings