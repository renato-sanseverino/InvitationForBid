import React from 'react'


export const ItemDetails = ({item}) => {
  return (
    <>
          <img className="absolute w-full h-full z-10" src={item.banner} />

          <div className="absolute z-20 flex top-1/2 left-1/2">
              <div>
                  <img className="h-80" src={item.image} />
              </div>
              <div>
                  <h1 className="text-[#664433] drop-shadow-lg shadow-black text-5xl">{item.name}</h1>
                  <h2 className="text-white text-xl">{item.description}</h2>
                  <p className="text-white text-base">Preço Médio: {item.avgPrice}</p>
              </div>
          </div>
    </>
  )
}
