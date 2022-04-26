import React, { useState } from 'react'
const initState = {
    fname: 'Bruce',
    lname: 'Wayne'
}
function ObjectUseState() {
    const [person, setPerson] = useState(initState)
    const changeName = () => {
        const newPerson = { ...person }
        newPerson.fname = 'Clarke'
        newPerson.lname = 'Kate'
        setPerson(newPerson)
    }
    console.log('ObjectUseState Render');
    return (
        <div>
            <button
                onClick={changeName}
            >{person.fname} {person.lname}</button>
        </div>
    )
}

export default ObjectUseState