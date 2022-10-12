import useSWR from 'swr'
import { useState } from 'react'
import { fetcher2 } from './config/defaults'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { ItemCard } from './components/ItemCard'
import { ItemSelect } from './components/ItemSelect'
import { ItemDetails } from './components/ItemDetails'


// const url = '/api/graphql'
const query = `{
  allItems {
    name
    description
    avgPrice
    image
    banner
    unitOfMeasurement
  }
}
`

function App() {
  const { data: inventory, error, isValidating, mutate } = useSWR(query, fetcher2);
  const [currentItem, setCurrentItem] = useState(0);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  const handleClick = (itemIndex) => {
    setCurrentItem(itemIndex)
  }

  return (
    <>
      <div>
        <p><b>FIQUE A VONTADE PARA RETIRAR DE NOSSO SITE OS SERVIÇOS QUE ACHAR INCONVENIENTE</b></p>
        <ItemSelect parentRef={{mutate}} ></ItemSelect>
      </div>

      <div>{
        (inventory) ?
        <Carousel responsive={responsive}>{  inventory.data.allItems.map(
            (item, index) => <ItemCard item={item} index={index} parentRef={{handleClick}} key={item.id} />
        )}
        </Carousel> :
        <p>No items found</p>
      }
      </div>

      <div>{
        (inventory) ?
        <ItemDetails item={inventory.data.allItems[currentItem]} /> :
        <p>No items found</p>
      }
      </div>
    </>
  )
}

export default App
