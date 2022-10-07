import './App.css'
import useSWR from 'swr'
import axios from 'axios'
import Carousel from 'react-multi-carousel'
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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <div className="App">{
        (inventory) ?
        <Carousel responsive={responsive}>{   // Not working as expected
          inventory.data.allItems.map( (item) => <ItemCard item={item} key={item.id} /> )
        }
        </Carousel> :
        <p>No items found</p>
    }
    </div>
  )
}

export default App
