import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
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
                    <NavLink to='/post/mobile'
                        style={({ isActive }) => { return { backgroundColor: isActive ? 'red' : '' } }}
                    >Post</NavLink>
                </li>
                <li>
                    <NavLink to='/post/mobile/1'
                        style={({ isActive }) => { return { backgroundColor: isActive ? 'red' : '' } }}
                    >Post With ID</NavLink>
                </li>
                <li>
                    <NavLink to='/login'
                        style={({ isActive }) => { return { backgroundColor: isActive ? 'red' : '' } }}
                    >Login</NavLink>
                </li>
                <li>
                    <NavLink to='/dashboard'
                        style={({ isActive }) => { return { backgroundColor: isActive ? 'red' : '' } }}
                    >Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to='/logout'
                        style={({ isActive }) => { return { backgroundColor: isActive ? 'red' : '' } }}
                    >Logout</NavLink>
                </li>

            </ul>
        </>
    )
}
