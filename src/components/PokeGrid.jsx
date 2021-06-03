import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { PokeGridItem } from './PokeGridItem'

export const PokeGrid = ( Pokemon ) => {

    const { data:images } = useFetch()
    console.log(images)


    return (
        <table className='table table-border table-hover'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                    </tr>
                </thead>
                <tbody>
                {
                images.map( itm => (
                    <PokeGridItem
                key={ itm.name }
                {...itm}
                />
                ))
                } 
                </tbody>
            </table>


    )
}
