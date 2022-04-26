import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
    let navigate = useNavigate()
    let data = {
        'name': 'Sonam'
    }
    return (
        <>
            <h1>DashBoard Page</h1>
            <button
                onClick={() => navigate('/logout', { state: data })}
            >Logout</button>
        </>
    )
}
