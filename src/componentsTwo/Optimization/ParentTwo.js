import React, { useState } from 'react'
import { MemoizedChildTwo } from './ChildTwo';

export const ParentTwo = ({ children }) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Vishwas')
    console.log('ParentTwo Render');
    return (
        <div>
            <button
                onClick={() => setCount(count + 1)}
            >Count - {count}</button>
            <button
                onClick={() => setName('Code Evolution')}
            >Change Name</button>
            <MemoizedChildTwo name={name} />
        </div>
    )
}


