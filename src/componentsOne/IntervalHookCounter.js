import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)
    console.log('I am rendered', count);
    const tick = () => {
        setCount(prevCount => setCount(prevCount + 1))
    }


    useEffect(() => {
        console.log('useEffect called')
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <h1>
            {count}
        </h1>
    )
}

export default IntervalHookCounter