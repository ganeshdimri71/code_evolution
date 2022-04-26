import React, { useState } from 'react'
const initState = ['Bruce', 'Wayne']
function ArrayUseState() {
    const [person, setPerson] = useState(initState)
    const handleClick = () => {
        const newPerson = [...person]
        newPerson.push('Clarke')
        newPerson.push('Kent')
        setPerson(newPerson)
    }
    console.log('Array UseState Render');
    return (
        <div>
            <div>
                <button
                    onClick={handleClick}
                >Click</button>
                {
                    person.map(person => (
                        <div key={person}>{person}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default ArrayUseState