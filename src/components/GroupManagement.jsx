import useSWR from 'swr'
import React, { useState } from 'react'
import { fetcher2 } from '../utils/defaults'
import { mutation } from '../utils/mutation'


const query = `{
  allItemGroups {
    id
    name
  }
}
`

export const GroupManagement = () => {
    const [selected, setSelected] = useState(0);
    const { data: itemGroups, error, isValidating, mutate } = useSWR(query, fetcher2)

    const deleteGroup = () => {
        mutation(`deleteItemGroup(id: ${parseInt(selected)})`)
        .then( (response) => {
            mutate() // atualiza as opções do dropdown
        })
        .catch((error) => console.error(error))
    }

    const createGroup = () => {
        mutation(`createItemGroup(name: "um novo grupo") { name }`)
        .then( (response) => {
            mutate() // atualiza as opções do dropdown
        })
        .catch((error) => console.error(error))
    }

	return (
    <>
        <style jsx>{`
            .displayRow{
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            .rowElement{
                line-height: 0.5%;
                margin-right: 10px;
            }

            .svgicon{
                background-color: transparent;
                border: 0px;
                width: 25px;
                height: 25px;
            }
        `}</style>

        <div className="displayRow">
            <p className="rowElement">Categoria: </p>
            <select className="rowElement" onChange={(e) => setSelected(e.target.value)} >{
                itemGroups ?
                itemGroups.data.allItemGroups.map( (group) => <option value={group.id} key={group.id} >{group.name}</option> ) :
                <option value={0} key={0} >No item group found</option>
            }
            </select>
            <button className="svgicon" style={{'backgroundImage': 'url("icons/circle_minus.svg")'}} onClick={deleteGroup} />
            <button className="svgicon" style={{'backgroundImage': 'url("icons/circle_plus.svg")'}} onClick={createGroup} />
        </div>
    </>
	)
}
