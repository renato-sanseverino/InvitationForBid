import '../App.css'
import React from 'react'


export const ItemCard = ({ item, index, parentRef }) => {
	const onClick = (e) => {
		parentRef.handleClick(index)
	}

	return (
		<>
			<div className="inline w-72 h-52" onClick={onClick} >
				<img className="absolute z-10 rounded-lg w-72 h-52" src={item.image} ></img>
				<fieldset className="absolute z-20 flex flex-col justify-center" style={{'border': '0'}}>
					<h2 className='textfield'>{item.name}</h2>
					<p className='textfield'>Preço Médio: R$ {item.avgPrice}</p>
					<p className='textfield'>{item.description}</p>
				</fieldset>
			</div>
		</>
	)
}
