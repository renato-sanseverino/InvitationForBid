import toast, { Toaster } from "react-hot-toast";
import { api, notification } from '../config/defaults.js'


const changePrice = () => {
  toast.error('Favor preencher o novo valor', notification.options);
}

export const ItemCard = ({ item }) => {
	return (
		<>
			<Toaster/>

			<div className="p-8 border-solid border-2 rounded-lg" onClick={changePrice} >
				<h2 className="text-2xl font-bold">{item.name}</h2>
				<p>{item.AvgPrice}</p>
			</div>
		</>
	)
}
