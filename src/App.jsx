import './App.css'
import useSWR from 'swr'
import axios from 'axios'
import { ItemCard} from './components/ItemCard'
import { ItemDetails} from './components/ItemDetails'


function App() {
  const url = '/api/graphql';
  const query = `{
    allItems {
      name
      description
      avgPrice
      image
      banner
      unitOfMeasurement
    }
  }`

  const { data: inventory } = useSWR(url, async () => { 
    const res = await axios.post(url, { query });
    return res.data;
  })

  return (
    <div className="App">
      <h1>Invitation For Bid</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">{
        // inventory && inventory.data.allItems.map( (item) => <ItemCard item={item} key={item.id} /> )
        (inventory) ? <ItemDetails item={inventory.data.allItems[0]} /> : <p>No items found</p>
      }
			</div>
    </div>
  )
}

export default App
