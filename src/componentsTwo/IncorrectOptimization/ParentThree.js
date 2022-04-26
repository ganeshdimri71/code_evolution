import React, { useState } from 'react'
import { MemomizedChildFour } from './ChildFour';
import { MemoizedChildThree } from './ChildThree';

export const ParentThree = ({ children }) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Vishwas')
    console.log('ParentThree Render');
    return (
        <div>
            <button
                onClick={() => setCount(count + 1)}
            >Count - {count}</button>
            <button
                onClick={() => setName('Code Evolution')}
            >Change Name</button>
            <MemomizedChildFour name={name} />
        </div>
    )
}


