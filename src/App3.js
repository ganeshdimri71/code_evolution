import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './componentsFive/pages/Home'
import About from './componentsFive/pages/About'
import Contact from './componentsFive/pages/Contact'
import Navbar from './componentsFive/Navbar'
import Post from './componentsFive/pages/Post'
import Dashboard from './componentsFive/pages/Dashboard'
import Login from './componentsFive/pages/Login'
import Logout from './componentsFive/pages/Logout'
export default function App3() {
    let isLogged = true;
    let data = {
        'st': 'User not logged in'
    }
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path="/post/:category" element={<Post />} />
                    <Route path="/post/:category/:id" element={<Post />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/dashboard" element={isLogged ? <Dashboard /> : <Navigate to='/login' replace state={data} />} />


                    <Route path="*" element={<h1>Error 404 Page Not Found</h1>} />

                </Routes>

            </BrowserRouter>
        </>
    )
}
