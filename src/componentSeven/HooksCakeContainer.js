import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

export default function HooksCakeContainer() {

    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    console.log('buyCake', buyCake);
    return (
        <div>
            <h2>Num of Cakes - {numOfCakes} </h2>
            <button
                onClick={() => dispatch(buyCake())}
            >Buy Cakes</button>
        </div >
    )
}
