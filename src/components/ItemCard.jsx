import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { fetcher2, notification } from '../config/defaults.js'


export const ItemCard = ({ item, index, parentRef }) => {
	const [deal, setDeal] = useState(item)

	return (
		<>
			<Toaster/>

			<div className="p-8 border-solid border-2 rounded-lg" >
				<h2 className="text-2xl font-bold">{item.name}</h2>
				<img className="w-40 h-20" src={item.image} ></img>
				<p>Preço Médio: R$ {item.avgPrice}</p>
			</div>
		</>
	)
}
