import React, { useState, useEffect, useRef } from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(preTimer => preTimer + 1)
        }, 1000)
        console.log('intervalRef.current', intervalRef.current)
        return () => {
            clearInterval(intervalRef.current)
        };
     
    }, [])
    return (
        <div>
            Hook Timer - {timer}
            <button
                onClick={() => clearInterval(intervalRef.current)}
            >Clear Interval</button>
        </div>
    )
}

export default HookTimer