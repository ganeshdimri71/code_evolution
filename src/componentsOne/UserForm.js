import React, { useState } from 'react'
import useInput from './hooks/useInput'

function UserForm() {
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')
    const submitHandler = (event) => {
        event.preventDefault();
        alert(`Hello ${firstName
            } ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="">First Name</label>
                    <input type="text" {...bindFirstName} />
                </div>
                <div>
                    <label htmlFor="">Last Name</label>
                    <input type="text" {...bindLastName} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div >
    )
}

export default UserForm