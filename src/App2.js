import React from 'react'
import { ChildA } from './componentsFour/Context/ContextChildren'
import { ContextParent } from './componentsFour/Context/ContextParent'

function App2() {
    return (
        <div>
            <ContextParent >
                <ChildA />
            </ContextParent>
        </div>
    )
}

export default App2