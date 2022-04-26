import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Login() {
    let location = useLocation()
    console.log(location);
    return (
        <>
            <h1>Login Page</h1>
            <h1>{location.state.st}</h1>
        </>
    )
}
