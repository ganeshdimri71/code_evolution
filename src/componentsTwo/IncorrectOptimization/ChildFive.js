import React from 'react'
import { ChildFour } from './ChildFour';

export const ChildFive = ({ name, memoizedHandleClick }) => {
    console.log('ChildFive Render');
    return (
        <div>Hello {name}</div>
    )
}

export const MemomizedChildFive = React.memo(ChildFive)
