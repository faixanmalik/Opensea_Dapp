import React, { useEffect, useState } from 'react'
import { useMarketplace } from '@thirdweb-dev/react'
import Link from 'next/link';
import NftCard from './Nftcard';

const Listings = () => {
  const contractAddress = "0xfAa50E83bdbb9A9fc13C0200fd9b553b65deF37a";
  let marketPlace = useMarketplace(contractAddress);

  // const [listings, setListings] = useState([]) 
  
  let listings = [
    {
      id: 1,
      price: 0.1,
      name: "Smoke and Mirrors #11. Four of Cups",
      desc: 'Title: Four of Cups Artist: Justin Aversano Medium: Darkroom Print Original Dimensions: 16" x 20" Edition: 1/1 Talent: Psychic Crystal: Cobaltoan Calcite',
      owner: '0x213796555b6307Ca224f767c1Bb3A17C2e0EF3b5',
      assetsContractAddress: '0x40a8A6612edaea651FD5bFeD461a75c606bD05c8',
      imageSrc:'https://ipfs-2.thirdwebcdn.com/ipfs/QmVVukuijXFyz2Uwfz2HdU14EayjTJdfWiAP3Lpvy8UcPh/Smoke%20and%20Mirrors%20%2311.%20Four%20of%20Cups.avif'
    },
    {
      id: 2,
      price: 0.01,
      name: "Smoke and Mirrors #11. Four of Cups",
      desc: 'Title: Four of Cups Artist: Justin Aversano Medium: Darkroom Print Original Dimensions: 16" x 20" Edition: 1/1 Talent: Psychic Crystal: Cobaltoan Calcite',
      owner: '0x213796555b6307Ca224f767c1Bb3A17C2e0EF3b5',
      assetsContractAddress: '0x40a8A6612edaea651FD5bFeD461a75c606bD05c8',
      imageSrc:'https://ipfs-2.thirdwebcdn.com/ipfs/QmVVukuijXFyz2Uwfz2HdU14EayjTJdfWiAP3Lpvy8UcPh/Smoke%20and%20Mirrors%20%2311.%20Four%20of%20Cups.avif'
    },
    {
      id: 3,
      price: 0.001,
      name: "Smoke and Mirrors #11. Four of Cups",
      desc: 'Title: Four of Cups Artist: Justin Aversano Medium: Darkroom Print Original Dimensions: 16" x 20" Edition: 1/1 Talent: Psychic Crystal: Cobaltoan Calcite',
      owner: '0x213796555b6307Ca224f767c1Bb3A17C2e0EF3b5',
      assetsContractAddress: '0x40a8A6612edaea651FD5bFeD461a75c606bD05c8',
      imageSrc:'https://ipfs-2.thirdwebcdn.com/ipfs/QmVVukuijXFyz2Uwfz2HdU14EayjTJdfWiAP3Lpvy8UcPh/Smoke%20and%20Mirrors%20%2311.%20Four%20of%20Cups.avif'
    },
    {
      id: 4,
      price: 0.02,
      name: "Smoke and Mirrors #11. Four of Cups",
      desc: 'Title: Four of Cups Artist: Justin Aversano Medium: Darkroom Print Original Dimensions: 16" x 20" Edition: 1/1 Talent: Psychic Crystal: Cobaltoan Calcite',
      owner: '0x213796555b6307Ca224f767c1Bb3A17C2e0EF3b5',
      assetsContractAddress: '0x40a8A6612edaea651FD5bFeD461a75c606bD05c8',
      imageSrc:'https://ipfs-2.thirdwebcdn.com/ipfs/QmVVukuijXFyz2Uwfz2HdU14EayjTJdfWiAP3Lpvy8UcPh/Smoke%20and%20Mirrors%20%2311.%20Four%20of%20Cups.avif'
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
      {listings.length > 0 ? 
      <div className="my-10 h-screen mx-auto w-full px-4 sm:px-6 lg:px-8">
        <h2 className="my-10 text-2xl text-white font-bold tracking-widest">Listings</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {listings.map((item, index) => (
            <Link key={index} href={`/assets/${item.assetsContractAddress}/${item.id}`} >
            <a href="">
              <NftCard listings={item}/>
            </a>
          </Link>
          ))}
        </div>
      </div>
      : <h1>Loading.....</h1>
      }
    </>
  )
}

export default Listings