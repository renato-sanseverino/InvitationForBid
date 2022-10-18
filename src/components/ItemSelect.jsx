import useSWR from 'swr'
import React, { useState } from 'react'
import { fetcher2 } from '../utils/defaults'
import { mutation } from '../utils/mutation'


const query = `{
    allItems {
      id
      name
    }
}
`

export const ItemSelect = ({parentRef}) => {
    const [selected, setSelected] = useState(0);
    const { data: inventory, error, isValidating, mutate } = useSWR(query, fetcher2)

    const deleteItem = () => {
        // const message = 'Deseja realmente excluir o item ?';

        mutation(`deleteItem(id: ${selected})`)
        .then( (response) => {
            mutate() // atualiza as opções do dropdown
            parentRef.mutate() // atualiza o componente pai
        })
        .catch((error) => console.error(error))
    }

	return (
        <>
            <select onChange={(e) => setSelected(e.target.value)} >{
                inventory ?
                inventory.data.allItems.map( (item) => <option value={item.id} key={item.id} >{item.name}</option> ) :
                <option value={0} key={0} >No items found</option>
            }
            </select>
            <button onClick={deleteItem} >Retirar do Site</button>
        </>
    )
}
