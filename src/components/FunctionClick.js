import React from 'react'

const FunctionClick = () => {
    function clickHandler() {
        console.log
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick