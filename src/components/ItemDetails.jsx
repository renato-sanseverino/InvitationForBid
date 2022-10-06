import React from 'react'


export const ItemDetails = ({item}) => {
  const GetText = (nullableText) => {
    let text = (nullableText) ? nullableText : ''
    return text;
  }

  return (
    <>
          <img className="absolute w-full h-full z-10" src={GetText(item.banner)} />

          <div className="absolute z-20 flex top-1/2 left-1/2">
              <div>
                  <img className="h-80" src={GetText(item.image)} />
              </div>
              <div>
                  <h1 className="text-red-300 drop-shadow-lg shadow-red-600 text-5xl">{item.name}</h1>
                  <h2 className="text-white drop-shadow-lg shadow-blue-600 text-xl">{GetText(item.description)}</h2>
                  <p className="text-white text-base">Preço Médio: {item.avgPrice}</p>
              </div>
          </div>
    </>
  )
}
