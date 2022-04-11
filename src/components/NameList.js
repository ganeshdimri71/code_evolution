import React from 'react'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const nameList = names.map((name, index) => <h2 key={index}>{index+1} {name} </h2>
    )
    return (
        <div className='App'>
            {nameList}
        </div>
    )
}

export default NameList