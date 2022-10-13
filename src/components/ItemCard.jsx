import '../App.css'
import React from 'react'


export const ItemCard = ({ item, index, parentRef }) => {

	const onClick = (e) => {
		parentRef.handleClick(index)
	}

	return (
		<div style={{'var(--image-url)': item.image}}>
			<div className='w-72 h-52 rounded-lg bg-[image:var(--image-url)]'>
				<fieldset className="flex flex-col justify-center" onClick={onClick}>
					<h2 className='textfield font-bold text-2xl'>{item.name}</h2>
					<p className='textfield font-bold text-xl'>Preço Médio: R$ {item.avgPrice}</p>
					<p className='textfield'>{item.description}</p>
				</fieldset>
			</div>
		</div>
	)
}
