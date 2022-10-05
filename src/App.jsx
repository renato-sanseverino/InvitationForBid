import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import useSWR, { useSWRConfig } from 'swr'
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

  const { mutate } = useSWRConfig()
  const { inventory, revalidate } = useSWR(url, async () => { 
    const res = await axios.post(url, { query });
    return res.data;
  })

  useEffect(() => {
    // tell all SWRs with this key to revalidate
    mutate(url)
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
