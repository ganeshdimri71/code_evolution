import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './componentSix/pages/Home'
import About from './componentSix/pages/About'
import Contact from './componentSix/pages/Contact'
import Layout from './componentSix/Layout'
import Post from './componentSix/pages/Post'
import PostLayout from './componentSix/PostLayout'
import PostDetails from './componentSix/pages/PostDetails'

export default function App3() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />} >
                        <Route path='about' element={<About />} />
                        <Route path='contact' element={<Contact />} />
                        <Route path='post' element={<PostLayout />} >
                            <Route path=':category' element={<PostDetails />} />
                            <Route index element={<Post />} />
                        </Route>
                        <Route index element={<Home />} />
                    </Route>
                    <Route path="*" element={<h1>Error Page Not Found</h1>} />
                </Routes>

            </BrowserRouter>
        </>
    )
}
