import '../App.css'
import React from 'react'


export const ItemDetails = ({item}) => {
  const GetText = (nullableText) => {
    let text = (nullableText) ? nullableText : ''
    return text;
  }

  return (
    <>
      <div className='inline w-full h-full'>
        <img className="absolute z-10 w-full h-full " src={GetText(item.banner)} />

        <div className="absolute z-20 flex flex-row m-28">
            <img src={GetText(item.image)} />
            <fieldset style={{'border': '0'}}>
                <h1 className="title text-red-300 drop-shadow-lg shadow-red-600 text-5xl">{item.name}</h1>
                <h2 className="description text-white drop-shadow-lg shadow-blue-600 text-xl">{GetText(item.description)}</h2>
                <p className="text-white text-base">Preço Médio: {item.avgPrice}</p>
            </fieldset>
        </div>
      </div>
    </>
  )
}
