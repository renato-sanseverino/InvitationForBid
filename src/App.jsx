import './App.css'
import useSWR from 'swr'
import axios from 'axios'
import { ItemCard } from './components/ItemCard'


function App() {
  const url = '/api/graphql';
  const query = `{
    allItems {
      name
      avgPrice
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
					inventory && inventory.data.allItems.map( (item) => <ItemCard item={item} key={item.id} /> )
      }
			</div>
    </div>
  )
}

export default App
