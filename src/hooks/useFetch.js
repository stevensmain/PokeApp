import { useEffect, useState } from "react"
import { getGift } from '../helpers/getGift'

export const useFetch = () => {
    
    const [state, setstate] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGift()
            .then ( img => {

                setstate({
                data: img,
                loading: false
            }) 
        })
    }, [])

    return state;
}
