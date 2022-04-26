import React, { useState, useReducer } from 'react'
const initialState = {
    firstCounter: 0,
    secondCounter: 10
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'incrementTwo':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrementTwo':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }

}
function CounterTwo() {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>First Count - {count.firstCounter}</div>
            <div>Second Count - {count.secondCounter}</div>
            <button
                onClick={() => dispatch({ type: 'increment', value: 1 })}
            >Increment</button>
            <button
                onClick={() => dispatch({ type: 'decrement', value: 1 })}
            >Decrement</button>
            <button
                onClick={() => dispatch({ type: 'increment', value: 5 })}
            >Increment Five</button>
            <button
                onClick={() => dispatch({ type: 'decrement', value: 5 })}
            >Decrement Five</button>
            <div>
                <button
                    onClick={() => dispatch({ type: 'incrementTwo', value: 1 })}
                >Increment Counter 2</button>
                <button
                    onClick={() => dispatch({ type: 'decrementTwo', value: 1 })}
                >Decrement Counter 2</button>
            </div>
            <button
                onClick={() => dispatch({ type: 'reset' })}
            >Reset</button>
        </div>
    )
}

export default CounterTwo