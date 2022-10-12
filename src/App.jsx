import './App.css'
import useSWR from 'swr'
import { fetcher2 } from './config/defaults'
import Carousel from 'react-multi-carousel'
import { ItemCard } from './components/ItemCard'
import { ItemSelect } from './components/ItemSelect'
import { ItemDetails } from './components/ItemDetails'


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

  const { data: inventory, error, isValidating, mutate } = useSWR(query, fetcher2)

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
    <div className="App">
      <div>
        <p><b>FIQUE A VONTADE PARA RETIRAR DE NOSSO SITE OS SERVIÇOS QUE ACHAR INCONVENIENTE</b></p>
        <ItemSelect parentRef={{mutate}} ></ItemSelect>
      </div>

      <div>{
        (inventory) ?
        <Carousel responsive={responsive}>{   // Not working as expected
          inventory.data.allItems.map( (item) => <ItemCard item={item} key={item.id} /> )
        }
        </Carousel> :
        <p>No items found</p>
      }
      </div>


    </div>
  )
}

export default App
