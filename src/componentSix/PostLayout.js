import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PostLayout() {
    return (
        <>
            <h1>This is PostLayout</h1>
            <Outlet />
        </>
    )
}
