import React from 'react'

const NftCard = ({listings}) => {
    const { id, name, desc, price, owner, assetsContractAddress, imageSrc } = listings;
  return (
    
    <div className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            // src={listings.imageSrc}
            src={imageSrc}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
            
        <div className="mt-4 items-center flex justify-between">
          <h3 className="text-xs text-white">
            {name}
          </h3>
          <p className="text-sm font-semibold text-blue-600">{price} ETH</p>
        </div>
        
    </div>
  )
}

export default NftCard