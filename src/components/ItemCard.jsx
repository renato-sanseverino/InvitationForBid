import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { api, notification } from '../config/defaults.js'


export const ItemCard = ({ item }) => {
	const [deal, setDeal] = useState(item)

	const changePrice = () => {
		toast.success('We already have the best deal R$ ' + deal.avgPrice, notification.options)
	}

	return (
		<>
			<Toaster/>

			<div className="p-8 border-solid border-2 rounded-lg" onClick={changePrice} >
				<h2 className="text-2xl font-bold">{item.name}</h2>
				<p>Preço Médio: R$ {item.avgPrice}</p>
			</div>
		</>
	)
}
