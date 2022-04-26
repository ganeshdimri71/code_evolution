import React, { useState, useMemo, useCallback } from 'react'
import { MemomizedChildFive } from './ChildFive';

export const ParentFour = ({ children }) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Vishwas')
    const person = {
        fname: 'Bruce',
        lname: 'Wayne'
    }

    const memoizedPerson = useMemo(() => person, [])

    const handleClick = () => { }
    const memoizedHandleClick = useCallback(
        handleClick,
        []
    )

    console.log('ParentFour Render');
    return (
        <div>
            <button
                onClick={() => setCount(count + 1)}
            >Count - {count}</button>
            <button
                onClick={() => setName('Code Evolution')}
            >Change Name</button>
            <MemomizedChildFive name={name} memoizedHandleClick={memoizedHandleClick} />
        </div>
    )
}


