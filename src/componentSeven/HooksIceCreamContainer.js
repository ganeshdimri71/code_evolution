import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'

export default function HooksIceCreamContainer() {
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of IceCream - {numOfIceCream} </h2>
            <button
                onClick={() => dispatch(buyIceCream())}
            >Buy IceCream</button>
        </div>
    )
}


