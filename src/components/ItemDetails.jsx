import '../App.css'
import React from 'react'


export const ItemDetails = ({item}) => {

  return (
    <>
      <div className='inline w-full h-full'>{
        (item) ?
        <div className="flex flex-row m-28 bg-cover bg-center" style={{ backgroundImage: `url(${item.banner})` }} >
            <img src={item.image} />
            <fieldset style={{'border': '0'}}>
                <h1 className="title text-red-300 drop-shadow-lg shadow-red-600 text-5xl">{item.name}</h1>
                <h2 className="description text-white drop-shadow-lg shadow-blue-600 text-xl">{item.description}</h2>
                <p className="text-white text-base">Preço Médio: {item.avgPrice}</p>
            </fieldset>
        </div> :
        <p>No item to display</p>
      }
      </div>
    </>
  )
}
