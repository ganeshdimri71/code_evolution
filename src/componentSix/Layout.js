import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <h1>React Router V6</h1>
            <ul>
                <li>
                    <NavLink to='/'
                        style={({ isActive }) => { return { backgroundColor: isActive ? 'red' : '' } }}
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'
                        style={({ isActive }) => { return { backgroundColor: isActive ? 'red' : '' } }}
                    >About</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'
                        style={({ isActive }) => { return { backgroundColor: isActive ? 'red' : '' } }}
                    >Contact</NavLink>
                </li>
                <li>
                    <NavLink to='/post'
                        style={({ isActive }) => { return { backgroundColor: isActive ? 'red' : '' } }}
                    >Post</NavLink>
                </li>
            </ul>
            <Outlet />
        </>
    )
}
