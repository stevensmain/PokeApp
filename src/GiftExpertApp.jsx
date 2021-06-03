import React from 'react'
import { getGift } from './helpers/getGift'
import { PokeGrid } from './components/PokeGrid'

export const PokeApp = () => {

        const Pokemon = getGift();
        console.log(Pokemon)

    return (
        <div>
            <h1>PokeApp</h1>
            <hr/>

            <PokeGrid Pokemon= { Pokemon } />

        </div>
    )
}
