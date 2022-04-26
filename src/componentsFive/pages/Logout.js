import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Logout() {
    let location = useLocation()
    return (
        <>
            <h1>{location.state?.name} Logged Out !!</h1>
        </>
    )
}
